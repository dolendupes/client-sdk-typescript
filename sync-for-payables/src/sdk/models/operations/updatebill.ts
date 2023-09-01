/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateBillRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    bill?: shared.Bill;

    /**
     * Unique identifier for a bill
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
    billId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * When updating data in the destination platform Codat checks the `sourceModifiedDate` against the `lastupdated` date from the accounting platform, if they're different Codat will return an error suggesting you should initiate another pull of the data. If this is set to `true` then the update will override this check.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
    forceUpdate?: boolean;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
    timeoutInMinutes?: number;
}

export class UpdateBillResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request made is not valid.
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
    updateBillResponse?: shared.UpdateBillResponse;
}
