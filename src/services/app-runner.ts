import "dotenv/config";
import { ethers } from "ethers";
import AppRegistryABI from "@/src/abis/AppRegistry.json";
import BitcoinPodManagerABI from "@/src/abis/BitcoinPodManager.json";
import type { AppRegistry } from "@/types/contracts/AppRegistry.js";
import type { BitcoinPodManager } from "@/types/contracts/BitcoinPodManager.js";
import type { EventLog } from "ethers";
import {
  createApp,
  getLastSyncBlock,
  updateApp,
  updateLatestSyncBlock,
  updateTVLData,
} from "../lib/db.js";

async function updateAppsRegistry(events: EventLog[]) {
  const newApps = events.map((event) => {
    const txHash = event.transactionHash;
    const blockNumber = event.blockNumber;
    const appAddress = event.args[0];

    return {
      appAddress,
      blockNumber,
      txHash,
    };
  });

  for (const app of newApps) {
    try {
      await createApp({
        address: app.appAddress,
        blockNumber: app.blockNumber,
        txHash: app.txHash,
      });

      console.log(
        `App ${app.appAddress} created | block: ${app.blockNumber} | txHash: ${app.txHash}`
      );
    } catch (err) {
      console.error(
        `Error creating app ${app.appAddress} | block: ${app.blockNumber} | txHash: ${app.txHash}`,
        err
      );
    }
  }
}

async function updateAppsMetadata(events: EventLog[]) {
  const newMetadata = new Set<{ jsonUrl: string; address: string }>();

  events.forEach((event) => {
    const appAddress = event.args[0];
    const jsonUrl = event.args[1];

    newMetadata.add({ jsonUrl, address: appAddress });
  });

  for (const metadata of newMetadata) {
    try {
      const response = await fetch(metadata.jsonUrl);
      const result = (await response.json()) as {
        name?: string;
        website?: string;
        description?: string;
        logo?: string;
      };

      await updateApp({
        name: result.name,
        address: metadata.address,
        description: result.description,
        logo: result.logo,
        url: result.website,
      });

      console.log(`updated ${metadata.address}`);
    } catch (err) {
      console.error(`Error updating ${metadata.address}`, err);
      await updateApp({
        name: "Unnamed App",
        address: metadata.address,
        description: "",
        logo: "",
        url: "",
      });
    }
  }
}

async function updateTVL(events: EventLog[]) {
  try {
    const newTVL = events.map((event) => {
      return event.args[0];
    });

    await updateTVLData(newTVL.toString());
  } catch (err) {
    console.error(err);
  }
}

export async function AppRunner() {
  const RPC_URL = `https://holesky.infura.io/v3/${process.env.INFURA_API_KEY}`;

  const provider = new ethers.JsonRpcProvider(RPC_URL);

  const AppRegistry = new ethers.Contract(
    "0x91677dd787cd9056c5805cbb74e271fd83d88e61",
    AppRegistryABI,
    provider
  ) as unknown as AppRegistry;

  const BitcoinPodManager = new ethers.Contract(
    "0x96EAE70bC21925DdE05602c87c4483579205B1F6",
    BitcoinPodManagerABI,
    provider
  ) as unknown as BitcoinPodManager;

  const lastBlock = await getLastSyncBlock();

  const events = (await AppRegistry.queryFilter(
    "AppRegistrationStatusUpdated",
    lastBlock
  )) as unknown as EventLog[];

  const eventsURI = (await AppRegistry.queryFilter(
    "AppMetadataURIUpdated",
    lastBlock
  )) as unknown as EventLog[];

  const eventsTVL = (await BitcoinPodManager.queryFilter(
    "TotalTVLUpdated",
    lastBlock
  )) as unknown as EventLog[];

  const latestBlock = await provider.getBlockNumber();

  await Promise.all([
    updateAppsRegistry(events),
    updateAppsMetadata(eventsURI),
    updateTVL(eventsTVL),
    updateLatestSyncBlock(latestBlock),
  ]);
}
