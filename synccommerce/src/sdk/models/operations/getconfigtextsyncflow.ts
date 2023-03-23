/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Placeholder for the property name.
 */
export class GetConfigTextSyncFlow200ApplicationJSONAdditionalProp1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  /**
   * Value of the property.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;
}

/**
 * Placeholder for the property name.
 */
export class GetConfigTextSyncFlow200ApplicationJSONAdditionalProp2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  /**
   * Value of the property.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;
}

/**
 * Placeholder for the property name.
 */
export class GetConfigTextSyncFlow200ApplicationJSONAdditionalProp3 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  /**
   * Value of the property.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;
}

/**
 * Success
 */
export class GetConfigTextSyncFlow200ApplicationJSON extends SpeakeasyBase {
  /**
   * Placeholder for the property name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp1" })
  @Type(() => GetConfigTextSyncFlow200ApplicationJSONAdditionalProp1)
  additionalProp1?: GetConfigTextSyncFlow200ApplicationJSONAdditionalProp1;

  /**
   * Placeholder for the property name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp2" })
  @Type(() => GetConfigTextSyncFlow200ApplicationJSONAdditionalProp2)
  additionalProp2?: GetConfigTextSyncFlow200ApplicationJSONAdditionalProp2;

  /**
   * Placeholder for the property name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additionalProp3" })
  @Type(() => GetConfigTextSyncFlow200ApplicationJSONAdditionalProp3)
  additionalProp3?: GetConfigTextSyncFlow200ApplicationJSONAdditionalProp3;
}

export class GetConfigTextSyncFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  getConfigTextSyncFlow200ApplicationJSONObject?: GetConfigTextSyncFlow200ApplicationJSON;
}
