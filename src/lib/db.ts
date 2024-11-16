import { count, eq } from "drizzle-orm";
import { db } from "./db/index.js";
import { appsTable, syncStateTable, tvlTable } from "./db/schema.js";

export async function createApp({
  address,
  blockNumber,
  txHash,
}: {
  address: string;
  blockNumber: number;
  txHash: string;
}) {
  await db.insert(appsTable).values({
    id: address,
    block: blockNumber,
    txHash,
  });
}

export async function getApps() {
  return await db.select().from(appsTable);
}

export async function updateApp({
  address,
  name,
  url,
  description,
  logo,
}: {
  address: string;
  name?: string;
  url?: string;
  description?: string;
  logo?: string;
}) {
  await db
    .update(appsTable)
    .set({
      name,
      url,
      description,
      logo,
    })
    .where(eq(appsTable.id, address));
}

export async function updateLatestSyncBlock(blockNumber: number) {
  await db
    .update(syncStateTable)
    .set({
      latestBlock: blockNumber,
    })
    .where(eq(syncStateTable.id, "latest"));
}

export async function getLastSyncBlock() {
  const syncState = await db.select().from(syncStateTable).limit(1);
  return syncState[0].latestBlock;
}

export async function getAppsCount() {
  const appsCount = await db.select({ count: count() }).from(appsTable);
  return appsCount[0].count;
}

export async function updateTVLData(tvl: string) {
  await db.update(tvlTable).set({ tvl }).where(eq(tvlTable.id, "latest"));
}

export async function getTVL() {
  const tvl = await db.select().from(tvlTable).limit(1);
  return tvl[0].tvl;
}
