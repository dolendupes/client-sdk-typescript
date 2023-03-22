/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DatasetStatusHasChangedToAnErrorStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

export class DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhookData extends SpeakeasyBase {
  /**
   * Data type the sync completed for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  /**
   * Unique identifier for the dataset that completed its sync.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "datasetId" })
  datasetId?: string;

  /**
   * The current status of the dataset's sync.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "datasetStatus" })
  datasetStatus?: string;
}

/**
 * Webhook request body to notify that a data synchronization has completed.
 */
export class DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhook extends SpeakeasyBase {
  /**
   * Unique identifier of the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alertId" })
  alertId?: string;

  /**
   * Unique identifier for your SMB in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhookData)
  data?: DatasetStatusHasChangedToAnErrorStateDatasetDataErrorWebhookData;

  /**
   * A human readable message about the webhook.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  /**
   * Unique identifier for the rule.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ruleId" })
  ruleId?: string;

  /**
   * The type of rule.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ruleType" })
  ruleType?: string;
}
