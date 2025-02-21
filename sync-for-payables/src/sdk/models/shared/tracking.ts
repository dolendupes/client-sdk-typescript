/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BilledToType } from "./billedtotype";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { Expose, Type } from "class-transformer";

export class TrackingCustomerRef extends SpeakeasyBase {
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

export class TrackingProjectReference extends SpeakeasyBase {
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
export class Tracking extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
    @Expose({ name: "categoryRefs" })
    @Type(() => TrackingCategoryRef)
    categoryRefs: TrackingCategoryRef[];

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => TrackingCustomerRef)
    customerRef?: TrackingCustomerRef;

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
    @Type(() => TrackingProjectReference)
    projectRef?: TrackingProjectReference;
}
