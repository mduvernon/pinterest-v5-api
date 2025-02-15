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


/**
 * Board fields for updates
 */
export interface BoardUpdate { 
    name?: string;
    description?: string | null;
    privacy?: BoardUpdate.PrivacyEnum;
}
export namespace BoardUpdate {
    export type PrivacyEnum = 'PUBLIC' | 'SECRET';
    export const PrivacyEnum = {
        Public: 'PUBLIC' as PrivacyEnum,
        Secret: 'SECRET' as PrivacyEnum
    }
}
