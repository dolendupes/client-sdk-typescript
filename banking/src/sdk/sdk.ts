/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { AccountBalances } from "./accountbalances";
import { Accounts } from "./accounts";
import * as shared from "./models/shared";
import { TransactionCategories } from "./transactioncategories";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.codat.io",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2.1.0";
    sdkVersion = "0.27.0";
    genVersion = "2.58.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Banking API: Codat's standardized API for accessing banking data.
 *
 * @remarks
 * Codat's Banking API allows you to access standardised data from over bank accounts via third party providers.
 *
 * Standardize how you connect to your customers’ bank accounts. Retrieve bank account and bank transaction data in the same way via our partnerships with Plaid and TrueLayer.
 *
 * [Read more...](https://docs.codat.io/banking-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatBanking {
    /**
     * Balances for a bank account including end-of-day batch balance or running balances per transaction.
     */
    public accountBalances: AccountBalances;
    /**
     * Where payments are made or received, and bank transactions are recorded.
     */
    public accounts: Accounts;
    /**
     * Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.
     */
    public transactionCategories: TransactionCategories;
    /**
     * An immutable source of up-to-date information on income and expenditure.
     */
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.accountBalances = new AccountBalances(this.sdkConfiguration);
        this.accounts = new Accounts(this.sdkConfiguration);
        this.transactionCategories = new TransactionCategories(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
