/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AddressTypeEnum } from "./addresstypeenum";
import { PhoneNumberTypeEnum } from "./phonenumbertypeenum";
import { Expose, Type } from "class-transformer";

export class CompanyDatasetAddresses extends SpeakeasyBase {
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
   * The type of the address
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: AddressTypeEnum;
}

export class CompanyDatasetPhone extends SpeakeasyBase {
  /**
   * A phone number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number: string;

  /**
   * The type of phone number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PhoneNumberTypeEnum;
}

/**
 * The type of the weblink.
 */
export enum CompanyDatasetWeblinkTypeEnum {
  Website = "Website",
  Social = "Social",
  Unknown = "Unknown",
}

/**
 * Weblink associated with the company.
 */
export class CompanyDatasetWeblink extends SpeakeasyBase {
  /**
   * The type of the weblink.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CompanyDatasetWeblinkTypeEnum;

  /**
   * The full URL for the weblink.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

/**
 * > View the coverage for company info in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=cashFlowStatement" target="_blank">Data coverage explorer</a>.
 *
 * @remarks
 *
 * Company info provides standard details about a linked company such as their address, phone number, and company registration.
 *
 * > **Company information or companies?**
 * >
 * > Company information is standard information that is held in the accounting platform about a company. `Companies` is an endpoint that lists businesses in the Codat system that have linked and shared their data sources.
 */
export class CompanyDataset extends SpeakeasyBase {
  /**
   * Identifier or reference for the company in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountingPlatformRef" })
  accountingPlatformRef?: string;

  /**
   * An array of Addresses.
   */
  @SpeakeasyMetadata({ elemType: CompanyDatasetAddresses })
  @Expose({ name: "addresses" })
  @Type(() => CompanyDatasetAddresses)
  addresses?: CompanyDatasetAddresses[];

  /**
   * Currency set in the accounting platform of the linked company. Used by the currency rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "baseCurrency" })
  baseCurrency?: string;

  /**
   * Registered legal name of the linked company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyLegalName" })
  companyLegalName?: string;

  /**
   * Name of the linked company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

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
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  createdDate?: string;

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
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "financialYearStartDate" })
  financialYearStartDate?: string;

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
   * > Time zones
   * >
   * > Not all dates from Codat will contain information about time zones.
   * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ledgerLockDate" })
  ledgerLockDate?: string;

  /**
   * An array of phone numbers.
   */
  @SpeakeasyMetadata({ elemType: CompanyDatasetPhone })
  @Expose({ name: "phoneNumbers" })
  @Type(() => CompanyDatasetPhone)
  phoneNumbers?: CompanyDatasetPhone[];

  /**
   * Registration number given to the linked company by the companies authority in the country of origin. In the UK this is Companies House.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  /**
   * URL addresses for the accounting source.
   *
   * @remarks
   *
   * For example, for Xero integrations two URLs are returned. These have many potential use cases, such as [deep linking](https://developer.xero.com/documentation/api-guides/deep-link-xero).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceUrls" })
  sourceUrls?: Record<string, string>;

  /**
   * Company tax number.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;

  /**
   * An array of weblinks.
   */
  @SpeakeasyMetadata({ elemType: CompanyDatasetWeblink })
  @Expose({ name: "webLinks" })
  @Type(() => CompanyDatasetWeblink)
  webLinks?: CompanyDatasetWeblink[];
}
