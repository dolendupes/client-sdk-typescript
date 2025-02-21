/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingCustomerRef } from "./accountingcustomerref";
import { AccountRef } from "./accountref";
import { BilledToType } from "./billedtotype";
import { ItemRef } from "./itemref";
import { RecordRef } from "./recordref";
import { TaxRateRef } from "./taxrateref";
import { TrackingCategoryRefsitems } from "./trackingcategoryrefsitems";
import { Expose, Type } from "class-transformer";

export class CreditNoteLineItemTrackingProjectReference extends SpeakeasyBase {
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
export class CreditNoteLineItemTracking extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TrackingCategoryRefsitems })
    @Expose({ name: "categoryRefs" })
    @Type(() => TrackingCategoryRefsitems)
    categoryRefs: TrackingCategoryRefsitems[];

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => AccountingCustomerRef)
    customerRef?: AccountingCustomerRef;

    /**
     * Defines if the bill or bill credit note is billed/rebilled to a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isBilledTo" })
    isBilledTo: BilledToType;

    /**
     * Defines if the bill or bill credit note is billed/rebilled to a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isRebilledTo" })
    isRebilledTo: BilledToType;

    @SpeakeasyMetadata()
    @Expose({ name: "projectRef" })
    @Type(() => CreditNoteLineItemTrackingProjectReference)
    projectRef?: CreditNoteLineItemTrackingProjectReference;

    /**
     * Links the current record to the underlying record or data type that created it.
     *
     * @remarks
     *
     * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recordRef" })
    @Type(() => RecordRef)
    recordRef?: RecordRef;
}

export class CreditNoteLineItem extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * Friendly name of each line item. For example, the goods or service for which credit has been issued.
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
     * The credit note is a direct income if `True`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isDirectIncome" })
    isDirectIncome?: boolean;

    /**
     * Reference to the product, service type, or inventory item to which the direct cost is linked.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "itemRef" })
    @Type(() => ItemRef)
    itemRef?: ItemRef;

    /**
     * Number of units of the goods or service for which credit has been issued.
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
    @Type(() => CreditNoteLineItemTracking)
    tracking?: CreditNoteLineItemTracking;

    /**
     * Reference to the tracking categories to which the line item is linked.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata({ elemType: TrackingCategoryRefsitems })
    @Expose({ name: "trackingCategoryRefs" })
    @Type(() => TrackingCategoryRefsitems)
    trackingCategoryRefs?: TrackingCategoryRefsitems[];

    /**
     * Unit price of the goods or service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitAmount" })
    unitAmount: number;
}
