/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteBillRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a bill
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
    billId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;
}

export class DeleteBillResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    pushOperationSummary?: shared.PushOperationSummary;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
