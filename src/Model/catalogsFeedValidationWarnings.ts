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


export interface CatalogsFeedValidationWarnings { 
    /**
     * Some items have ad links that are formatted incorrectly.
     */
    AD_LINK_FORMAT_WARNING?: number;
    /**
     * Some items have ad link URLs that are duplicates of the link URLs for those items.
     */
    AD_LINK_SAME_AS_LINK?: number;
    /**
     * The title for some items were truncated because they contain too many characters.
     */
    TITLE_LENGTH_TOO_LONG?: number;
    /**
     * The description for some items were truncated because they contain too many characters.
     */
    DESCRIPTION_LENGTH_TOO_LONG?: number;
    /**
     * Some items have gender values that are formatted incorrectly, which may limit visibility in recommendations, search results and shopping experiences.
     */
    GENDER_INVALID?: number;
    /**
     * Some items have age group values that are formatted incorrectly, which may limit visibility in recommendations, search results and shopping experiences.
     */
    AGE_GROUP_INVALID?: number;
    /**
     * Some items have size type values that are formatted incorrectly, which may limit visibility in recommendations, search results and shopping experiences.
     */
    SIZE_TYPE_INVALID?: number;
    /**
     * Some items have size system values which are not one of the supported size systems.
     */
    SIZE_SYSTEM_INVALID?: number;
    /**
     * Some items have an invalid product link which contains invalid UTM tracking paramaters.
     */
    LINK_FORMAT_WARNING?: number;
    /**
     * Some items have sale price values that are higher than the original price of the item.
     */
    SALES_PRICE_INVALID?: number;
    /**
     * Some items only have 1 or 2 levels of google_product_category values, which may limit visibility in recommendations, search results and shopping experiences.
     */
    PRODUCT_CATEGORY_DEPTH_WARNING?: number;
    /**
     * Some items have adwords_redirect links that are formatted incorrectly.
     */
    ADWORDS_FORMAT_WARNING?: number;
    /**
     * Some items have adwords_redirect URLs that are duplicates of the link URLs for those items.
     */
    ADWORDS_SAME_AS_LINK?: number;
    /**
     * Your feed contains duplicate headers.
     */
    DUPLICATE_HEADERS?: number;
    /**
     * Ingestion completed early because there are no changes to your feed since the last successful update.
     */
    FETCH_SAME_SIGNATURE?: CatalogsFeedValidationWarnings.FETCHSAMESIGNATUREEnum;
    /**
     * Some items have additional_image_link URLs that contain too many characters, so those items will not be published.
     */
    ADDITIONAL_IMAGE_LINK_LENGTH_TOO_LONG?: number;
    /**
     * Some items have additional_image_link URLs that are formatted incorrectly and will not be published with your items.
     */
    ADDITIONAL_IMAGE_LINK_WARNING?: number;
    /**
     * Some items have image_link URLs that are formatted incorrectly and will not be published with those items.
     */
    IMAGE_LINK_WARNING?: number;
    /**
     * Some items have shipping values that are formatted incorrectly.
     */
    SHIPPING_INVALID?: number;
    /**
     * Some items have tax values that are formatted incorrectly.
     */
    TAX_INVALID?: number;
    /**
     * Some items have invalid shipping_weight values.
     */
    SHIPPING_WEIGHT_INVALID?: number;
    /**
     * Some items have expiration_date values that are formatted incorrectly, those items will be published without an expiration date.
     */
    EXPIRATION_DATE_INVALID?: number;
    /**
     * Some items have availability_date values that are formatted incorrectly, those items will be published without an availability date.
     */
    AVAILABILITY_DATE_INVALID?: number;
    /**
     * Some items have sale_price_effective_date values that are formatted incorrectly, those items will be published without a sale date.
     */
    SALE_DATE_INVALID?: number;
    /**
     * Some items have weight_unit values that are formatted incorrectly, those items will be published without a weight unit.
     */
    WEIGHT_UNIT_INVALID?: number;
    /**
     * Some items have is_bundle values that are formatted incorrectly, those items will be published without being bundled with other products.
     */
    IS_BUNDLE_INVALID?: number;
    /**
     * Some items have updated_time values thate are formatted incorrectly, those items will be published without an updated time.
     */
    UPDATED_TIME_INVALID?: number;
    /**
     * Some items have custom_label values that are too long, those items will be published without that custom label.
     */
    CUSTOM_LABEL_LENGTH_TOO_LONG?: number;
    /**
     * Some items have product_type values that are too long, those items will be published without that product type.
     */
    PRODUCT_TYPE_LENGTH_TOO_LONG?: number;
    /**
     * Some items have additional_image_link values that exceed the limit for additional images, those items will be published without some of your images.
     */
    TOO_MANY_ADDITIONAL_IMAGE_LINKS?: number;
    /**
     * Some items have invalid multipack values.
     */
    MULTIPACK_INVALID?: number;
    /**
     * The product count has increased or decreased significantly compared to the last successful ingestion.
     */
    INDEXED_PRODUCT_COUNT_LARGE_DELTA?: number;
    /**
     * Some items include additional_image_links that can\'t be found.
     */
    ITEM_ADDITIONAL_IMAGE_DOWNLOAD_FAILURE?: number;
    /**
     * Some items are missing a google_product_category.
     */
    OPTIONAL_PRODUCT_CATEGORY_MISSING?: number;
    /**
     * Some items include google_product_category values that are not formatted correctly according to the GPC taxonomy.
     */
    OPTIONAL_PRODUCT_CATEGORY_INVALID?: number;
    /**
     * Some items are missing a condition value, which may limit visibility in recommendations, search results and shopping experiences.
     */
    OPTIONAL_CONDITION_MISSING?: number;
    /**
     * Some items include condition values that are formatted incorrectly, which may limit visibility in recommendations, search results and shopping experiences.
     */
    OPTIONAL_CONDITION_INVALID?: number;
    /**
     * Some items include invalid ios_deep_link values.
     */
    IOS_DEEP_LINK_INVALID?: number;
    /**
     * Some items include invalid android_deep_link.
     */
    ANDROID_DEEP_LINK_INVALID?: number;
    /**
     * Some items include utm_source values that are formatted incorrectly and have been automatically corrected.
     */
    UTM_SOURCE_AUTO_CORRECTED?: number;
    /**
     * Some items include a currency that doesn\'t match the usual currency for the location where that product is sold or shipped.
     */
    COUNTRY_DOES_NOT_MAP_TO_CURRENCY?: number;
    /**
     * Some items include min_ad_price values that are formatted incorrectly.
     */
    MIN_AD_PRICE_INVALID?: number;
    /**
     * Some items include incorrectly formatted GTINs.
     */
    GTIN_INVALID?: number;
    /**
     * Some items include inconsistent currencies in price fields.
     */
    INCONSISTENT_CURRENCY_VALUES?: number;
    /**
     * Some items include sales price that is much lower than the list price.
     */
    SALES_PRICE_TOO_LOW?: number;
    /**
     * Some items include incorrectly formatted shipping_width.
     */
    SHIPPING_WIDTH_INVALID?: number;
    /**
     * Some items include incorrectly formatted shipping_height.
     */
    SHIPPING_HEIGHT_INVALID?: number;
    /**
     * Some items include a sales price that is higher than the list price. The sales price has been defaulted to the list price.
     */
    SALES_PRICE_TOO_HIGH?: number;
    /**
     * Some items include incorrectly formatted MPNs.
     */
    MPN_INVALID?: number;
}
export namespace CatalogsFeedValidationWarnings {
    export type FETCHSAMESIGNATUREEnum = 1;
    export const FETCHSAMESIGNATUREEnum = {
        NUMBER_1: 1 as FETCHSAMESIGNATUREEnum
    }
}
