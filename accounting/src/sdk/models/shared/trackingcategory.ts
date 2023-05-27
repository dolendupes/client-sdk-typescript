/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Status } from "./status";
import { Expose } from "class-transformer";

/**
 * Details of a category used for tracking transactions.
 *
 * @remarks
 *
 * > Language tip
 * >
 * > Parameters used to track types of spend in various parts of an organization can be called  **dimensions**, **projects**, **classes**, or **locations** in different accounting platforms. In Codat, we refer to these as tracking categories.
 *
 * View the coverage for tracking categories in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=trackingCategories" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Tracking categories are used to monitor cost centres and control budgets that sit outside the standard chart of accounts. Customers may use tracking categories to group together and track the income and costs of specific departments, projects, locations or customers.
 *
 * From their accounting system, customers can:
 *
 * - Create and maintain tracking categories and tracking category types.
 * - View all tracking categories that are available for use.
 * - View the relationships between the categories.
 * - Assign invoices, bills, credit notes, or bill credit notes to one or more categories.
 * - View the categories that a transaction belongs to.
 * - View all transactions in a tracking category.
 *
 * > **Example use case**
 * >
 * > Monitor the budget for your annual conference using a tracking category called 'AnnualConference2020' with the **type** set to **Costing**.
 *
 * If a tracking category has a parent category, the ID of that parent category is displayed. There is also a `hasChildren` field that shows whether there are child subcategories nested beneath.
 */
export class TrackingCategory extends SpeakeasyBase {
    /**
     * Boolean value indicating whether this category has SubCategories
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hasChildren" })
    hasChildren?: boolean;

    /**
     * The identifier for the item, unique per tracking category
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * The name of the tracking category
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The identifier for this item's immediate parent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentId" })
    parentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Current state of the tracking category.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: Status;
}
