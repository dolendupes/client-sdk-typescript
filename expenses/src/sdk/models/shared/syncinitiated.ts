/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Returns the newly created SyncId
 */
export class SyncInitiated extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "syncId" })
  syncId?: string;
}
