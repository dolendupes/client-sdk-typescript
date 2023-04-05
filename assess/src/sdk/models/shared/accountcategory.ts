/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AccountCategory extends SpeakeasyBase {
  /**
   * Most granular chart of account type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "detailType" })
  detailType?: string;

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
