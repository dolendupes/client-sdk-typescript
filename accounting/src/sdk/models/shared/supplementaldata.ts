/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Supplemental data is additional data you can include in our standard data types.
 *
 * @remarks
 *
 * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/additional-data) about supplemental data.
 */
export class SupplementalData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: Record<string, Record<string, any>>;
}
