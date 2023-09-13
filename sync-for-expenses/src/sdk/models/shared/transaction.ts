/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IntegrationType } from "./integrationtype";
import { TransactionStatus } from "./transactionstatus";
import { Expose } from "class-transformer";

export class Transaction extends SpeakeasyBase {
    /**
     * Type of transaction that has been processed e.g. Expense or Bank Feed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "integrationType" })
    integrationType?: IntegrationType;

    /**
     * Metadata such as validation errors or the resulting record created in the accounting software.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * Status of the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TransactionStatus;

    /**
     * Your unique idenfier of the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionId" })
    transactionId?: string;
}
