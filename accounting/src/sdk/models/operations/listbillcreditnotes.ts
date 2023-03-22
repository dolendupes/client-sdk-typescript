/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListBillCreditNotesRequest extends SpeakeasyBase {
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

export class ListBillCreditNotesLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBillCreditNotesLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBillCreditNotesLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListBillCreditNotesLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListBillCreditNotesLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListBillCreditNotesLinksLinksCurrent)
  current: ListBillCreditNotesLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListBillCreditNotesLinksLinksNext)
  next?: ListBillCreditNotesLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListBillCreditNotesLinksLinksPrevious)
  previous?: ListBillCreditNotesLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListBillCreditNotesLinksLinksSelf)
  self: ListBillCreditNotesLinksLinksSelf;
}

/**
 * Reference to the account to which the line item is linked.
 */
export class ListBillCreditNotesLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
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
 * Reference to the item the line is linked to.
 */
export class ListBillCreditNotesLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
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
export class ListBillCreditNotesLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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
export class ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCustomerRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

export enum ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}

export enum ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum {
  Unknown = "Unknown",
  NotApplicable = "NotApplicable",
  Customer = "Customer",
  Project = "Project",
}

export class ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingProjectRef extends SpeakeasyBase {
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
export class ListBillCreditNotesLinksSourceModifiedDateLineItemsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "categoryRefs" })
  @Type(
    () =>
      ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  categoryRefs: ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(
    () => ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCustomerRef
  )
  customerRef?: ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingIsBilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingIsRebilledToEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(
    () => ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingProjectRef
  )
  projectRef?: ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingProjectRef;
}

export class ListBillCreditNotesLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateLineItemsAccountRef)
  accountRef?: ListBillCreditNotesLinksSourceModifiedDateLineItemsAccountRef;

  /**
   * Friendly name of each line item. For example, the goods or service for which credit has been received.
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
   * Percentage rate of any discount applied to the line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  /**
   * Reference to the item the line is linked to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateLineItemsItemRef)
  itemRef?: ListBillCreditNotesLinksSourceModifiedDateLineItemsItemRef;

  /**
   * Number of units of the goods or service for which credit has been received.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  /**
   * Amount of credit associated with the line item, including discounts but excluding tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Amount of tax associated with the line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  /**
   * Reference to the tax rate to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: ListBillCreditNotesLinksSourceModifiedDateLineItemsTaxRateRef;

  /**
   * Total amount of the line item, including discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Categories, and a project and customer, against which the item is tracked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateLineItemsTracking)
  tracking?: ListBillCreditNotesLinksSourceModifiedDateLineItemsTracking;

  /**
   * Reference to the tracking categories to which the line item is linked.
   */
  @SpeakeasyMetadata({
    elemType:
      ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () =>
      ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: ListBillCreditNotesLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Unit price of the goods or service.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class ListBillCreditNotesLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  /**
   * The date the payment was allocated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

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
export class ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
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

export class ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  /**
   * The account that the allocated payment is made from or to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  paidOnDate?: Date;

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

export class ListBillCreditNotesLinksSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(
    () => ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsAllocation
  )
  allocation: ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(
    () => ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsPayment
  )
  payment: ListBillCreditNotesLinksSourceModifiedDatePaymentAllocationsPayment;
}

/**
 * Current state of the bill credit note
 */
export enum ListBillCreditNotesLinksSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Draft = "Draft",
  Submitted = "Submitted",
  Paid = "Paid",
  Void = "Void",
  PartiallyPaid = "PartiallyPaid",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class ListBillCreditNotesLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * Supplier that issued the bill credit note.
 */
export class ListBillCreditNotesLinksSourceModifiedDateSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}

export class ListBillCreditNotesLinksSourceModifiedDateWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

/**
 * > **Bill credit notes or credit notes?**
 *
 * @remarks
 * >
 * > In Codat, bill credit notes represent accounts payable only. For accounts receivable, see [Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote).
 *
 * View the coverage for bill credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A bill credit note is issued by a supplier for the purpose of recording credit. For example, if a supplier was unable to fulfil an order that was placed by a business, or delivered damaged goods, they would issue a bill credit note. A bill credit note reduces the amount a business owes to the supplier. It can be refunded to the business or used to pay off future bills.
 *
 * In the Codat API, a bill credit note is an accounts payable record issued by a [supplier](https://docs.codat.io/accounting-api#/schemas/Supplier).
 *
 * A bill credit note includes details of:
 * * The original and remaining credit.
 * * Any allocations of the credit against other records, such as [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
 * * The supplier that issued the bill credit note.
 */
export class ListBillCreditNotesLinksSourceModifiedDate extends SpeakeasyBase {
  /**
   * Date the bill credit note was fully refunded or allocated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  /**
   * Friendly reference for the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "billCreditNoteNumber" })
  billCreditNoteNumber?: string;

  /**
   * Currency of the bill credit note.
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
   * Percentage rate of any discount applied to the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage: number;

  /**
   * Identifier for the bill credit note that is unique to a company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Date the bill credit note was issued by the supplier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate?: Date;

  /**
   * An array of line
   */
  @SpeakeasyMetadata({
    elemType: ListBillCreditNotesLinksSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateLineItems)
  lineItems?: ListBillCreditNotesLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateMetadata)
  metadata?: ListBillCreditNotesLinksSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * Any additional information about the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * An array of payment allocations.
   */
  @SpeakeasyMetadata({
    elemType: ListBillCreditNotesLinksSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDatePaymentAllocations)
  paymentAllocations?: ListBillCreditNotesLinksSourceModifiedDatePaymentAllocations[];

  /**
   * Amount of the bill credit note that is still outstanding.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "remainingCredit" })
  remainingCredit: number;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Current state of the bill credit note
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ListBillCreditNotesLinksSourceModifiedDateStatusEnum;

  /**
   * Total amount of the bill credit note, including discounts but excluding tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateSupplementalData)
  supplementalData?: ListBillCreditNotesLinksSourceModifiedDateSupplementalData;

  /**
   * Supplier that issued the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateSupplierRef)
  supplierRef?: ListBillCreditNotesLinksSourceModifiedDateSupplierRef;

  /**
   * Total amount of credit that has been applied to the business' account with the supplier, including discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  /**
   * Total value of any discounts applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount: number;

  /**
   * Amount of tax included in the bill credit note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({
    elemType: ListBillCreditNotesLinksSourceModifiedDateWithholdingTax,
  })
  @Expose({ name: "withholdingTax" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDateWithholdingTax)
  withholdingTax?: ListBillCreditNotesLinksSourceModifiedDateWithholdingTax[];
}

/**
 * Codat's Paging Model
 */
export class ListBillCreditNotesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListBillCreditNotesLinksLinks)
  links: ListBillCreditNotesLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListBillCreditNotesLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListBillCreditNotesLinksSourceModifiedDate)
  results?: ListBillCreditNotesLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListBillCreditNotesResponse extends SpeakeasyBase {
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
  links?: ListBillCreditNotesLinks;
}
