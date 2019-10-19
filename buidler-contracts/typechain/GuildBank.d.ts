/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface GuildBankInterface extends Interface {
  functions: {
    renounceOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    withdraw: TypedFunctionDescription<{
      encode([receiver, shares, totalShares]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([newOwner]: [string]): string;
    }>;
  };

  events: {
    Withdrawal: TypedEventDescription<{
      encodeTopics([receiver, amount]: [string | null, null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class GuildBank extends Contract {
  connect(signerOrProvider: Signer | Provider | string): GuildBank;
  attach(addressOrName: string): GuildBank;
  deployed(): Promise<GuildBank>;

  on(event: EventFilter | string, listener: Listener): GuildBank;
  once(event: EventFilter | string, listener: Listener): GuildBank;
  addListener(eventName: EventFilter | string, listener: Listener): GuildBank;
  removeAllListeners(eventName: EventFilter | string): GuildBank;
  removeListener(eventName: any, listener: Listener): GuildBank;

  interface: GuildBankInterface;

  functions: {
    renounceOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      receiver: string,
      shares: BigNumberish,
      totalShares: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;
    isOwner(): Promise<boolean>;
    approvedToken(): Promise<string>;
  };

  filters: {
    Withdrawal(receiver: string | null, amount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    renounceOwnership(): Promise<BigNumber>;

    withdraw(
      receiver: string,
      shares: BigNumberish,
      totalShares: BigNumberish
    ): Promise<BigNumber>;

    transferOwnership(newOwner: string): Promise<BigNumber>;
  };
}
