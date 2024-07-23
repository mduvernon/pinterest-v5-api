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
import { SummaryPinMedia } from './summaryPinMedia';


/**
 * Summarized pin information
 */
export interface SummaryPin { 
    media?: SummaryPinMedia;
    alt_text?: string | null;
    link?: string | null;
    title?: string | null;
    description?: string | null;
}
