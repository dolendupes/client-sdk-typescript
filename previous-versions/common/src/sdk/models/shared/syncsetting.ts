/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataType } from "./datatype";
import { Expose } from "class-transformer";

/**
 * Describes how often, and how much history, should be fetched for the given data type when a pull operation is queued.
 */
export class SyncSetting extends SpeakeasyBase {
    /**
     * Available Data types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType: DataType;

    /**
     * Whether this data type should be queued after a company has authorized a connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fetchOnFirstLink" })
    fetchOnFirstLink: boolean;

    /**
     * `True` if the [sync setting](https://docs.codat.io/knowledge-base/advanced-sync-settings) is locked.
     */
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
    @Expose({ name: "syncFromUtc" })
    syncFromUtc?: string;

    /**
     * Number of months of data to be fetched. Set this *or* `syncFromUTC`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "syncFromWindow" })
    syncFromWindow?: number;

    /**
     * The sync in which data types are queued for a sync.
     */
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
