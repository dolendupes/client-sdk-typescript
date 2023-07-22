/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetBillRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a bill
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
    billId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;
}

/**
 * The data type's dataset has not been requested or is still syncing.
 */
export class GetBill409ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "canBeRetried" })
    canBeRetried?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "correlationId" })
    correlationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "detailedErrorCode" })
    detailedErrorCode?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    service?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "statusCode" })
    statusCode?: number;
}

export class GetBillResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    bill?: shared.Bill;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The data type's dataset has not been requested or is still syncing.
     */
    @SpeakeasyMetadata()
    getBill409ApplicationJSONObject?: GetBill409ApplicationJSON;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}
