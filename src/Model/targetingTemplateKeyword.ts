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
import { MatchType } from './matchType';


export interface TargetingTemplateKeyword { 
    match_type?: MatchType;
    /**
     * The keyword targeting (120 chars max).
     */
    value?: string;
}
export namespace TargetingTemplateKeyword {
}
