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
import { UpdateMemberAssetsResultsResponseArrayItemsInner } from './updateMemberAssetsResultsResponseArrayItemsInner';


export interface UpdateMemberAssetsResultsResponseArray { 
    /**
     * List of assigned/updated member asset access. If there is an error, an exception object will be returned. If the action was successfully completed, a response object will be returned.
     */
    items?: Array<UpdateMemberAssetsResultsResponseArrayItemsInner>;
}
