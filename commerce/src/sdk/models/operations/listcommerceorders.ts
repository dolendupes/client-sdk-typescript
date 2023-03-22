/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCommerceOrdersRequest extends SpeakeasyBase {
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

export class ListCommerceOrdersLinksLinksCurrent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceOrdersLinksLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceOrdersLinksLinksPrevious extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class ListCommerceOrdersLinksLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href: string;
}

export class ListCommerceOrdersLinksLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => ListCommerceOrdersLinksLinksCurrent)
  current: ListCommerceOrdersLinksLinksCurrent;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => ListCommerceOrdersLinksLinksNext)
  next?: ListCommerceOrdersLinksLinksNext;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => ListCommerceOrdersLinksLinksPrevious)
  previous?: ListCommerceOrdersLinksLinksPrevious;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => ListCommerceOrdersLinksLinksSelf)
  self: ListCommerceOrdersLinksLinksSelf;
}

export class ListCommerceOrdersLinksSourceModifiedDateNameRef extends SpeakeasyBase {
  /**
   * The unique identitifer of the record being referenced
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Name of the record being referenced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations extends SpeakeasyBase {
  /**
   * Name of the discount in the commerce or point of sale platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Total amount of discount applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef extends SpeakeasyBase {
  /**
   * The unique identitifer of the record being referenced
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * Name of the record being referenced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class ListCommerceOrdersLinksSourceModifiedDateOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations,
  })
  @Expose({ name: "discountAllocations" })
  @Type(
    () =>
      ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations
  )
  discountAllocations?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsDiscountAllocations[];

  /**
   * A unique, persistent identifier for this record
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "productRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef)
  productRef?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef;

  @SpeakeasyMetadata()
  @Expose({ name: "productVariantRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef)
  productVariantRef?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItemsNameRef;

  /**
   * Number of units of the product sold.
   *
   * @remarks
   * For refunds, quantity is a negative value.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  /**
   * Percentage rate (from 0 to 100) of any sale tax applied to the unit amount.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  /**
   * Taxes breakdown as applied to order lines.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxes" })
  taxes?: any[];

  /**
   * Total price of the line item, including discounts, tax and minus any refunds.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Total amount of tax applied to the line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;

  /**
   * Price per unit of goods or service.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitPrice" })
  unitPrice?: number;
}

/**
 * Status of the payment
 */
export enum ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateStatusEnum {
  Pending = "Pending",
  Authorized = "Authorized",
  Paid = "Paid",
  Failed = "Failed",
  Cancelled = "Cancelled",
  Unknown = "Unknown",
}

/**
 * Status of the payment
 */
export enum ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateTypeEnum {
  Cash = "Cash",
  Card = "Card",
  Invoice = "Invoice",
  OnlineCard = "OnlineCard",
  Swish = "Swish",
  Vipps = "Vipps",
  Mobile = "Mobile",
  StoreCredit = "StoreCredit",
  Paypal = "Paypal",
  Custom = "Custom",
  Prepaid = "Prepaid",
  Unknown = "Unknown",
}

export class ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate extends SpeakeasyBase {
  /**
   * Payment Amount (including gratuity).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  /**
   * The date the entity was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  /**
   * Currency in which the payment was made.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * Date by which payment must be made
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  /**
   * A unique, persistent identifier for this record
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  /**
   * Service provider of the payment, if applicable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paymentProvider" })
  paymentProvider?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Status of the payment
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateStatusEnum;

  /**
   * Status of the payment
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDateTypeEnum;
}

/**
 * The type of the service charge.
 */
export enum ListCommerceOrdersLinksSourceModifiedDateServiceChargesTypeEnum {
  Generic = "Generic",
  Shipping = "Shipping",
  Overpayment = "Overpayment",
  Unknown = "Unknown",
}

export class ListCommerceOrdersLinksSourceModifiedDateServiceCharges extends SpeakeasyBase {
  /**
   * Service charges for this order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The number of times the charge is charged.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  /**
   * Amount of the service charge that is tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  /**
   * Percentage rate (from 0 to 100) of any tax applied to the service charge.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  /**
   * Taxes breakdown as applied to service charges.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxes" })
  taxes?: any[];

  /**
   * Total service charge, including taxes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * The type of the service charge.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ListCommerceOrdersLinksSourceModifiedDateServiceChargesTypeEnum;
}

/**
 * Orders contain the transaction details for all products sold by the company, and include details of any payments, service charges, or refunds related to each order.
 *
 * @remarks
 *
 * From the Orders endpoints you can retrieve:
 *
 * A list of all the orders for a commerce company:
 * `GET /companies/{companyId}/connections/{connectionId}/data/commerce-orders`.
 * The details of an individual order:
 * `GET /companies/{companyId}/connections/{connectionId}/data/commerce-orders/{orderId}`.
 * Note that for refunds `quantity` is a negative value and `unitPrice` is a positive value.
 *
 */
export class ListCommerceOrdersLinksSourceModifiedDate extends SpeakeasyBase {
  /**
   * Date on which order was closed after the product was shipped, paid for, and any refund period had elapsed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "closedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  closedDate?: Date;

  /**
   * The Codat country property is returned as it was provided in the underlying platform by the company without any formatting on our part.
   *
   * @remarks
   *
   * Depending on the platform the value of this property will either be an <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank">ISO 3166</a> code (2-alpha or 3-alpha) or free-form text returned as a string name in our model.
   *
   * For POST operations against platforms that demand a specific format for the country code, we have documented accepted values in the [options](https://docs.codat.io/codat-api#/operations/get-companies-companyId-connections-connectionId-push) endpoint.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * The date the entity was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateNameRef)
  customerRef?: ListCommerceOrdersLinksSourceModifiedDateNameRef;

  /**
   * A unique, persistent identifier for this record
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "locationRef" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateNameRef)
  locationRef?: ListCommerceOrdersLinksSourceModifiedDateNameRef;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata({
    elemType: ListCommerceOrdersLinksSourceModifiedDateOrderLineItems,
  })
  @Expose({ name: "orderLineItems" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateOrderLineItems)
  orderLineItems?: ListCommerceOrdersLinksSourceModifiedDateOrderLineItems[];

  /**
   * Friendly reference for the order in the commerce or point of sale platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({
    elemType: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate,
  })
  @Expose({ name: "payments" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate)
  payments?: ListCommerceOrdersLinksSourceModifiedDateSourceModifiedDate[];

  @SpeakeasyMetadata({
    elemType: ListCommerceOrdersLinksSourceModifiedDateServiceCharges,
  })
  @Expose({ name: "serviceCharges" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDateServiceCharges)
  serviceCharges?: ListCommerceOrdersLinksSourceModifiedDateServiceCharges[];

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  /**
   * Total amount of the order, including tax, net of any discounts and refunds.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Total amount of discount applied to the order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount?: number;

  /**
   * Extra amount added to a bill.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalGratuity" })
  totalGratuity?: number;

  /**
   * Total amount refunded issued by a merchant on an order (always a negative value).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalRefund" })
  totalRefund?: number;

  /**
   * Total amount of tax applied to the order.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount?: number;
}

/**
 * Codat's Paging Model
 */
export class ListCommerceOrdersLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => ListCommerceOrdersLinksLinks)
  links: ListCommerceOrdersLinksLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: ListCommerceOrdersLinksSourceModifiedDate })
  @Expose({ name: "results" })
  @Type(() => ListCommerceOrdersLinksSourceModifiedDate)
  results?: ListCommerceOrdersLinksSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class ListCommerceOrdersResponse extends SpeakeasyBase {
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
  links?: ListCommerceOrdersLinks;
}
