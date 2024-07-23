/**
 * Pinterest REST API
 * Pinterest\'s REST API
 *
 * The version of the OpenAPI document: 5.13.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AdCommonTrackingUrls } from './adCommonTrackingUrls';
import { CampaignSummaryStatus } from './campaignSummaryStatus';
import { EntityStatus } from './entityStatus';


/**
 * Campaign Data
 */
export interface CampaignCommon { 
    /**
     * Campaign\'s Advertiser ID. If you want to create a campaign in a Business Account shared account you need to specify the Business Access advertiser ID in both the query path param as well as the request body schema.
     */
    ad_account_id?: string;
    /**
     * Campaign name.
     */
    name?: string;
    status?: EntityStatus;
    /**
     * Campaign total spending cap. Required for Campaign Budget Optimization (CBO) campaigns. This and \"daily_spend_cap\" cannot be set at the same time.
     */
    lifetime_spend_cap?: number | null;
    /**
     * Campaign daily spending cap. Required for Campaign Budget Optimization (CBO) campaigns. This and \"lifetime_spend_cap\" cannot be set at the same time.
     */
    daily_spend_cap?: number | null;
    /**
     * Order line ID that appears on the invoice.
     */
    order_line_id?: string | null;
    tracking_urls?: AdCommonTrackingUrls | null;
    /**
     * Campaign start time. Unix timestamp in seconds. Only used for Campaign Budget Optimization (CBO) campaigns.
     */
    start_time?: number | null;
    /**
     * Campaign end time. Unix timestamp in seconds. Only used for Campaign Budget Optimization (CBO) campaigns.
     */
    end_time?: number | null;
    summary_status?: CampaignSummaryStatus;
}
export namespace CampaignCommon {
}
