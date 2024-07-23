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


export interface CatalogsRetailItemsPostFilter { 
    catalog_type: CatalogsRetailItemsPostFilter.CatalogTypeEnum;
    item_ids: Array<string>;
    /**
     * Catalog id pertaining to the retail item. If not provided, default to oldest retail catalog
     */
    catalog_id?: string;
}
export namespace CatalogsRetailItemsPostFilter {
    export type CatalogTypeEnum = 'RETAIL';
    export const CatalogTypeEnum = {
        Retail: 'RETAIL' as CatalogTypeEnum
    }
}
