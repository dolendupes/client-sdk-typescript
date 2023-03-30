/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Reference to the account to which the line item is linked.
 */
export class UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
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
export class UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  /**
   * Unique identifier for the item in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Name of the item in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the tax rate to which the line item is linked.
 */
export class UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  /**
   * Applicable tax rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  /**
   * Unique identifier for the tax rate in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Name of the tax rate in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * References a category against which the item is tracked.
 */
export class UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdatePurchaseOrderSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef)
  accountRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsAccountRef;

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
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef)
  itemRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsItemRef;

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
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: UpdatePurchaseOrderSourceModifiedDateLineItemsTaxRateRef;

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
      UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () => UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: UpdatePurchaseOrderSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Price of each unit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class UpdatePurchaseOrderSourceModifiedDateMetadata extends SpeakeasyBase {
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
export enum UpdatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

/**
 * Delivery address for any goods that have been ordered.
 */
export class UpdatePurchaseOrderSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: UpdatePurchaseOrderSourceModifiedDateShipToAddressTypeEnum;
}

/**
 * Details of the named contact at the delivery address.
 */
export class UpdatePurchaseOrderSourceModifiedDateShipToContact extends SpeakeasyBase {
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
export class UpdatePurchaseOrderSourceModifiedDateShipTo extends SpeakeasyBase {
  /**
   * Delivery address for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateShipToAddress)
  address?: UpdatePurchaseOrderSourceModifiedDateShipToAddress;

  /**
   * Details of the named contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateShipToContact)
  contact?: UpdatePurchaseOrderSourceModifiedDateShipToContact;
}

/**
 * Current state of the purchase order
 */
export enum UpdatePurchaseOrderSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Open = "Open",
  Closed = "Closed",
  Void = "Void",
}

/**
 * Supplier that the purchase order is recorded against in the accounting system.
 */
export class UpdatePurchaseOrderSourceModifiedDateSupplierRef extends SpeakeasyBase {
  /**
   * The supplier's unique ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The supplier's name
   */
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
export class UpdatePurchaseOrderSourceModifiedDate extends SpeakeasyBase {
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
    elemType: UpdatePurchaseOrderSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateLineItems)
  lineItems?: UpdatePurchaseOrderSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdatePurchaseOrderSourceModifiedDateMetadata)
  metadata?: UpdatePurchaseOrderSourceModifiedDateMetadata;

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
  @Type(() => UpdatePurchaseOrderSourceModifiedDateShipTo)
  shipTo?: UpdatePurchaseOrderSourceModifiedDateShipTo;

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
  status?: UpdatePurchaseOrderSourceModifiedDateStatusEnum;

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
  @Type(() => UpdatePurchaseOrderSourceModifiedDateSupplierRef)
  supplierRef?: UpdatePurchaseOrderSourceModifiedDateSupplierRef;

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

export class UpdatePurchaseOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: UpdatePurchaseOrderSourceModifiedDate;

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

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=purchaseOrderId",
  })
  purchaseOrderId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeoutInMinutes",
  })
  timeoutInMinutes?: number;
}

/**
 * Available Data types
 */
export enum UpdatePurchaseOrder200ApplicationJSONChangesPushOperationReferenceDataTypeEnum {
  AccountTransactions = "accountTransactions",
  BalanceSheet = "balanceSheet",
  BankAccounts = "bankAccounts",
  BankTransactions = "bankTransactions",
  BillCreditNotes = "billCreditNotes",
  BillPayments = "billPayments",
  Bills = "bills",
  CashFlowStatement = "cashFlowStatement",
  ChartOfAccounts = "chartOfAccounts",
  Company = "company",
  CreditNotes = "creditNotes",
  Customers = "customers",
  DirectCosts = "directCosts",
  DirectIncomes = "directIncomes",
  Invoices = "invoices",
  Items = "items",
  JournalEntries = "journalEntries",
  Journals = "journals",
  PaymentMethods = "paymentMethods",
  Payments = "payments",
  ProfitAndLoss = "profitAndLoss",
  PurchaseOrders = "purchaseOrders",
  SalesOrders = "salesOrders",
  Suppliers = "suppliers",
  TaxRates = "taxRates",
  TrackingCategories = "trackingCategories",
  Transfers = "transfers",
  BankingAccountBalances = "banking-accountBalances",
  BankingAccounts = "banking-accounts",
  BankingTransactionCategories = "banking-transactionCategories",
  BankingTransactions = "banking-transactions",
  CommerceCompanyInfo = "commerce-companyInfo",
  CommerceCustomers = "commerce-customers",
  CommerceDisputes = "commerce-disputes",
  CommerceLocations = "commerce-locations",
  CommerceOrders = "commerce-orders",
  CommercePaymentMethods = "commerce-paymentMethods",
  CommercePayments = "commerce-payments",
  CommerceProductCategories = "commerce-productCategories",
  CommerceProducts = "commerce-products",
  CommerceTaxComponents = "commerce-taxComponents",
  CommerceTransactions = "commerce-transactions",
}

