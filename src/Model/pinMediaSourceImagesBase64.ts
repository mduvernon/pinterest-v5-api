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
import { PinMediaSourceImagesBase64ItemsInner } from './pinMediaSourceImagesBase64ItemsInner';


/**
 * Multiple Base64-encoded images media source
 */
export interface PinMediaSourceImagesBase64 { 
    source_type?: PinMediaSourceImagesBase64.SourceTypeEnum;
    /**
     * Array with image objects.
     */
    items: Array<PinMediaSourceImagesBase64ItemsInner>;
    index?: number;
}
export namespace PinMediaSourceImagesBase64 {
    export type SourceTypeEnum = 'multiple_image_base64';
    export const SourceTypeEnum = {
        MultipleImageBase64: 'multiple_image_base64' as SourceTypeEnum
    }
}
