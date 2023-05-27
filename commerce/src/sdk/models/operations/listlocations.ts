/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ListLocationsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;
}

/**
 * The data type's dataset has not been requested or is still syncing.
 */
export class ListLocations409ApplicationJSON extends SpeakeasyBase {
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

export class ListLocationsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    locationsResponse?: shared.LocationsResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The data type's dataset has not been requested or is still syncing.
     */
    @SpeakeasyMetadata()
    listLocations409ApplicationJSONObject?: ListLocations409ApplicationJSON;

    /**
     * Your `query` parameter was not correctly formed
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}
