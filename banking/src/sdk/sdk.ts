/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { AccountBalances } from "./accountbalances";
import { Accounts } from "./accounts";
import * as shared from "./models/shared";
import { TransactionCategories } from "./transactioncategories";
import { Transactions } from "./transactions";
import axios, { AxiosInstance } from "axios";

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
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * Codat's standardized API for accessing banking data.
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
export class Codat {
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

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.8.3";
  private _genVersion = "2.16.5";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.accountBalances = new AccountBalances(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.transactionCategories = new TransactionCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.transactions = new Transactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
