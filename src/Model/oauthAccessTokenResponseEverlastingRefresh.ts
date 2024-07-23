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
import { OauthAccessTokenResponse } from './oauthAccessTokenResponse';


/**
 * A successful OAuth access token response for the refresh token flow, with an added everlasting refresh token.
 */
export interface OauthAccessTokenResponseEverlastingRefresh extends OauthAccessTokenResponse { 
    refresh_token: string;
    refresh_token_expires_in: number;
    refresh_token_expires_at: number;
}
export namespace OauthAccessTokenResponseEverlastingRefresh {
}
