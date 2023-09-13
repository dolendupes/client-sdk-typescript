/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataConnectionStatus } from "./dataconnectionstatus";
import { Expose } from "class-transformer";

export class UpdateConnectionStatus extends SpeakeasyBase {
    /**
     * The current authorization status of the data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: DataConnectionStatus;
}
