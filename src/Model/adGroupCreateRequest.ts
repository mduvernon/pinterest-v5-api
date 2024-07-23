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
import { ActionType } from './actionType';
import { AdGroupCommonOptimizationGoalMetadata } from './adGroupCommonOptimizationGoalMetadata';
import { AdGroupCommonTrackingUrls } from './adGroupCommonTrackingUrls';
import { BudgetType } from './budgetType';
import { EntityStatus } from './entityStatus';
import { PacingDeliveryType } from './pacingDeliveryType';
import { PlacementGroupType } from './placementGroupType';
import { TargetingSpec } from './targetingSpec';


export interface AdGroupCreateRequest {
    /**
     * Ad group name.
     */
    name: string;
    /**
     * Ad group/entity status.
     */
    status?: EntityStatus;
    /**
     * Budget in micro currency. This field is **REQUIRED** for non-CBO (campaign budget optimization) campaigns.  A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. A CBO campaign is limited to 70 or less ad groups.
     */
    budget_in_micro_currency?: number | null;
    /**
     * Bid price in micro currency. This field is **REQUIRED** for the following campaign objective_type/billable_event combinations: AWARENESS/IMPRESSION, CONSIDERATION/CLICKTHROUGH, CATALOG_SALES/CLICKTHROUGH, VIDEO_VIEW/VIDEO_V_50_MRC.
     */
    bid_in_micro_currency?: number | null;
    optimization_goal_metadata?: AdGroupCommonOptimizationGoalMetadata | null;
    budget_type?: BudgetType;
    /**
     * Ad group start time. Unix timestamp in seconds. Defaults to current time.
     */
    start_time?: number | null;
    /**
     * Ad group end time. Unix timestamp in seconds.
     */
    end_time?: number | null;
    targeting_spec?: TargetingSpec;
    /**
     * Set a limit to the number of times a promoted pin from this campaign can be impressed by a pinner within the past rolling 30 days. Only available for CPM (cost per mille (1000 impressions))  ad groups. A CPM ad group has an IMPRESSION @see https://developers.pinterest.com/docs/redoc/#section/Billable-eventbillable_event value. This field **REQUIRES** the `end_time` field.
     */
    lifetime_frequency_cap?: number;
    tracking_urls?: AdGroupCommonTrackingUrls | null;
    /**
     * Enable auto-targeting for ad group.Default value is True. Also known as @see https://help.pinterest.com/en/business/article/expanded-targeting\" \"expanded targeting\".
     */
    auto_targeting_enabled?: boolean;
    /**
     * @see https://developers.pinterest.com/docs/redoc/#section/Placement-groupPlacement group.
     */
    placement_group?: PlacementGroupType;
    pacing_delivery_type?: PacingDeliveryType;
    /**
     * Campaign ID of the ad group.
     */
    campaign_id: string;
    billable_event: ActionType;
    /**
     * Bid strategy type
     */
    bid_strategy_type?: AdGroupCreateRequest.BidStrategyTypeEnum | null;
    /**
     * Targeting template IDs applied to the ad group. We currently only support 1 targeting template per ad group. To use targeting templates, do not set any other targeting fields: targeting_spec, tracking_urls, auto_targeting_enabled, placement_group. To clear all targeting template IDs, set this field to [\'0\'].
     */
    targeting_template_ids?: Array<string> | null;
}
export namespace AdGroupCreateRequest {
    export type BidStrategyTypeEnum = 'AUTOMATIC_BID' | 'MAX_BID' | 'TARGET_AVG' | 'null';
    export const BidStrategyTypeEnum = {
        AutomaticBid: 'AUTOMATIC_BID' as BidStrategyTypeEnum,
        MaxBid: 'MAX_BID' as BidStrategyTypeEnum,
        TargetAvg: 'TARGET_AVG' as BidStrategyTypeEnum,
        Null: 'null' as BidStrategyTypeEnum
    }
}
