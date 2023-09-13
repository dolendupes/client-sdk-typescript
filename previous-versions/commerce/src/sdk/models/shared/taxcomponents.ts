/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Links } from "./links";
import { TaxComponent } from "./taxcomponent";
import { Expose, Type } from "class-transformer";

export class TaxComponents extends SpeakeasyBase {
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

    @SpeakeasyMetadata({ elemType: TaxComponent })
    @Expose({ name: "results" })
    @Type(() => TaxComponent)
    results?: TaxComponent[];

    @SpeakeasyMetadata()
    @Expose({ name: "totalResults" })
    totalResults: number;
}
