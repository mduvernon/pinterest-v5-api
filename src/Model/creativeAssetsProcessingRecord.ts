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
import { ItemProcessingStatus } from './itemProcessingStatus';
import { ItemValidationEvent } from './itemValidationEvent';


/**
 * Object describing an item processing record
 */
export interface CreativeAssetsProcessingRecord { 
    /**
     * The catalog creative assets id in the merchant namespace
     */
    creative_assets_id?: string;
    /**
     * Array with the validation errors for the item processing record. A non empty errors list causes the item processing to fail.
     */
    errors?: Array<ItemValidationEvent>;
    /**
     * Array with the validation warnings for the item processing record
     */
    warnings?: Array<ItemValidationEvent>;
    status?: ItemProcessingStatus;
}
export namespace CreativeAssetsProcessingRecord {
}
