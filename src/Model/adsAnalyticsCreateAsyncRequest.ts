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
import { AdGroupSummaryStatus } from './adGroupSummaryStatus';
import { AdsAnalyticsMetricsFilter } from './adsAnalyticsMetricsFilter';
import { AdsAnalyticsTargetingType } from './adsAnalyticsTargetingType';
import { CampaignSummaryStatus } from './campaignSummaryStatus';
import { ConversionAttributionWindowDays } from './conversionAttributionWindowDays';
import { ConversionReportAttributionType } from './conversionReportAttributionType';
import { ConversionReportTimeType } from './conversionReportTimeType';
import { DataOutputFormat } from './dataOutputFormat';
import { Granularity } from './granularity';
import { MetricsReportingLevel } from './metricsReportingLevel';
import { ObjectiveType } from './objectiveType';
import { PinPromotionSummaryStatus } from './pinPromotionSummaryStatus';
import { ProductGroupSummaryStatus } from './productGroupSummaryStatus';
import { ReportingColumnAsync } from './reportingColumnAsync';


export interface AdsAnalyticsCreateAsyncRequest { 
    /**
     * Metric report start date (UTC). Format: YYYY-MM-DD
     */
    start_date: string;
    /**
     * Metric report end date (UTC). Format: YYYY-MM-DD
     */
    end_date: string;
    /**
     * TOTAL - metrics are aggregated over the specified date range.<br> DAY - metrics are broken down daily.<br> HOUR - metrics are broken down hourly.<br>WEEKLY - metrics are broken down weekly.<br>MONTHLY - metrics are broken down monthly
     */
    granularity: Granularity;
    /**
     * Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days.
     */
    click_window_days?: ConversionAttributionWindowDays;
    /**
     * Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days.
     */
    engagement_window_days?: ConversionAttributionWindowDays;
    /**
     * Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day.
     */
    view_window_days?: ConversionAttributionWindowDays;
    /**
     * The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event.
     */
    conversion_report_time?: ConversionReportTimeType;
    /**
     * List of types of attribution for the conversion report
     */
    attribution_types?: Array<ConversionReportAttributionType>;
    /**
     * List of campaign ids
     */
    campaign_ids?: Array<string>;
    /**
     * List of status values for filtering
     */
    campaign_statuses?: Array<CampaignSummaryStatus>;
    /**
     * List of values for filtering. [\"WEB_SESSIONS\"] in BETA.
     */
    campaign_objective_types?: Array<ObjectiveType>;
    /**
     * List of ad group ids
     */
    ad_group_ids?: Array<string>;
    /**
     * List of values for filtering
     */
    ad_group_statuses?: Array<AdGroupSummaryStatus>;
    /**
     * List of ad ids [This parameter is no supported for Product Item Level Reports]
     */
    ad_ids?: Array<string>;
    /**
     * List of values for filtering [This parameter is not supported for Product Item Level Reports]
     */
    ad_statuses?: Array<PinPromotionSummaryStatus>;
    /**
     * List of product group ids
     */
    product_group_ids?: Array<string>;
    /**
     * List of values for filtering
     */
    product_group_statuses?: Array<ProductGroupSummaryStatus>;
    /**
     * List of product item ids
     */
    product_item_ids?: Array<string>;
    /**
     * List of targeting types. Requires `level` to be a value ending in `_TARGETING`. [\"AGE_BUCKET_AND_GENDER\"] is in BETA and not yet available to all users.
     */
    targeting_types?: Array<AdsAnalyticsTargetingType>;
    /**
     * List of metrics filters
     */
    metrics_filters?: Array<AdsAnalyticsMetricsFilter>;
    /**
     * Metric and entity columns. Pin promotion and ad related columns are not supported for the Product Item level reports.
     */
    columns: Array<ReportingColumnAsync>;
    /**
     * Level of the report
     */
    level: MetricsReportingLevel;
    /**
     * Specification for formatting the report data. Reports in JSON will not zero-fill metrics, whereas reports in CSV will. Both report formats will omit rows where all the columns are equal to 0.
     */
    report_format?: DataOutputFormat;
    /**
     * Whether to first sort the report by date or by ID. BY_DATE is recommended for large requests. BY_DATE for JSON format is currently not supported.
     */
    primary_sort?: AdsAnalyticsCreateAsyncRequest.PrimarySortEnum;
}
export namespace AdsAnalyticsCreateAsyncRequest {
    export type PrimarySortEnum = 'BY_ID' | 'BY_DATE';
    export const PrimarySortEnum = {
        Id: 'BY_ID' as PrimarySortEnum,
        Date: 'BY_DATE' as PrimarySortEnum
    }
}
