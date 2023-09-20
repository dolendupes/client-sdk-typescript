/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export class SalesReports {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get orders report
     *
     * @remarks
     * The *Get orders report* endpoint returns the number of orders, total value, and average order value for a specific company's commerce connection over one or more periods of time.
     *
     * This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company.
     *
     * Learn more about the formulas used to calculate the order metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).
     *
     * Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.
     *
     * #### Response structure
     *
     * The Orders report's dimensions and measures are:
     *
     * | Index         | Dimensions     |
     * |---------------|----------------|
     * |   `index` = 0 | Period         |
     * |   `index` = 1 | Order metrics  |
     *
     * | Index         | Measures   |
     * |---------------|------------|
     * | `index` = 0   | Count      |
     * | `index` = 1   | Value      |
     *
     * The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.
     *
     */
    async getOrders(
        req: operations.GetCommerceOrdersReportRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCommerceOrdersReportResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommerceOrdersReportRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url + queryParams,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCommerceOrdersReportResponse =
            new operations.GetCommerceOrdersReportResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.commerceReport = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CommerceReport
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get refunds report
     *
     * @remarks
     * The *Get refunds report* endpoint returns the number and total value of refunds and the refund rate for a specific company's commerce connection over one or more periods of time.
     *
     * This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company.
     *
     * Learn more about the formulas used to calculate the refunds metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).
     *
     * Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.
     *
     * #### Response structure
     *
     * The Refunds report's dimensions and measures are:
     *
     * | Index          | Dimensions     |
     * |----------------|----------------|
     * | `index` = 0    | Period         |
     * | `index` = 1    | Refund metrics |
     *
     * | Index          | Measures    |
     * |----------------|------------|
     * | `index` = 0    | Count      |
     * | `index` = 1    | Value      |
     * | `index` = 2    | Percentage |
     *
     * The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.
     *
     */
    async getRefunds(
        req: operations.GetCommerceRefundsReportRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCommerceRefundsReportResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCommerceRefundsReportRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/refunds",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url + queryParams,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCommerceRefundsReportResponse =
            new operations.GetCommerceRefundsReportResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.commerceReport = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CommerceReport
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
