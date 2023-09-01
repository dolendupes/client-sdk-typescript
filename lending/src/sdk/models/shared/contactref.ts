/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The customer or supplier for the transfer, if available.
 */
export class ContactRef extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}
