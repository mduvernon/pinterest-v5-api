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


export interface AdsCreditRedeemResponse { 
    /**
     * Returns true if the offer code was successfully applied(validateOnly=false) or can be applied(validateOnly=true).
     */
    success?: boolean;
    /**
     * Error code type if error occurs
     */
    errorCode?: number | null;
    /**
     * Reason for failure
     */
    errorMessage?: string | null;
}
