/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetTrackingCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=trackingCategoryId",
  })
  trackingCategoryId: string;
}

/**
 * Current state of the tracking category.
 */
export enum GetTrackingCategorySourceModifiedDateTrackingCategoryStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Current state of the tracking category.
 */
export enum GetTrackingCategorySourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Current state of the tracking category.
 */
export enum GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Current state of the tracking category.
 */
export enum GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  /**
   * The identifier for the item, unique per tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * The name of the tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The identifier for this item's immediate parent
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Current state of the tracking category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  /**
   * Boolean value indicating whether this category has SubCategories
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  /**
   * The identifier for the item, unique per tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * The name of the tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The identifier for this item's immediate parent
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Current state of the tracking category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;

  /**
   * A collection of subcategories that are nested beneath this category.
   */
  @SpeakeasyMetadata({
    elemType:
      GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate,
  })
  @Expose({ name: "subCategories" })
  @Type(
    () =>
      GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate
  )
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategorySourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  /**
   * Boolean value indicating whether this category has SubCategories
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  /**
   * The identifier for the item, unique per tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * The name of the tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The identifier for this item's immediate parent
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Current state of the tracking category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateSourceModifiedDateTrackingCategoryStatusEnum;

  /**
   * A collection of subcategories that are nested beneath this category.
   */
  @SpeakeasyMetadata({
    elemType:
      GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate,
  })
  @Expose({ name: "subCategories" })
  @Type(
    () =>
      GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate
  )
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDateSourceModifiedDate[];
}

/**
 * Success
 */
export class GetTrackingCategorySourceModifiedDate extends SpeakeasyBase {
  /**
   * Boolean value indicating whether this category has SubCategories
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  /**
   * The identifier for the item, unique per tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * The name of the tracking category
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The identifier for this item's immediate parent
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Current state of the tracking category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetTrackingCategorySourceModifiedDateTrackingCategoryStatusEnum;

  /**
   * A collection of subcategories that are nested beneath this category.
   */
  @SpeakeasyMetadata({
    elemType: GetTrackingCategorySourceModifiedDateSourceModifiedDate,
  })
  @Expose({ name: "subCategories" })
  @Type(() => GetTrackingCategorySourceModifiedDateSourceModifiedDate)
  subCategories?: GetTrackingCategorySourceModifiedDateSourceModifiedDate[];
}

export class GetTrackingCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  sourceModifiedDate?: GetTrackingCategorySourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
