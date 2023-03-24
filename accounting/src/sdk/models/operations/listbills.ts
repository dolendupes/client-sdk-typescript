/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListBillsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  /**
   * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=orderBy",
  })
  orderBy?: string;

  /**
   * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  /**
   * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  /**
   * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class ListBillsLinksLinksHypertextReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBillsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBillsLinksLinksHypertextReference)
  current: ListBillsLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBillsLinksLinksHypertextReference)
  next?: ListBillsLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBillsLinksLinksHypertextReference)
  previous?: ListBillsLinksLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBillsLinksLinksHypertextReference)
  self: ListBillsLinksLinksHypertextReference;
}

/**
 * Reference to the account to which the line item is linked.
 */
export class ListBillsLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
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
 * Reference to the product, service type, or inventory item to which the line item is linked.
 */
export class ListBillsLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
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
export class ListBillsLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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
export class ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

export enum ListBillsLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}

export enum ListBillsLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}

export class ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Categories, and a project and customer, against which the item is tracked.
 */
export class ListBillsLinksSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs)
  categoryRefs: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef)
  customerRef?: ListBillsLinksSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: ListBillsLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: ListBillsLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef)
  projectRef?: ListBillsLinksSourceModifiedDateLineItemsTrackingProjectRef;
}

export class ListBillsLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsAccountRef)
  accountRef?: ListBillsLinksSourceModifiedDateLineItemsAccountRef;

  /**
   * Friendly name of the goods or services received.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Numerical value of any discounts applied.
   *
   * @remarks
   *
   * Do not use to apply discounts in Oracle NetSuite—see Oracle NetSuite integration reference.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "isDirectCost" })
  isDirectCost?: boolean;

  /**
   * Reference to the product, service type, or inventory item to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsItemRef)
  itemRef?: ListBillsLinksSourceModifiedDateLineItemsItemRef;

  /**
   * Number of units of goods or services received.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

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
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: ListBillsLinksSourceModifiedDateLineItemsTaxRateRef;

  /**
   * Total amount of the line, including tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Categories, and a project and customer, against which the item is tracked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTracking)
  tracking?: ListBillsLinksSourceModifiedDateLineItemsTracking;

  /**
   * Collection of categories against which this item is tracked.
   */
  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: ListBillsLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Price of each unit of goods or services.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class ListBillsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  /**
   * The date the payment was allocated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  allocatedOnDate?: string;

  /**
   * The currency of the transaction.
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
   * The total amount that has been allocated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

/**
 * The account that the allocated payment is made from or to.
 */
export class ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
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

export class ListBillsLinksSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  /**
   * The account that the allocated payment is made from or to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: ListBillsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  /**
   * Currency the payment has been made in.
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
   * Identifier of the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Notes attached to the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * The date the payment was paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paidOnDate" })
  paidOnDate?: string;

  /**
   * Reference to the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * Total amount that was paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class ListBillsLinksSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation)
  allocation: ListBillsLinksSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => ListBillsLinksSourceModifiedDatePaymentAllocationsPayment)
  payment: ListBillsLinksSourceModifiedDatePaymentAllocationsPayment;
}

export class ListBillsLinksSourceModifiedDatePurchaseOrderRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "purchaseOrderNumber" })
  purchaseOrderNumber?: string;
}

/**
 * Current state of the bill.
 */
export enum ListBillsLinksSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Open = "Open",
  PartiallyPaid = "PartiallyPaid",
  Paid = "Paid",
  Void = "Void",
  Draft = "Draft",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class ListBillsLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * Reference to the supplier the bill was received from.
 */
export class ListBillsLinksSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class ListBillsLinksSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

/**
 * > **Invoices or bills?**
 *
 * @remarks
 * >
 * > In Codat, bills are for accounts payable only. For the accounts receivable equivalent of bills, see [Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 *
 * View the coverage for bills in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * In Codat, a bill contains details of:
 * * When the bill was recorded in the accounting system.
 * * How much the bill is for and the currency of the amount.
 * * Who the bill was received from — the *supplier*.
 * * What the bill is for — the *line items*.
 *
 * Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's *expenses*.
 *
 * You can find these types of transactions in our [Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) data model.
 */
export class ListBillsLinksSourceModifiedDate extends SpeakeasyBase {
  /**
   * Amount outstanding on the bill.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amountDue" })
  amountDue?: number;

  /**
   * Currency of the bill.
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
   * Date the supplier is due to be paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  dueDate?: string;

  /**
   * Identifier for the bill, unique for the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Date of the bill as recorded in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  issueDate: string;

  /**
   * Array of BillLineItems.
   */
  @SpeakeasyMetadata({ elemType: ListBillsLinksSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => ListBillsLinksSourceModifiedDateLineItems)
  lineItems?: ListBillsLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListBillsLinksSourceModifiedDateMetadata)
  metadata?: ListBillsLinksSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Any private, company notes about the bill, such as payment information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * An array of payment allocations.
   */
  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => ListBillsLinksSourceModifiedDatePaymentAllocations)
  paymentAllocations?: ListBillsLinksSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDatePurchaseOrderRefs,
  })
  @Expose({ name: "purchaseOrderRefs" })
  @Type(() => ListBillsLinksSourceModifiedDatePurchaseOrderRefs)
  purchaseOrderRefs?: ListBillsLinksSourceModifiedDatePurchaseOrderRefs[];

  /**
   * User-friendly reference for the bill.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * Current state of the bill.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListBillsLinksSourceModifiedDateStatusEnum;

  /**
   * Total amount of the bill, excluding any taxes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => ListBillsLinksSourceModifiedDateSupplementalData)
  supplementalData?: ListBillsLinksSourceModifiedDateSupplementalData;

  /**
   * Reference to the supplier the bill was received from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => ListBillsLinksSourceModifiedDateSupplierRef)
  supplierRef?: ListBillsLinksSourceModifiedDateSupplierRef;

  /**
   * Amount of tax on the bill.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  /**
   * Amount of the bill, including tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({
    elemType: ListBillsLinksSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => ListBillsLinksSourceModifiedDateWithholdingTax)
  withholdingTax?: ListBillsLinksSourceModifiedDateWithholdingTax[];
}

/**
 * Codat's Paging Model
 */
export class ListBillsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBillsLinksLinks)
  links: ListBillsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListBillsLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListBillsLinksSourceModifiedDate)
  results?: ListBillsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBillsResponse extends SpeakeasyBase {
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
  links?: ListBillsLinks;
}
