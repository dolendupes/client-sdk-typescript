/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListTransfersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

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

export class ListTransfersLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListTransfersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListTransfersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListTransfersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListTransfersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListTransfersLinksLinksCurrent)
  current: ListTransfersLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListTransfersLinksLinksNext)
  next?: ListTransfersLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListTransfersLinksLinksPrevious)
  previous?: ListTransfersLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListTransfersLinksLinksSelf)
  self: ListTransfersLinksLinksSelf;
}

/**
 * The customer or supplier for the transfer, if available.
 */
export class ListTransfersLinksSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

/**
 * The account that the transfer is moving from or to.
 */
export class ListTransfersLinksSourceModifiedDateTransferAccountAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * The details of the accounts the transfer is moving from.
 */
export class ListTransfersLinksSourceModifiedDateTransferAccount extends SpeakeasyBase {
  /**
   * The account that the transfer is moving from or to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListTransfersLinksSourceModifiedDateTransferAccountAccountRef)
  accountRef?: ListTransfersLinksSourceModifiedDateTransferAccountAccountRef;

  /**
   * The amount transferred between accounts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  /**
   * ISO currency code recorded for the transfer in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}

export class ListTransfersLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class ListTransfersLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * References a category against which the item is tracked.
 */
export class ListTransfersLinksSourceModifiedDateTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * > View the coverage for transfers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * From the **Transfers** endpoints, you can:
 *
 * - [Retrieve a list of all transfers for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers)
 * - [Retrieve a single transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers__transferId_)
 * - [Add a new transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/post_companies__companyId__connections__connectionId__push_transfers)
 *
 * **Transfers** is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 */
export class ListTransfersLinksSourceModifiedDate extends SpeakeasyBase {
  /**
   * The customer or supplier for the transfer, if available.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => ListTransfersLinksSourceModifiedDateContactRef)
  contactRef?: ListTransfersLinksSourceModifiedDateContactRef;

  /**
   * The day on which the transfer was made.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "depositedRecordRefs" })
  depositedRecordRefs?: string[];

  /**
   * Description of the transfer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The details of the accounts the transfer is moving from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  @Type(() => ListTransfersLinksSourceModifiedDateTransferAccount)
  from?: ListTransfersLinksSourceModifiedDateTransferAccount;

  /**
   * Unique identifier for the transfer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListTransfersLinksSourceModifiedDateMetadata)
  metadata?: ListTransfersLinksSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => ListTransfersLinksSourceModifiedDateSupplementalData)
  supplementalData?: ListTransfersLinksSourceModifiedDateSupplementalData;

  /**
   * The details of the accounts the transfer is moving to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => ListTransfersLinksSourceModifiedDateTransferAccount)
  to?: ListTransfersLinksSourceModifiedDateTransferAccount;

  /**
   * Reference to the tracking categories this transfer is being tracked against.
   */
  @SpeakeasyMetadata({
    elemType: ListTransfersLinksSourceModifiedDateTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => ListTransfersLinksSourceModifiedDateTrackingCategoryRefs)
  trackingCategoryRefs?: ListTransfersLinksSourceModifiedDateTrackingCategoryRefs[];
}

/**
 * Codat's Paging Model
 */
export class ListTransfersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListTransfersLinksLinks)
  links: ListTransfersLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListTransfersLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListTransfersLinksSourceModifiedDate)
  results?: ListTransfersLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListTransfersResponse extends SpeakeasyBase {
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
  links?: ListTransfersLinks;
}
