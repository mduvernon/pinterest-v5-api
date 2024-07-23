import { inject, injectable } from 'inversify';
import { Response } from 'undici'

import { TYPES } from '../../Resources/Types';

import { checkPinterestResponse } from '../../Error/checkPinterestResponse';
import { ApiClient } from '../../Client/ApiClient';

import { OauthAccessTokenResponse } from '../../Model/oauthAccessTokenResponse';
import { OauthAccessTokenResponseCode } from '../../Model/oauthAccessTokenResponseCode';

@injectable()
export class OAuth2ApiService {

    public static readonly defaultScopes: string[] = [

    ];

    /**
     * Service name
     *
     * @type {string}
     */
    public readonly name: string;

    /**
     * _client
     *  - The api client
     *
     * @type {ApiClient}
     */
    private readonly _client: ApiClient;

    /**
     * _authToken
     *  - The auth token
     *
     * @type {OauthAccessTokenResponseCode}
     */
    private _authToken?: OauthAccessTokenResponseCode;

    /**
     * _scope
     *  - The access token scope
     *
     * @type {string[]}
     */
    private _scope: string[];

    constructor(
        @inject(TYPES.ApiClient) client: ApiClient
    ) {
        this.name = 'pinterest_api.OAuth2ApiService';

        this._client = client;
        this._scope = this._client.config?.scope || OAuth2ApiService.defaultScopes;
    }

    get basePath(): string {
        return 'https://api.pinterest.com/v5';
    }

    /**
     * @see https://developers.pinterest.com/docs/getting-started/authentication/
     * @param clientId
     * @param redirectUri
     * @param scope
     * @param state
     */
    public static generateAuthUrl(
        clientId: string,
        redirectUri: string,
        scope: string[],
        state = ''
    ): string {
        return [
            'https://www.pinterest.com/oauth/',
            '?client_id=', encodeURIComponent(clientId),
            '&redirect_uri=', encodeURIComponent(redirectUri),
            '&response_type=code',
            '&scope=', encodeURIComponent(scope.join(',')),
            '&state=', encodeURIComponent(state),
        ].join('');
        return '';
    }

    /**
     * Return the access token.
     *  - First return user access token, if not set Application Access Token.
     */
    public async getAccessToken(): Promise<string | null> {
        return this.getUserAccessToken();
    }

    /**
     * getUserAccessToken
     * - Return the user access token.
     */
    public getUserAccessToken(): string | null {
        return this._authToken?.access_token ?? null;
    }

    public setScope(scope: string[]) {
        this._scope = scope;
    }

    public getScope(): string[] {
        return [
            ...this._scope
        ];
    }

    /**
     * Authorization code grant flow.
     * - Mint the access token for the given code.
     *
     * @param {string} code the code
     * @param {string} redirectUri the redirectUri
     * @returns {Promise<OauthAccessTokenResponseCode>}
     */
    public async getToken(code: string, redirectUri = this._client.config?.redirectUri): Promise<OauthAccessTokenResponseCode> {
        return await this.requestUserAccessToken(code, redirectUri);
    }

    /**
     * Set Client credentials grant flow.
     *
     * @returns {OAuth2ApiService}
     */
    public setToken(token: OauthAccessTokenResponseCode): OAuth2ApiService {
        this.setCredentials(token);

        return this;
    }

    /**
     * Generates URL for consent page landing.
     *
     * @param redirectUri RuName
     * @param scope the scopes
     * @param state state parameter returned in the redirect URL
     */
    public generateAuthUrl(redirectUri?: string, scope: string[] = this._scope, state = ''): string {
        redirectUri = redirectUri || this._client.config?.redirectUri;

        if (!redirectUri) {
            throw new Error('Redirect Uri is required.');
        }

        const clientId = this._client.config.clientId;

        if (!clientId?.length) {
            throw new Error('Client Id is required.');
        }

        const url: string = OAuth2ApiService.generateAuthUrl(
            clientId,
            redirectUri,
            scope,
            state
        );

        return url;
    }

