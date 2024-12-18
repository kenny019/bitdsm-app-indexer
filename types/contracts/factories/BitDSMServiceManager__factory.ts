/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  BitDSMServiceManager,
  BitDSMServiceManagerInterface,
} from "../BitDSMServiceManager";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_avsDirectory",
        type: "address",
        internalType: "address",
      },
      {
        name: "_bitDSMRegistry",
        type: "address",
        internalType: "address",
      },
      {
        name: "_rewardsCoordinator",
        type: "address",
        internalType: "address",
      },
      {
        name: "_delegationManager",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "avsDirectory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "confirmDeposit",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "confirmWithdrawal",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "transaction",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createAVSRewardsSubmission",
    inputs: [
      {
        name: "rewardsSubmissions",
        type: "tuple[]",
        internalType: "struct IRewardsCoordinator.RewardsSubmission[]",
        components: [
          {
            name: "strategiesAndMultipliers",
            type: "tuple[]",
            internalType: "struct IRewardsCoordinator.StrategyAndMultiplier[]",
            components: [
              {
                name: "strategy",
                type: "address",
                internalType: "contract IStrategy",
              },
              {
                name: "multiplier",
                type: "uint96",
                internalType: "uint96",
              },
            ],
          },
          {
            name: "token",
            type: "address",
            internalType: "contract IERC20",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "startTimestamp",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "duration",
            type: "uint32",
            internalType: "uint32",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deregisterOperatorFromAVS",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getOperatorRestakedStrategies",
    inputs: [
      {
        name: "_operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRestakeableStrategies",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_rewardsInitiator",
        type: "address",
        internalType: "address",
      },
      {
        name: "bitcoinPodManager",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerOperatorToAVS",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "operatorSignature",
        type: "tuple",
        internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        components: [
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "salt",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "expiry",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rewardsInitiator",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setRewardsInitiator",
    inputs: [
      {
        name: "newRewardsInitiator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stakeRegistry",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateAVSMetadataURI",
    inputs: [
      {
        name: "_metadataURI",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawBitcoinCompleteTx",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "completeTx",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawBitcoinPSBT",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "psbtTransaction",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "BitcoinWithdrawalTransactionSigned",
    inputs: [
      {
        name: "pod",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RewardsInitiatorUpdated",
    inputs: [
      {
        name: "prevRewardsInitiator",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newRewardsInitiator",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

export class BitDSMServiceManager__factory {
  static readonly abi = _abi;
  static createInterface(): BitDSMServiceManagerInterface {
    return new Interface(_abi) as BitDSMServiceManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BitDSMServiceManager {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as BitDSMServiceManager;
  }
}
