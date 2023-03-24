/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetEnhancedCashFlowTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

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

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: string;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountProvider" })
  accountProvider?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "platformName" })
  platformName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceRef" })
  @Type(
    () =>
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef
  )
  sourceRef?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccountsReportSourceRef;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts,
  })
  @Expose({ name: "accounts" })
  @Type(
    () =>
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts
  )
  accounts?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSourcesAccounts[];
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "generatedDate" })
  generatedDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "reportName" })
  reportName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sourceType" })
  sourceType?: string;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "levels" })
  levels?: string[];
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

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
   * > 📘 Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceRef" })
  @Type(
    () =>
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef
  )
  sourceRef?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsReportSourceRef;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionCategory" })
  @Type(
    () =>
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory
  )
  transactionCategory?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactionsTransactionCategory;
}

export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions,
  })
  @Expose({ name: "transactions" })
  @Type(
    () =>
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions
  )
  transactions?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItemsTransactions[];
}

/**
 * OK
 */
export class GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources,
  })
  @Expose({ name: "dataSources" })
  @Type(
    () => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources
  )
  dataSources?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsDataSources[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(
    () => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo
  )
  reportInfo?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportInfo;

  @SpeakeasyMetadata({
    elemType:
      GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems,
  })
  @Expose({ name: "reportItems" })
  @Type(
    () => GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems
  )
  reportItems?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactionsReportItems[];
}

export class GetEnhancedCashFlowTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  enhancedCashFlowTransactions?: GetEnhancedCashFlowTransactionsEnhancedCashFlowTransactions;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
