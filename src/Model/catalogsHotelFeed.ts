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
import { CatalogsFeedCredentials } from './catalogsFeedCredentials';
import { CatalogsFeedProcessingSchedule } from './catalogsFeedProcessingSchedule';
import { CatalogsFormat } from './catalogsFormat';
import { CatalogsStatus } from './catalogsStatus';
import { CatalogsType } from './catalogsType';
import { NullableCurrency } from './nullableCurrency';


/**
 * Catalogs Hotel Feed object
 */
export interface CatalogsHotelFeed { 
    created_at?: string;
    id?: string;
    updated_at?: string;
    /**
     * A human-friendly name associated to a given feed. This value is currently nullable due to historical reasons. It is expected to become non-nullable in the future.
     */
    name: string | null;
    format: CatalogsFormat;
    catalog_type: CatalogsType;
    credentials: CatalogsFeedCredentials | null;
    /**
     * The URL where a feed is available for download. This URL is what Pinterest will use to download a feed for processing.
     */
    location: string;
    preferred_processing_schedule: CatalogsFeedProcessingSchedule | null;
    status: CatalogsStatus;
    default_currency: NullableCurrency | null;
    /**
     * The locale used within a feed for product descriptions.
     */
    default_locale: string;
    /**
     * Catalog id pertaining to the feed. If not provided, feed will use a default catalog based on type.
     */
    catalog_id: string | null;
}
export namespace CatalogsHotelFeed {
}
