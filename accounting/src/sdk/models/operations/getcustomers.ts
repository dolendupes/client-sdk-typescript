/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetCustomersRequest extends SpeakeasyBase {
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

export class GetCustomers200ApplicationJSONLinksHypertextReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;
}

export class GetCustomers200ApplicationJSONLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => GetCustomers200ApplicationJSONLinksHypertextReference)
  current: GetCustomers200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => GetCustomers200ApplicationJSONLinksHypertextReference)
  next?: GetCustomers200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => GetCustomers200ApplicationJSONLinksHypertextReference)
  previous?: GetCustomers200ApplicationJSONLinksHypertextReference;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => GetCustomers200ApplicationJSONLinksHypertextReference)
  self: GetCustomers200ApplicationJSONLinksHypertextReference;
}

/**
 * Type of the address.
 */
export enum GetCustomers200ApplicationJSONSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class GetCustomers200ApplicationJSONSourceModifiedDateAddresses extends SpeakeasyBase {
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
  type: GetCustomers200ApplicationJSONSourceModifiedDateAddressesTypeEnum;
}

/**
 * Type of the address.
 */
export enum GetCustomers200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

/**
 * An object of Address information.
 */
export class GetCustomers200ApplicationJSONSourceModifiedDateContactsAddress extends SpeakeasyBase {
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
  type: GetCustomers200ApplicationJSONSourceModifiedDateContactsAddressTypeEnum;
}

/**
 * Type of phone number.
 */
export enum GetCustomers200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum {
  Unknown = "Unknown",
  Primary = "Primary",
  Landline = "Landline",
  Mobile = "Mobile",
  Fax = "Fax",
}

export class GetCustomers200ApplicationJSONSourceModifiedDateContactsPhone extends SpeakeasyBase {
  /**
   * Phone number for a customer contact.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  /**
   * Type of phone number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCustomers200ApplicationJSONSourceModifiedDateContactsPhoneTypeEnum;
}

/**
 * Status of customer contacts.
 *
 * @remarks
 *
 * Customers can have multiple contacts.
 */
export enum GetCustomers200ApplicationJSONSourceModifiedDateContactsStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

export class GetCustomers200ApplicationJSONSourceModifiedDateContacts extends SpeakeasyBase {
  /**
   * An object of Address information.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => GetCustomers200ApplicationJSONSourceModifiedDateContactsAddress)
  address?: GetCustomers200ApplicationJSONSourceModifiedDateContactsAddress;

  /**
   * Email of a contact for a customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
   *
   * @remarks
   *
   * ```
   * 2020-10-08T22:40:50Z
   * 2021-01-01T00:00:00
   * ```
   *
   *
   *
   * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
   *
   * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
   * - Unqualified local time: `2021-11-15T01:00:00`
   * - UTC time offsets: `2021-11-15T01:00:00-05:00`
   *
   * > 📘 Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Name of a contact for a customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * An array of Phone numbers.
   */
  @SpeakeasyMetadata({
    elemType: GetCustomers200ApplicationJSONSourceModifiedDateContactsPhone,
  })
  @Expose({ name: "phone" })
  @Type(() => GetCustomers200ApplicationJSONSourceModifiedDateContactsPhone)
  phone?: GetCustomers200ApplicationJSONSourceModifiedDateContactsPhone[];

  /**
   * Status of customer contacts.
   *
   * @remarks
   *
   * Customers can have multiple contacts.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCustomers200ApplicationJSONSourceModifiedDateContactsStatusEnum;
}

export class GetCustomers200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  /**
   * Indicates whether the record has been deleted in the third-party system this record originated from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

/**
 * Current state of the customer.
 */
export enum GetCustomers200ApplicationJSONSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class GetCustomers200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * > View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).
 *
 * Customers' data links to accounts receivable [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice).
 *
 */
export class GetCustomers200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  /**
   * An array of Addresses.
   */
  @SpeakeasyMetadata({
    elemType: GetCustomers200ApplicationJSONSourceModifiedDateAddresses,
  })
  @Expose({ name: "addresses" })
  @Type(() => GetCustomers200ApplicationJSONSourceModifiedDateAddresses)
  addresses?: GetCustomers200ApplicationJSONSourceModifiedDateAddresses[];

  /**
   * Name of the main contact for the identified customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  /**
   * An array of Contacts.
   */
  @SpeakeasyMetadata({
    elemType: GetCustomers200ApplicationJSONSourceModifiedDateContacts,
  })
  @Expose({ name: "contacts" })
  @Type(() => GetCustomers200ApplicationJSONSourceModifiedDateContacts)
  contacts?: GetCustomers200ApplicationJSONSourceModifiedDateContacts[];

  /**
   * Name of the customer as recorded in the accounting system, typically the company name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

  /**
   * Default currency the transactional data of the customer is recorded in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  /**
   * Email address the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  /**
   * Identifier for the customer, unique to the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetCustomers200ApplicationJSONSourceModifiedDateMetadata)
  metadata?: GetCustomers200ApplicationJSONSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  /**
   * Phone number the customer can be contacted by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  /**
   * Company number. In the UK, this is typically the Companies House company registration number.
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
   * Current state of the customer.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetCustomers200ApplicationJSONSourceModifiedDateStatusEnum;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetCustomers200ApplicationJSONSourceModifiedDateSupplementalData)
  supplementalData?: GetCustomers200ApplicationJSONSourceModifiedDateSupplementalData;

  /**
   * Company tax number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

/**
 * Success
 */
export class GetCustomers200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => GetCustomers200ApplicationJSONLinks)
  links: GetCustomers200ApplicationJSONLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({
    elemType: GetCustomers200ApplicationJSONSourceModifiedDate,
  })
  @Expose({ name: "results" })
  @Type(() => GetCustomers200ApplicationJSONSourceModifiedDate)
  results?: GetCustomers200ApplicationJSONSourceModifiedDate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}

export class GetCustomersResponse extends SpeakeasyBase {
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
  getCustomers200ApplicationJSONObject?: GetCustomers200ApplicationJSON;
}
