/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Bank transactions for bank accounts
 */
export class BankAccountTransactions {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create bank account transactions
     *
     * @remarks
     * The *Create bank account transactions* endpoint creates new [bank account transactions](https://docs.codat.io/accounting-api#/schemas/BankTransactions) for a given company's connection.
     *
     * [Bank account transactions](https://docs.codat.io/accounting-api#/schemas/BankTransactions) are records of money that has moved in and out of an SMB's bank account.
     *
     * **Integration-specific behaviour**
     *
     * Required data may vary by integration. To see what data to post, first call [Get create bank transaction model](https://docs.codat.io/accounting-api#/operations/get-create-bankTransactions-model).
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support creating a bank account transactions.
     *
     */
    async create(
        req: operations.CreateBankTransactionsRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateBankTransactionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateBankTransactionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createBankTransactions",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
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
                method: "post",
                headers: headers,
                responseType: "arraybuffer",
                data: reqBody,
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateBankTransactionsResponse =
            new operations.CreateBankTransactionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createBankTransactionsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.CreateBankTransactionsResponse
                    );
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * Get create bank account transactions model
     *
     * @remarks
     * The *Get create bank account transactions model* endpoint returns the expected data for the request payload when creating [bank account transactions](https://docs.codat.io/accounting-api#/schemas/BankTransactions) for a given company and integration.
     *
     * [Bank account transactions](https://docs.codat.io/accounting-api#/schemas/BankTransactions) are records of money that has moved in and out of an SMB's bank account.
     *
     * **Integration-specific behaviour**
     *
     * See the *response examples* for integration-specific indicative models.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support creating an bank transaction.
     *
     */
    async getCreateModel(
        req: operations.GetCreateBankTransactionsModelRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCreateBankTransactionsModelResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCreateBankTransactionsModelRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
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

        const res: operations.GetCreateBankTransactionsModelResponse =
            new operations.GetCreateBankTransactionsModelResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.pushOption = utils.objectToClass(JSON.parse(decodedRes), shared.PushOption);
                }
                break;
            case [401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
        }

        return res;
    }

    /**
     * List bank account transactions
     *
     * @remarks
     * The *List account bank transactions* endpoint returns a list of [bank account transactions](https://docs.codat.io/accounting-api#/schemas/BankTransactions) for a given company's connection.
     *
     * [Bank account transactions](https://docs.codat.io/accounting-api#/schemas/BankTransactions) are records of money that has moved in and out of an SMB's bank account.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support listing bank transactions.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
     *
     */
    async list(
        req: operations.ListBankAccountTransactionsRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.ListBankAccountTransactionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListBankAccountTransactionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions",
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

        const res: operations.ListBankAccountTransactionsResponse =
            new operations.ListBankAccountTransactionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.bankTransactionsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.BankTransactionsResponse
                    );
                }
                break;
            case [400, 401, 404, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.schema = utils.objectToClass(JSON.parse(decodedRes), shared.Schema);
                }
                break;
            case httpRes?.status == 409:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listBankAccountTransactions409ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ListBankAccountTransactions409ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
