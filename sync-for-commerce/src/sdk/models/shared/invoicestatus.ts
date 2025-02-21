/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class InvoiceStatus extends SpeakeasyBase {
    /**
     * Options for invoice statuses.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoiceStatusOptions" })
    invoiceStatusOptions?: string[];

    /**
     * Selected option for invoice status for invoice to be synced.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "selectedInvoiceStatus" })
    selectedInvoiceStatus?: string;
}
