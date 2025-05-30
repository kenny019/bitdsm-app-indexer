/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type StrategyParamsStruct = {
  strategy: AddressLike;
  multiplier: BigNumberish;
};

export type StrategyParamsStructOutput = [
  strategy: string,
  multiplier: bigint,
] & { strategy: string; multiplier: bigint };

export type QuorumStruct = { strategies: StrategyParamsStruct[] };

export type QuorumStructOutput = [strategies: StrategyParamsStructOutput[]] & {
  strategies: StrategyParamsStructOutput[];
};

export declare namespace ISignatureUtils {
  export type SignatureWithSaltAndExpiryStruct = {
    signature: BytesLike;
    salt: BytesLike;
    expiry: BigNumberish;
  };

  export type SignatureWithSaltAndExpiryStructOutput = [
    signature: string,
    salt: string,
    expiry: bigint,
  ] & { signature: string; salt: string; expiry: bigint };
}

export interface BitDSMRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "deregisterOperator"
      | "getLastCheckpointOperatorWeight"
      | "getLastCheckpointThresholdWeight"
      | "getLastCheckpointThresholdWeightAtBlock"
      | "getLastCheckpointTotalWeight"
      | "getLastCheckpointTotalWeightAtBlock"
      | "getLastestOperatorSigningKey"
      | "getOperatorBtcPublicKey"
      | "getOperatorSigningKeyAtBlock"
      | "getOperatorWeight"
      | "getOperatorWeightAtBlock"
      | "initialize"
      | "isOperatorBtcKeyRegistered"
      | "isValidSignature"
      | "minimumWeight"
      | "operatorRegistered"
      | "owner"
      | "pause"
      | "paused"
      | "quorum"
      | "registerOperatorWithSignature((bytes,bytes32,uint256),address,bytes)"
      | "registerOperatorWithSignature()"
      | "renounceOwnership"
      | "transferOwnership"
      | "unpause"
      | "updateMinimumWeight"
      | "updateOperatorSigningKey"
      | "updateOperators"
      | "updateOperatorsForQuorum"
      | "updateQuorumConfig"
      | "updateStakeThreshold"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "MinimumWeightUpdated"
      | "OperatorBtcKeyRegistered"
      | "OperatorBtckeyDeregistered"
      | "OperatorDeregistered"
      | "OperatorRegistered"
      | "OperatorWeightUpdated"
      | "OwnershipTransferred"
      | "Paused"
      | "QuorumUpdated"
      | "SigningKeyUpdate"
      | "ThresholdWeightUpdated"
      | "TotalWeightUpdated"
      | "Unpaused"
      | "UpdateMinimumWeight"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "deregisterOperator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastCheckpointOperatorWeight",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastCheckpointThresholdWeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastCheckpointThresholdWeightAtBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastCheckpointTotalWeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastCheckpointTotalWeightAtBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastestOperatorSigningKey",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOperatorBtcPublicKey",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOperatorSigningKeyAtBlock",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOperatorWeight",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOperatorWeightAtBlock",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, BigNumberish, QuorumStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperatorBtcKeyRegistered",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minimumWeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "operatorRegistered",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerOperatorWithSignature((bytes,bytes32,uint256),address,bytes)",
    values: [
      ISignatureUtils.SignatureWithSaltAndExpiryStruct,
      AddressLike,
      BytesLike,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerOperatorWithSignature()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateMinimumWeight",
    values: [BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOperatorSigningKey",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOperators",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOperatorsForQuorum",
    values: [AddressLike[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateQuorumConfig",
    values: [QuorumStruct, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStakeThreshold",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "deregisterOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastCheckpointOperatorWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastCheckpointThresholdWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastCheckpointThresholdWeightAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastCheckpointTotalWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastCheckpointTotalWeightAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastestOperatorSigningKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOperatorBtcPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOperatorSigningKeyAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOperatorWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOperatorWeightAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isOperatorBtcKeyRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerOperatorWithSignature((bytes,bytes32,uint256),address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerOperatorWithSignature()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateMinimumWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOperatorSigningKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOperatorsForQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateQuorumConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStakeThreshold",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinimumWeightUpdatedEvent {
  export type InputTuple = [_old: BigNumberish, _new: BigNumberish];
  export type OutputTuple = [_old: bigint, _new: bigint];
  export interface OutputObject {
    _old: bigint;
    _new: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorBtcKeyRegisteredEvent {
  export type InputTuple = [operator: AddressLike, btcPublicKey: BytesLike];
  export type OutputTuple = [operator: string, btcPublicKey: string];
  export interface OutputObject {
    operator: string;
    btcPublicKey: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorBtckeyDeregisteredEvent {
  export type InputTuple = [operator: AddressLike];
  export type OutputTuple = [operator: string];
  export interface OutputObject {
    operator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorDeregisteredEvent {
  export type InputTuple = [_operator: AddressLike, _avs: AddressLike];
  export type OutputTuple = [_operator: string, _avs: string];
  export interface OutputObject {
    _operator: string;
    _avs: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorRegisteredEvent {
  export type InputTuple = [_operator: AddressLike, _avs: AddressLike];
  export type OutputTuple = [_operator: string, _avs: string];
  export interface OutputObject {
    _operator: string;
    _avs: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorWeightUpdatedEvent {
  export type InputTuple = [
    _operator: AddressLike,
    oldWeight: BigNumberish,
    newWeight: BigNumberish,
  ];
  export type OutputTuple = [
    _operator: string,
    oldWeight: bigint,
    newWeight: bigint,
  ];
  export interface OutputObject {
    _operator: string;
    oldWeight: bigint;
    newWeight: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuorumUpdatedEvent {
  export type InputTuple = [_old: QuorumStruct, _new: QuorumStruct];
  export type OutputTuple = [
    _old: QuorumStructOutput,
    _new: QuorumStructOutput,
  ];
  export interface OutputObject {
    _old: QuorumStructOutput;
    _new: QuorumStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SigningKeyUpdateEvent {
  export type InputTuple = [
    operator: AddressLike,
    updateBlock: BigNumberish,
    newSigningKey: AddressLike,
    oldSigningKey: AddressLike,
  ];
  export type OutputTuple = [
    operator: string,
    updateBlock: bigint,
    newSigningKey: string,
    oldSigningKey: string,
  ];
  export interface OutputObject {
    operator: string;
    updateBlock: bigint;
    newSigningKey: string;
    oldSigningKey: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ThresholdWeightUpdatedEvent {
  export type InputTuple = [_thresholdWeight: BigNumberish];
  export type OutputTuple = [_thresholdWeight: bigint];
  export interface OutputObject {
    _thresholdWeight: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TotalWeightUpdatedEvent {
  export type InputTuple = [
    oldTotalWeight: BigNumberish,
    newTotalWeight: BigNumberish,
  ];
  export type OutputTuple = [oldTotalWeight: bigint, newTotalWeight: bigint];
  export interface OutputObject {
    oldTotalWeight: bigint;
    newTotalWeight: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateMinimumWeightEvent {
  export type InputTuple = [
    oldMinimumWeight: BigNumberish,
    newMinimumWeight: BigNumberish,
  ];
  export type OutputTuple = [
    oldMinimumWeight: bigint,
    newMinimumWeight: bigint,
  ];
  export interface OutputObject {
    oldMinimumWeight: bigint;
    newMinimumWeight: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BitDSMRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): BitDSMRegistry;
  waitForDeployment(): Promise<this>;

  interface: BitDSMRegistryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  deregisterOperator: TypedContractMethod<[], [void], "nonpayable">;

  getLastCheckpointOperatorWeight: TypedContractMethod<
    [_operator: AddressLike],
    [bigint],
    "view"
  >;

  getLastCheckpointThresholdWeight: TypedContractMethod<[], [bigint], "view">;

  getLastCheckpointThresholdWeightAtBlock: TypedContractMethod<
    [_blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  getLastCheckpointTotalWeight: TypedContractMethod<[], [bigint], "view">;

  getLastCheckpointTotalWeightAtBlock: TypedContractMethod<
    [_blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  getLastestOperatorSigningKey: TypedContractMethod<
    [_operator: AddressLike],
    [string],
    "view"
  >;

  getOperatorBtcPublicKey: TypedContractMethod<
    [operator: AddressLike],
    [string],
    "view"
  >;

  getOperatorSigningKeyAtBlock: TypedContractMethod<
    [_operator: AddressLike, _blockNumber: BigNumberish],
    [string],
    "view"
  >;

  getOperatorWeight: TypedContractMethod<
    [_operator: AddressLike],
    [bigint],
    "view"
  >;

  getOperatorWeightAtBlock: TypedContractMethod<
    [_operator: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _serviceManager: AddressLike,
      _thresholdWeight: BigNumberish,
      _quorum: QuorumStruct,
    ],
    [void],
    "nonpayable"
  >;

  isOperatorBtcKeyRegistered: TypedContractMethod<
    [operator: AddressLike],
    [boolean],
    "view"
  >;

  isValidSignature: TypedContractMethod<
    [_dataHash: BytesLike, _signatureData: BytesLike],
    [string],
    "view"
  >;

  minimumWeight: TypedContractMethod<[], [bigint], "view">;

  operatorRegistered: TypedContractMethod<
    [_operator: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  quorum: TypedContractMethod<[], [QuorumStructOutput], "view">;

  "registerOperatorWithSignature((bytes,bytes32,uint256),address,bytes)": TypedContractMethod<
    [
      _operatorSignature: ISignatureUtils.SignatureWithSaltAndExpiryStruct,
      _signingKey: AddressLike,
      btcPublicKey: BytesLike,
    ],
    [void],
    "nonpayable"
  >;

  "registerOperatorWithSignature()": TypedContractMethod<
    [],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  updateMinimumWeight: TypedContractMethod<
    [_newMinimumWeight: BigNumberish, _operators: AddressLike[]],
    [void],
    "nonpayable"
  >;

  updateOperatorSigningKey: TypedContractMethod<
    [_newSigningKey: AddressLike],
    [void],
    "nonpayable"
  >;

  updateOperators: TypedContractMethod<
    [_operators: AddressLike[]],
    [void],
    "nonpayable"
  >;

  updateOperatorsForQuorum: TypedContractMethod<
    [operatorsPerQuorum: AddressLike[][], arg1: BytesLike],
    [void],
    "nonpayable"
  >;

  updateQuorumConfig: TypedContractMethod<
    [_quorum: QuorumStruct, _operators: AddressLike[]],
    [void],
    "nonpayable"
  >;

  updateStakeThreshold: TypedContractMethod<
    [_thresholdWeight: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deregisterOperator"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getLastCheckpointOperatorWeight"
  ): TypedContractMethod<[_operator: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastCheckpointThresholdWeight"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastCheckpointThresholdWeightAtBlock"
  ): TypedContractMethod<[_blockNumber: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastCheckpointTotalWeight"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastCheckpointTotalWeightAtBlock"
  ): TypedContractMethod<[_blockNumber: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastestOperatorSigningKey"
  ): TypedContractMethod<[_operator: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getOperatorBtcPublicKey"
  ): TypedContractMethod<[operator: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getOperatorSigningKeyAtBlock"
  ): TypedContractMethod<
    [_operator: AddressLike, _blockNumber: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOperatorWeight"
  ): TypedContractMethod<[_operator: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOperatorWeightAtBlock"
  ): TypedContractMethod<
    [_operator: AddressLike, _blockNumber: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _serviceManager: AddressLike,
      _thresholdWeight: BigNumberish,
      _quorum: QuorumStruct,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isOperatorBtcKeyRegistered"
  ): TypedContractMethod<[operator: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isValidSignature"
  ): TypedContractMethod<
    [_dataHash: BytesLike, _signatureData: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "minimumWeight"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "operatorRegistered"
  ): TypedContractMethod<[_operator: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "quorum"
  ): TypedContractMethod<[], [QuorumStructOutput], "view">;
  getFunction(
    nameOrSignature: "registerOperatorWithSignature((bytes,bytes32,uint256),address,bytes)"
  ): TypedContractMethod<
    [
      _operatorSignature: ISignatureUtils.SignatureWithSaltAndExpiryStruct,
      _signingKey: AddressLike,
      btcPublicKey: BytesLike,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registerOperatorWithSignature()"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMinimumWeight"
  ): TypedContractMethod<
    [_newMinimumWeight: BigNumberish, _operators: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateOperatorSigningKey"
  ): TypedContractMethod<[_newSigningKey: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateOperators"
  ): TypedContractMethod<[_operators: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateOperatorsForQuorum"
  ): TypedContractMethod<
    [operatorsPerQuorum: AddressLike[][], arg1: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateQuorumConfig"
  ): TypedContractMethod<
    [_quorum: QuorumStruct, _operators: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateStakeThreshold"
  ): TypedContractMethod<
    [_thresholdWeight: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "MinimumWeightUpdated"
  ): TypedContractEvent<
    MinimumWeightUpdatedEvent.InputTuple,
    MinimumWeightUpdatedEvent.OutputTuple,
    MinimumWeightUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorBtcKeyRegistered"
  ): TypedContractEvent<
    OperatorBtcKeyRegisteredEvent.InputTuple,
    OperatorBtcKeyRegisteredEvent.OutputTuple,
    OperatorBtcKeyRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "OperatorBtckeyDeregistered"
  ): TypedContractEvent<
    OperatorBtckeyDeregisteredEvent.InputTuple,
    OperatorBtckeyDeregisteredEvent.OutputTuple,
    OperatorBtckeyDeregisteredEvent.OutputObject
  >;
  getEvent(
    key: "OperatorDeregistered"
  ): TypedContractEvent<
    OperatorDeregisteredEvent.InputTuple,
    OperatorDeregisteredEvent.OutputTuple,
    OperatorDeregisteredEvent.OutputObject
  >;
  getEvent(
    key: "OperatorRegistered"
  ): TypedContractEvent<
    OperatorRegisteredEvent.InputTuple,
    OperatorRegisteredEvent.OutputTuple,
    OperatorRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "OperatorWeightUpdated"
  ): TypedContractEvent<
    OperatorWeightUpdatedEvent.InputTuple,
    OperatorWeightUpdatedEvent.OutputTuple,
    OperatorWeightUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "QuorumUpdated"
  ): TypedContractEvent<
    QuorumUpdatedEvent.InputTuple,
    QuorumUpdatedEvent.OutputTuple,
    QuorumUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "SigningKeyUpdate"
  ): TypedContractEvent<
    SigningKeyUpdateEvent.InputTuple,
    SigningKeyUpdateEvent.OutputTuple,
    SigningKeyUpdateEvent.OutputObject
  >;
  getEvent(
    key: "ThresholdWeightUpdated"
  ): TypedContractEvent<
    ThresholdWeightUpdatedEvent.InputTuple,
    ThresholdWeightUpdatedEvent.OutputTuple,
    ThresholdWeightUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "TotalWeightUpdated"
  ): TypedContractEvent<
    TotalWeightUpdatedEvent.InputTuple,
    TotalWeightUpdatedEvent.OutputTuple,
    TotalWeightUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "UpdateMinimumWeight"
  ): TypedContractEvent<
    UpdateMinimumWeightEvent.InputTuple,
    UpdateMinimumWeightEvent.OutputTuple,
    UpdateMinimumWeightEvent.OutputObject
  >;

  filters: {
    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "MinimumWeightUpdated(uint256,uint256)": TypedContractEvent<
      MinimumWeightUpdatedEvent.InputTuple,
      MinimumWeightUpdatedEvent.OutputTuple,
      MinimumWeightUpdatedEvent.OutputObject
    >;
    MinimumWeightUpdated: TypedContractEvent<
      MinimumWeightUpdatedEvent.InputTuple,
      MinimumWeightUpdatedEvent.OutputTuple,
      MinimumWeightUpdatedEvent.OutputObject
    >;

    "OperatorBtcKeyRegistered(address,bytes)": TypedContractEvent<
      OperatorBtcKeyRegisteredEvent.InputTuple,
      OperatorBtcKeyRegisteredEvent.OutputTuple,
      OperatorBtcKeyRegisteredEvent.OutputObject
    >;
    OperatorBtcKeyRegistered: TypedContractEvent<
      OperatorBtcKeyRegisteredEvent.InputTuple,
      OperatorBtcKeyRegisteredEvent.OutputTuple,
      OperatorBtcKeyRegisteredEvent.OutputObject
    >;

    "OperatorBtckeyDeregistered(address)": TypedContractEvent<
      OperatorBtckeyDeregisteredEvent.InputTuple,
      OperatorBtckeyDeregisteredEvent.OutputTuple,
      OperatorBtckeyDeregisteredEvent.OutputObject
    >;
    OperatorBtckeyDeregistered: TypedContractEvent<
      OperatorBtckeyDeregisteredEvent.InputTuple,
      OperatorBtckeyDeregisteredEvent.OutputTuple,
      OperatorBtckeyDeregisteredEvent.OutputObject
    >;

    "OperatorDeregistered(address,address)": TypedContractEvent<
      OperatorDeregisteredEvent.InputTuple,
      OperatorDeregisteredEvent.OutputTuple,
      OperatorDeregisteredEvent.OutputObject
    >;
    OperatorDeregistered: TypedContractEvent<
      OperatorDeregisteredEvent.InputTuple,
      OperatorDeregisteredEvent.OutputTuple,
      OperatorDeregisteredEvent.OutputObject
    >;

    "OperatorRegistered(address,address)": TypedContractEvent<
      OperatorRegisteredEvent.InputTuple,
      OperatorRegisteredEvent.OutputTuple,
      OperatorRegisteredEvent.OutputObject
    >;
    OperatorRegistered: TypedContractEvent<
      OperatorRegisteredEvent.InputTuple,
      OperatorRegisteredEvent.OutputTuple,
      OperatorRegisteredEvent.OutputObject
    >;

    "OperatorWeightUpdated(address,uint256,uint256)": TypedContractEvent<
      OperatorWeightUpdatedEvent.InputTuple,
      OperatorWeightUpdatedEvent.OutputTuple,
      OperatorWeightUpdatedEvent.OutputObject
    >;
    OperatorWeightUpdated: TypedContractEvent<
      OperatorWeightUpdatedEvent.InputTuple,
      OperatorWeightUpdatedEvent.OutputTuple,
      OperatorWeightUpdatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "QuorumUpdated(tuple,tuple)": TypedContractEvent<
      QuorumUpdatedEvent.InputTuple,
      QuorumUpdatedEvent.OutputTuple,
      QuorumUpdatedEvent.OutputObject
    >;
    QuorumUpdated: TypedContractEvent<
      QuorumUpdatedEvent.InputTuple,
      QuorumUpdatedEvent.OutputTuple,
      QuorumUpdatedEvent.OutputObject
    >;

    "SigningKeyUpdate(address,uint256,address,address)": TypedContractEvent<
      SigningKeyUpdateEvent.InputTuple,
      SigningKeyUpdateEvent.OutputTuple,
      SigningKeyUpdateEvent.OutputObject
    >;
    SigningKeyUpdate: TypedContractEvent<
      SigningKeyUpdateEvent.InputTuple,
      SigningKeyUpdateEvent.OutputTuple,
      SigningKeyUpdateEvent.OutputObject
    >;

    "ThresholdWeightUpdated(uint256)": TypedContractEvent<
      ThresholdWeightUpdatedEvent.InputTuple,
      ThresholdWeightUpdatedEvent.OutputTuple,
      ThresholdWeightUpdatedEvent.OutputObject
    >;
    ThresholdWeightUpdated: TypedContractEvent<
      ThresholdWeightUpdatedEvent.InputTuple,
      ThresholdWeightUpdatedEvent.OutputTuple,
      ThresholdWeightUpdatedEvent.OutputObject
    >;

    "TotalWeightUpdated(uint256,uint256)": TypedContractEvent<
      TotalWeightUpdatedEvent.InputTuple,
      TotalWeightUpdatedEvent.OutputTuple,
      TotalWeightUpdatedEvent.OutputObject
    >;
    TotalWeightUpdated: TypedContractEvent<
      TotalWeightUpdatedEvent.InputTuple,
      TotalWeightUpdatedEvent.OutputTuple,
      TotalWeightUpdatedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "UpdateMinimumWeight(uint256,uint256)": TypedContractEvent<
      UpdateMinimumWeightEvent.InputTuple,
      UpdateMinimumWeightEvent.OutputTuple,
      UpdateMinimumWeightEvent.OutputObject
    >;
    UpdateMinimumWeight: TypedContractEvent<
      UpdateMinimumWeightEvent.InputTuple,
      UpdateMinimumWeightEvent.OutputTuple,
      UpdateMinimumWeightEvent.OutputObject
    >;
  };
}
