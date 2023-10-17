/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetCustomerAttachmentRequest extends SpeakeasyBase {
    /**
     * Unique identifier for an attachment.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
    attachmentId: string;

    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Unique identifier for a connection.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * Unique identifier for a customer.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
    customerId: string;
}

export class GetCustomerAttachmentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    attachment?: shared.Attachment;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
