/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetDirectIncomeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=directIncomeId",
  })
  directIncomeId: string;
}

/**
 * A customer or supplier associated with the direct income.
 */
export class GetDirectIncomeSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}

/**
 * Reference to the account to which the line item is linked.
 */
export class GetDirectIncomeSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the product, service type, or inventory item to which the direct cost is linked.
 */
export class GetDirectIncomeSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * Reference to the tax rate to which the line item is linked.
 */
export class GetDirectIncomeSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  /**
   * Applicable tax rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  /**
   * 'id' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the 'taxRates' data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

/**
 * References a category against which the item is tracked.
 */
export class GetDirectIncomeSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetDirectIncomeSourceModifiedDateLineItems extends SpeakeasyBase {
  /**
   * Reference to the account to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => GetDirectIncomeSourceModifiedDateLineItemsAccountRef)
  accountRef?: GetDirectIncomeSourceModifiedDateLineItemsAccountRef;

  /**
   * A user-friendly name of the goods or services.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Discount amount for the line before tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  /**
   * Discount percentage for the line before tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  /**
   * Reference to the product, service type, or inventory item to which the direct cost is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => GetDirectIncomeSourceModifiedDateLineItemsItemRef)
  itemRef?: GetDirectIncomeSourceModifiedDateLineItemsItemRef;

  /**
   * The number of units of goods or services received.
   *
   * @remarks
   *
   * Note: If the platform does not provide this information, the quantity will be mapped as 1.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  /**
   * The amount of the line, inclusive of discounts, but exclusive of tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * The amount of tax for the line.
   *
   * @remarks
   * Note: If the platform does not provide this information, the quantity will be mapped as 0.00.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  /**
   * Reference to the tax rate to which the line item is linked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => GetDirectIncomeSourceModifiedDateLineItemsTaxRateRef)
  taxRateRef?: GetDirectIncomeSourceModifiedDateLineItemsTaxRateRef;

  /**
   * The total amount of the line, including tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * An array of categories against which this direct cost is tracked.
   */
  @SpeakeasyMetadata({
    elemType: GetDirectIncomeSourceModifiedDateLineItemsTrackingCategoryRefs,
  })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => GetDirectIncomeSourceModifiedDateLineItemsTrackingCategoryRefs)
  trackingCategoryRefs?: GetDirectIncomeSourceModifiedDateLineItemsTrackingCategoryRefs[];

  /**
   * The price of each unit of goods or services.
   *
   * @remarks
   * Note: If the platform does not provide this information, the unit amount will be mapped to the total amount.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}

export class GetDirectIncomeSourceModifiedDateMetadata extends SpeakeasyBase {
  /**
   * Indicates whether the record has been deleted in the third-party system this record originated from.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}

export class GetDirectIncomeSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  /**
   * The date the payment was allocated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  allocatedOnDate?: string;

  /**
   * The currency of the transaction.
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

/**
 * The account that the allocated payment is made from or to.
 */
export class GetDirectIncomeSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  /**
   * 'id' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * 'name' from the Accounts data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetDirectIncomeSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  /**
   * The account that the allocated payment is made from or to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(
    () => GetDirectIncomeSourceModifiedDatePaymentAllocationsPaymentAccountRef
  )
  accountRef?: GetDirectIncomeSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  /**
   * Currency the payment has been made in.
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
   * Identifier of the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Notes attached to the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * The date the payment was paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paidOnDate" })
  paidOnDate?: string;

  /**
   * Reference to the allocated payment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * Total amount that was paid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;
}

export class GetDirectIncomeSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => GetDirectIncomeSourceModifiedDatePaymentAllocationsAllocation)
  allocation: GetDirectIncomeSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => GetDirectIncomeSourceModifiedDatePaymentAllocationsPayment)
  payment: GetDirectIncomeSourceModifiedDatePaymentAllocationsPayment;
}

/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 */
export class GetDirectIncomeSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: Record<string, Record<string, any>>;
}

/**
 * > **Language tip:**  Direct incomes may also be referred to as **Receive transactions**, **Receive money transactions**, **Sales receipts**, or **Cash sales** in various accounting platforms.
 *
 * @remarks
 *
 * > View the coverage for direct incomes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Direct incomes include:
 *
 * - Selling an item directly to a contact, and receiving payment at the point of the sale.
 * - Refunding an item in cash to a contact.
 * - Depositing money into a bank account.
 *
 * From the Direct Incomes endpoints, you can:
 *
 * - [Get a list of all direct incomes for a specific company](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes)
 * - [Get a single direct income for a specific company and connection](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes__directIncomeId_)
 * - [Add a new direct income to a specific company's accounting package](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/post_companies__companyId__connections__connectionId__push_directIncomes)
 *
 * Direct incomes is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 *
 */
export class GetDirectIncomeSourceModifiedDate extends SpeakeasyBase {
  /**
   * A customer or supplier associated with the direct income.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => GetDirectIncomeSourceModifiedDateContactRef)
  contactRef?: GetDirectIncomeSourceModifiedDateContactRef;

  /**
   * The currency of the direct income.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
   *
   * @remarks
   *
   * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
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
   * Identifier of the direct income, unique for the company.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The date of the direct income as recorded in the accounting platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  issueDate: string;

  /**
   * An array of line items.
   */
  @SpeakeasyMetadata({ elemType: GetDirectIncomeSourceModifiedDateLineItems })
  @Expose({ name: "lineItems" })
  @Type(() => GetDirectIncomeSourceModifiedDateLineItems)
  lineItems: GetDirectIncomeSourceModifiedDateLineItems[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetDirectIncomeSourceModifiedDateMetadata)
  metadata?: GetDirectIncomeSourceModifiedDateMetadata;

  /**
   * The date on which this record was last modified in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  modifiedDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({
    elemType: GetDirectIncomeSourceModifiedDatePaymentAllocations,
  })
  @Expose({ name: "paymentAllocations" })
  @Type(() => GetDirectIncomeSourceModifiedDatePaymentAllocations)
  paymentAllocations: GetDirectIncomeSourceModifiedDatePaymentAllocations[];

  /**
   * User-friendly reference for the direct income.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  /**
   * The date on which this record was last modified in the originating system
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  sourceModifiedDate?: string;

  /**
   * The total amount of the direct incomes, excluding any taxes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  /**
   * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetDirectIncomeSourceModifiedDateSupplementalData)
  supplementalData?: GetDirectIncomeSourceModifiedDateSupplementalData;

  /**
   * The total amount of tax on the direct incomes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount: number;

  /**
   * The amount of the direct incomes, inclusive of tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;
}

export class GetDirectIncomeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  sourceModifiedDate?: GetDirectIncomeSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
