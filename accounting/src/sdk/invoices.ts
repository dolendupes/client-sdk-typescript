/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Invoices
 */
export class Invoices {
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
   * Create invoice
   *
   * @remarks
   * Posts a new invoice to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating invoices.
   */
  async create(
    req: operations.CreateInvoiceRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInvoiceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/invoices",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "invoice",
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

    const res: operations.CreateInvoiceResponse =
      new operations.CreateInvoiceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.createInvoiceResponse = utils.objectToClass(
            httpRes?.data,
            shared.CreateInvoiceResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Delete invoice
   *
   * @remarks
   * Deletes an invoice from the accounting package for a given company.
   *
   * > **Supported Integrations**
   * >
   * > This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.
   */
  async delete(
    req: operations.DeleteInvoiceRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInvoiceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    let retryConfig: any = retries;
    if (!retryConfig) {
      retryConfig = new utils.RetryConfig("backoff", true);
      retryConfig.backoff = new utils.BackoffStrategy(500, 60000, 1.5, 3600000);
    }
    const httpRes: AxiosResponse = await utils.Retry(() => {
      return client.request({
        validateStatus: () => true,
        url: url,
        method: "delete",
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeleteInvoiceResponse =
      new operations.DeleteInvoiceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pushOperationSummary = utils.objectToClass(
            httpRes?.data,
            shared.PushOperationSummary
          );
        }
        break;
    }

    return res;
  }

  /**
   * Download invoice attachment
   *
   * @remarks
   * Download invoice attachments
   */
  async downloadAttachment(
    req: operations.DownloadInvoiceAttachmentRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadInvoiceAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadInvoiceAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}/download",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DownloadInvoiceAttachmentResponse =
      new operations.DownloadInvoiceAttachmentResponse({
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
          res.data = out;
        }
        break;
    }

    return res;
  }

  /**
   * Get invoice as PDF
   *
   * @remarks
   * Get invoice as PDF
   */
  async downloadPdf(
    req: operations.DownloadInvoicePdfRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadInvoicePdfResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadInvoicePdfRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/invoices/{invoiceId}/pdf",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DownloadInvoicePdfResponse =
      new operations.DownloadInvoicePdfResponse({
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
          res.data = out;
        }
        break;
    }

    return res;
  }

  /**
   * Get invoice
   *
   * @remarks
   * Get invoice
   */
  async get(
    req: operations.GetInvoiceRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/invoices/{invoiceId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetInvoiceResponse =
      new operations.GetInvoiceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.invoice = utils.objectToClass(httpRes?.data, shared.Invoice);
        }
        break;
    }

    return res;
  }

  /**
   * Get invoice attachment
   *
   * @remarks
   * Get invoice attachment
   */
  async getAttachment(
    req: operations.GetInvoiceAttachmentRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInvoiceAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInvoiceAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetInvoiceAttachmentResponse =
      new operations.GetInvoiceAttachmentResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.attachment = utils.objectToClass(
            httpRes?.data,
            shared.Attachment
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get create/update invoice model
   *
   * @remarks
   * Get create/update invoice model. Returns the expected data for the request payload.
   *
   * See the examples for integration-specific indicative models.
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating and updating invoices.
   */
  async getCreateUpdateModel(
    req: operations.GetCreateUpdateInvoicesModelRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCreateUpdateInvoicesModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCreateUpdateInvoicesModelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/options/invoices",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetCreateUpdateInvoicesModelResponse =
      new operations.GetCreateUpdateInvoicesModelResponse({
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
   * List invoices
   *
   * @remarks
   * Gets the latest invoices for a company, with pagination
   */
  async list(
    req: operations.ListInvoicesRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInvoicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInvoicesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/data/invoices",
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

    const res: operations.ListInvoicesResponse =
      new operations.ListInvoicesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.invoices = utils.objectToClass(httpRes?.data, shared.Invoices);
        }
        break;
    }

    return res;
  }

  /**
   * List invoice attachments
   *
   * @remarks
   * List invoice attachments
   */
  async listAttachments(
    req: operations.ListInvoiceAttachmentsRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInvoiceAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInvoiceAttachmentsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
        ...config,
      });
    }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListInvoiceAttachmentsResponse =
      new operations.ListInvoiceAttachmentsResponse({
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
    }

    return res;
  }

  /**
   * Update invoice
   *
   * @remarks
   * Posts an updated invoice to the accounting package for a given company.
   *
   * Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).
   *
   * > **Supported Integrations**
   * >
   * > Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support updating invoices.
   */
  async update(
    req: operations.UpdateInvoiceRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateInvoiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateInvoiceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "invoice",
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

    const res: operations.UpdateInvoiceResponse =
      new operations.UpdateInvoiceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.updateInvoiceResponse = utils.objectToClass(
            httpRes?.data,
            shared.UpdateInvoiceResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Push invoice attachment
   *
   * @remarks
   * Push invoice attachment
   */
  async uploadAttachment(
    req: operations.UploadInvoiceAttachmentRequest,
    retries?: utils.RetryConfig,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadInvoiceAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadInvoiceAttachmentRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}/attachment",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "multipart"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

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

    const res: operations.UploadInvoiceAttachmentResponse =
      new operations.UploadInvoiceAttachmentResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        break;
    }

    return res;
  }
}
