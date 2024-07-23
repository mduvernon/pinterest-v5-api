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
 * Object containing customer information data. Note, It is required at least one of 1) em, 2) hashed_maids or 3) pair client_ip_address + client_user_agent.
 */
export interface ConversionEventsUserData { 
    /**
     * Sha256 hashes of user\'s phone numbers, only digits with country code, area code, and number. Remove any symbols, letters, spaces and leading zeros. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA.
     */
    ph?: Array<string>;
    /**
     * Sha256 hashes of user\'s gender, in lowercase. Either \"f\" or \"m\" or \"n\" for non-binary gender.
     */
    ge?: Array<string>;
    /**
     * Sha256 hashes of user\'s date of birthday, given as year, month, and day.
     */
    db?: Array<string>;
    /**
     * Sha256 hashes of user\'s last name, in lowercase. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA.
     */
    ln?: Array<string>;
    /**
     * Sha256 hashes of user\'s first name, in lowercase. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA.
     */
    fn?: Array<string>;
    /**
     * Sha256 hashes of user\'s city, in lowercase, and without spaces or punctuation. User residency city (mostly billing).
     */
    ct?: Array<string>;
    /**
     * Sha256 hashes of user\'s state, given as a two-letter code in lowercase. User residency state (mostly billing).
     */
    st?: Array<string>;
    /**
     * Sha256 hashes of user\'s zipcode, only digits. User residency zipcode (mostly billing).
     */
    zp?: Array<string>;
    /**
     * Sha256 hashes of two-character ISO-3166 country code indicating the user\'s country, in lowercase.
     */
    country?: Array<string>;
    /**
     * Sha256 hashes of the unique id from the advertiser that identifies a user in their space, e.g. user id, loyalty id, etc. We highly recommend this on all events. It may improve reporting performance such as ROAS/CPA.
     */
    external_id?: Array<string>;
    /**
     * The unique identifier stored in _epik cookie on your domain or &epik= query parameter in the URL. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA.
     */
    click_id?: string | null;
    /**
     * A unique identifier of visitors\' information defined by third party partners. e.g RampID
     */
    partner_id?: string | null;
}
