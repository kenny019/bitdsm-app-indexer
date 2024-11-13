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

export interface AvsDirectoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "OPERATOR_AVS_REGISTRATION_TYPEHASH"
      | "calculateOperatorAVSRegistrationDigestHash"
      | "deregisterOperatorFromAVS"
      | "operatorSaltIsSpent"
      | "registerOperatorToAVS"
      | "updateAVSMetadataURI"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AVSMetadataURIUpdated"
      | "OperatorAVSRegistrationStatusUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "OPERATOR_AVS_REGISTRATION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOperatorAVSRegistrationDigestHash",
    values: [AddressLike, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deregisterOperatorFromAVS",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorSaltIsSpent",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerOperatorToAVS",
    values: [AddressLike, ISignatureUtils.SignatureWithSaltAndExpiryStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAVSMetadataURI",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "OPERATOR_AVS_REGISTRATION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateOperatorAVSRegistrationDigestHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deregisterOperatorFromAVS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorSaltIsSpent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerOperatorToAVS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAVSMetadataURI",
    data: BytesLike
  ): Result;
}

export namespace AVSMetadataURIUpdatedEvent {
  export type InputTuple = [avs: AddressLike, metadataURI: string];
  export type OutputTuple = [avs: string, metadataURI: string];
  export interface OutputObject {
    avs: string;
    metadataURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorAVSRegistrationStatusUpdatedEvent {
  export type InputTuple = [
    operator: AddressLike,
    avs: AddressLike,
    status: BigNumberish,
  ];
  export type OutputTuple = [operator: string, avs: string, status: bigint];
  export interface OutputObject {
    operator: string;
    avs: string;
    status: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AvsDirectory extends BaseContract {
  connect(runner?: ContractRunner | null): AvsDirectory;
  waitForDeployment(): Promise<this>;

  interface: AvsDirectoryInterface;

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

  OPERATOR_AVS_REGISTRATION_TYPEHASH: TypedContractMethod<[], [string], "view">;

  calculateOperatorAVSRegistrationDigestHash: TypedContractMethod<
    [
      operator: AddressLike,
      avs: AddressLike,
      salt: BytesLike,
      expiry: BigNumberish,
    ],
    [string],
    "view"
  >;

  deregisterOperatorFromAVS: TypedContractMethod<
    [operator: AddressLike],
    [void],
    "nonpayable"
  >;

  operatorSaltIsSpent: TypedContractMethod<
    [operator: AddressLike, salt: BytesLike],
    [boolean],
    "view"
  >;

  registerOperatorToAVS: TypedContractMethod<
    [
      operator: AddressLike,
      operatorSignature: ISignatureUtils.SignatureWithSaltAndExpiryStruct,
    ],
    [void],
    "nonpayable"
  >;

  updateAVSMetadataURI: TypedContractMethod<
    [metadataURI: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "OPERATOR_AVS_REGISTRATION_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "calculateOperatorAVSRegistrationDigestHash"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      avs: AddressLike,
      salt: BytesLike,
      expiry: BigNumberish,
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "deregisterOperatorFromAVS"
  ): TypedContractMethod<[operator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "operatorSaltIsSpent"
  ): TypedContractMethod<
    [operator: AddressLike, salt: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "registerOperatorToAVS"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      operatorSignature: ISignatureUtils.SignatureWithSaltAndExpiryStruct,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateAVSMetadataURI"
  ): TypedContractMethod<[metadataURI: string], [void], "nonpayable">;

  getEvent(
    key: "AVSMetadataURIUpdated"
  ): TypedContractEvent<
    AVSMetadataURIUpdatedEvent.InputTuple,
    AVSMetadataURIUpdatedEvent.OutputTuple,
    AVSMetadataURIUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorAVSRegistrationStatusUpdated"
  ): TypedContractEvent<
    OperatorAVSRegistrationStatusUpdatedEvent.InputTuple,
    OperatorAVSRegistrationStatusUpdatedEvent.OutputTuple,
    OperatorAVSRegistrationStatusUpdatedEvent.OutputObject
  >;

  filters: {
    "AVSMetadataURIUpdated(address,string)": TypedContractEvent<
      AVSMetadataURIUpdatedEvent.InputTuple,
      AVSMetadataURIUpdatedEvent.OutputTuple,
      AVSMetadataURIUpdatedEvent.OutputObject
    >;
    AVSMetadataURIUpdated: TypedContractEvent<
      AVSMetadataURIUpdatedEvent.InputTuple,
      AVSMetadataURIUpdatedEvent.OutputTuple,
      AVSMetadataURIUpdatedEvent.OutputObject
    >;

    "OperatorAVSRegistrationStatusUpdated(address,address,uint8)": TypedContractEvent<
      OperatorAVSRegistrationStatusUpdatedEvent.InputTuple,
      OperatorAVSRegistrationStatusUpdatedEvent.OutputTuple,
      OperatorAVSRegistrationStatusUpdatedEvent.OutputObject
    >;
    OperatorAVSRegistrationStatusUpdated: TypedContractEvent<
      OperatorAVSRegistrationStatusUpdatedEvent.InputTuple,
      OperatorAVSRegistrationStatusUpdatedEvent.OutputTuple,
      OperatorAVSRegistrationStatusUpdatedEvent.OutputObject
    >;
  };
}
