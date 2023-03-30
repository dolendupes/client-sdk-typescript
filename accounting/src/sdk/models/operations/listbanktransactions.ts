/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListBankTransactionsRequest extends SpeakeasyBase {
  /**
   * Unique identifier for an account
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=accountId",
  })
  accountId: string;

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

export class ListBankTransactions200ApplicationJSONLinksHypertextReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBankTransactions200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBankTransactions200ApplicationJSONLinksHypertextReference)
  current: ListBankTransactions200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBankTransactions200ApplicationJSONLinksHypertextReference)
  next?: ListBankTransactions200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBankTransactions200ApplicationJSONLinksHypertextReference)
  previous?: ListBankTransactions200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBankTransactions200ApplicationJSONLinksHypertextReference)
  self: ListBankTransactions200ApplicationJSONLinksHypertextReference;
}

/**
 * Type of transaction for the bank statement line
 */
export enum ListBankTransactions200ApplicationJSONSourceModifiedDateTransactionTypeEnum {
  Unknown = "Unknown",
  Credit = "Credit",
  Debit = "Debit",
  Int = "Int",
  Div = "Div",
  Fee = "Fee",
  SerChg = "SerChg",
  Dep = "Dep",
  Atm = "Atm",
  Pos = "Pos",
  Xfer = "Xfer",
  Check = "Check",
  Payment = "Payment",
  Cash = "Cash",
  DirectDep = "DirectDep",
  DirectDebit = "DirectDebit",
  RepeatPmt = "RepeatPmt",
  Other = "Other",
}

export class ListBankTransactions200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance: number;

  @SpeakeasyMetadata()
  @Expose({ name: "counterparty" })
  counterparty?: string;

  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   *
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reconciled" })
  reconciled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Type of transaction for the bank statement line
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transactionType" })
  transactionType: ListBankTransactions200ApplicationJSONSourceModifiedDateTransactionTypeEnum;
}

/**
 * Success
 */
export class ListBankTransactions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBankTransactions200ApplicationJSONLinks)
  links: ListBankTransactions200ApplicationJSONLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({
    elemType: ListBankTransactions200ApplicationJSONSourceModifiedDate,
  })
  @Expose({ name: "results" })
  @Type(() => ListBankTransactions200ApplicationJSONSourceModifiedDate)
  results?: ListBankTransactions200ApplicationJSONSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBankTransactionsResponse extends SpeakeasyBase {
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
  listBankTransactions200ApplicationJSONObject?: ListBankTransactions200ApplicationJSON;
}
