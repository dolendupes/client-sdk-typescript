/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TargetAccountOption extends SpeakeasyBase {
    /**
     * Type of the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: string;

    /**
     * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
     *
     * @remarks
     *
     * ## Unknown currencies
     *
     * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
     *
     * There are only a very small number of edge cases where this currency code is returned by the Codat system.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * The Id of the connection to the target account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "feedConnectionId" })
    feedConnectionId?: string;

    /**
     * Id of the target account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Name of the target account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
