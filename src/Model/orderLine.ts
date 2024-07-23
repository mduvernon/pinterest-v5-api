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
import { OrderLinePaidType } from './orderLinePaidType';
import { OrderLineStatus } from './orderLineStatus';


export interface OrderLine { 
    /**
     * Order line ID.
     */
    id?: string;
    /**
     * Always \"orderline\".
     */
    type?: string;
    /**
     * Ad account ID.
     */
    ad_account_id?: string;
    /**
     * Purchase order ID.
     */
    purchase_order_id?: string | null;
    /**
     * Start time. Unix timestamp.
     */
    start_time?: number;
    /**
     * End time. Unix timestamp.
     */
    end_time?: number | null;
    /**
     * Order line budget in micro currency.
     */
    budget?: number | null;
    /**
     * Order line paid budget in micro currency.
     */
    paid_budget?: number | null;
    /**
     * Order line status.
     */
    status?: OrderLineStatus;
    /**
     * Order line name.
     */
    name?: string | null;
    /**
     * Order line paid type.
     */
    paid_type?: OrderLinePaidType | null;
    /**
     * Associated List of campaign IDs.
     */
    campaign_ids: Array<string>;
}
export namespace OrderLine {
}
