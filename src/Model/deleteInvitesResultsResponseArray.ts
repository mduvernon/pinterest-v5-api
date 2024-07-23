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
import { DeleteInvitesResultsResponseArrayItemsInner } from './deleteInvitesResultsResponseArrayItemsInner';


/**
 * Response to delete invites sent to Members or Partners, if there is an exception, return the exception mapped with the invite id
 */
export interface DeleteInvitesResultsResponseArray { 
    /**
     * List of invite/Request deletion status. If there is an error, an exception object will be returned. If the invite/request was successfully cancelled, an invite object will be returned for the invite that was cancelled.
     */
    items?: Array<DeleteInvitesResultsResponseArrayItemsInner>;
}
