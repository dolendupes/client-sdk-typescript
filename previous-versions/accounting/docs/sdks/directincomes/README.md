# DirectIncomes
(*directIncomes*)

## Overview

Direct incomes

### Available Operations

* [create](#create) - Create direct income
* [downloadAttachment](#downloadattachment) - Download direct income attachment
* [get](#get) - Get direct income
* [getAttachment](#getattachment) - Get direct income attachment
* [getCreateModel](#getcreatemodel) - Get create direct income model
* [list](#list) - List direct incomes
* [listAttachments](#listattachments) - List direct income attachments
* [uploadAttachment](#uploadattachment) - Create direct income attachment

## create

The *Create direct income* endpoint creates a new [direct income](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company's connection.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale. For example, cash sales of items to a customer, referral commissions, and service fee refunds are considered direct incomes.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DataType } from "@codat/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.create({
    directIncome: {
      contactRef: {
        dataType: DataType.Invoices,
        id: "<ID>",
      },
      currency: "USD",
      issueDate: "2022-10-23T00:00:00.000Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<ID>",
          },
          quantity: 6384.24,
          taxRateRef: {},
          trackingCategoryRefs: [
            {
              id: "<ID>",
            },
          ],
          unitAmount: 8592.13,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00.000Z",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00.000Z",
            currency: "GBP",
          },
          payment: {
            accountRef: {},
            currency: "EUR",
            paidOnDate: "2022-10-23T00:00:00.000Z",
          },
        },
      ],
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      subTotal: 7964.74,
      supplementalData: {
        content: {
          "abnormally": {
            "deposit": "evolve",
          },
        },
      },
      taxAmount: 7150.4,
      totalAmount: 7926.2,
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateDirectIncomeRequest](../../models/operations/createdirectincomerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateDirectIncomeResponse](../../models/operations/createdirectincomeresponse.md)>**


## downloadAttachment

The *Download direct income attachment* endpoint downloads a specific attachment for a given `directIncomeId` and `attachmentId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support downloading a direct income attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.downloadAttachment({
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directIncomeId: "Dakota Avon specifically",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DownloadDirectIncomeAttachmentRequest](../../models/operations/downloaddirectincomeattachmentrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DownloadDirectIncomeAttachmentResponse](../../models/operations/downloaddirectincomeattachmentresponse.md)>**


## get

The *Get direct income* endpoint returns a single direct income for a given directIncomeId.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support getting a specific direct income.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directIncomeId: "Northeast Hatchback Kia",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetDirectIncomeRequest](../../models/operations/getdirectincomerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetDirectIncomeResponse](../../models/operations/getdirectincomeresponse.md)>**


## getAttachment

The *Get direct income attachment* endpoint returns a specific attachment for a given `directIncomeId` and `attachmentId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support getting a direct income attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.getAttachment({
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directIncomeId: "array East along",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetDirectIncomeAttachmentRequest](../../models/operations/getdirectincomeattachmentrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetDirectIncomeAttachmentResponse](../../models/operations/getdirectincomeattachmentresponse.md)>**


## getCreateModel

The *Get create direct income model* endpoint returns the expected data for the request payload when creating a [direct income](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company and integration.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating a direct income.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetCreateDirectIncomesModelRequest](../../models/operations/getcreatedirectincomesmodelrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetCreateDirectIncomesModelResponse](../../models/operations/getcreatedirectincomesmodelresponse.md)>**


## list

The *List direct incomes* endpoint returns a list of [direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company's connection.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListDirectIncomesRequest](../../models/operations/listdirectincomesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListDirectIncomesResponse](../../models/operations/listdirectincomesresponse.md)>**


## listAttachments

The *List direct income attachments* endpoint returns a list of attachments available to download for given `directIncomeId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support listing direct income attachments.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.listAttachments({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directIncomeId: "intuitive Frozen ouch",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.ListDirectIncomeAttachmentsRequest](../../models/operations/listdirectincomeattachmentsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ListDirectIncomeAttachmentsResponse](../../models/operations/listdirectincomeattachmentsresponse.md)>**


## uploadAttachment

The *Upload direct income attachment* endpoint uploads an attachment and assigns it against a specific `directIncomeId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support uploading a direct income attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.directIncomes.uploadAttachment({
    requestBody: {
      content: "v/ghW&IC$x" as bytes <<<>>>,
      requestBody: "Elegant Producer Electric",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directIncomeId: "Iowa Bentley",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UploadDirectIncomeAttachmentRequest](../../models/operations/uploaddirectincomeattachmentrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UploadDirectIncomeAttachmentResponse](../../models/operations/uploaddirectincomeattachmentresponse.md)>**

