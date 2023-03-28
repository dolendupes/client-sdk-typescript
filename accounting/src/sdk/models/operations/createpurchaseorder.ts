/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Reference to the account to which the line item is linked.
 */
export class CreatePurchaseOrderSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the product or inventory item to which the line item is linked.
 */
export class CreatePurchaseOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the tax rate to which the line item is linked.
 */
export class CreatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  /**
   * Applicable tax rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  /**
   * 'id' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * References a category against which the item is tracked.
 */
export class CreatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreatePurchaseOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateLineItemsAccountRef)
  accountRef?: CreatePurchaseOrderSourceModifiedDateLineItemsAccountRef;

  /**
   * Description of the goods / services that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Value of any discounts applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  /**
   * Percentage rate (from 0 to 100) of any discounts applied to the unit amount.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  /**
   * Reference to the product or inventory item to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateLineItemsItemRef)
  itemRef?: CreatePurchaseOrderSourceModifiedDateLineItemsItemRef;

  /**
   * Number of units that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  /**
   * Amount of the line, inclusive of discounts but exclusive of tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Amount of tax for the line.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  /**
   * Reference to the tax rate to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: CreatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef;

  /**
   * Total amount of the line, inclusive of discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Reference to the tracking categories to which the line item is linked.
   */
  @SpeakeasyMetadata({
    elemType:
      CreatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () => CreatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: CreatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Price of each unit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class CreatePurchaseOrderSourceModifiedDateMetadata extends SpeakeasyBase {
  /**
   * Indicates whether the record has been deleted in the third-party system this record originated from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Type of the address.
 */
export enum CreatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

/**
 * Delivery address for any goods that have been ordered.
 */
export class CreatePurchaseOrderSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: CreatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum;
}

/**
 * Details of the named contact at the delivery address.
 */
export class CreatePurchaseOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
  /**
   * Email address of the contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * Name of the contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Phone number of the contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

/**
 * Delivery details for any goods that have been ordered.
 */
export class CreatePurchaseOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  /**
   * Delivery address for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateShipToAddress)
  address?: CreatePurchaseOrderSourceModifiedDateShipToAddress;

  /**
   * Details of the named contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateShipToContact)
  contact?: CreatePurchaseOrderSourceModifiedDateShipToContact;
}

/**
 * Current state of the purchase order
 */
export enum CreatePurchaseOrderSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Open = "Open",
  Closed = "Closed",
  Void = "Void",
}

/**
 * Supplier that the purchase order is recorded against in the accounting system.
 */
export class CreatePurchaseOrderSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

/**
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.
 *
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
 */
export class CreatePurchaseOrderSourceModifiedDate extends SpeakeasyBase {
  /**
   * Currency of the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
   *
   * @remarks
   *
   * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
   *
   * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
   *
   * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
   *
   * ## Examples with base currency of GBP
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **USD**          | $20            | 0.781         | £15.62                     |
   * | **EUR**          | €20            | 0.885         | £17.70                     |
   * | **RUB**          | ₽20            | 0.011         | £0.22                      |
   *
   * ## Examples with base currency of USD
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **GBP**          | £20            | 1.277         | $25.54                     |
   * | **EUR**          | €20            | 1.134         | $22.68                     |
   * | **RUB**          | ₽20            | 0.015         | $0.30                      |
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  /**
   * Actual delivery date for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deliveryDate" })
  deliveryDate?: string;

  /**
   * Expected delivery date for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expectedDeliveryDate" })
  expectedDeliveryDate?: string;

  /**
   * Identifier for the purchase order, unique for the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Date of the purchase order as recorded in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  issueDate?: string;

  /**
   * Array of line items.
   */
  @SpeakeasyMetadata({
    elemType: CreatePurchaseOrderSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateLineItems)
  lineItems?: CreatePurchaseOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateMetadata)
  metadata?: CreatePurchaseOrderSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Any additional information associated with the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * Date the supplier is due to be paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paymentDueDate" })
  paymentDueDate?: string;

  /**
   * Friendly reference for the purchase order, commonly generated by the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  /**
   * Delivery details for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "shipTo" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateShipTo)
  shipTo?: CreatePurchaseOrderSourceModifiedDateShipTo;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current state of the purchase order
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CreatePurchaseOrderSourceModifiedDateStatusEnum;

  /**
   * Total amount of the purchase order, including discounts but excluding tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Supplier that the purchase order is recorded against in the accounting system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => CreatePurchaseOrderSourceModifiedDateSupplierRef)
  supplierRef?: CreatePurchaseOrderSourceModifiedDateSupplierRef;

  /**
   * Total amount of the purchase order, including discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Total value of any discounts applied to the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  /**
   *
   *
   * @remarks
   * Total amount of tax included in the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}

export class CreatePurchaseOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: CreatePurchaseOrderSourceModifiedDate;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

export class CreatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export enum CreatePurchaseOrder200ApplicationJSONChangesTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class CreatePurchaseOrder200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () => CreatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef
  )
  recordRef?: CreatePurchaseOrder200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CreatePurchaseOrder200ApplicationJSONChangesTypeEnum;
}

/**
 * Reference to the account to which the line item is linked.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the product or inventory item to which the line item is linked.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the tax rate to which the line item is linked.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  /**
   * Applicable tax rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  /**
   * 'id' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * References a category against which the item is tracked.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef
  )
  accountRef?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

  /**
   * Description of the goods / services that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Value of any discounts applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  /**
   * Percentage rate (from 0 to 100) of any discounts applied to the unit amount.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  /**
   * Reference to the product or inventory item to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(
    () =>
      CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef
  )
  itemRef?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  /**
   * Number of units that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  /**
   * Amount of the line, inclusive of discounts but exclusive of tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Amount of tax for the line.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  /**
   * Reference to the tax rate to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(
    () =>
      CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
  )
  taxRateRef?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  /**
   * Total amount of the line, inclusive of discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Reference to the tracking categories to which the line item is linked.
   */
  @SpeakeasyMetadata({
    elemType:
      CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () =>
      CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Price of each unit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  /**
   * Indicates whether the record has been deleted in the third-party system this record originated from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Type of the address.
 */
export enum CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

/**
 * Delivery address for any goods that have been ordered.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum;
}

/**
 * Details of the named contact at the delivery address.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact extends SpeakeasyBase {
  /**
   * Email address of the contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * Name of the contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Phone number of the contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

/**
 * Delivery details for any goods that have been ordered.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo extends SpeakeasyBase {
  /**
   * Delivery address for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(
    () => CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress
  )
  address?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress;

  /**
   * Details of the named contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(
    () => CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact
  )
  contact?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact;
}

/**
 * Current state of the purchase order
 */
export enum CreatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Open = "Open",
  Closed = "Closed",
  Void = "Void",
}

/**
 * Supplier that the purchase order is recorded against in the accounting system.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

/**
 * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.
 *
 * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
 */
export class CreatePurchaseOrder200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  /**
   * Currency of the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
   *
   * @remarks
   *
   * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
   *
   * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
   *
   * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
   *
   * ## Examples with base currency of GBP
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **USD**          | $20            | 0.781         | £15.62                     |
   * | **EUR**          | €20            | 0.885         | £17.70                     |
   * | **RUB**          | ₽20            | 0.011         | £0.22                      |
   *
   * ## Examples with base currency of USD
   *
   * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
   * | :--------------- | :------------- | :------------ | :------------------------- |
   * | **GBP**          | £20            | 1.277         | $25.54                     |
   * | **EUR**          | €20            | 1.134         | $22.68                     |
   * | **RUB**          | ₽20            | 0.015         | $0.30                      |
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  /**
   * Actual delivery date for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deliveryDate" })
  deliveryDate?: string;

  /**
   * Expected delivery date for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expectedDeliveryDate" })
  expectedDeliveryDate?: string;

  /**
   * Identifier for the purchase order, unique for the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Date of the purchase order as recorded in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  issueDate?: string;

  /**
   * Array of line items.
   */
  @SpeakeasyMetadata({
    elemType: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CreatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Any additional information associated with the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * Date the supplier is due to be paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paymentDueDate" })
  paymentDueDate?: string;

  /**
   * Friendly reference for the purchase order, commonly generated by the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  /**
   * Delivery details for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "shipTo" })
  @Type(() => CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo)
  shipTo?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current state of the purchase order
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum;

  /**
   * Total amount of the purchase order, including discounts but excluding tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Supplier that the purchase order is recorded against in the accounting system.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(
    () => CreatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef
  )
  supplierRef?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef;

  /**
   * Total amount of the purchase order, including discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Total value of any discounts applied to the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  /**
   *
   *
   * @remarks
   * Total amount of tax included in the purchase order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}

/**
 * The status of the push operation.
 */
export enum CreatePurchaseOrder200ApplicationJSONStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class CreatePurchaseOrder200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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
export class CreatePurchaseOrder200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: CreatePurchaseOrder200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => CreatePurchaseOrder200ApplicationJSONValidationValidationItem)
  errors?: CreatePurchaseOrder200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: CreatePurchaseOrder200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => CreatePurchaseOrder200ApplicationJSONValidationValidationItem)
  warnings?: CreatePurchaseOrder200ApplicationJSONValidationValidationItem[];
}

/**
 * Success
 */
export class CreatePurchaseOrder200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreatePurchaseOrder200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => CreatePurchaseOrder200ApplicationJSONChanges)
  changes?: CreatePurchaseOrder200ApplicationJSONChanges[];

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
   * > View the coverage for purchase orders in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders" target="_blank">Data coverage explorer</a>.
   *
   * @remarks
   *
   * ## Overview
   *
   * Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.
   *
   * This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreatePurchaseOrder200ApplicationJSONSourceModifiedDate)
  data?: CreatePurchaseOrder200ApplicationJSONSourceModifiedDate;

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
  status: CreatePurchaseOrder200ApplicationJSONStatusEnum;

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
  @Type(() => CreatePurchaseOrder200ApplicationJSONValidation)
  validation?: CreatePurchaseOrder200ApplicationJSONValidation;
}

export class CreatePurchaseOrderResponse extends SpeakeasyBase {
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
  createPurchaseOrder200ApplicationJSONObject?: CreatePurchaseOrder200ApplicationJSON;
}
