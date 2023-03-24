/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetBillAttachmentsRequest extends SpeakeasyBase {
  /**
   * Unique identifier for a bill
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=billId",
  })
  billId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class GetBillAttachmentsAttachmentsAttachmentModifiedDate extends SpeakeasyBase {
  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;
}

export class GetBillAttachmentsAttachmentsAttachmentSourceModifiedDate extends SpeakeasyBase {
  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;
}

export class GetBillAttachmentsAttachmentsAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: string;

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
  @Expose({ name: "dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fileSize" })
  fileSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "includeWhenSent" })
  includeWhenSent?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Type(() => GetBillAttachmentsAttachmentsAttachmentModifiedDate)
  modifiedDate?: GetBillAttachmentsAttachmentsAttachmentModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Type(() => GetBillAttachmentsAttachmentsAttachmentSourceModifiedDate)
  sourceModifiedDate?: GetBillAttachmentsAttachmentsAttachmentSourceModifiedDate;
}

/**
 * Success
 */
export class GetBillAttachmentsAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetBillAttachmentsAttachmentsAttachment })
  @Expose({ name: "attachments" })
  @Type(() => GetBillAttachmentsAttachmentsAttachment)
  attachments?: GetBillAttachmentsAttachmentsAttachment[];
}

export class GetBillAttachmentsResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  attachments?: GetBillAttachmentsAttachments;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
