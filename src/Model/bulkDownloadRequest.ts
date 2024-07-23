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
import { BulkDownloadRequestCampaignFilter } from './bulkDownloadRequestCampaignFilter';
import { BulkEntityType } from './bulkEntityType';
import { BulkOutputFormat } from './bulkOutputFormat';


/**
 * Ad entities to get in bulk request.
 */
export interface BulkDownloadRequest { 
    /**
     * All entity types specified will be downloaded. Fewer types result in faster downloads.
     */
    entity_types?: Array<BulkEntityType>;
    /**
     * All entities specified by these IDs as well as their children and grandchildren will be downloaded if the entity type is one of the types requested to be downloaded.
     */
    entity_ids?: Array<string>;
    /**
     * Unix UTC timestamp to retrieve all entities that have changed since this time.
     */
    updated_since?: string;
    campaign_filter?: BulkDownloadRequestCampaignFilter;
    output_format?: BulkOutputFormat;
}
export namespace BulkDownloadRequest {
}
