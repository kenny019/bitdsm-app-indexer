/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IAVSDirectory, IAVSDirectoryInterface } from "../IAVSDirectory";

const _abi = [
  {
    type: "function",
    name: "OPERATOR_AVS_REGISTRATION_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "calculateOperatorAVSRegistrationDigestHash",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "avs",
        type: "address",
        internalType: "address",
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
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "operatorSaltIsSpent",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "salt",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
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
    name: "updateAVSMetadataURI",
    inputs: [
      {
        name: "metadataURI",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AVSMetadataURIUpdated",
    inputs: [
      {
        name: "avs",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "metadataURI",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorAVSRegistrationStatusUpdated",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "avs",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "status",
        type: "uint8",
        indexed: false,
        internalType: "enum IAVSDirectory.OperatorAVSRegistrationStatus",
      },
    ],
    anonymous: false,
  },
] as const;

export class IAVSDirectory__factory {
  static readonly abi = _abi;
  static createInterface(): IAVSDirectoryInterface {
    return new Interface(_abi) as IAVSDirectoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAVSDirectory {
    return new Contract(address, _abi, runner) as unknown as IAVSDirectory;
  }
}
