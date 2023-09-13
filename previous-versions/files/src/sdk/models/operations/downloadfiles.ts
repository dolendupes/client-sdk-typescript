/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DownloadFilesRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Only download files uploaded on this date.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
    date?: string;
}

/**
 * One or more of the resources you referenced could not be found.
 *
 * @remarks
 * This might be because your company or data connection id is wrong, or was already deleted.
 */
export class DownloadFilesErrorMessage extends SpeakeasyBase {
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

export class DownloadFilesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    data?: Uint8Array;

    /**
     * One or more of the resources you referenced could not be found.
     *
     * @remarks
     * This might be because your company or data connection id is wrong, or was already deleted.
     */
    @SpeakeasyMetadata()
    errorMessage?: DownloadFilesErrorMessage;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The request made is not valid.
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}
