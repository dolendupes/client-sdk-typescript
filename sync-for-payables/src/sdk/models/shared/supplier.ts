/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Metadata } from "./metadata";
import { SupplementalData } from "./supplementaldata";
import { SupplierStatus } from "./supplierstatus";
import { Expose, Type } from "class-transformer";

/**
 * > View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * ## Overview
 *
 * From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://docs.codat.io/sync-for-payables-api#/operations/list-suppliers). Suppliers' data links to accounts payable [bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill).
 */
export class Supplier extends SpeakeasyBase {
    /**
     * An array of Addresses.
     */
    @SpeakeasyMetadata({ elemType: Address })
    @Expose({ name: "addresses" })
    @Type(() => Address)
    addresses?: Address[];

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
    @Type(() => Metadata)
    metadata?: Metadata;

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

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Status of the supplier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: SupplierStatus;

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
