# BillCreditNotes
(*billCreditNotes*)

## Overview

Bill credit notes

### Available Operations

* [create](#create) - Create bill credit note
* [get](#get) - Get bill credit note
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bill credit note model
* [list](#list) - List bill credit notes
* [update](#update) - Update bill credit note
* [uploadAttachment](#uploadattachment) - Upload bill credit note attachment

## create

The *Create bill credit note* endpoint creates a new [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.billCreditNotes.create({
    billCreditNote: {
      allocatedOnDate: "2022-10-23T00:00:00.000Z",
      billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
      currency: "USD",
      discountPercentage: 0,
      id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
      issueDate: "2022-10-23T00:00:00.000Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<ID>",
          },
          quantity: 8592.13,
          taxRateRef: {},
          tracking: {
            categoryRefs: [
              {
                id: "<ID>",
              },
            ],
            customerRef: {
              id: "<ID>",
            },
            isBilledTo: BilledToType.NotApplicable,
            isRebilledTo: BilledToType.NotApplicable,
            projectRef: {
              id: "<ID>",
            },
          },
          trackingCategoryRefs: [
            {
              id: "<ID>",
            },
          ],
          unitAmount: 1343.65,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00.000Z",
      note: "Bill Credit Note with 1 line items, totaling 805.78",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00.000Z",
            currency: "EUR",
          },
          payment: {
            accountRef: {},
            currency: "EUR",
            paidOnDate: "2022-10-23T00:00:00.000Z",
          },
        },
      ],
      remainingCredit: 0,
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: BillCreditNoteStatus.Paid,
      subTotal: 805.78,
      supplementalData: {
        content: {
          "abnormally": {
            "deposit": "evolve",
          },
        },
      },
      supplierRef: {
        id: "<ID>",
      },
      totalAmount: 805.78,
      totalDiscount: 0,
      totalTaxAmount: 0,
      withholdingTax: [
        {
          amount: 7150.4,
          name: "SUV quantify Polestar",
        },
      ],
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateBillCreditNoteRequest](../../models/operations/createbillcreditnoterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateBillCreditNoteResponse](../../models/operations/createbillcreditnoteresponse.md)>**


## get

The *Get bill credit note* endpoint returns a single bill credit note for a given billCreditNoteId.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

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

  const res = await sdk.billCreditNotes.get({
    billCreditNoteId: "Northeast Hatchback Kia",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetBillCreditNoteRequest](../../models/operations/getbillcreditnoterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetBillCreditNoteResponse](../../models/operations/getbillcreditnoteresponse.md)>**


## getCreateUpdateModel

The *Get create/update bill credit note model* endpoint returns the expected data for the request payload when creating and updating a [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company and integration.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating a bill credit note.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.billCreditNotes.getCreateUpdateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetCreateUpdateBillCreditNotesModelRequest](../../models/operations/getcreateupdatebillcreditnotesmodelrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetCreateUpdateBillCreditNotesModelResponse](../../models/operations/getcreateupdatebillcreditnotesmodelresponse.md)>**


## list

The *List bill credit notes* endpoint returns a list of [bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

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

  const res = await sdk.billCreditNotes.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListBillCreditNotesRequest](../../models/operations/listbillcreditnotesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListBillCreditNotesResponse](../../models/operations/listbillcreditnotesresponse.md)>**


## update

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.billCreditNotes.update({
    billCreditNote: {
      allocatedOnDate: "2022-10-23T00:00:00.000Z",
      billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
      currency: "GBP",
      discountPercentage: 0,
      id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
      issueDate: "2022-10-23T00:00:00.000Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<ID>",
          },
          quantity: 156.52,
          taxRateRef: {},
          tracking: {
            categoryRefs: [
              {
                id: "<ID>",
              },
            ],
            customerRef: {
              id: "<ID>",
            },
            isBilledTo: BilledToType.NotApplicable,
            isRebilledTo: BilledToType.Customer,
            projectRef: {
              id: "<ID>",
            },
          },
          trackingCategoryRefs: [
            {
              id: "<ID>",
            },
          ],
          unitAmount: 9914.64,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00.000Z",
      note: "Bill Credit Note with 1 line items, totaling 805.78",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00.000Z",
            currency: "EUR",
          },
          payment: {
            accountRef: {},
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00.000Z",
          },
        },
      ],
      remainingCredit: 0,
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: BillCreditNoteStatus.Paid,
      subTotal: 805.78,
      supplementalData: {
        content: {
          "Arizona": {
            "Cotton": "extend",
          },
        },
      },
      supplierRef: {
        id: "<ID>",
      },
      totalAmount: 805.78,
      totalDiscount: 0,
      totalTaxAmount: 0,
      withholdingTax: [
        {
          amount: 2494.4,
          name: "Carolina syndicate",
        },
      ],
    },
    billCreditNoteId: "implement JBOD",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateBillCreditNoteRequest](../../models/operations/updatebillcreditnoterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateBillCreditNoteResponse](../../models/operations/updatebillcreditnoteresponse.md)>**


## uploadAttachment

---
stoplight-id: c26f5b1b19168
---

The *Upload bill credit note attachment* endpoint uploads an attachment and assigns it against a specific `billCreditNoteId`.

[Bill Credit Notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support uploading a bill credit note attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";

(async() => {
  const sdk = new CodatAccounting({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.billCreditNotes.uploadAttachment({
    requestBody: {
      content: "v/ghW&IC$x" as bytes <<<>>>,
      requestBody: "Elegant Producer Electric",
    },
    billCreditNoteId: "Iowa Bentley",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UploadBillCreditNoteAttachmentRequest](../../models/operations/uploadbillcreditnoteattachmentrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UploadBillCreditNoteAttachmentResponse](../../models/operations/uploadbillcreditnoteattachmentresponse.md)>**

