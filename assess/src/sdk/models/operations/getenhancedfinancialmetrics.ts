/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetEnhancedFinancialMetricsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
    numberOfPeriods: number;

    /**
     * The number of months per period. E.g. 2 = 2 months per period.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
    periodLength: number;

    /**
     * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
    reportDate: string;

    /**
     * If set to true, then the system includes the input values within the response.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showMetricInputs" })
    showMetricInputs?: boolean;
}

export class GetEnhancedFinancialMetricsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    financialMetrics?: shared.FinancialMetrics;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
