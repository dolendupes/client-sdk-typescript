/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListAccountsCategoriesRequest extends SpeakeasyBase {
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

export class ListAccountsCategoriesLinksLinksHypertextReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListAccountsCategoriesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListAccountsCategoriesLinksLinksHypertextReference)
  current: ListAccountsCategoriesLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListAccountsCategoriesLinksLinksHypertextReference)
  next?: ListAccountsCategoriesLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListAccountsCategoriesLinksLinksHypertextReference)
  previous?: ListAccountsCategoriesLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListAccountsCategoriesLinksLinksHypertextReference)
  self: ListAccountsCategoriesLinksLinksHypertextReference;
}

/**
 * An object containing account reference data.
 */
export class ListAccountsCategoriesLinksCategorisedAccountAccountRef extends SpeakeasyBase {
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

export class ListAccountsCategoriesLinksCategorisedAccountModifiedDate extends SpeakeasyBase {
  /**
   * Most granular chart of account type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "detailType" })
  detailType?: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * The account subtype.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  /**
   * The top level account type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class ListAccountsCategoriesLinksCategorisedAccount extends SpeakeasyBase {
  /**
   * An object containing account reference data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccountAccountRef)
  accountRef?: ListAccountsCategoriesLinksCategorisedAccountAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccountModifiedDate)
  confirmed?: ListAccountsCategoriesLinksCategorisedAccountModifiedDate;

  @SpeakeasyMetadata()
  @Expose({ name: "suggested" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccountModifiedDate)
  suggested?: ListAccountsCategoriesLinksCategorisedAccountModifiedDate;
}

/**
 * Codat's Paging Model
 */
export class ListAccountsCategoriesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListAccountsCategoriesLinksLinks)
  links: ListAccountsCategoriesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  /**
   * A list confirmed and suggested account categories.
   */
  @SpeakeasyMetadata({
    elemType: ListAccountsCategoriesLinksCategorisedAccount,
  })
  @Expose({ name: "results" })
  @Type(() => ListAccountsCategoriesLinksCategorisedAccount)
  results?: ListAccountsCategoriesLinksCategorisedAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListAccountsCategoriesResponse extends SpeakeasyBase {
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
  links?: ListAccountsCategoriesLinks;
}
