/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetCompaniesCompanyIdPushPushOperationKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * Push operation key.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pushOperationKey",
  })
  pushOperationKey: string;
}

export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export enum GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () =>
      GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesPushOperationRecordRef
  )
  recordRef?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChangesTypeEnum;
}

/**
 * The status of the push operation.
 */
export enum GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 */
export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(
    () =>
      GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem
  )
  errors?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType:
      GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem
  )
  warnings?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidationValidationItem[];
}

/**
 * OK
 */
export class GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges,
  })
  @Expose({ name: "changes" })
  @Type(
    () => GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges
  )
  changes?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONChanges[];

  /**
   * Unique identifier for your SMB in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  /**
   * The datetime when the push was completed, null if Pending.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completedOnUtc?: Date;

  /**
   * Object submitted in push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  /**
   * Unique identifier for a company's data connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  /**
   * The type of data being pushed, eg invoices, customers.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  /**
   * The datetime when the push was requested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestedOnUtc: Date;

  /**
   * The status of the push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  /**
   * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () => GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidation
  )
  validation?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSONValidation;
}

export class GetCompaniesCompanyIdPushPushOperationKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getCompaniesCompanyIdPushPushOperationKey200ApplicationJSONObject?: GetCompaniesCompanyIdPushPushOperationKey200ApplicationJSON;
}
