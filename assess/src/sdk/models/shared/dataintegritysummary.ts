/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataIntegrityByAmount } from "./dataintegritybyamount";
import { DataIntegrityByCount } from "./dataintegritybycount";
import { Expose, Type } from "class-transformer";

export class DataIntegritySummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "byAmount" })
  @Type(() => DataIntegrityByAmount)
  byAmount?: DataIntegrityByAmount;

  @SpeakeasyMetadata()
  @Expose({ name: "byCount" })
  @Type(() => DataIntegrityByCount)
  byCount?: DataIntegrityByCount;

  /**
   * The data type which the data type in the URL has been matched against. For example, if you've matched accountTransactions and banking-transactions, and you call this endpoint with accountTransactions in the URL, this property would be banking-transactions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}
