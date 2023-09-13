/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BillLineItem } from "./billlineitem";
import { BillStatus } from "./billstatus";
import { Metadata } from "./metadata";
import { PaymentAllocationPayment } from "./paymentallocationpayment";
import { SupplierRef } from "./supplierref";
import { Expose, Type } from "class-transformer";

export class BillPaymentAllocationAllocation extends SpeakeasyBase {
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
    @Expose({ name: "allocatedOnDate" })
    allocatedOnDate?: string;

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
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
     *
     * @remarks
     *
     * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
     *
     * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
     *
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
     *
     * ## Examples with base currency of GBP
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **USD**          | $20            | 0.781         | £15.62                     |
     * | **EUR**          | €20            | 0.885         | £17.70                     |
     * | **RUB**          | ₽20            | 0.011         | £0.22                      |
     *
     * ## Examples with base currency of USD
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **GBP**          | £20            | 1.277         | $25.54                     |
     * | **EUR**          | €20            | 1.134         | $22.68                     |
     * | **RUB**          | ₽20            | 0.015         | $0.30                      |
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currencyRate" })
    currencyRate?: number;

    /**
     * The total amount that has been allocated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;
}

export class BillPaymentAllocation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allocation" })
    @Type(() => BillPaymentAllocationAllocation)
    allocation: BillPaymentAllocationAllocation;

    @SpeakeasyMetadata()
    @Expose({ name: "payment" })
    @Type(() => PaymentAllocationPayment)
    payment: PaymentAllocationPayment;
}

export class BillPurchaseOrderReference extends SpeakeasyBase {
    /**
     * Identifier for the purchase order, unique for the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Friendly reference for the purchase order, commonly generated by the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "purchaseOrderNumber" })
    purchaseOrderNumber?: string;
}

/**
 * Supplemental data is additional data you can include in our standard data types.
 *
 * @remarks
 *
 * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
 */
export class BillSupplementalData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: Record<string, Record<string, any>>;
}

export class BillWithholdingTax extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * > **Invoices or bills?**
 *
 * @remarks
 * >
 * > We distinguish between invoices where the company *owes money* vs. *is owed money*. If the company has received an invoice, and owes money to someone else (accounts payable) we call this a Bill.
 * >
 * > See [Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) for the accounts receivable equivalent of bills.
 *
 * View the coverage for bills in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * In Codat, a bill contains details of:
 * * When the bill was recorded in the accounting system.
 * * How much the bill is for and the currency of the amount.
 * * Who the bill was received from — the *supplier*.
 * * What the bill is for — the *line items*.
 *
 * Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's *expenses*.
 *
 * You can find these types of transactions in our [Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) data model.
 */
export class Bill extends SpeakeasyBase {
    /**
     * Amount outstanding on the bill.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amountDue" })
    amountDue?: number;

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
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
     *
     * @remarks
     *
     * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
     *
     * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
     *
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
     *
     * ## Examples with base currency of GBP
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **USD**          | $20            | 0.781         | £15.62                     |
     * | **EUR**          | €20            | 0.885         | £17.70                     |
     * | **RUB**          | ₽20            | 0.011         | £0.22                      |
     *
     * ## Examples with base currency of USD
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **GBP**          | £20            | 1.277         | $25.54                     |
     * | **EUR**          | €20            | 1.134         | $22.68                     |
     * | **RUB**          | ₽20            | 0.015         | $0.30                      |
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currencyRate" })
    currencyRate?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate?: string;

    /**
     * Identifier for the bill, unique for the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "issueDate" })
    issueDate: string;

    /**
     * Array of Bill line items.
     */
    @SpeakeasyMetadata({ elemType: BillLineItem })
    @Expose({ name: "lineItems" })
    @Type(() => BillLineItem)
    lineItems?: BillLineItem[];

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Any private, company notes about the bill, such as payment information.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "note" })
    note?: string;

    /**
     * An array of payment allocations.
     */
    @SpeakeasyMetadata({ elemType: BillPaymentAllocation })
    @Expose({ name: "paymentAllocations" })
    @Type(() => BillPaymentAllocation)
    paymentAllocations?: BillPaymentAllocation[];

    @SpeakeasyMetadata({ elemType: BillPurchaseOrderReference })
    @Expose({ name: "purchaseOrderRefs" })
    @Type(() => BillPurchaseOrderReference)
    purchaseOrderRefs?: BillPurchaseOrderReference[];

    /**
     * User-friendly reference for the bill.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Current state of the bill.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: BillStatus;

    /**
     * Total amount of the bill, excluding any taxes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subTotal" })
    subTotal: number;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => BillSupplementalData)
    supplementalData?: BillSupplementalData;

    /**
     * Reference to the supplier the record relates to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplierRef" })
    @Type(() => SupplierRef)
    supplierRef?: SupplierRef;

    /**
     * Amount of tax on the bill.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxAmount" })
    taxAmount: number;

    /**
     * Amount of the bill, including tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount: number;

    @SpeakeasyMetadata({ elemType: BillWithholdingTax })
    @Expose({ name: "withholdingTax" })
    @Type(() => BillWithholdingTax)
    withholdingTax?: BillWithholdingTax[];
}
