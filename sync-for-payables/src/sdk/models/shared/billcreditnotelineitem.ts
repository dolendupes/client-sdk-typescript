/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { BilledToType } from "./billedtotype";
import { TaxRateRef } from "./taxrateref";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { Expose, Type } from "class-transformer";

/**
 * Reference to the item the line is linked to.
 */
export class BillCreditNoteLineItemItemReference extends SpeakeasyBase {
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

export class BillCreditNoteLineItemTrackingCustomerRef extends SpeakeasyBase {
    /**
     * `customerName` from the Customer data type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName?: string;

    /**
     * `id` from the Customers data type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

export class BillCreditNoteLineItemTrackingProjectReference extends SpeakeasyBase {
    /**
     * Unique identifier to the project reference.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The project's name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

/**
 * Categories, and a project and customer, against which the item is tracked.
 */
export class BillCreditNoteLineItemTracking extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
    @Expose({ name: "categoryRefs" })
    @Type(() => TrackingCategoryRef)
    categoryRefs: TrackingCategoryRef[];

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => BillCreditNoteLineItemTrackingCustomerRef)
    customerRef?: BillCreditNoteLineItemTrackingCustomerRef;

    /**
     * Defines if the invoice or credit note is billed/rebilled to a project or customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isBilledTo" })
    isBilledTo: BilledToType;

    /**
     * Defines if the invoice or credit note is billed/rebilled to a project or customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isRebilledTo" })
    isRebilledTo: BilledToType;

    @SpeakeasyMetadata()
    @Expose({ name: "projectRef" })
    @Type(() => BillCreditNoteLineItemTrackingProjectReference)
    projectRef?: BillCreditNoteLineItemTrackingProjectReference;
}

export class BillCreditNoteLineItem extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

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
    @Type(() => BillCreditNoteLineItemItemReference)
    itemRef?: BillCreditNoteLineItemItemReference;

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
     * Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.
     *
     * @remarks
     *
     * Found on:
     *
     * - Bill line items
     * - Bill Credit Note line items
     * - Credit Note line items
     * - Direct incomes line items
     * - Invoice line items
     * - Items
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxRateRef" })
    @Type(() => TaxRateRef)
    taxRateRef?: TaxRateRef;

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
    @Type(() => BillCreditNoteLineItemTracking)
    tracking?: BillCreditNoteLineItemTracking;

    /**
     * Reference to the tracking categories to which the line item is linked.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
    @Expose({ name: "trackingCategoryRefs" })
    @Type(() => TrackingCategoryRef)
    trackingCategoryRefs?: TrackingCategoryRef[];

    /**
     * Unit price of the goods or service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitAmount" })
    unitAmount: number;
}
