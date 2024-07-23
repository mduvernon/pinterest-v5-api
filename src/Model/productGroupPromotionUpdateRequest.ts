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
import { ProductGroupPromotion } from './productGroupPromotion';


export interface ProductGroupPromotionUpdateRequest { 
    /**
     * ID of the ad group the product group belongs to.
     */
    ad_group_id: string;
    product_group_promotion: Array<ProductGroupPromotion>;
}
