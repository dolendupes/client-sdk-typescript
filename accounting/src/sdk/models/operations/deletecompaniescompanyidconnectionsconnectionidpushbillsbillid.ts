/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRequest extends SpeakeasyBase {
  /**
   * Unique identifier for a bill
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=billId",
  })
  billId: string;

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
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationReferenceDataTypeEnum {
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

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationReference extends SpeakeasyBase {
  /**
   * Available Data types
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationReferenceDataTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushChangeTypeEnum {
  Unknown = "Unknown",
  Created = "Created",
  Modified = "Modified",
  Deleted = "Deleted",
  AttachmentUploaded = "AttachmentUploaded",
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationReference
  )
  recordRef?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushOperationReference;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChangesPushChangeTypeEnum;
}

/**
 * The type of data being pushed, eg invoices, customers.
 */
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONDataTypeEnum {
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
export enum DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONPushOperationStatusEnum {
  Pending = "Pending",
  Failed = "Failed",
  Success = "Success",
  TimedOut = "TimedOut",
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
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
export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "errors" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem
  )
  errors?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem
  )
  warnings?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidationValidationItem[];
}

/**
 * OK
 */
export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges,
  })
  @Expose({ name: "changes" })
  @Type(
    () =>
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges
  )
  changes?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONChanges[];

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
  dataType?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONDataTypeEnum;

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
  status: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONPushOperationStatusEnum;

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
      DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidation
  )
  validation?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONValidation;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

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
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSONObject?: DeleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId200ApplicationJSON;
}
