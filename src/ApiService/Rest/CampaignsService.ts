import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { AdsAnalyticsTargetingType } from '../../Model/adsAnalyticsTargetingType';
import { CampaignCreateRequest } from '../../Model/campaignCreateRequest';
import { CampaignCreateResponse } from '../../Model/campaignCreateResponse';
import { CampaignResponse } from '../../Model/campaignResponse';
import { CampaignUpdateRequest } from '../../Model/campaignUpdateRequest';
import { CampaignUpdateResponse } from '../../Model/campaignUpdateResponse';
import { CampaignsAnalyticsResponseInner } from '../../Model/campaignsAnalyticsResponseInner';
import { CampaignsList200Response } from '../../Model/campaignsList200Response';
import { ConversionReportAttributionType } from '../../Model/conversionReportAttributionType';
import { Granularity } from '../../Model/granularity';
import { MetricsResponse } from '../../Model/metricsResponse';

import { COLLECTION_FORMATS } from '../../Constant/variables';

export class CampaignsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.CampaignsService';

    constructor(
        serviceName: string,
        client: ApiClient,
        oAuth2: OAuth2ApiService
    ) {
        super(serviceName, client, oAuth2);
    }

    get basePath() {
        return 'https://api.pinterest.com/v5';
    }

    /**
     * Get targeting analytics for campaigns
     * Get targeting analytics for one or more campaigns. For the requested account and metrics, the response will include the requested metric information (e.g. SPEND_IN_DOLLAR) for the requested target type (e.g. "age_bucket") for applicable values (e.g. "45-49"). &lt;p/&gt; - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Analyst, Campaign Manager. - If granularity is not HOUR, the furthest back you can are allowed to pull data is 90 days before the current date in UTC time and the max time range supported is 90 days. - If granularity is HOUR, the furthest back you can are allowed to pull data is 8 days before the current date in UTC time and the max time range supported is 3 days.
     * @param adAccountId Unique identifier of an ad account.
     * @param campaignIds List of Campaign Ids to use to filter the results.
     * @param startDate Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today.
     * @param endDate Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date.
     * @param targetingTypes Targeting type breakdowns for the report. The reporting per targeting type &lt;br&gt; is independent from each other. ["AGE_BUCKET_AND_GENDER"] is in BETA and not yet available to all users.
     * @param columns Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile\&#39;s currency field. For USD,($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it\&#39;s microdollars. Otherwise, it\&#39;s in microunits of the advertiser\&#39;s currency.&lt;br/&gt;For example, if the advertiser\&#39;s currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).&lt;br/&gt;If a column has no value, it may not be returned
     * @param granularity TOTAL - metrics are aggregated over the specified date range.&lt;br&gt; DAY - metrics are broken down daily.&lt;br&gt; HOUR - metrics are broken down hourly.&lt;br&gt;WEEKLY - metrics are broken down weekly.&lt;br&gt;MONTHLY - metrics are broken down monthly
     * @param clickWindowDays Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to &#x60;30&#x60; days.
     * @param engagementWindowDays Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to &#x60;30&#x60; days.
     * @param viewWindowDays Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to &#x60;1&#x60; day.
     * @param conversionReportTime The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event.
     * @param attributionTypes List of types of attribution for the conversion report
     */
    public async campaignTargetingAnalyticsGet(adAccountId: string, campaignIds: Array<string>, startDate: string, endDate: string, targetingTypes: Array<AdsAnalyticsTargetingType>, columns: Array<'SPEND_IN_MICRO_DOLLAR' | 'PAID_IMPRESSION' | 'SPEND_IN_DOLLAR' | 'CPC_IN_MICRO_DOLLAR' | 'ECPC_IN_MICRO_DOLLAR' | 'ECPC_IN_DOLLAR' | 'CTR' | 'ECTR' | 'CAMPAIGN_NAME' | 'PIN_ID' | 'TOTAL_ENGAGEMENT' | 'ENGAGEMENT_1' | 'ENGAGEMENT_2' | 'ECPE_IN_DOLLAR' | 'ENGAGEMENT_RATE' | 'EENGAGEMENT_RATE' | 'ECPM_IN_MICRO_DOLLAR' | 'REPIN_RATE' | 'CTR_2' | 'CAMPAIGN_ID' | 'ADVERTISER_ID' | 'AD_ACCOUNT_ID' | 'PIN_PROMOTION_ID' | 'AD_ID' | 'AD_GROUP_ID' | 'CAMPAIGN_ENTITY_STATUS' | 'CAMPAIGN_OBJECTIVE_TYPE' | 'CPM_IN_MICRO_DOLLAR' | 'CPM_IN_DOLLAR' | 'AD_GROUP_ENTITY_STATUS' | 'ORDER_LINE_ID' | 'ORDER_LINE_NAME' | 'CLICKTHROUGH_1' | 'REPIN_1' | 'IMPRESSION_1' | 'IMPRESSION_1_GROSS' | 'CLICKTHROUGH_1_GROSS' | 'OUTBOUND_CLICK_1' | 'CLICKTHROUGH_2' | 'REPIN_2' | 'IMPRESSION_2' | 'OUTBOUND_CLICK_2' | 'TOTAL_CLICKTHROUGH' | 'TOTAL_IMPRESSION' | 'TOTAL_IMPRESSION_USER' | 'TOTAL_IMPRESSION_FREQUENCY' | 'COST_PER_OUTBOUND_CLICK_IN_DOLLAR' | 'TOTAL_ENGAGEMENT_SIGNUP' | 'TOTAL_ENGAGEMENT_CHECKOUT' | 'TOTAL_ENGAGEMENT_LEAD' | 'TOTAL_CLICK_SIGNUP' | 'TOTAL_CLICK_CHECKOUT' | 'TOTAL_CLICK_ADD_TO_CART' | 'TOTAL_CLICK_LEAD' | 'TOTAL_VIEW_SIGNUP' | 'TOTAL_VIEW_CHECKOUT' | 'TOTAL_VIEW_ADD_TO_CART' | 'TOTAL_VIEW_LEAD' | 'TOTAL_CONVERSIONS' | 'TOTAL_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_SESSIONS' | 'WEB_SESSIONS_1' | 'WEB_SESSIONS_2' | 'CAMPAIGN_LIFETIME_SPEND_CAP' | 'CAMPAIGN_DAILY_SPEND_CAP' | 'TOTAL_PAGE_VISIT' | 'TOTAL_SIGNUP' | 'TOTAL_CHECKOUT' | 'TOTAL_CUSTOM' | 'TOTAL_LEAD' | 'TOTAL_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CUSTOM_VALUE_IN_MICRO_DOLLAR' | 'PAGE_VISIT_COST_PER_ACTION' | 'PAGE_VISIT_ROAS' | 'CHECKOUT_ROAS' | 'CUSTOM_ROAS' | 'VIDEO_MRC_VIEWS_1' | 'VIDEO_3SEC_VIEWS_2' | 'VIDEO_P100_COMPLETE_2' | 'VIDEO_P0_COMBINED_2' | 'VIDEO_P25_COMBINED_2' | 'VIDEO_P50_COMBINED_2' | 'VIDEO_P75_COMBINED_2' | 'VIDEO_P95_COMBINED_2' | 'VIDEO_MRC_VIEWS_2' | 'VIDEO_LENGTH' | 'ECPV_IN_DOLLAR' | 'ECPCV_IN_DOLLAR' | 'ECPCV_P95_IN_DOLLAR' | 'TOTAL_VIDEO_3SEC_VIEWS' | 'TOTAL_VIDEO_P100_COMPLETE' | 'TOTAL_VIDEO_P0_COMBINED' | 'TOTAL_VIDEO_P25_COMBINED' | 'TOTAL_VIDEO_P50_COMBINED' | 'TOTAL_VIDEO_P75_COMBINED' | 'TOTAL_VIDEO_P95_COMBINED' | 'TOTAL_VIDEO_MRC_VIEWS' | 'TOTAL_VIDEO_AVG_WATCHTIME_IN_SECOND' | 'TOTAL_REPIN_RATE' | 'WEB_CHECKOUT_COST_PER_ACTION' | 'WEB_CHECKOUT_ROAS' | 'TOTAL_WEB_CHECKOUT' | 'TOTAL_WEB_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_CLICK_CHECKOUT' | 'TOTAL_WEB_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_ENGAGEMENT_CHECKOUT' | 'TOTAL_WEB_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_VIEW_CHECKOUT' | 'TOTAL_WEB_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'INAPP_CHECKOUT_COST_PER_ACTION' | 'TOTAL_OFFLINE_CHECKOUT' | 'IDEA_PIN_PRODUCT_TAG_VISIT_1' | 'IDEA_PIN_PRODUCT_TAG_VISIT_2' | 'TOTAL_IDEA_PIN_PRODUCT_TAG_VISIT' | 'LEADS' | 'COST_PER_LEAD' | 'QUIZ_COMPLETED' | 'QUIZ_COMPLETION_RATE' | 'SHOWCASE_PIN_CLICKTHROUGH' | 'SHOWCASE_SUBPAGE_CLICKTHROUGH' | 'SHOWCASE_SUBPIN_CLICKTHROUGH' | 'SHOWCASE_SUBPAGE_IMPRESSION' | 'SHOWCASE_SUBPIN_IMPRESSION' | 'SHOWCASE_SUBPAGE_SWIPE_LEFT' | 'SHOWCASE_SUBPAGE_SWIPE_RIGHT' | 'SHOWCASE_SUBPIN_SWIPE_LEFT' | 'SHOWCASE_SUBPIN_SWIPE_RIGHT' | 'SHOWCASE_SUBPAGE_REPIN' | 'SHOWCASE_SUBPIN_REPIN' | 'SHOWCASE_SUBPAGE_CLOSEUP' | 'SHOWCASE_CARD_THUMBNAIL_SWIPE_FORWARD' | 'SHOWCASE_CARD_THUMBNAIL_SWIPE_BACKWARD' | 'SHOWCASE_AVERAGE_SUBPAGE_CLOSEUP_PER_SESSION' | 'TOTAL_CHECKOUT_CONVERSION_RATE' | 'TOTAL_VIEW_CATEGORY_CONVERSION_RATE' | 'TOTAL_ADD_TO_CART_CONVERSION_RATE' | 'TOTAL_SIGNUP_CONVERSION_RATE' | 'TOTAL_PAGE_VISIT_CONVERSION_RATE' | 'TOTAL_LEAD_CONVERSION_RATE' | 'TOTAL_SEARCH_CONVERSION_RATE' | 'TOTAL_WATCH_VIDEO_CONVERSION_RATE' | 'TOTAL_UNKNOWN_CONVERSION_RATE' | 'TOTAL_CUSTOM_CONVERSION_RATE'>, granularity: Granularity, clickWindowDays?: 0 | 1 | 7 | 14 | 30 | 60, engagementWindowDays?: 0 | 1 | 7 | 14 | 30 | 60, viewWindowDays?: 0 | 1 | 7 | 14 | 30 | 60, conversionReportTime?: 'TIME_OF_AD_ACTION' | 'TIME_OF_CONVERSION', attributionTypes?: ConversionReportAttributionType): Promise<MetricsResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling campaignTargetingAnalyticsGet.');
        }

        if (campaignIds === null || campaignIds === undefined) {
            throw new Error('Required parameter campaignIds was null or undefined when calling campaignTargetingAnalyticsGet.');
        }

        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling campaignTargetingAnalyticsGet.');
        }

        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling campaignTargetingAnalyticsGet.');
        }

        if (targetingTypes === null || targetingTypes === undefined) {
            throw new Error('Required parameter targetingTypes was null or undefined when calling campaignTargetingAnalyticsGet.');
        }

        if (columns === null || columns === undefined) {
            throw new Error('Required parameter columns was null or undefined when calling campaignTargetingAnalyticsGet.');
        }

        if (granularity === null || granularity === undefined) {
            throw new Error('Required parameter granularity was null or undefined when calling campaignTargetingAnalyticsGet.');
        }

        let queryParameters: string[] = [];
        if (campaignIds) {
            campaignIds.forEach((element) => {
                queryParameters.push('campaignIds=' + encodeURIComponent(String(element)));
            })
        }
        if (startDate !== undefined) {
            queryParameters.push('startDate=' + encodeURIComponent(String(startDate)));
        }
        if (endDate !== undefined) {
            queryParameters.push('endDate=' + encodeURIComponent(String(endDate)));
        }
        if (targetingTypes) {
            queryParameters.push('targetingTypes=' + encodeURIComponent(targetingTypes.join(COLLECTION_FORMATS['csv'])));
        }
        if (columns) {
            queryParameters.push('columns=' + encodeURIComponent(columns.join(COLLECTION_FORMATS['csv'])));
        }
        if (granularity !== undefined) {
            queryParameters.push('granularity=' + encodeURIComponent(String(granularity)));
        }
        if (clickWindowDays !== undefined) {
            queryParameters.push('clickWindowDays=' + encodeURIComponent(String(clickWindowDays)));
        }
        if (engagementWindowDays !== undefined) {
            queryParameters.push('engagementWindowDays=' + encodeURIComponent(String(engagementWindowDays)));
        }
        if (viewWindowDays !== undefined) {
            queryParameters.push('viewWindowDays=' + encodeURIComponent(String(viewWindowDays)));
        }
        if (conversionReportTime !== undefined) {
            queryParameters.push('conversionReportTime=' + encodeURIComponent(String(conversionReportTime)));
        }
        if (attributionTypes !== undefined) {
            queryParameters.push('attributionTypes=' + encodeURIComponent(String(attributionTypes)));
        }

        const response: MetricsResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/campaigns/targeting_analytics?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get campaign analytics
     * Get analytics for the specified campaigns in the specified &lt;code&gt;ad_account_id&lt;/code&gt;, filtered by the specified options. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Analyst, Campaign Manager. - If granularity is not HOUR, the furthest back you can are allowed to pull data is 90 days before the current date in UTC time and the max time range supported is 90 days. - If granularity is HOUR, the furthest back you can are allowed to pull data is 8 days before the current date in UTC time and the max time range supported is 3 days.
     * @param adAccountId Unique identifier of an ad account.
     * @param startDate Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today.
     * @param endDate Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date.
     * @param campaignIds List of Campaign Ids to use to filter the results.
     * @param columns Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile\&#39;s currency field. For USD,($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it\&#39;s microdollars. Otherwise, it\&#39;s in microunits of the advertiser\&#39;s currency.&lt;br/&gt;For example, if the advertiser\&#39;s currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).&lt;br/&gt;If a column has no value, it may not be returned
     * @param granularity TOTAL - metrics are aggregated over the specified date range.&lt;br&gt; DAY - metrics are broken down daily.&lt;br&gt; HOUR - metrics are broken down hourly.&lt;br&gt;WEEKLY - metrics are broken down weekly.&lt;br&gt;MONTHLY - metrics are broken down monthly
     * @param clickWindowDays Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to &#x60;30&#x60; days.
     * @param engagementWindowDays Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to &#x60;30&#x60; days.
     * @param viewWindowDays Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to &#x60;1&#x60; day.
     * @param conversionReportTime The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event.
     */
    public async campaignsAnalytics(adAccountId: string, startDate: string, endDate: string, campaignIds: Array<string>, columns: Array<'SPEND_IN_MICRO_DOLLAR' | 'PAID_IMPRESSION' | 'SPEND_IN_DOLLAR' | 'CPC_IN_MICRO_DOLLAR' | 'ECPC_IN_MICRO_DOLLAR' | 'ECPC_IN_DOLLAR' | 'CTR' | 'ECTR' | 'CAMPAIGN_NAME' | 'PIN_ID' | 'TOTAL_ENGAGEMENT' | 'ENGAGEMENT_1' | 'ENGAGEMENT_2' | 'ECPE_IN_DOLLAR' | 'ENGAGEMENT_RATE' | 'EENGAGEMENT_RATE' | 'ECPM_IN_MICRO_DOLLAR' | 'REPIN_RATE' | 'CTR_2' | 'CAMPAIGN_ID' | 'ADVERTISER_ID' | 'AD_ACCOUNT_ID' | 'PIN_PROMOTION_ID' | 'AD_ID' | 'AD_GROUP_ID' | 'CAMPAIGN_ENTITY_STATUS' | 'CAMPAIGN_OBJECTIVE_TYPE' | 'CPM_IN_MICRO_DOLLAR' | 'CPM_IN_DOLLAR' | 'AD_GROUP_ENTITY_STATUS' | 'ORDER_LINE_ID' | 'ORDER_LINE_NAME' | 'CLICKTHROUGH_1' | 'REPIN_1' | 'IMPRESSION_1' | 'IMPRESSION_1_GROSS' | 'CLICKTHROUGH_1_GROSS' | 'OUTBOUND_CLICK_1' | 'CLICKTHROUGH_2' | 'REPIN_2' | 'IMPRESSION_2' | 'OUTBOUND_CLICK_2' | 'TOTAL_CLICKTHROUGH' | 'TOTAL_IMPRESSION' | 'TOTAL_IMPRESSION_USER' | 'TOTAL_IMPRESSION_FREQUENCY' | 'COST_PER_OUTBOUND_CLICK_IN_DOLLAR' | 'TOTAL_ENGAGEMENT_SIGNUP' | 'TOTAL_ENGAGEMENT_CHECKOUT' | 'TOTAL_ENGAGEMENT_LEAD' | 'TOTAL_CLICK_SIGNUP' | 'TOTAL_CLICK_CHECKOUT' | 'TOTAL_CLICK_ADD_TO_CART' | 'TOTAL_CLICK_LEAD' | 'TOTAL_VIEW_SIGNUP' | 'TOTAL_VIEW_CHECKOUT' | 'TOTAL_VIEW_ADD_TO_CART' | 'TOTAL_VIEW_LEAD' | 'TOTAL_CONVERSIONS' | 'TOTAL_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_SESSIONS' | 'WEB_SESSIONS_1' | 'WEB_SESSIONS_2' | 'CAMPAIGN_LIFETIME_SPEND_CAP' | 'CAMPAIGN_DAILY_SPEND_CAP' | 'TOTAL_PAGE_VISIT' | 'TOTAL_SIGNUP' | 'TOTAL_CHECKOUT' | 'TOTAL_CUSTOM' | 'TOTAL_LEAD' | 'TOTAL_SIGNUP_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_CUSTOM_VALUE_IN_MICRO_DOLLAR' | 'PAGE_VISIT_COST_PER_ACTION' | 'PAGE_VISIT_ROAS' | 'CHECKOUT_ROAS' | 'CUSTOM_ROAS' | 'VIDEO_MRC_VIEWS_1' | 'VIDEO_3SEC_VIEWS_2' | 'VIDEO_P100_COMPLETE_2' | 'VIDEO_P0_COMBINED_2' | 'VIDEO_P25_COMBINED_2' | 'VIDEO_P50_COMBINED_2' | 'VIDEO_P75_COMBINED_2' | 'VIDEO_P95_COMBINED_2' | 'VIDEO_MRC_VIEWS_2' | 'VIDEO_LENGTH' | 'ECPV_IN_DOLLAR' | 'ECPCV_IN_DOLLAR' | 'ECPCV_P95_IN_DOLLAR' | 'TOTAL_VIDEO_3SEC_VIEWS' | 'TOTAL_VIDEO_P100_COMPLETE' | 'TOTAL_VIDEO_P0_COMBINED' | 'TOTAL_VIDEO_P25_COMBINED' | 'TOTAL_VIDEO_P50_COMBINED' | 'TOTAL_VIDEO_P75_COMBINED' | 'TOTAL_VIDEO_P95_COMBINED' | 'TOTAL_VIDEO_MRC_VIEWS' | 'TOTAL_VIDEO_AVG_WATCHTIME_IN_SECOND' | 'TOTAL_REPIN_RATE' | 'WEB_CHECKOUT_COST_PER_ACTION' | 'WEB_CHECKOUT_ROAS' | 'TOTAL_WEB_CHECKOUT' | 'TOTAL_WEB_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_CLICK_CHECKOUT' | 'TOTAL_WEB_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_ENGAGEMENT_CHECKOUT' | 'TOTAL_WEB_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'TOTAL_WEB_VIEW_CHECKOUT' | 'TOTAL_WEB_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR' | 'INAPP_CHECKOUT_COST_PER_ACTION' | 'TOTAL_OFFLINE_CHECKOUT' | 'IDEA_PIN_PRODUCT_TAG_VISIT_1' | 'IDEA_PIN_PRODUCT_TAG_VISIT_2' | 'TOTAL_IDEA_PIN_PRODUCT_TAG_VISIT' | 'LEADS' | 'COST_PER_LEAD' | 'QUIZ_COMPLETED' | 'QUIZ_COMPLETION_RATE' | 'SHOWCASE_PIN_CLICKTHROUGH' | 'SHOWCASE_SUBPAGE_CLICKTHROUGH' | 'SHOWCASE_SUBPIN_CLICKTHROUGH' | 'SHOWCASE_SUBPAGE_IMPRESSION' | 'SHOWCASE_SUBPIN_IMPRESSION' | 'SHOWCASE_SUBPAGE_SWIPE_LEFT' | 'SHOWCASE_SUBPAGE_SWIPE_RIGHT' | 'SHOWCASE_SUBPIN_SWIPE_LEFT' | 'SHOWCASE_SUBPIN_SWIPE_RIGHT' | 'SHOWCASE_SUBPAGE_REPIN' | 'SHOWCASE_SUBPIN_REPIN' | 'SHOWCASE_SUBPAGE_CLOSEUP' | 'SHOWCASE_CARD_THUMBNAIL_SWIPE_FORWARD' | 'SHOWCASE_CARD_THUMBNAIL_SWIPE_BACKWARD' | 'SHOWCASE_AVERAGE_SUBPAGE_CLOSEUP_PER_SESSION' | 'TOTAL_CHECKOUT_CONVERSION_RATE' | 'TOTAL_VIEW_CATEGORY_CONVERSION_RATE' | 'TOTAL_ADD_TO_CART_CONVERSION_RATE' | 'TOTAL_SIGNUP_CONVERSION_RATE' | 'TOTAL_PAGE_VISIT_CONVERSION_RATE' | 'TOTAL_LEAD_CONVERSION_RATE' | 'TOTAL_SEARCH_CONVERSION_RATE' | 'TOTAL_WATCH_VIDEO_CONVERSION_RATE' | 'TOTAL_UNKNOWN_CONVERSION_RATE' | 'TOTAL_CUSTOM_CONVERSION_RATE'>, granularity: Granularity, clickWindowDays?: 0 | 1 | 7 | 14 | 30 | 60, engagementWindowDays?: 0 | 1 | 7 | 14 | 30 | 60, viewWindowDays?: 0 | 1 | 7 | 14 | 30 | 60, conversionReportTime?: 'TIME_OF_AD_ACTION' | 'TIME_OF_CONVERSION'): Promise<CampaignsAnalyticsResponseInner> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling campaignsAnalytics.');
        }

        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling campaignsAnalytics.');
        }

        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling campaignsAnalytics.');
        }

        if (campaignIds === null || campaignIds === undefined) {
            throw new Error('Required parameter campaignIds was null or undefined when calling campaignsAnalytics.');
        }

        if (columns === null || columns === undefined) {
            throw new Error('Required parameter columns was null or undefined when calling campaignsAnalytics.');
        }

        if (granularity === null || granularity === undefined) {
            throw new Error('Required parameter granularity was null or undefined when calling campaignsAnalytics.');
        }

        let queryParameters: string[] = [];
        if (startDate !== undefined) {
            queryParameters.push('startDate=' + encodeURIComponent(String(startDate)));
        }
        if (endDate !== undefined) {
            queryParameters.push('endDate=' + encodeURIComponent(String(endDate)));
        }
        if (campaignIds) {
            campaignIds.forEach((element) => {
                queryParameters.push('campaignIds=' + encodeURIComponent(String(element)));
            })
        }
        if (columns) {
            queryParameters.push('columns=' + encodeURIComponent(columns.join(COLLECTION_FORMATS['csv'])));
        }
        if (granularity !== undefined) {
            queryParameters.push('granularity=' + encodeURIComponent(String(granularity)));
        }
        if (clickWindowDays !== undefined) {
            queryParameters.push('clickWindowDays=' + encodeURIComponent(String(clickWindowDays)));
        }
        if (engagementWindowDays !== undefined) {
            queryParameters.push('engagementWindowDays=' + encodeURIComponent(String(engagementWindowDays)));
        }
        if (viewWindowDays !== undefined) {
            queryParameters.push('viewWindowDays=' + encodeURIComponent(String(viewWindowDays)));
        }
        if (conversionReportTime !== undefined) {
            queryParameters.push('conversionReportTime=' + encodeURIComponent(String(conversionReportTime)));
        }

        const response: CampaignsAnalyticsResponseInner = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/campaigns/analytics?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Create campaigns
     * Create multiple new campaigns. Every campaign has its own campaign_id and houses one or more ad groups, which contain one or more ads. For more, see &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/set-up-your-campaign/"&gt;Set up your campaign. &lt;p/&gt; &lt;strong&gt;Note:&lt;/strong&gt; - The values for \&#39;lifetime_spend_cap\&#39; and \&#39;daily_spend_cap\&#39; are microcurrency amounts based on the currency field set in the advertiser\&#39;s profile. (e.g. USD) &lt;p/&gt; &lt;p&gt;Microcurrency is used to track very small transactions, based on the currency set in the advertiser’s profile.&lt;/p&gt; &lt;p&gt;A microcurrency unit is 10^(-6) of the standard unit of currency selected in the advertiser’s profile.&lt;/p&gt;  &lt;p&gt;&lt;strong&gt;Equivalency equations&lt;/strong&gt;, using dollars as an example currency:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;$1 &#x3D; 1,000,000 microdollars&lt;/li&gt;   &lt;li&gt;1 microdollar &#x3D; $0.000001 &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;&lt;strong&gt;To convert between currency and microcurrency&lt;/strong&gt;, using dollars as an example currency:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;To convert dollars to microdollars, mutiply dollars by 1,000,000&lt;/li&gt;   &lt;li&gt;To convert microdollars to dollars, divide microdollars by 1,000,000&lt;/li&gt; &lt;/ul&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param campaignCreateRequest Array of campaigns.
     */
    public async campaignsCreate(adAccountId: string, campaignCreateRequest: Array<CampaignCreateRequest>): Promise<CampaignCreateResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling campaignsCreate.');
        }

        if (campaignCreateRequest === null || campaignCreateRequest === undefined) {
            throw new Error('Required parameter campaignCreateRequest was null or undefined when calling campaignsCreate.');
        }

        const response: CampaignCreateResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/campaigns`,
            campaignCreateRequest,
        )

        return response;
    }

    /**
     * Get campaign
     * Get a specific campaign given the campaign ID.
     * @param adAccountId Unique identifier of an ad account.
     * @param campaignId Campaign ID, must be associated with the ad account ID provided in the path.
     */
    public async campaignsGet(adAccountId: string, campaignId: string): Promise<CampaignResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling campaignsGet.');
        }

        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling campaignsGet.');
        }

        const response: CampaignResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/campaigns/${encodeURIComponent(String(campaignId))}`,
        )

        return response;
    }

    /**
     * List campaigns
     * Get a list of the campaigns in the specified &lt;code&gt;ad_account_id&lt;/code&gt;, filtered by the specified options. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Analyst, Campaign Manager.
     * @param adAccountId Unique identifier of an ad account.
     * @param campaignIds List of Campaign Ids to use to filter the results.
     * @param entityStatuses Entity status
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param order The order in which to sort the items returned: “ASCENDING” or “DESCENDING” by ID. Note that higher-value IDs are associated with more-recently added items.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async campaignsList(adAccountId: string, campaignIds?: Array<string>, entityStatuses?: Array<'ACTIVE' | 'PAUSED' | 'ARCHIVED' | 'DRAFT' | 'DELETED_DRAFT'>, pageSize?: number, order?: 'ASCENDING' | 'DESCENDING', bookmark?: string): Promise<CampaignsList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling campaignsList.');
        }

        let queryParameters: string[] = [];
        if (campaignIds) {
            campaignIds.forEach((element) => {
                queryParameters.push('campaignIds=' + encodeURIComponent(String(element)));
            })
        }
        if (entityStatuses) {
            entityStatuses.forEach((element) => {
                queryParameters.push('entityStatuses=' + encodeURIComponent(String(element)));
            })
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (order !== undefined) {
            queryParameters.push('order=' + encodeURIComponent(String(order)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: CampaignsList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/campaigns?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update campaigns
     * Update multiple ad campaigns based on campaign_ids. &lt;p/&gt; &lt;strong&gt;Note:&lt;/strong&gt;&lt;p/&gt;  - &lt;p&gt;The values for \&#39;lifetime_spend_cap\&#39; and \&#39;daily_spend_cap\&#39; are microcurrency amounts based on the currency field set in the advertiser\&#39;s profile. (e.g. USD) &lt;p/&gt; &lt;p&gt;Microcurrency is used to track very small transactions, based on the currency set in the advertiser’s profile.&lt;/p&gt; &lt;p&gt;A microcurrency unit is 10^(-6) of the standard unit of currency selected in the advertiser’ s profile.&lt;/p&gt; &lt;p&gt;&lt;strong&gt;Equivalency equations&lt;/strong&gt;, using dollars as an example currency:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;$1 &#x3D; 1,000,000 microdollars&lt;/li&gt;   &lt;li&gt;1 microdollar &#x3D; $0.000001 &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;&lt;strong&gt;To convert between currency and microcurrency&lt;/strong&gt;, using dollars as an example currency:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;To convert dollars to microdollars, mutiply dollars by 1,000,000&lt;/li&gt;   &lt;li&gt;To convert microdollars to dollars, divide microdollars by 1,000,000&lt;/li&gt; &lt;/ul&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param campaignUpdateRequest Array of campaigns.
     */
    public async campaignsUpdate(adAccountId: string, campaignUpdateRequest: Array<CampaignUpdateRequest>): Promise<CampaignUpdateResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling campaignsUpdate.');
        }

        if (campaignUpdateRequest === null || campaignUpdateRequest === undefined) {
            throw new Error('Required parameter campaignUpdateRequest was null or undefined when calling campaignsUpdate.');
        }

        const response: CampaignUpdateResponse = await this.patch(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/campaigns`,
            campaignUpdateRequest,
        )

        return response;
    }

}
