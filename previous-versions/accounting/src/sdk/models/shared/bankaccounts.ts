/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
import { Links } from "./links";
import { Expose, Type } from "class-transformer";

export class BankAccounts extends SpeakeasyBase {
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

    @SpeakeasyMetadata({ elemType: BankAccount })
    @Expose({ name: "results" })
    @Type(() => BankAccount)
    results?: BankAccount[];

    @SpeakeasyMetadata()
    @Expose({ name: "totalResults" })
    totalResults: number;
}
