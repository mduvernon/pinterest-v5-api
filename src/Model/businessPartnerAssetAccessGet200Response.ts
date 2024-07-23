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
import { GetPartnerAssetsResponse } from './getPartnerAssetsResponse';


export interface BusinessPartnerAssetAccessGet200Response { 
    /**
     * List assets on which you granted access to your partner or assets on which your partner has granted you access.
     */
    items: Array<GetPartnerAssetsResponse>;
    bookmark?: string | null;
}
