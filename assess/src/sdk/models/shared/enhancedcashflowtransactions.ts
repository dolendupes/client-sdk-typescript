/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { EnhancedCashFlowItem } from "./enhancedcashflowitem";
import { ReportInfo } from "./reportinfo";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class EnhancedCashFlowTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DataSource })
  @Expose({ name: "dataSources" })
  @Type(() => DataSource)
  dataSources?: DataSource[];

  /**
   * Report additional information, which is specific to Assess reports
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => ReportInfo)
  reportInfo?: ReportInfo;

  @SpeakeasyMetadata({ elemType: EnhancedCashFlowItem })
  @Expose({ name: "reportItems" })
  @Type(() => EnhancedCashFlowItem)
  reportItems?: EnhancedCashFlowItem[];
}
