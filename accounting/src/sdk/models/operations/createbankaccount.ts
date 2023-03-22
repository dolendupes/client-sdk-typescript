/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The type of the account.
 */
export enum CreateBankAccountSourceModifiedDateAccountTypeEnum {
  Unknown = "Unknown",
  Credit = "Credit",
  Debit = "Debit",
}

export class CreateBankAccountSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 *
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
 */
export class CreateBankAccountSourceModifiedDate extends SpeakeasyBase {
  /**
   * Name of the bank account in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  /**
   * Account number for the bank account.
   *
   * @remarks
   *
   * Xero integrations
   * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
   *
   * FreeAgent integrations
   * For Credit accounts, only the last four digits are required. For other types, the field is optional.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  /**
   * The type of the account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: CreateBankAccountSourceModifiedDateAccountTypeEnum;

  /**
   * Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "availableBalance" })
  availableBalance?: number;

  /**
   * Balance of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  /**
   * Base currency of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * International bank account number of the account. Often used when making or receiving international payments.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "iBan" })
  iBan?: string;

  /**
   * Identifier for the account, unique for the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The institution of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  institution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateBankAccountSourceModifiedDateMetadata)
  metadata?: CreateBankAccountSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * Code used to identify each nominal account for a business.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;

  /**
   * Pre-arranged overdraft limit of the account.
   *
   * @remarks
   *
   * The value is always positive. For example, an overdraftLimit of `1000` means that the balance of the account can go down to `-1000`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "overdraftLimit" })
  overdraftLimit?: number;

  /**
   * Sort code for the bank account.
   *
   * @remarks
   *
   * Xero integrations
   * The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sortCode" })
  sortCode?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}

export class CreateBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: CreateBankAccountSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=allowSyncOnPushComplete",
  })
  allowSyncOnPushComplete?: boolean;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class CreateBankAccount200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export enum CreateBankAccount200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class CreateBankAccount200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CreateBankAccount200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: CreateBankAccount200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreateBankAccount200ApplicationJSONChangesTypeEnum;
}

/**
 * The type of the account.
 */
export enum CreateBankAccount200ApplicationJSONSourceModifiedDateAccountTypeEnum {
  Unknown = "Unknown",
  Credit = "Credit",
  Debit = "Debit",
}

export class CreateBankAccount200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 *
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
 */
export class CreateBankAccount200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  /**
   * Name of the bank account in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  /**
   * Account number for the bank account.
   *
   * @remarks
   *
   * Xero integrations
   * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
   *
   * FreeAgent integrations
   * For Credit accounts, only the last four digits are required. For other types, the field is optional.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  /**
   * The type of the account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: CreateBankAccount200ApplicationJSONSourceModifiedDateAccountTypeEnum;

  /**
   * Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "availableBalance" })
  availableBalance?: number;

  /**
   * Balance of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  /**
   * Base currency of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * International bank account number of the account. Often used when making or receiving international payments.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "iBan" })
  iBan?: string;

  /**
   * Identifier for the account, unique for the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The institution of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  institution?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreateBankAccount200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreateBankAccount200ApplicationJSONSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * Code used to identify each nominal account for a business.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;

  /**
   * Pre-arranged overdraft limit of the account.
   *
   * @remarks
   *
   * The value is always positive. For example, an overdraftLimit of `1000` means that the balance of the account can go down to `-1000`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "overdraftLimit" })
  overdraftLimit?: number;

  /**
   * Sort code for the bank account.
   *
   * @remarks
   *
   * Xero integrations
   * The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sortCode" })
  sortCode?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}

/**
 * The status of the push operation.
 */
export enum CreateBankAccount200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class CreateBankAccount200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 */
export class CreateBankAccount200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreateBankAccount200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => CreateBankAccount200ApplicationJSONValidationValidationItem)
  errors?: CreateBankAccount200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: CreateBankAccount200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => CreateBankAccount200ApplicationJSONValidationValidationItem)
  warnings?: CreateBankAccount200ApplicationJSONValidationValidationItem[];
}

/**
 * Success
 */
export class CreateBankAccount200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateBankAccount200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreateBankAccount200ApplicationJSONChanges)
  changes?: CreateBankAccount200ApplicationJSONChanges[];

  /**
   * Unique identifier for your SMB in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  /**
   * The datetime when the push was completed, null if Pending.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  /**
   * > **Accessing Bank Accounts through Banking API**
   *
   * @remarks
   * >
   * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
   * >
   * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
   *
   * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
   *
   * ## Overview
   *
   * A list of bank accounts associated with a company and a specific [data connection](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId_).
   *
   * Bank accounts data includes:
   * * The name and ID of the account in the accounting platform.
   * * The currency and balance of the account.
   * * The sort code and account number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateBankAccount200ApplicationJSONSourceModifiedDate)
  data?: CreateBankAccount200ApplicationJSONSourceModifiedDate;

  /**
   * Unique identifier for a company's data connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  /**
   * The type of data being pushed, eg invoices, customers.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  /**
   * The datetime when the push was requested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  /**
   * The status of the push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CreateBankAccount200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  /**
   * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => CreateBankAccount200ApplicationJSONValidation)
  validation?: CreateBankAccount200ApplicationJSONValidation;
}

export class CreateBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  createBankAccount200ApplicationJSONObject?: CreateBankAccount200ApplicationJSON;
}
