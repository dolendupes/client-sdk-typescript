/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetSyncTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * Unique identifier for a sync.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=syncId",
  })
  syncId: string;

  /**
   * The unique identifier for your SMB's transaction.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=transactionId",
  })
  transactionId: string;
}

/**
 * Type of transaction that has been processed e.g. Expense or Bank Feed.
 */
export enum GetSyncTransaction200ApplicationJSONIntegrationTypeEnum {
  Expenses = "expenses",
  Bankfeeds = "bankfeeds",
}

/**
 * Status of the transaction.
 */
export enum GetSyncTransaction200ApplicationJSONStatusEnum {
  Unknown = "Unknown",
  Pending = "Pending",
  ValidationError = "ValidationError",
  Completed = "Completed",
  PushError = "PushError",
}

export class GetSyncTransaction200ApplicationJSON extends SpeakeasyBase {
  /**
   * Type of transaction that has been processed e.g. Expense or Bank Feed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrationType" })
  integrationType?: GetSyncTransaction200ApplicationJSONIntegrationTypeEnum;

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
  status?: GetSyncTransaction200ApplicationJSONStatusEnum;

  /**
   * Your unique idenfier of the transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "transactionId" })
  transactionId?: string;
}

export class GetSyncTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata({ elemType: GetSyncTransaction200ApplicationJSON })
  getSyncTransaction200ApplicationJSONObjects?: GetSyncTransaction200ApplicationJSON[];
}