export class UpdatePurchaseOrder200ApplicationJSONChangesPushOperationReference extends SpeakeasyBase {
  /**
   * Available Data types
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: UpdatePurchaseOrder200ApplicationJSONChangesPushOperationReferenceDataTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export enum UpdatePurchaseOrder200ApplicationJSONChangesPushChangeTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class UpdatePurchaseOrder200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () => UpdatePurchaseOrder200ApplicationJSONChangesPushOperationReference
  )
  recordRef?: UpdatePurchaseOrder200ApplicationJSONChangesPushOperationReference;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: UpdatePurchaseOrder200ApplicationJSONChangesPushChangeTypeEnum;
}

/**
 * Reference to the account to which the line item is linked.
 */
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
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
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  /**
   * Unique identifier for the item in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Name of the item in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the tax rate to which the line item is linked.
 */
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  /**
   * Applicable tax rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  /**
   * Unique identifier for the tax rate in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Name of the tax rate in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * References a category against which the item is tracked.
 */
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef
  )
  accountRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

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
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef
  )
  itemRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsItemRef;

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
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
  )
  taxRateRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

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
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () =>
      UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Price of each unit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount?: number;
}

export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
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
export enum UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

/**
 * Delivery address for any goods that have been ordered.
 */
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress extends SpeakeasyBase {
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
  type: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddressTypeEnum;
}

/**
 * Details of the named contact at the delivery address.
 */
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact extends SpeakeasyBase {
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
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo extends SpeakeasyBase {
  /**
   * Delivery address for any goods that have been ordered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(
    () => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress
  )
  address?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToAddress;

  /**
   * Details of the named contact at the delivery address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(
    () => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact
  )
  contact?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipToContact;
}

/**
 * Current state of the purchase order
 */
export enum UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Open = "Open",
  Closed = "Closed",
  Void = "Void",
}

/**
 * Supplier that the purchase order is recorded against in the accounting system.
 */
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef extends SpeakeasyBase {
  /**
   * The supplier's unique ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The supplier's name
   */
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
export class UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
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
    elemType: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems)
  lineItems?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateMetadata;

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
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo)
  shipTo?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateShipTo;

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
  status?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateStatusEnum;

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
    () => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef
  )
  supplierRef?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDateSupplierRef;

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
 * The type of data being pushed, eg invoices, customers.
 */
export enum UpdatePurchaseOrder200ApplicationJSONDataTypeEnum {
  AccountTransactions = "accountTransactions",
  BalanceSheet = "balanceSheet",
  BankAccounts = "bankAccounts",
  BankTransactions = "bankTransactions",
  BillCreditNotes = "billCreditNotes",
  BillPayments = "billPayments",
  Bills = "bills",
  CashFlowStatement = "cashFlowStatement",
  ChartOfAccounts = "chartOfAccounts",
  Company = "company",
  CreditNotes = "creditNotes",
  Customers = "customers",
  DirectCosts = "directCosts",
  DirectIncomes = "directIncomes",
  Invoices = "invoices",
  Items = "items",
  JournalEntries = "journalEntries",
  Journals = "journals",
  PaymentMethods = "paymentMethods",
  Payments = "payments",
  ProfitAndLoss = "profitAndLoss",
  PurchaseOrders = "purchaseOrders",
  SalesOrders = "salesOrders",
  Suppliers = "suppliers",
  TaxRates = "taxRates",
  TrackingCategories = "trackingCategories",
  Transfers = "transfers",
  BankingAccountBalances = "banking-accountBalances",
  BankingAccounts = "banking-accounts",
  BankingTransactionCategories = "banking-transactionCategories",
  BankingTransactions = "banking-transactions",
  CommerceCompanyInfo = "commerce-companyInfo",
  CommerceCustomers = "commerce-customers",
  CommerceDisputes = "commerce-disputes",
  CommerceLocations = "commerce-locations",
  CommerceOrders = "commerce-orders",
  CommercePaymentMethods = "commerce-paymentMethods",
  CommercePayments = "commerce-payments",
  CommerceProductCategories = "commerce-productCategories",
  CommerceProducts = "commerce-products",
  CommerceTaxComponents = "commerce-taxComponents",
  CommerceTransactions = "commerce-transactions",
}

/**
 * The status of the push operation.
 */
export enum UpdatePurchaseOrder200ApplicationJSONPushOperationStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class UpdatePurchaseOrder200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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
export class UpdatePurchaseOrder200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONValidationValidationItem)
  errors?: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONValidationValidationItem)
  warnings?: UpdatePurchaseOrder200ApplicationJSONValidationValidationItem[];
}

/**
 * Success
 */
export class UpdatePurchaseOrder200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UpdatePurchaseOrder200ApplicationJSONChanges })
  @Expose({ name: "changes" })
  @Type(() => UpdatePurchaseOrder200ApplicationJSONChanges)
  changes?: UpdatePurchaseOrder200ApplicationJSONChanges[];

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
  @Type(() => UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate)
  data?: UpdatePurchaseOrder200ApplicationJSONSourceModifiedDate;

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
  dataType?: UpdatePurchaseOrder200ApplicationJSONDataTypeEnum;

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
  status: UpdatePurchaseOrder200ApplicationJSONPushOperationStatusEnum;

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
  @Type(() => UpdatePurchaseOrder200ApplicationJSONValidation)
  validation?: UpdatePurchaseOrder200ApplicationJSONValidation;
}

export class UpdatePurchaseOrderResponse extends SpeakeasyBase {
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
  updatePurchaseOrder200ApplicationJSONObject?: UpdatePurchaseOrder200ApplicationJSON;
}
