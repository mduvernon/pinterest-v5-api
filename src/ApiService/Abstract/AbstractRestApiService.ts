import {
    RequestInit as BaseRequestInit,
    Response,
} from 'undici'

import { checkPinterestResponse } from '../../Error/checkPinterestResponse';
import { handlePinterestError } from '../../Error/handlePinterestError';
import { IFetchRequest } from '../../Interface/IFetchRequest';
import { OAuth2ApiService } from "../Auth/OAuth2ApiService";
import { ApiClient } from '../../Client/ApiClient';

export const defaultApiHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    ...(typeof window === 'undefined' ? {
        'Accept-Encoding': 'application/gzip'
    } : {})
};

type RequestInit = BaseRequestInit & {
    isPublic?: boolean,
    params?: any
};

export type ApiRequest = {
    method: keyof IFetchRequest,
    url: string,
    config?: RequestInit, // RequestInit (of fetch)
    data?: any,
}

export interface IRestApiService {
    new(serviceName: string, client: ApiClient, oAuth2: OAuth2ApiService): AbstractRestApiService;

    name: string;
    id: string;
}

export class AbstractRestApiService {

    /**
     * Service name
     *
     * @type {string}
     */
    public readonly name: string;

    /**
     * ApiClient
     *
     * @type {ApiClient}
     */
    public readonly client: ApiClient;

    /**
     * OAuth2ApiService
     *
     * @type {OAuth2ApiService}
     */
    public readonly oAuth2: OAuth2ApiService;

    /**
     * Constructor
     *
     * @param serviceName
     * @param client
     * @param oAuth2
     */
    constructor(
        serviceName: string,
        client: ApiClient,
        oAuth2: OAuth2ApiService
    ) {
        this.name = serviceName;

        this.client = client;
        this.oAuth2 = oAuth2;
    }

    static createSelf(
        serviceName: string,
        client: ApiClient,
        oAuth2: OAuth2ApiService,
    ) {
        return new this(
            serviceName,
            client,
            oAuth2,
        );
    }

    /**
     * Base path for the api
     *  - Should be implemented by the child class
     *
     * @returns {string}
     */
    get basePath(): string {
        throw new Error('Not implemented');
    }

    public async get(url: string, config: RequestInit = {}) {
        return this._doRequest({ method: 'get', url, config });
    }

    public async post(url: string, data?: any, config: RequestInit = {}) {
        return this._doRequest({ method: 'post', url, data, config });
    }

    public async put(url: string, data?: any, config: RequestInit = {}) {
        return this._doRequest({ method: 'put', url, data, config });
    }

    public async patch(url: string, data?: any, config: RequestInit = {}) {
        return this._doRequest({ method: 'patch', url, data, config });
    }

    public async delete(url: string, data?: any, config: RequestInit = {}) {
        return this._doRequest({ method: 'delete', url, data, config });
    }

    public async enrichRequestConfig(
        apiRequest: ApiRequest,
        payload: any = null,
    ) {
        const { config = {} } = apiRequest;

        const {
            isPublic = false,
        } = config;

        const authHeader = isPublic ? {} : await this.oAuth2.getHeaderAuthorization();

        const headers = {
            ...defaultApiHeaders,
            ...authHeader,
        };

        return {
            ...apiRequest.config,
            headers: {
                ...headers
            }
        };
    }

    private async _doRequest(payload: ApiRequest) {
        try {
            return await this._request(payload);
        } catch (error) {
            if (this._shouldRefreshToken(error)) {
                // Try again and refresh token
                return await this._request(payload, true /* refresh token */);
            }

            throw error;
        }
    }

    private _shouldRefreshToken(error: any) {
        if (!this.client.config?.autoRefreshToken) {
            return false;
        }

        if (error?.meta?.res?.status === 403) {
            return true;
        }

        return error?.meta?.res?.status === 401;
    }

    private async _request(
        apiRequest: ApiRequest,
        refreshToken = false,
    ): Promise<any> {
        const { url, method, data } = apiRequest;

        let response: Response | null = null;

        try {
            if (refreshToken) {
                await this.oAuth2.refreshToken();
            }

            const enrichedConfig: { headers: any } = await this.enrichRequestConfig(apiRequest, data);
            const { config: { params: queryModel } = {} } = apiRequest;

            const args: RequestInit = ['get'].includes(method) ? enrichedConfig : {
                ...enrichedConfig,
                body: data
            };

            response = await this.client.req[method](
                url,
                args
            );

            // Network error in the 4xx–5xx range
            if (!response.ok) {
                const errorJson = await response.json();
                checkPinterestResponse(errorJson);
            }

        } catch (error) {
            handlePinterestError(error);
        }

        return await response?.json();
    }
}