    /**
     * requestUserAccessToken
     *
     * - Generate OAuth access token
     * - Generate an OAuth access token by using an authorization code or a refresh token.
     * - IMPORTANT: You need to start the OAuth flow via www.pinterest.com/oauth before calling
     *            this endpoint (or have an existing refresh token).
     * @see https://developers.pinterest.com/docs/getting-started/authentication/
     * @see https://developers.pinterest.com/docs/api/v5/#tag/oauth
     */
    public async requestUserAccessToken(code: string, redirectUri = this._client.config?.redirectUri): Promise<OauthAccessTokenResponseCode> {

        let token: OauthAccessTokenResponseCode = null;

        try {

            const formData = new URLSearchParams();

            formData.append('grant_type', <any>'authorization_code');
            formData.append('redirect_uri', <any>redirectUri);
            formData.append('code', <any>code);

            const response: Response = await this._client.req.post(
                `${this.basePath}/oauth/token`,
                {
                    body: <any>formData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        'Accept': 'application/json',
                        ...this._client.getBasicAuthHeader() // authentication (basic) required
                    }
                }
            );

            // Network error in the 4xx–5xx range
            if (!response.ok) {
                const errorData = await response.text();
                const errorJson = JSON.parse(errorData);

                checkPinterestResponse(errorJson);
            }

            // use response here if we didn't throw above
            const data: any = await response.json();

            this.setCredentials(data);

            token = data;
        } catch (error) {
            throw error;
        }

        return token;
    }

    /**
     * refreshUserAccessToken
     * Authorization code grant flow.
     *  - Refresh the user access token for the given refresh token.
     *
     * @see https://developers.pinterest.com/docs/getting-started/authentication/#Refreshing%20and%20storing%20tokens
     *
     * @returns {Promise<OauthAccessTokenResponse>}
     */
    public async refreshUserAccessToken(): Promise<OauthAccessTokenResponse> {
        let token: OauthAccessTokenResponse = null;

        if (!this._authToken || !this._authToken.refresh_token) {
            throw new Error('Failed to refresh the user access token. Token or refresh_token is not set.');
        }

        try {

            const formData = new URLSearchParams();

            formData.append('refresh_token', <any>this._authToken.refresh_token);
            formData.append('grant_type', <any>'refresh_token');
            formData.append('scope', <any>this._scope.join(','));

            const response: Response = await this._client.req.post(
                `${this.basePath}/oauth/token`,
                {
                    body: <any>formData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        'Accept': 'application/json',
                        ...this._client.getBasicAuthHeader() // authentication (basic) required
                    }
                }
            );

            // Network error in the 4xx–5xx range
            if (!response.ok) {
                const errorData = await response.text();
                const errorJson = JSON.parse(errorData);

                checkPinterestResponse(errorJson);
            }

            // use response here if we didn't throw above
            const data: any = await response.json();

            token = {
                ...this._authToken,
                ...data
            };

            this.setCredentials(token);

        } catch (error) {
            throw error;
        }

        return token;
    }

    /**
     * Gets and sets the user access token for the given code.
     *
     * Authorization code grant flow.
     *
     * @param code the code
     */
    public async obtainToken(code: string): Promise<OauthAccessTokenResponseCode> {
        const token: OauthAccessTokenResponseCode = await this.getToken(code);

        this.setCredentials(token);

        return token;
    }

    /**
     * Gets the credentials.
     *
     * @returns {OauthAccessTokenResponseCode | null}
     */
    public getCredentials(): OauthAccessTokenResponseCode | null {
        if (this._authToken) {
            return {
                ...this._authToken
            };
        }

        return null;
    }

    /**
     * Sets the credentials.
     *
     * @param {OauthAccessTokenResponseCode | OauthAccessTokenResponse | string} authToken
     */
    public setCredentials(authToken: OauthAccessTokenResponseCode | OauthAccessTokenResponse): OAuth2ApiService {
        if (typeof authToken === 'object') {
            this._authToken = {
                ...this._authToken,
                ...authToken
            } as any;
        }

        return this;
    }

    /**
     * Refresh the user access token if set or application access token
     */
    public async refreshToken(): Promise<OauthAccessTokenResponse> {
        if (this._authToken) {
            return await this.refreshUserAccessToken();
        }

        throw new Error('Missing credentials. To refresh a token an application access token or user access token must be already set.');
    }

    /**
     * getHeaderAuthorization
     */
    public async getHeaderAuthorization() {
        const accessToken = await this.getAccessToken();

        return {
            Authorization: 'Bearer ' + accessToken
        }
    }
}
