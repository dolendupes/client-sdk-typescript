/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { CompanyManagement } from "./companymanagement";
import { Configuration } from "./configuration";
import { Integrations } from "./integrations";
import * as shared from "./models/shared";
import { Sync } from "./sync";
import { SyncFlowPreferences } from "./syncflowpreferences";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.codat.io",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.1";
    sdkVersion = "0.26.0";
    genVersion = "2.50.2";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Commerce API: The API for Sync for Commerce. Sync for Commerce is an API and a set of supporting tools. It has been built to enable e-commerce, point of sale platforms to provide high-quality integrations with numerous accounting platform through standardized API, seamlessly transforming business sale's data into accounting artefacts.
 *
 * @remarks
 * [Read More...](https://docs.codat.io/sfc/overview)
 */
export class CodatSyncCommerce {
    /**
     * Create new and manage existing Sync for Commerce companies.
     */
    public companyManagement: CompanyManagement;
    /**
     * Expressively configure preferences for any given Sync for Commerce company.
     */
    public configuration: Configuration;
    /**
     * View useful information about codat's integrations.
     */
    public integrations: Integrations;
    /**
     * Initiate a sync of Sync for Commerce company data into their respective accounting software.
     */
    public sync: Sync;
    /**
     * Configure preferences for any given Sync for Commerce company using sync flow.
     */
    public syncFlowPreferences: SyncFlowPreferences;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.companyManagement = new CompanyManagement(this.sdkConfiguration);
        this.configuration = new Configuration(this.sdkConfiguration);
        this.integrations = new Integrations(this.sdkConfiguration);
        this.sync = new Sync(this.sdkConfiguration);
        this.syncFlowPreferences = new SyncFlowPreferences(this.sdkConfiguration);
    }
}
