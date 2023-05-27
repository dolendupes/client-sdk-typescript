/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Direct incomes
 */
export class DirectIncomes {
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
     * Create direct income
     *
     * @remarks
     * Posts a new direct income to the accounting package for a given company.
     *
     * Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) to see which integrations support this endpoint.
     */
    async create(
        req: operations.CreateDirectIncomeRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateDirectIncomeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateDirectIncomeRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/push/directIncomes",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "directIncome", "json");
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

        const res: operations.CreateDirectIncomeResponse =
            new operations.CreateDirectIncomeResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createDirectIncomeResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.CreateDirectIncomeResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Download direct income attachment
     *
     * @remarks
     * Downloads an attachment for the specified direct income for a given company.
     */
    async downloadAttachment(
        req: operations.DownloadDirectIncomeAttachmentRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.DownloadDirectIncomeAttachmentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DownloadDirectIncomeAttachmentRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments/{attachmentId}/download",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/octet-stream;q=0";
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

        const res: operations.DownloadDirectIncomeAttachmentResponse =
            new operations.DownloadDirectIncomeAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/octet-stream`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.data = out;
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(httpRes?.data, shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Get direct income
     *
     * @remarks
     * Gets the specified direct income for a given company and connection.
     */
    async get(
        req: operations.GetDirectIncomeRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDirectIncomeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDirectIncomeRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
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

        const res: operations.GetDirectIncomeResponse = new operations.GetDirectIncomeResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.directIncome = utils.objectToClass(httpRes?.data, shared.DirectIncome);
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(httpRes?.data, shared.Schema);
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getDirectIncome409ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetDirectIncome409ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get direct income attachment
     *
     * @remarks
     * Gets the specified direct income attachment for a given company.
     */
    async getAttachment(
        req: operations.GetDirectIncomeAttachmentRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDirectIncomeAttachmentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetDirectIncomeAttachmentRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments/{attachmentId}",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
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

        const res: operations.GetDirectIncomeAttachmentResponse =
            new operations.GetDirectIncomeAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.attachment = utils.objectToClass(httpRes?.data, shared.Attachment);
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(httpRes?.data, shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Get create direct income model
     *
     * @remarks
     * Get create direct income model. Returns the expected data for the request payload.
     *
     * See the examples for integration-specific indicative models.
     *
     * > **Supported Integrations**
     * >
     * > Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating direct incomes.
     */
    async getCreateModel(
        req: operations.GetCreateDirectIncomesModelRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCreateDirectIncomesModelResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCreateDirectIncomesModelRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/options/directIncomes",
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

        const res: operations.GetCreateDirectIncomesModelResponse =
            new operations.GetCreateDirectIncomesModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.pushOption = utils.objectToClass(httpRes?.data, shared.PushOption);
                }
                break;
        }

        return res;
    }

    /**
     * List direct incomes
     *
     * @remarks
     * Lists the direct incomes for a given company.
     */
    async list(
        req: operations.ListDirectIncomesRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListDirectIncomesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDirectIncomesRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
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

        const res: operations.ListDirectIncomesResponse = new operations.ListDirectIncomesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.directIncomes = utils.objectToClass(httpRes?.data, shared.DirectIncomes);
                }
                break;
            case [400, 401, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(httpRes?.data, shared.Schema);
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listDirectIncomes409ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.ListDirectIncomes409ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List direct income attachments
     *
     * @remarks
     * Gets all attachments for the specified direct income for a given company.
     */
    async listAttachments(
        req: operations.ListDirectIncomeAttachmentsRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListDirectIncomeAttachmentsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListDirectIncomeAttachmentsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
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

        const res: operations.ListDirectIncomeAttachmentsResponse =
            new operations.ListDirectIncomeAttachmentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.attachmentsDataset = utils.objectToClass(
                        httpRes?.data,
                        shared.AttachmentsDataset
                    );
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(httpRes?.data, shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Create direct income attachment
     *
     * @remarks
     * Posts a new direct income attachment for a given company.
     */
    async uploadAttachment(
        req: operations.UploadDirectIncomeAttachmentRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.UploadDirectIncomeAttachmentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UploadDirectIncomeAttachmentRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/push/directIncomes/{directIncomeId}/attachment",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "multipart");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
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

        const res: operations.UploadDirectIncomeAttachmentResponse =
            new operations.UploadDirectIncomeAttachmentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(httpRes?.data, shared.Schema);
                }
                break;
        }

        return res;
    }
}
