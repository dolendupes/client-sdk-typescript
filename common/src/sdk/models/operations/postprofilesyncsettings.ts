/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Describes how often, and how much history, should be fetched for the given data type when a pull operation is queued.
 */
export class PostProfileSyncSettingsRequestBodySyncSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  /**
   * Whether this data type should be queued after a company has authorized a connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fetchOnFirstLink" })
  fetchOnFirstLink: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isLocked" })
  isLocked?: boolean;

  /**
   * Months of data to fetch, for report data types (`balanceSheet` & `profitAndLoss`) only.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "monthsToSync" })
  monthsToSync?: number;

  /**
   * Date from which data should be fetched. Set this *or* `syncFromWindow`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "syncFromUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  syncFromUtc?: Date;

  /**
   * Number of months of data to be fetched. Set this *or* `syncFromUTC`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "syncFromWindow" })
  syncFromWindow?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncOrder" })
  syncOrder: number;

  /**
   * Number of hours after which this data type should be refreshed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "syncSchedule" })
  syncSchedule: number;
}

/**
 * Include a `syncSetting` object for each data type.
 *
 * @remarks
 * `syncFromWindow`, `syncFromUTC` & `monthsToSync` only need to be included if you wish to set a value for them.
 */
export class PostProfileSyncSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overridesDefaults" })
  overridesDefaults: boolean;

  @SpeakeasyMetadata({
    elemType: PostProfileSyncSettingsRequestBodySyncSetting,
  })
  @Expose({ name: "settings" })
  @Type(() => PostProfileSyncSettingsRequestBodySyncSetting)
  settings: PostProfileSyncSettingsRequestBodySyncSetting[];
}

/**
 * Your API request was not properly authorized.
 */
export class PostProfileSyncSettings401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

export class PostProfileSyncSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Your API request was not properly authorized.
   */
  @SpeakeasyMetadata()
  postProfileSyncSettings401ApplicationJSONObject?: PostProfileSyncSettings401ApplicationJSON;
}
