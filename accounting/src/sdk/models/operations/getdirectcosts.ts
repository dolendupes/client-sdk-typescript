/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetDirectCostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

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

export class GetDirectCostsLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetDirectCostsLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDirectCostsLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetDirectCostsLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class GetDirectCostsLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetDirectCostsLinksLinksCurrent)
  current: GetDirectCostsLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetDirectCostsLinksLinksNext)
  next?: GetDirectCostsLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetDirectCostsLinksLinksPrevious)
  previous?: GetDirectCostsLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetDirectCostsLinksLinksSelf)
  self: GetDirectCostsLinksLinksSelf;
}

/**
 * A customer or supplier associated with the direct cost.
 */
export class GetDirectCostsLinksSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

/**
 * Reference to the account to which the line item is linked.
 */
export class GetDirectCostsLinksSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
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
 * Reference to the product, service type, or inventory item to which the direct cost is linked.
 */
export class GetDirectCostsLinksSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the tax rate to which the the line item is linked.
 */
export class GetDirectCostsLinksSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
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
 * Links to the underlying record or data type.
 *
 * @remarks
 *
 * Found on:
 *
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
 */
export class GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo extends SpeakeasyBase {
  /**
   * Name of the 'dataType'.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  /**
   * 'id' of the underlying record or data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

/**
 * Links to the underlying record or data type.
 *
 * @remarks
 *
 * Found on:
 *
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
 */
export class GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs extends SpeakeasyBase {
  /**
   * Name of the 'dataType'.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  /**
   * 'id' of the underlying record or data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTracking extends SpeakeasyBase {
  /**
   * Links to the underlying record or data type.
   *
   * @remarks
   *
   * Found on:
   *
   * - Journal entries
   * - Account transactions
   * - Invoices
   * - Transfers
   */
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceTo" })
  @Type(
    () =>
      GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo
  )
  invoiceTo?: GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTrackingInvoiceTo;

  @SpeakeasyMetadata({
    elemType:
      GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs,
  })
  @Expose({ name: "recordRefs" })
  @Type(
    () =>
      GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs
  )
  recordRefs: GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTrackingRecordRefs[];
}

/**
 * References a category against which the item is tracked.
 */
export class GetDirectCostsLinksSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetDirectCostsLinksSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateLineItemsAccountRef)
  accountRef?: GetDirectCostsLinksSourceModifiedDateLineItemsAccountRef;

  /**
   * Friendly name of the goods or services.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Discount amount for the line before tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  /**
   * Discount percentage for the line before tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  /**
   * Reference to the product, service type, or inventory item to which the direct cost is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateLineItemsItemRef)
  itemRef?: GetDirectCostsLinksSourceModifiedDateLineItemsItemRef;

  /**
   * Number of units of goods or services received.
   *
   * @remarks
   *
   * Note: If the platform does not provide this information, the quantity will be mapped as 1.
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
   * Reference to the tax rate to which the the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: GetDirectCostsLinksSourceModifiedDateLineItemsTaxRateRef;

  /**
   * Total amount of the line, including tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTracking)
  tracking?: GetDirectCostsLinksSourceModifiedDateLineItemsInvoiceableTracking;

  /**
   * Collection of categories against which this direct cost is tracked.
   */
  @SpeakeasyMetadata({
    elemType:
      GetDirectCostsLinksSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(
    () => GetDirectCostsLinksSourceModifiedDateLineItemsTrackingCategoryRefs
  )
  trackingCategoryRefs?: GetDirectCostsLinksSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * Price of each unit of goods or services.
   *
   * @remarks
   * Note: If the platform does not provide this information, the unit amount will be mapped to the total amount.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class GetDirectCostsLinksSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class GetDirectCostsLinksSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
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
export class GetDirectCostsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
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

export class GetDirectCostsLinksSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  /**
   * The account that the allocated payment is made from or to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () =>
      GetDirectCostsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: GetDirectCostsLinksSourceModifiedDatePaymentAllocationsPaymentAccountRef;

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

export class GetDirectCostsLinksSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => GetDirectCostsLinksSourceModifiedDatePaymentAllocationsAllocation)
  allocation: GetDirectCostsLinksSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => GetDirectCostsLinksSourceModifiedDatePaymentAllocationsPayment)
  payment: GetDirectCostsLinksSourceModifiedDatePaymentAllocationsPayment;
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class GetDirectCostsLinksSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * > **Language tip: ** Direct costs may also be referred to as **Spend transactions**, **Spend money transactions**, or **Payments** in various accounting platforms.
 *
 * @remarks
 *
 * > View the coverage for direct costs in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Direct costs include:
 *   * Purchasing an item and paying it off at the point of the purchase
 *   * Receiving cash from a refunded item if the refund is made by the supplier
 *   * Withdrawing money from a bank account
 *   * Writing a cheque
 *
 * From the Direct Costs endpoints, you can:
 *
 *   * [Get a list of all direct costs for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts)
 *   * [Get a single direct cost for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts__directCostId_)
 *   * [Add a new direct cost to a specific company's accounting package](https://api.codat.io/swagger/index.html#/DirectCosts/post_companies__companyId__connections__connectionId__push_directCosts)
 *
 * Direct costs is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 */
export class GetDirectCostsLinksSourceModifiedDate extends SpeakeasyBase {
  /**
   * A customer or supplier associated with the direct cost.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateContactRef)
  contactRef?: GetDirectCostsLinksSourceModifiedDateContactRef;

  /**
   * Currency of the direct cost.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

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
   * Identifier of the direct cost, unique for the company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Date of the direct cost as recorded in the accounting platform.Date of the direct cost as recorded in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate: Date;

  /**
   * An array of line items.
   */
  @SpeakeasyMetadata({
    elemType: GetDirectCostsLinksSourceModifiedDateLineItems,
  })
  @Expose({ name: "lineItems" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateLineItems)
  lineItems: GetDirectCostsLinksSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateMetadata)
  metadata?: GetDirectCostsLinksSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * A note attached to the direct cost.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * An array of payment allocations.
   */
  @SpeakeasyMetadata({
    elemType: GetDirectCostsLinksSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => GetDirectCostsLinksSourceModifiedDatePaymentAllocations)
  paymentAllocations: GetDirectCostsLinksSourceModifiedDatePaymentAllocations[];

  /**
   * User-friendly reference for the direct cost.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * The total amount of the direct costs, excluding any taxes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetDirectCostsLinksSourceModifiedDateSupplementalData)
  supplementalData?: GetDirectCostsLinksSourceModifiedDateSupplementalData;

  /**
   * The total amount of tax on the direct costs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  /**
   * The amount of the direct costs, inclusive of tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;
}

/**
 * Codat's Paging Model
 */
export class GetDirectCostsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetDirectCostsLinksLinks)
  links: GetDirectCostsLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: GetDirectCostsLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => GetDirectCostsLinksSourceModifiedDate)
  results?: GetDirectCostsLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetDirectCostsResponse extends SpeakeasyBase {
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
  links?: GetDirectCostsLinks;
}
