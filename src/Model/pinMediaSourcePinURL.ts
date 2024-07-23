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


/**
 * Pin URL-based media source for product pin creation. Currently the field is only available to a list of beta users.
 */
export interface PinMediaSourcePinURL { 
    source_type: PinMediaSourcePinURL.SourceTypeEnum;
    /**
     * This is an affiliate link or sponsored product. The FTC requires disclosure for paid partnerships and affiliate products.
     */
    is_affiliate_link?: boolean;
}
export namespace PinMediaSourcePinURL {
    export type SourceTypeEnum = 'pin_url';
    export const SourceTypeEnum = {
        PinUrl: 'pin_url' as SourceTypeEnum
    }
}
