/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataIntegrityDetails } from "./dataintegritydetails";
import { Links } from "./links";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class Details extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => Links)
  links: Links;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: DataIntegrityDetails })
  @Expose({ name: "results" })
  @Type(() => DataIntegrityDetails)
  results?: DataIntegrityDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}
