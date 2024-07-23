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
import { CatalogsProductGroupFiltersRequest } from './catalogsProductGroupFiltersRequest';


/**
 * Request object for updating a product group.
 */
export interface CatalogsProductGroupUpdateRequest { 
    name?: string;
    description?: string | null;
    /**
     * boolean indicator of whether the product group is being featured or not
     */
    is_featured?: boolean;
    filters?: CatalogsProductGroupFiltersRequest;
}
