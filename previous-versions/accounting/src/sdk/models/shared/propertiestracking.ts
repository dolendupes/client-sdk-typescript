/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingCustomerRef } from "./accountingcustomerref";
import { BilledToType } from "./billedtotype";
import { ProjectRef } from "./projectref";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { Expose, Type } from "class-transformer";

/**
 * Categories, and a project and customer, against which the item is tracked.
 */
export class Propertiestracking extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
    @Expose({ name: "categoryRefs" })
    @Type(() => TrackingCategoryRef)
    categoryRefs: TrackingCategoryRef[];

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => AccountingCustomerRef)
    customerRef?: AccountingCustomerRef;

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
    @Type(() => ProjectRef)
    projectRef?: ProjectRef;
}
