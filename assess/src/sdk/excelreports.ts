/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Downloadable reports
 */
export class ExcelReports {
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
   * Download generated excel report
   *
   * @remarks
   * Download the previously generated Excel report to a local drive.
   *
   * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
   */
  async downloadExcelReport(
    req: operations.DownloadExcelReportRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadExcelReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadExcelReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/assess/excel/download",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DownloadExcelReportResponse =
      new operations.DownloadExcelReportResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/octet-stream`)) {
          const resBody: string = JSON.stringify(httpRes?.data, null, 0);
          const out: Uint8Array = new Uint8Array(resBody.length);
          for (let i = 0; i < resBody.length; i++)
            out[i] = resBody.charCodeAt(i);
          res.body = out;
        }
        break;
    }

    return res;
  }

  /**
   * Generate an Excel report
   *
   * @remarks
   * Generate an Excel report which can subsequently be downloaded.
   */
  async generateExcelReport(
    req: operations.GenerateExcelReportRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateExcelReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateExcelReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/assess/excel",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GenerateExcelReportResponse =
      new operations.GenerateExcelReportResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.excelStatus = utils.objectToClass(
            httpRes?.data,
            shared.ExcelStatus
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get the marketing metrics from an accounting source for a given company.
   *
   * @remarks
   * Request an Excel report for download.
   */
  async getAccountingMarketingMetrics(
    req: operations.GetAccountingMarketingMetricsRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountingMarketingMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountingMarketingMetricsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetAccountingMarketingMetricsResponse =
      new operations.GetAccountingMarketingMetricsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.report = utils.objectToClass(httpRes?.data, shared.Report);
        }
        break;
    }

    return res;
  }

  /**
   * Download generated excel report
   *
   * @remarks
   * Download the previously generated Excel report to a local drive.
   */
  async getExcelReport(
    req: operations.GetExcelReportRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExcelReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExcelReportRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/assess/excel/download",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetExcelReportResponse =
      new operations.GetExcelReportResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/octet-stream`)) {
          const resBody: string = JSON.stringify(httpRes?.data, null, 0);
          const out: Uint8Array = new Uint8Array(resBody.length);
          for (let i = 0; i < resBody.length; i++)
            out[i] = resBody.charCodeAt(i);
          res.body = out;
        }
        break;
    }

    return res;
  }

  /**
   * Get status of Excel report
   *
   * @remarks
   * Returns the status of the latest report requested.
   */
  async getExcelReportGenerationStatus(
    req: operations.GetExcelReportGenerationStatusRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExcelReportGenerationStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExcelReportGenerationStatusRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/data/companies/{companyId}/assess/excel",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetExcelReportGenerationStatusResponse =
      new operations.GetExcelReportGenerationStatusResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.excelStatus = utils.objectToClass(
            httpRes?.data,
            shared.ExcelStatus
          );
        }
        break;
    }

    return res;
  }
}
