/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CategorisedAccount } from "./categorisedaccount";
import { Links } from "./links";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class CategorisedAccounts extends SpeakeasyBase {
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

    /**
     * A list confirmed and suggested account categories.
     */
    @SpeakeasyMetadata({ elemType: CategorisedAccount })
    @Expose({ name: "results" })
    @Type(() => CategorisedAccount)
    results?: CategorisedAccount[];

    @SpeakeasyMetadata()
    @Expose({ name: "totalResults" })
    totalResults: number;
}
