/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReportComponent } from "./reportcomponent";
import { ReportDimension } from "./reportdimension";
import { ReportError } from "./reporterror";
import { ReportMeasure } from "./reportmeasure";
import { Expose, Type } from "class-transformer";

/**
 * Assess reports follow a consistent structure. Reports contain four sections of information:
 *
 * @remarks
 *
 * 1. Report definition information such as:
 *   a. The report info (e.g. enhanced_profit_and_loss).
 *   b. The display name of the report (e.g. Enhanced Profit and Loss).
 * 2. Information about the dimension contained in the reports such as:
 *   a. The type of dimension (e.g. datetime, recordRef).
 *   b. The display name of the dimension (e.g. Period, Category type, Category sub type).
 *   c. The details about each item within the dimension (e.g. displayName:"Jan 2022", start:"...", end:"...", id:"...", name:"...").
 * 3. Information about the measures contained in the report such as:
 *   a. The display name of the measure (e.g. value of account, percentage change).
 *   b. The type of the measure (e.g. currency, percentage).
 *   c. The unit of the measure (e.g. %, GBP).
 * 4. The data for the report. When the *includeDisplayName* parameter is set to *true*, it shows the *dimensionDisplayName* and *itemDisplayName* to make the data human-readable. The default setting for *includeDisplayName* is *false*.
 *
 * Reports can be rendered as follows (ordering is implicit rather than explicit):
 *
 * ![A table showing an example of how a report can be rendered](https://files.readme.io/1fa20ca-Report1.png)
 *
 * # Data model
 *
 * ## Dimensions
 */
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ReportDimension })
  @Expose({ name: "dimensions" })
  @Type(() => ReportDimension)
  dimensions?: ReportDimension[];

  @SpeakeasyMetadata({ elemType: ReportError })
  @Expose({ name: "errors" })
  @Type(() => ReportError)
  errors?: ReportError[];

  @SpeakeasyMetadata({ elemType: ReportMeasure })
  @Expose({ name: "measures" })
  @Type(() => ReportMeasure)
  measures?: ReportMeasure[];

  @SpeakeasyMetadata({ elemType: ReportComponent })
  @Expose({ name: "reportData" })
  @Type(() => ReportComponent)
  reportData?: ReportComponent[];

  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  reportInfo?: Record<string, string>;
}
