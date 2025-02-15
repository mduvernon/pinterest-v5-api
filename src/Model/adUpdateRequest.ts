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
import { AdCommonQuizPinData } from './adCommonQuizPinData';
import { AdCommonTrackingUrls } from './adCommonTrackingUrls';
import { CreativeType } from './creativeType';
import { EntityStatus } from './entityStatus';
import { GridClickType } from './gridClickType';


export interface AdUpdateRequest { 
    /**
     * ID of the ad group that contains the ad.
     */
    ad_group_id?: string;
    /**
     * Deep link URL for Android devices. Not currently available. Using this field will generate an error.
     */
    android_deep_link?: string | null;
    /**
     * Comma-separated deep links for the carousel pin on Android.
     */
    carousel_android_deep_links?: Array<string> | null;
    /**
     * Comma-separated destination URLs for the carousel pin to promote.
     */
    carousel_destination_urls?: Array<string> | null;
    /**
     * Comma-separated deep links for the carousel pin on iOS.
     */
    carousel_ios_deep_links?: Array<string> | null;
    /**
     * Tracking url for the ad clicks.
     */
    click_tracking_url?: string | null;
    creative_type?: CreativeType;
    /**
     * Destination URL.
     */
    destination_url?: string | null;
    /**
     * Deep link URL for iOS devices. Not currently available. Using this field will generate an error.
     */
    ios_deep_link?: string | null;
    /**
     * Is original pin deleted?
     */
    is_pin_deleted?: boolean;
    /**
     * Is pin repinnable?
     */
    is_removable?: boolean;
    /**
     * Name of the ad - 255 chars max.
     */
    name?: string | null;
    status?: EntityStatus;
    tracking_urls?: AdCommonTrackingUrls | null;
    /**
     * Tracking URL for ad impressions.
     */
    view_tracking_url?: string | null;
    /**
     * Lead form ID for lead ad generation.
     */
    lead_form_id?: string | null;
    grid_click_type?: GridClickType | null;
    /**
     * Select a call to action (CTA) to display below your ad. Available only for ads with direct links enabled. CTA options for consideration and conversion campaigns are LEARN_MORE, SHOP_NOW, BOOK_NOW, SIGN_UP, VISIT_WEBSITE, BUY_NOW, GET_OFFER, ORDER_NOW, ADD_TO_CART (for conversion campaigns with add to cart conversion events only)
     */
    customizable_cta_type?: AdUpdateRequest.CustomizableCtaTypeEnum | null;
    quiz_pin_data?: AdCommonQuizPinData | null;
    /**
     * The ID of this ad.
     */
    id: string;
    /**
     * Pin ID. This field may only be updated for draft ads.
     */
    pin_id?: string | null;
}
export namespace AdUpdateRequest {
    export type CustomizableCtaTypeEnum = 'GET_OFFER' | 'LEARN_MORE' | 'ORDER_NOW' | 'SHOP_NOW' | 'SIGN_UP' | 'SUBSCRIBE' | 'BUY_NOW' | 'CONTACT_US' | 'GET_QUOTE' | 'VISIT_WEBSITE' | 'APPLY_NOW' | 'BOOK_NOW' | 'REQUEST_DEMO' | 'REGISTER_NOW' | 'FIND_A_DEALER' | 'ADD_TO_CART' | 'WATCH_NOW' | 'READ_MORE' | 'null';
    export const CustomizableCtaTypeEnum = {
        GetOffer: 'GET_OFFER' as CustomizableCtaTypeEnum,
        LearnMore: 'LEARN_MORE' as CustomizableCtaTypeEnum,
        OrderNow: 'ORDER_NOW' as CustomizableCtaTypeEnum,
        ShopNow: 'SHOP_NOW' as CustomizableCtaTypeEnum,
        SignUp: 'SIGN_UP' as CustomizableCtaTypeEnum,
        Subscribe: 'SUBSCRIBE' as CustomizableCtaTypeEnum,
        BuyNow: 'BUY_NOW' as CustomizableCtaTypeEnum,
        ContactUs: 'CONTACT_US' as CustomizableCtaTypeEnum,
        GetQuote: 'GET_QUOTE' as CustomizableCtaTypeEnum,
        VisitWebsite: 'VISIT_WEBSITE' as CustomizableCtaTypeEnum,
        ApplyNow: 'APPLY_NOW' as CustomizableCtaTypeEnum,
        BookNow: 'BOOK_NOW' as CustomizableCtaTypeEnum,
        RequestDemo: 'REQUEST_DEMO' as CustomizableCtaTypeEnum,
        RegisterNow: 'REGISTER_NOW' as CustomizableCtaTypeEnum,
        FindADealer: 'FIND_A_DEALER' as CustomizableCtaTypeEnum,
        AddToCart: 'ADD_TO_CART' as CustomizableCtaTypeEnum,
        WatchNow: 'WATCH_NOW' as CustomizableCtaTypeEnum,
        ReadMore: 'READ_MORE' as CustomizableCtaTypeEnum,
        Null: 'null' as CustomizableCtaTypeEnum
    }
}
