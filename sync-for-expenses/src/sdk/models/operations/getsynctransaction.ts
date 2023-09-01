/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSyncTransactionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Unique identifier for a sync.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
    syncId: string;

    /**
     * The unique identifier for your SMB's transaction.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
    transactionId: string;
}

export class GetSyncTransactionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    transaction?: shared.Transaction;
}
