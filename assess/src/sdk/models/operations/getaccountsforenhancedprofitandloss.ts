/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAccountsForEnhancedProfitAndLossRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=numberOfPeriods",
  })
  numberOfPeriods: number;

  /**
   * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reportDate",
  })
  reportDate: string;
}

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportInfo extends SpeakeasyBase {
  /**
   * Company name the report was generated for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  /**
   * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. e.g. _GBP_.
   *
   * @remarks
   *
   * ## Unknown currencies
   *
   * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
   *
   * There are only a very small number of edge cases where this currency code is returned by the Codat system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * The date the report was generated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "generatedDate" })
  generatedDate?: string;

  /**
   * The name of the report.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reportName" })
  reportName?: string;
}

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "levelName" })
  levelName?: string;
}

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels,
  })
  @Expose({ name: "levels" })
  @Type(
    () =>
      GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels
  )
  levels?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategoryLevels[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

export class GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountCategory" })
  @Type(
    () =>
      GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategory
  )
  accountCategory?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItemsAccountCategory;

  /**
   * The unique account ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

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
}

/**
 * OK
 */
export class GetAccountsForEnhancedProfitAndLossEnhancedReport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => GetAccountsForEnhancedProfitAndLossEnhancedReportReportInfo)
  reportInfo?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportInfo;

  /**
   * An array of report items.
   */
  @SpeakeasyMetadata({
    elemType: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems,
  })
  @Expose({ name: "reportItems" })
  @Type(() => GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems)
  reportItems?: GetAccountsForEnhancedProfitAndLossEnhancedReportReportItems[];
}

export class GetAccountsForEnhancedProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  enhancedReport?: GetAccountsForEnhancedProfitAndLossEnhancedReport;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
