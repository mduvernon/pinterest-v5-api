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
 * HTTP request details included in the log sent by the client.
 */
export interface IntegrationLogClientRequest { 
    method: IntegrationLogClientRequest.MethodEnum;
    /**
     * HTTP request host from host header.
     */
    host: string;
    /**
     * HTTP request path.
     */
    path: string;
    /**
     * HTTP request headers as key-value pairs.
     */
    request_headers?: { [key: string]: string; };
    /**
     * HTTP response headers as key-value pairs.
     */
    response_headers?: { [key: string]: string; };
    response_status_code?: number;
}
export namespace IntegrationLogClientRequest {
    export type MethodEnum = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    export const MethodEnum = {
        Get: 'GET' as MethodEnum,
        Head: 'HEAD' as MethodEnum,
        Post: 'POST' as MethodEnum,
        Put: 'PUT' as MethodEnum,
        Delete: 'DELETE' as MethodEnum,
        Connect: 'CONNECT' as MethodEnum,
        Options: 'OPTIONS' as MethodEnum,
        Trace: 'TRACE' as MethodEnum,
        Patch: 'PATCH' as MethodEnum
    }
}
