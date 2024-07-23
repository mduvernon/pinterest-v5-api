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


export interface UpdatableItemAttributes { 
    /**
     * Allows advertisers to specify a separate URL that can be used to track traffic coming from Pinterest shopping ads. Must send full URL including tracking—do not send tracking parameters only. At this time we do not support impression tracking. Must begin with http:// or https://.
     */
    ad_link?: string | null;
    /**
     * Set this attribute to TRUE if you\'re submitting items that are considered “adult”. These will not be shown on Pinterest.
     */
    adult?: boolean | null;
    /**
     * The age group to apply a demographic range to the product. Must be one of the following values (upper or lowercased): ‘newborn’ , ‘infant’, ‘toddler’, ‘kids’, or ‘adult’.
     */
    age_group?: string | null;
    /**
     * The availability of the product. Must be one of the following values (upper or lowercased): ‘in stock’, ‘out of stock’ , ‘preorder’.
     */
    availability?: string;
    /**
     * Average reviews for the item. Can be a number from 1-5.
     */
    average_review_rating?: number | null;
    /**
     * The brand of the product.
     */
    brand?: string | null;
    /**
     * This attribute is not supported anymore.
     */
    checkout_enabled?: boolean | null;
    /**
     * The primary color of the product.
     */
    color?: string | null;
    /**
     * The condition of the product. Must be one of the following values (upper or lowercased): ‘new’, ‘used’, or ‘refurbished’.
     */
    condition?: string | null;
    /**
     * <p><= 1000 characters</p> <p>Custom grouping of products.</p>
     */
    custom_label_0?: string | null;
    /**
     * <p><= 1000 characters</p> <p>Custom grouping of products.</p>
     */
    custom_label_1?: string | null;
    /**
     * <p><= 1000 characters</p> <p>Custom grouping of products.</p>
     */
    custom_label_2?: string | null;
    /**
     * <p><= 1000 characters</p> <p>Custom grouping of products.</p>
     */
    custom_label_3?: string | null;
    /**
     * <p><= 1000 characters</p> <p>Custom grouping of products.</p>
     */
    custom_label_4?: string | null;
    /**
     * <p><= 10000 characters</p> <p>The description of the product.</p>
     */
    description?: string;
    /**
     * The item is free to ship.
     */
    free_shipping_label?: boolean | null;
    /**
     * The minimum order purchase necessary for the customer to get free shipping. Only relevant if free shipping is offered.
     */
    free_shipping_limit?: string | null;
    /**
     * The gender associated with the product. Must be one of the following values (upper or lowercased): ‘male’, ‘female’ , or ‘unisex’.
     */
    gender?: string | null;
    /**
     * The categorization of the product based on the standardized Google Product Taxonomy. This is a set taxonomy. Both the text values and numeric codes are accepted.
     */
    google_product_category?: string | null;
    /**
     * The unique universal product identifier.
     */
    gtin?: number | null;
    /**
     * <p><= 127 characters</p> <p>The user-created unique ID that represents the product. Only Unicode characters are accepted.</p>
     */
    id?: string;
    /**
     * <p><= 127 characters</p> <p>The parent ID of the product.</p>
     */
    item_group_id?: string | null;
    /**
     * The millisecond timestamp when the item was lastly modified by the merchant.
     */
    last_updated_time?: number | null;
    /**
     * <p><= 511 characters</p> <p>The landing page for the product.</p>
     */
    link?: string;
    /**
     * The material used to make the product.
     */
    material?: string | null;
    /**
     * The minimum advertised price of the product. It supports the following formats, \"19.99 USD\", \"19.99USD\" and \"19.99\". If the currency is not included, we default to US dollars.
     */
    min_ad_price?: string | null;
    /**
     * The mobile-optimized version of your landing page. Must begin with http:// or https://.
     */
    mobile_link?: string | null;
    /**
     * Manufacturer Part Number are alpha-numeric codes created by the manufacturer of a product to uniquely identify it among all products from the same manufacturer.
     */
    mpn?: string | null;
    /**
     * The number of ratings for the item.
     */
    number_of_ratings?: number | null;
    /**
     * The number of reviews available for the item.
     */
    number_of_reviews?: number | null;
    /**
     * The description of the pattern used for the product.
     */
    pattern?: string | null;
    /**
     * The price of the product. It supports the following formats, \"24.99 USD\", \"24.99USD\" and \"24.99\". If the currency is not included, we default to US dollars.
     */
    price?: string;
    /**
     * <p><= 1000 characters</p> <p>The categorization of your product based on your custom product taxonomy. Subcategories must be sent separated by “ > “. The > must be wrapped by spaces. We do not recognize any other delimiters such as comma or pipe.</p>
     */
    product_type?: string | null;
    /**
     * The discounted price of the product. The sale_price must be lower than the price. It supports the following formats, \"14.99 USD\", \"14.99USD\" and \"14.99\". If the currency is not included, we default to US dollars.
     */
    sale_price?: string | null;
    /**
     * Shipping consists of one group of up to four elements, country, region, service (all optional) and price (required). All colons, even for blank values, are required.
     */
    shipping?: string | null;
    /**
     * The height of the package needed to ship the product. Ensure there is a space between the numeric string and the metric.
     */
    shipping_height?: string | null;
    /**
     * The weight of the product. Ensure there is a space between the numeric string and the metric.
     */
    shipping_weight?: string | null;
    /**
     * The width of the package needed to ship the product. Ensure there is a space between the numeric string and the metric.
     */
    shipping_width?: string | null;
    /**
     * The size of the product.
     */
    size?: string | null;
    /**
     * Indicates the country’s sizing system in which you are submitting your product. Must be one of the following values (upper or lowercased): ‘US’, ‘UK’, ‘EU’, ‘DE’ , ‘FR’, ‘JP’, ‘CN’, ‘IT’, ‘ BR’, ‘MEX’, or ‘AU’.
     */
    size_system?: string | null;
    /**
     * Additional description for the size. Must be one of the following values (upper or lowercased): ‘regular’, ‘petite’ , ‘plus’, ‘big_and_tall’, or ‘maternity’.
     */
    size_type?: string | null;
    /**
     * Tax consists of one group of up to four elements, country, region, rate (all required) and tax_ship (optional). All colons, even for blank values, are required.
     */
    tax?: string | null;
    /**
     * <p><= 500 characters</p> <p>The name of the product.</p>
     */
    title?: string;
    /**
     * Options for this variant. People will see these options next to your Pin and can select the one they want. List them in the order you want them displayed.
     */
    variant_names?: Array<string> | null;
    /**
     * Option values for this variant. People will see these options next to your Pin and can select the one they want. List them in the order you want them displayed. The order of the variant values must be consistent with the order of the variant names.
     */
    variant_values?: Array<string> | null;
}
