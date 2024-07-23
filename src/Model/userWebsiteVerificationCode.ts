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


export interface UserWebsiteVerificationCode { 
    /**
     * Code to check against the user claiming the website
     */
    verification_code?: string;
    /**
     * DNS TXT record to check against for the website to be claimed
     */
    dns_txt_record?: string;
    /**
     * Metatag the verification process searchs for the website to be claimed
     */
    metatag?: string;
    /**
     * File expected to find on the website being claimed
     */
    filename?: string;
    /**
     * A full html file to upload to the website in order for it to be claimed
     */
    file_content?: string;
}
