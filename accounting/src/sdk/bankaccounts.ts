/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Bank accounts
 */
export class BankAccounts {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Create bank account
   *
   * @remarks
   * Posts a new bank account to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call []().
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support creating bank accounts.
   *
   */
  async create(
    req: operations.CreateBankAccountRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBankAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBankAccountRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bankAccounts",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bankAccount",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url + queryParams,
        method: "post",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.CreateBankAccountResponse =
      new operations.CreateBankAccountResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.createBankAccountResponse = utils.objectToClass(
            httpRes?.data,
            shared.CreateBankAccountResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get bank account
   *
   * @remarks
   * Gets the bank account with a given ID
   *
   * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
   */
  async get(
    req: operations.GetBankAccountRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBankAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBankAccountRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url,
        method: "get",
        headers: headers,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetBankAccountResponse =
      new operations.GetBankAccountResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.bankAccount = utils.objectToClass(
            httpRes?.data,
            shared.BankAccount
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get create/update bank account model
   *
   * @remarks
   * Get create/update bank account model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support creating and updating bank accounts.
   *
   */
  async getCreateUpdateModel(
    req: operations.GetCreateUpdateBankAccountsModelRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateBankAccountsModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateBankAccountsModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/bankAccounts",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url,
        method: "get",
        headers: headers,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetCreateUpdateBankAccountsModelResponse =
      new operations.GetCreateUpdateBankAccountsModelResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pushOption = utils.objectToClass(
            httpRes?.data,
            shared.PushOption
          );
        }
        break;
    }

    return res;
  }

  /**
   * List bank accounts
   *
   * @remarks
   * Gets the list of bank accounts for a given connection
   */
  async list(
    req: operations.ListBankAccountsRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBankAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBankAccountsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/bankAccounts",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] =
      "application/json;q=1, application/json;q=0.7, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url + queryParams,
        method: "get",
        headers: headers,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListBankAccountsResponse =
      new operations.ListBankAccountsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.bankAccounts = utils.objectToClass(
            httpRes?.data,
            shared.BankAccounts
          );
        }
        break;
      case [400, 401, 404].includes(httpRes?.status):
        if (utils.matchContentType(contentType, `application/json`)) {
          res.schema = utils.objectToClass(httpRes?.data, shared.Schema);
        }
        break;
      case httpRes?.status == 409:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listBankAccounts409ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.ListBankAccounts409ApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Update bank account
   *
   * @remarks
   * Posts an updated bank account to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call []().
   *
   * > **Supported Integrations**
   * >
   * > Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support updating bank accounts.
   */
  async update(
    req: operations.UpdateBankAccountRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBankAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBankAccountRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{bankAccountId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bankAccount",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url + queryParams,
        method: "put",
        headers: headers,
        data: reqBody,
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UpdateBankAccountResponse =
      new operations.UpdateBankAccountResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.updateBankAccountResponse = utils.objectToClass(
            httpRes?.data,
            shared.UpdateBankAccountResponse
          );
        }
        break;
    }

    return res;
  }
}
