/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Retrieve standardized data from linked commerce platforms.
 */
export class Disputes {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get dispute
     *
     * @remarks
     * Get a specific commerce dispute.
     */
    async get(
        req: operations.GetDisputeRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDisputeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDisputeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/commerce-disputes/{disputeId}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url,
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

        const res: operations.GetDisputeResponse = new operations.GetDisputeResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.dispute = utils.objectToClass(JSON.parse(decodedRes), shared.Dispute);
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDispute409ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetDispute409ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List disputes
     *
     * @remarks
     * The *List disputes* endpoint returns a list of [disputes](https://docs.codat.io/commerce-api#/schemas/Dispute) for a given company's connection.
     *
     * [Disputes](https://docs.codat.io/commerce-api#/schemas/Dispute) are created when a customer is unsatisfied with their purchase or believe they have been charged incorrectly.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
     *
     */
    async list(
        req: operations.ListDisputesRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListDisputesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDisputesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/commerce-disputes",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        let retryConfig: any = retries;
        if (!retryConfig) {
            retryConfig = new utils.RetryConfig(
                "backoff",
                new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                true
            );
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

        const res: operations.ListDisputesResponse = new operations.ListDisputesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.disputes = utils.objectToClass(JSON.parse(decodedRes), shared.Disputes);
                }
                break;
            case [400, 401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listDisputes409ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListDisputes409ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
