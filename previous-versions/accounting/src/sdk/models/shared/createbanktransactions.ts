/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateBankAccountTransaction } from "./createbankaccounttransaction";
import { Expose, Type } from "class-transformer";

export class CreateBankTransactions extends SpeakeasyBase {
    /**
     * Unique identifier for a bank account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId?: string;

    @SpeakeasyMetadata({ elemType: CreateBankAccountTransaction })
    @Expose({ name: "transactions" })
    @Type(() => CreateBankAccountTransaction)
    transactions?: CreateBankAccountTransaction[];
}
