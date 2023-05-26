/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.
 */
export class TransactionCategories {
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
   * Get transaction category
   *
   * @remarks
   * Gets a specified bank transaction category for a given company
   */
  async get(
    req: operations.GetTransactionCategoryRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTransactionCategoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTransactionCategoryRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories/{transactionCategoryId}",
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

    const res: operations.GetTransactionCategoryResponse =
      new operations.GetTransactionCategoryResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.transactionCategory = utils.objectToClass(
            httpRes?.data,
            shared.TransactionCategory
          );
        }
        break;
    }

    return res;
  }

  /**
   * List all transaction categories
   *
   * @remarks
   * Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.
   */
  async list(
    req: operations.ListTransactionCategoriesRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTransactionCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTransactionCategoriesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories",
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

    const res: operations.ListTransactionCategoriesResponse =
      new operations.ListTransactionCategoriesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.transactionCategories = utils.objectToClass(
            httpRes?.data,
            shared.TransactionCategories
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
          res.listTransactionCategories409ApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.ListTransactionCategories409ApplicationJSON
            );
        }
        break;
    }

    return res;
  }
}
