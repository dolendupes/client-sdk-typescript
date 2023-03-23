/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListAllBankingTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  /**
   * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  /**
   * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

/**
 * Code to identify the underlying transaction.
 */
export enum ListAllBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum {
  Unknown = "Unknown",
  Fee = "Fee",
  Payment = "Payment",
  Cash = "Cash",
  Transfer = "Transfer",
  Interest = "Interest",
  Cashback = "Cashback",
  Cheque = "Cheque",
  DirectDebit = "DirectDebit",
  Purchase = "Purchase",
  StandingOrder = "StandingOrder",
  Adjustment = "Adjustment",
  Credit = "Credit",
  Other = "Other",
  NotSupported = "NotSupported",
}

/**
 * An object of bank transaction category reference data.
 */
export class ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef extends SpeakeasyBase {
  /**
   * The unique category reference id for the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The category name reference for the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
 *
 * @remarks
 *
 * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
 */
export class ListAllBankingTransactions200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  /**
   * The unique identifier of the bank account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId: string;

  /**
   * The amount of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  /**
   * The date the bank transaction was authorized.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "authorizedDate" })
  authorizedDate?: string;

  /**
   * Code to identify the underlying transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDateCodeEnum;

  /**
   * The currency of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * The description of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The unique identifier of the bank transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The name of the merchant.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merchantName" })
  merchantName?: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * The date the bank transaction was cleared.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postedDate" })
  postedDate?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * An object of bank transaction category reference data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transactionCategoryRef" })
  @Type(
    () =>
      ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef
  )
  transactionCategoryRef?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDateTransactionCategoryRef;
}

/**
 * Success
 */
export class ListAllBankingTransactions200ApplicationJSON extends SpeakeasyBase {
  /**
   * The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.
   *
   * @remarks
   *
   * View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "results" })
  @Type(() => ListAllBankingTransactions200ApplicationJSONSourceModifiedDate)
  results?: ListAllBankingTransactions200ApplicationJSONSourceModifiedDate;
}

export class ListAllBankingTransactionsResponse extends SpeakeasyBase {
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
  listAllBankingTransactions200ApplicationJSONObject?: ListAllBankingTransactions200ApplicationJSON;
}
