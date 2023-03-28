/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Type of the address.
 */
export enum PutSupplierSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class PutSupplierSourceModifiedDateAddresses extends SpeakeasyBase {
  /**
   * City of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Country of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Line 1 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * Line 2 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * Postal code or zip code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  /**
   * Region of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  /**
   * Type of the address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PutSupplierSourceModifiedDateAddressesTypeEnum;
}

export class PutSupplierSourceModifiedDateMetadata extends SpeakeasyBase {
  /**
   * Indicates whether the record has been deleted in the third-party system this record originated from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Status of the supplier.
 */
export enum PutSupplierSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class PutSupplierSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * > View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://api.codat.io/swagger/index.html#/Suppliers/get_companies__companyId__data_suppliers). Suppliers' data links to accounts payable [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
 */
export class PutSupplierSourceModifiedDate extends SpeakeasyBase {
  /**
   * An array of Addresses.
   */
  @SpeakeasyMetadata({ elemType: PutSupplierSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => PutSupplierSourceModifiedDateAddresses)
  addresses?: PutSupplierSourceModifiedDateAddresses[];

  /**
   * Name of the main contact for the supplier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  /**
   * Default currency the supplier's transactional data is recorded in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  /**
   * Email address that the supplier may be contacted on.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  /**
   * Identifier for the supplier, unique to the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PutSupplierSourceModifiedDateMetadata)
  metadata?: PutSupplierSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Phone number that the supplier may be contacted on.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  /**
   * Company number of the supplier. In the UK, this is typically the company registration number issued by Companies House.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Status of the supplier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PutSupplierSourceModifiedDateStatusEnum;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PutSupplierSourceModifiedDateSupplementalData)
  supplementalData?: PutSupplierSourceModifiedDateSupplementalData;

  /**
   *
   *
   * @remarks
   * Name of the supplier as recorded in the accounting system, typically the company name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;

  /**
   * Supplier's company tax number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

export class PutSupplierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutSupplierSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=forceUpdate",
  })
  forceUpdate?: boolean;

  /**
   * Unique identifier for a supplier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=supplierId",
  })
  supplierId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class PutSupplier200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export enum PutSupplier200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class PutSupplier200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => PutSupplier200ApplicationJSONChangesPushOperationRecordRef)
  recordRef?: PutSupplier200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PutSupplier200ApplicationJSONChangesTypeEnum;
}

/**
 * Type of the address.
 */
export enum PutSupplier200ApplicationJSONSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class PutSupplier200ApplicationJSONSourceModifiedDateAddresses extends SpeakeasyBase {
  /**
   * City of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Country of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Line 1 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * Line 2 of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * Postal code or zip code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  /**
   * Region of the customer address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  /**
   * Type of the address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PutSupplier200ApplicationJSONSourceModifiedDateAddressesTypeEnum;
}

export class PutSupplier200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  /**
   * Indicates whether the record has been deleted in the third-party system this record originated from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Status of the supplier.
 */
export enum PutSupplier200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class PutSupplier200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * > View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://api.codat.io/swagger/index.html#/Suppliers/get_companies__companyId__data_suppliers). Suppliers' data links to accounts payable [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
 */
export class PutSupplier200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  /**
   * An array of Addresses.
   */
  @SpeakeasyMetadata({
    elemType: PutSupplier200ApplicationJSONSourceModifiedDateAddresses,
  })
  @Expose({ name: "addresses" })
  @Type(() => PutSupplier200ApplicationJSONSourceModifiedDateAddresses)
  addresses?: PutSupplier200ApplicationJSONSourceModifiedDateAddresses[];

  /**
   * Name of the main contact for the supplier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  /**
   * Default currency the supplier's transactional data is recorded in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  /**
   * Email address that the supplier may be contacted on.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  /**
   * Identifier for the supplier, unique to the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PutSupplier200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: PutSupplier200ApplicationJSONSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Phone number that the supplier may be contacted on.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  /**
   * Company number of the supplier. In the UK, this is typically the company registration number issued by Companies House.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Status of the supplier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PutSupplier200ApplicationJSONSourceModifiedDateStatusEnum;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => PutSupplier200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: PutSupplier200ApplicationJSONSourceModifiedDateSupplementalData;

  /**
   *
   *
   * @remarks
   * Name of the supplier as recorded in the accounting system, typically the company name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;

  /**
   * Supplier's company tax number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

/**
 * The status of the push operation.
 */
export enum PutSupplier200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class PutSupplier200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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
export class PutSupplier200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: PutSupplier200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => PutSupplier200ApplicationJSONValidationValidationItem)
  errors?: PutSupplier200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: PutSupplier200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => PutSupplier200ApplicationJSONValidationValidationItem)
  warnings?: PutSupplier200ApplicationJSONValidationValidationItem[];
}

/**
 * Success
 */
export class PutSupplier200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutSupplier200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => PutSupplier200ApplicationJSONChanges)
  changes?: PutSupplier200ApplicationJSONChanges[];

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
  completedOnUtc?: string;

  /**
   * > View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.
   *
   * @remarks
   *
   * ## Overview
   *
   * From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://api.codat.io/swagger/index.html#/Suppliers/get_companies__companyId__data_suppliers). Suppliers' data links to accounts payable [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => PutSupplier200ApplicationJSONSourceModifiedDate)
  data?: PutSupplier200ApplicationJSONSourceModifiedDate;

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
  requestedOnUtc: string;

  /**
   * The status of the push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PutSupplier200ApplicationJSONStatusEnum;

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
  @Type(() => PutSupplier200ApplicationJSONValidation)
  validation?: PutSupplier200ApplicationJSONValidation;
}

export class PutSupplierResponse extends SpeakeasyBase {
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
  putSupplier200ApplicationJSONObject?: PutSupplier200ApplicationJSON;
}
