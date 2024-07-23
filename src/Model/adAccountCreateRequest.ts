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
import { Country } from './country';


export interface AdAccountCreateRequest { 
    country?: Country;
    /**
     * Ad Account name.
     */
    name?: string;
    /**
     * Advertiser\'s owning user ID.
     */
    owner_user_id?: string;
}
export namespace AdAccountCreateRequest {
}
