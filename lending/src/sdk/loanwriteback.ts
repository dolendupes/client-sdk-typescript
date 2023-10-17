/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LoanWritebackAccounts } from "./loanwritebackaccounts";
import { LoanWritebackBankTransactions } from "./loanwritebackbanktransactions";
import { LoanWritebackCreateOperations } from "./loanwritebackcreateoperations";
import { LoanWritebackDirectCosts } from "./loanwritebackdirectcosts";
import { LoanWritebackPayments } from "./loanwritebackpayments";
import { LoanWritebackSuppliers } from "./loanwritebacksuppliers";
import { LoanWritebackTransfers } from "./loanwritebacktransfers";
import { SDKConfiguration } from "./sdk";

export class LoanWriteback {
    public accounts: LoanWritebackAccounts;
    public bankTransactions: LoanWritebackBankTransactions;
    public createOperations: LoanWritebackCreateOperations;
    public directCosts: LoanWritebackDirectCosts;
    public payments: LoanWritebackPayments;
    public suppliers: LoanWritebackSuppliers;
    public transfers: LoanWritebackTransfers;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.accounts = new LoanWritebackAccounts(this.sdkConfiguration);
        this.bankTransactions = new LoanWritebackBankTransactions(this.sdkConfiguration);
        this.createOperations = new LoanWritebackCreateOperations(this.sdkConfiguration);
        this.directCosts = new LoanWritebackDirectCosts(this.sdkConfiguration);
        this.payments = new LoanWritebackPayments(this.sdkConfiguration);
        this.suppliers = new LoanWritebackSuppliers(this.sdkConfiguration);
        this.transfers = new LoanWritebackTransfers(this.sdkConfiguration);
    }
}
