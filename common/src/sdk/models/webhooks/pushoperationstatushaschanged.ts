/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PushOperationStatusHasChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

export class PushOperationStatusHasChangedPushOperationStatusChangedWebhookData extends SpeakeasyBase {
  /**
   * Data type used in the push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  /**
   * Unique identifier for the push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey?: string;

  /**
   * The current status of the push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}

/**
 * Webhook request body for a push operation status change.
 */
export class PushOperationStatusHasChangedPushOperationStatusChangedWebhook extends SpeakeasyBase {
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
  @Type(
    () => PushOperationStatusHasChangedPushOperationStatusChangedWebhookData
  )
  data?: PushOperationStatusHasChangedPushOperationStatusChangedWebhookData;

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
