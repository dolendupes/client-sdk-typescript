/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Image reference.
 */
export class ImageReference extends SpeakeasyBase {
  /**
   * Alternative text when image is not available.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alt" })
  alt?: string;

  /**
   * Source URL for image.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "src" })
  src?: string;
}
