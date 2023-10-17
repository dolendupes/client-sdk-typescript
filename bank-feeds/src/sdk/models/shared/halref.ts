/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class HalRef extends SpeakeasyBase {
    /**
     * Uri hypertext reference.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "href" })
    href?: string;
}
