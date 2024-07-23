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


export interface CatalogsCreativeAssetsItemsPostFilter { 
    catalog_type: CatalogsCreativeAssetsItemsPostFilter.CatalogTypeEnum;
    creative_assets_ids: Array<string>;
    /**
     * Catalog id pertaining to the creative assets item. If not provided, default to oldest creative assets catalog
     */
    catalog_id?: string;
}
export namespace CatalogsCreativeAssetsItemsPostFilter {
    export type CatalogTypeEnum = 'CREATIVE_ASSETS';
    export const CatalogTypeEnum = {
        CreativeAssets: 'CREATIVE_ASSETS' as CatalogTypeEnum
    }
}
