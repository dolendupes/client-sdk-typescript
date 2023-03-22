/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCompanyDataHistoryRequest extends SpeakeasyBase {
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
 * One or more of the resources you referenced could not be found.
 *
 * @remarks
 * This might be because your company or data connection id is wrong, or was already deleted.
 */
export class GetCompanyDataHistory404ApplicationJSON extends SpeakeasyBase {
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

/**
 * Your API request was not properly authorized.
 */
export class GetCompanyDataHistory401ApplicationJSON extends SpeakeasyBase {
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

/**
 * Your `query` parameter was not correctly formed
 */
export class GetCompanyDataHistory400ApplicationJSON extends SpeakeasyBase {
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

export class GetCompanyDataHistoryLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCompanyDataHistoryLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCompanyDataHistoryLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCompanyDataHistoryLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetCompanyDataHistoryLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetCompanyDataHistoryLinksLinksCurrent)
  current: GetCompanyDataHistoryLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetCompanyDataHistoryLinksLinksNext)
  next?: GetCompanyDataHistoryLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetCompanyDataHistoryLinksLinksPrevious)
  previous?: GetCompanyDataHistoryLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetCompanyDataHistoryLinksLinksSelf)
  self: GetCompanyDataHistoryLinksLinksSelf;
}

export enum GetCompanyDataHistoryLinksPullOperationStatusEnum {
  Initial = "Initial",
  Queued = "Queued",
  Fetching = "Fetching",
  MapQueued = "MapQueued",
  Mapping = "Mapping",
  Complete = "Complete",
  FetchError = "FetchError",
  MapError = "MapError",
  InternalError = "InternalError",
  ProcessingQueued = "ProcessingQueued",
  Processing = "Processing",
  ProcessingError = "ProcessingError",
  ValidationQueued = "ValidationQueued",
  Validating = "Validating",
  ValidationError = "ValidationError",
  AuthError = "AuthError",
  Cancelled = "Cancelled",
  Routing = "Routing",
  RoutingError = "RoutingError",
  NotSupported = "NotSupported",
  RateLimitError = "RateLimitError",
  PermissionsError = "PermissionsError",
  PrerequisiteNotMet = "PrerequisiteNotMet",
}

/**
 * Information about a queued, in progress or completed pull operation.
 *
 * @remarks
 * *Formally called `dataset`*
 */
export class GetCompanyDataHistoryLinksPullOperation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isCompleted" })
  isCompleted: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isErrored" })
  isErrored: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "progress" })
  progress: number;

  @SpeakeasyMetadata()
  @Expose({ name: "requested" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requested: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCompanyDataHistoryLinksPullOperationStatusEnum;
}

/**
 * Codat's Paging Model
 */
export class GetCompanyDataHistoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetCompanyDataHistoryLinksLinks)
  links: GetCompanyDataHistoryLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: GetCompanyDataHistoryLinksPullOperation })
  @Expose({ name: "results" })
  @Type(() => GetCompanyDataHistoryLinksPullOperation)
  results?: GetCompanyDataHistoryLinksPullOperation[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetCompanyDataHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  links?: GetCompanyDataHistoryLinks;

  /**
   * Your `query` parameter was not correctly formed
   */
  @SpeakeasyMetadata()
  getCompanyDataHistory400ApplicationJSONObject?: GetCompanyDataHistory400ApplicationJSON;

  /**
   * Your API request was not properly authorized.
   */
  @SpeakeasyMetadata()
  getCompanyDataHistory401ApplicationJSONObject?: GetCompanyDataHistory401ApplicationJSON;

  /**
   * One or more of the resources you referenced could not be found.
   *
   * @remarks
   * This might be because your company or data connection id is wrong, or was already deleted.
   */
  @SpeakeasyMetadata()
  getCompanyDataHistory404ApplicationJSONObject?: GetCompanyDataHistory404ApplicationJSON;
}
