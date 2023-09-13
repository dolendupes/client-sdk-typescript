/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Addressesitems } from "./addressesitems";
import { Contact } from "./contact";
import { CustomerStatus } from "./customerstatus";
import { Metadata } from "./metadata";
import { SupplementalData } from "./supplementaldata";
import { Expose, Type } from "class-transformer";

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
export class AccountingCustomer extends SpeakeasyBase {
    /**
     * An array of Addresses.
     */
    @SpeakeasyMetadata({ elemType: Addressesitems })
    @Expose({ name: "addresses" })
    @Type(() => Addressesitems)
    addresses?: Addressesitems[];

    /**
     * Name of the main contact for the identified customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contactName" })
    contactName?: string;

    /**
     * An array of Contacts.
     */
    @SpeakeasyMetadata({ elemType: Contact })
    @Expose({ name: "contacts" })
    @Type(() => Contact)
    contacts?: Contact[];

    /**
     * Name of the customer as recorded in the accounting system, typically the company name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerName" })
    customerName?: string;

    /**
     * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
     *
     * @remarks
     *
     * ## Unknown currencies
     *
     * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
     *
     * There are only a very small number of edge cases where this currency code is returned by the Codat system.
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
    @Type(() => Metadata)
    metadata?: Metadata;

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

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Status of customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: CustomerStatus;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => SupplementalData)
    supplementalData?: SupplementalData;

    /**
     * Company tax number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxNumber" })
    taxNumber?: string;
}
