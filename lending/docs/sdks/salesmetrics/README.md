# SalesMetrics
(*sales.metrics*)

### Available Operations

* [getCustomerRetention](#getcustomerretention) - Get customer retention metrics
* [getLifetimeValue](#getlifetimevalue) - Get lifetime value metrics
* [getRevenue](#getrevenue) - Get commerce revenue metrics

## getCustomerRetention

The *Get customer retention metrics* endpoint returns customer retention insights for a specific company's commerce connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

#### Customer retention metrics

- __Existing customers__: the number of unique customers that have placed an order(s) in the specified period and any previous period. 
- __New customers__: the number of unique customers that have placed an order(s) in the specified period and none in any previous period.
- __Total customers__: the total number of existing and new customers within the specified period.
- __Retention rate__: the ratio of existing customers within the specified period compared to the total customers at the end of the previous period represented as a percentage.
- __Repeat rate__: the ratio of existing customers to total customers over the specified period represented as a percentage.

Learn more about the formulas used to calculate customer retention metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).

#### Response structure

The Customer retention report's dimensions and measures are:

| Index                       | Dimensions                 |
|-----------------------------|----------------------------|
| `index` = 0                 | Period                     |
| `index` = 1                 | Customer retention metrics |

| Index                | Measures    |
|----------------------|------------|
| `index` = 0          | Count      |
| `index` = 1          | Percentage |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sales.metrics.getCustomerRetention({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 497588,
    periodLength: 613110,
    periodUnit: PeriodUnit.Week,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetCommerceCustomerRetentionMetricsRequest](../../models/operations/getcommercecustomerretentionmetricsrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetCommerceCustomerRetentionMetricsResponse](../../models/operations/getcommercecustomerretentionmetricsresponse.md)>**


## getLifetimeValue

The *Get lifetime value metrics* endpoint returns the average revenue that a specific company will generate throughout its lifespan over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company.

Learn more about the formulas used to calculate the lifetime value metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).

Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more detail on commerce reports in Lending.

#### Response structure

The Lifetime value report's dimensions and measures are:

| Index         | Dimensions             |
|---------------|------------------------|
| `index` = 0   | Period                 |
| `index` = 1   | Lifetime value metrics |

| Index             | Measures |
|-------------------|---------|
|   `index` = 1     | Value   |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sales.metrics.getLifetimeValue({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 900865,
    periodLength: 614777,
    periodUnit: PeriodUnit.Month,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetCommerceLifetimeValueMetricsRequest](../../models/operations/getcommercelifetimevaluemetricsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetCommerceLifetimeValueMetricsResponse](../../models/operations/getcommercelifetimevaluemetricsresponse.md)>**


## getRevenue

The *Get revenue report* endpoint returns the revenue and revenue growth for a specific company connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

Learn more about the formulas used to calculate the revenue metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).

Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.

#### Response structure

The Revenue report's dimensions and measures are:

| Index         | Dimensions |
|---------------|------------|
|   `index` = 0 | Period     |
|   `index` = 1 | Revenue    |

| Index         | Measures                                                                                                                 |
|---------------|--------------------------------------------------------------------------------------------------------------------------|
| `index` = 0   | Value                                                                                                                    |
| `index` = 1   | Percentage change, defined as the change between the current and previous periods' values and expressed as a percentage. |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.sales.metrics.getRevenue({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 307462,
    periodLength: 944219,
    periodUnit: PeriodUnit.Day,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCommerceRevenueMetricsRequest](../../models/operations/getcommercerevenuemetricsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCommerceRevenueMetricsResponse](../../models/operations/getcommercerevenuemetricsresponse.md)>**

