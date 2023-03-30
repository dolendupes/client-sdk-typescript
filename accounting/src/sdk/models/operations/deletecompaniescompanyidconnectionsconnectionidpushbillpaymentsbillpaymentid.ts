/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=billPaymentId",
  })
  billPaymentId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

/**
 * Available Data types
 */
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationReferenceDataTypeEnum {
  AccountTransactions = "accountTransactions",
  BalanceSheet = "balanceSheet",
  BankAccounts = "bankAccounts",
  BankTransactions = "bankTransactions",
  BillCreditNotes = "billCreditNotes",
  BillPayments = "billPayments",
  Bills = "bills",
  CashFlowStatement = "cashFlowStatement",
  ChartOfAccounts = "chartOfAccounts",
  Company = "company",
  CreditNotes = "creditNotes",
  Customers = "customers",
  DirectCosts = "directCosts",
  DirectIncomes = "directIncomes",
  Invoices = "invoices",
  Items = "items",
  JournalEntries = "journalEntries",
  Journals = "journals",
  PaymentMethods = "paymentMethods",
  Payments = "payments",
  ProfitAndLoss = "profitAndLoss",
  PurchaseOrders = "purchaseOrders",
  SalesOrders = "salesOrders",
  Suppliers = "suppliers",
  TaxRates = "taxRates",
  TrackingCategories = "trackingCategories",
  Transfers = "transfers",
  BankingAccountBalances = "banking-accountBalances",
  BankingAccounts = "banking-accounts",
  BankingTransactionCategories = "banking-transactionCategories",
  BankingTransactions = "banking-transactions",
  CommerceCompanyInfo = "commerce-companyInfo",
  CommerceCustomers = "commerce-customers",
  CommerceDisputes = "commerce-disputes",
  CommerceLocations = "commerce-locations",
  CommerceOrders = "commerce-orders",
  CommercePaymentMethods = "commerce-paymentMethods",
  CommercePayments = "commerce-payments",
  CommerceProductCategories = "commerce-productCategories",
  CommerceProducts = "commerce-products",
  CommerceTaxComponents = "commerce-taxComponents",
  CommerceTransactions = "commerce-transactions",
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationReference extends SpeakeasyBase {
  /**
   * Available Data types
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationReferenceDataTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushChangeTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationReference
  )
  recordRef?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushOperationReference;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChangesPushChangeTypeEnum;
}

/**
 * The type of data being pushed, eg invoices, customers.
 */
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONDataTypeEnum {
  AccountTransactions = "accountTransactions",
  BalanceSheet = "balanceSheet",
  BankAccounts = "bankAccounts",
  BankTransactions = "bankTransactions",
  BillCreditNotes = "billCreditNotes",
  BillPayments = "billPayments",
  Bills = "bills",
  CashFlowStatement = "cashFlowStatement",
  ChartOfAccounts = "chartOfAccounts",
  Company = "company",
  CreditNotes = "creditNotes",
  Customers = "customers",
  DirectCosts = "directCosts",
  DirectIncomes = "directIncomes",
  Invoices = "invoices",
  Items = "items",
  JournalEntries = "journalEntries",
  Journals = "journals",
  PaymentMethods = "paymentMethods",
  Payments = "payments",
  ProfitAndLoss = "profitAndLoss",
  PurchaseOrders = "purchaseOrders",
  SalesOrders = "salesOrders",
  Suppliers = "suppliers",
  TaxRates = "taxRates",
  TrackingCategories = "trackingCategories",
  Transfers = "transfers",
  BankingAccountBalances = "banking-accountBalances",
  BankingAccounts = "banking-accounts",
  BankingTransactionCategories = "banking-transactionCategories",
  BankingTransactions = "banking-transactions",
  CommerceCompanyInfo = "commerce-companyInfo",
  CommerceCustomers = "commerce-customers",
  CommerceDisputes = "commerce-disputes",
  CommerceLocations = "commerce-locations",
  CommerceOrders = "commerce-orders",
  CommercePaymentMethods = "commerce-paymentMethods",
  CommercePayments = "commerce-payments",
  CommerceProductCategories = "commerce-productCategories",
  CommerceProducts = "commerce-products",
  CommerceTaxComponents = "commerce-taxComponents",
  CommerceTransactions = "commerce-transactions",
}

/**
 * The status of the push operation.
 */
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONPushOperationStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validatorName" })
  validatorName?: string;
}

/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 */
export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem
  )
  errors?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem
  )
  warnings?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidationValidationItem[];
}

/**
 * OK
 */
export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges,
  })
  @Expose({ name: "changes" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges
  )
  changes?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONChanges[];

  /**
   * Unique identifier for your SMB in Codat.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  /**
   * The datetime when the push was completed, null if Pending.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completedOnUtc" })
  completedOnUtc?: string;

  /**
   * Unique identifier for a company's data connection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataConnectionKey" })
  dataConnectionKey: string;

  /**
   * The type of data being pushed, eg invoices, customers.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONDataTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  /**
   * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pushOperationKey" })
  pushOperationKey: string;

  /**
   * The datetime when the push was requested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requestedOnUtc" })
  requestedOnUtc: string;

  /**
   * The status of the push operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONPushOperationStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeoutInSeconds" })
  timeoutInSeconds?: number;

  /**
   * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidation
  )
  validation?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONValidation;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSONObject?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentId200ApplicationJSON;
}
