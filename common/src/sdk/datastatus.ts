/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Understand the state of data within Codat.
 */
export class DataStatus {
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
   * Get pull operations
   *
   * @remarks
   * Gets the pull operation history (datasets) for a given company.
   */
  getCompanyDataHistory(
    req: operations.GetCompanyDataHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyDataHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyDataHistoryRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/history",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetCompanyDataHistoryResponse =
        new operations.GetCompanyDataHistoryResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.dataConnectionHistory = utils.objectToClass(
              httpRes?.data,
              shared.DataConnectionHistory
            );
          }
          break;
        case [400, 401, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get data status
   *
   * @remarks
   * Get the state of each data type for a company
   */
  getCompanyDataStatus(
    req: operations.GetCompanyDataStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCompanyDataStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCompanyDataStatusRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/dataStatus",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetCompanyDataStatusResponse =
        new operations.GetCompanyDataStatusResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.dataStatusResponse = {};
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.dataStatusResponse = utils.objectToClass(
              httpRes?.data,
              shared.DataStatus,
              resFieldDepth
            );
          }
          break;
        case [401, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get pull operation
   *
   * @remarks
   * Retrieve information about a single dataset or pull operation.
   */
  getPullOperation(
    req: operations.GetPullOperationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPullOperationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPullOperationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/history/{datasetId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetPullOperationResponse =
        new operations.GetPullOperationResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.pullOperation = utils.objectToClass(
              httpRes?.data,
              shared.PullOperation
            );
          }
          break;
        case [401, 404].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorMessage = utils.objectToClass(
              httpRes?.data,
              shared.ErrorMessage
            );
          }
          break;
      }

      return res;
    });
  }
}
