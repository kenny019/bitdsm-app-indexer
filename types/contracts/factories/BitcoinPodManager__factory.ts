/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  BitcoinPodManager,
  BitcoinPodManagerInterface,
} from "../BitcoinPodManager";

const _abi = [
  {
    type: "function",
    name: "appRegistry",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IAppRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "bitDSMRegistry",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IBitDSMRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "confirmBitcoinDeposit",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createPod",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "btcAddress",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "delegatePod",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "appContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getBitcoinDepositRequest",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IBitcoinPodManager.BitcoinDepositRequest",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "isPending",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBitcoinWithdrawalAddress",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_appRegistry",
        type: "address",
        internalType: "address",
      },
      {
        name: "_bitDSMRegistry",
        type: "address",
        internalType: "address",
      },
      {
        name: "bitDSMServiceManager",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "lockPod",
    inputs: [
      {
        name: "pod",
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
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "podToApp",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
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
    name: "podToBitcoinDepositRequest",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "isPending",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "podToWithdrawalAddress",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
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
    name: "undelegatePod",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unlockPod",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "userToPod",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
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
    name: "verifyBitcoinDepositRequest",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawBitcoinAsTokens",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawBitcoinCompleteTxRequest",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "preSignedWithdrawTransaction",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "withdrawAddress",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawBitcoinPSBTRequest",
    inputs: [
      {
        name: "pod",
        type: "address",
        internalType: "address",
      },
      {
        name: "withdrawAddress",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "BitcoinBurned",
    inputs: [
      {
        name: "pod",
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
    name: "BitcoinDepositConfirmed",
    inputs: [
      {
        name: "pod",
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
    name: "BitcoinMinted",
    inputs: [
      {
        name: "pod",
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
    name: "BitcoinWithdrawalCompleteTxRequest",
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
        name: "preSignedBitcoinTx",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BitcoinWithdrawalPSBTRequest",
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
        name: "withdrawAddress",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BitcoinWithdrawnFromPod",
    inputs: [
      {
        name: "pod",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "withdrawAddress",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
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
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PodCreated",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
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
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PodDelegated",
    inputs: [
      {
        name: "pod",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "appContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PodUndelegated",
    inputs: [
      {
        name: "pod",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VerifyBitcoinDepositRequest",
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
        name: "bitcoinDepositRequest",
        type: "tuple",
        indexed: false,
        internalType: "struct IBitcoinPodManager.BitcoinDepositRequest",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "isPending",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    anonymous: false,
  },
] as const;

export class BitcoinPodManager__factory {
  static readonly abi = _abi;
  static createInterface(): BitcoinPodManagerInterface {
    return new Interface(_abi) as BitcoinPodManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BitcoinPodManager {
    return new Contract(address, _abi, runner) as unknown as BitcoinPodManager;
  }
}
