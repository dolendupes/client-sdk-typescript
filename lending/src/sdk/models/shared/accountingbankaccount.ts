/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingBankAccountType } from "./accountingbankaccounttype";
import { Metadata } from "./metadata";
import { Expose, Type } from "class-transformer";

/**
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/schemas/Account)
 *
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific data connection.
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
 */
export class AccountingBankAccount extends SpeakeasyBase {
    /**
     * Name of the bank account in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountName" })
    accountName?: string;

    /**
     * Account number for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
     *
     * FreeAgent integrations
     * For Credit accounts, only the last four digits are required. For other types, the field is optional.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumber" })
    accountNumber?: string;

    /**
     * The type of transactions and balances on the account.
     *
     * @remarks
     * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
     * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: AccountingBankAccountType;

    /**
     * Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "availableBalance" })
    availableBalance?: number;

    /**
     * Balance of the bank account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance?: number;

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
     * International bank account number of the account. Often used when making or receiving international payments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iBan" })
    iBan?: string;

    /**
     * Identifier for the account, unique for the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The institution of the bank account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "institution" })
    institution?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Code used to identify each nominal account for a business.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nominalCode" })
    nominalCode?: string;

    /**
     * Pre-arranged overdraft limit of the account.
     *
     * @remarks
     *
     * The value is always positive. For example, an overdraftLimit of `1000` means that the balance of the account can go down to `-1000`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "overdraftLimit" })
    overdraftLimit?: number;

    /**
     * Sort code for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sortCode" })
    sortCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;
}
