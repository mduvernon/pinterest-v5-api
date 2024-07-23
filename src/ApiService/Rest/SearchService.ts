import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { PinsList200Response } from '../../Model/pinsList200Response';
import { SearchPartnerPins200Response } from '../../Model/searchPartnerPins200Response';
import { SearchUserBoardsGet200Response } from '../../Model/searchUserBoardsGet200Response';

export class SearchService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.SearchService';

    constructor(
        serviceName: string,
        client: ApiClient,
        oAuth2: OAuth2ApiService
    ) {
        super(serviceName, client, oAuth2);
    }

    get basePath() {
        return 'https://api.pinterest.com/v5';
    }

    /**
     * Search pins by a given search term
     * &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;  Get the top 10 Pins by a given search term.
     * @param term Search term to look up pins.
     * @param countryCode Two letter country code (ISO 3166-1 alpha-2)
     * @param bookmark Cursor used to fetch the next page of items
     * @param locale Search locale.
     * @param limit Max search result size
     */
    public async searchPartnerPins(term: string, countryCode: string, bookmark?: string, locale?: string, limit?: number): Promise<SearchPartnerPins200Response> {
        if (term === null || term === undefined) {
            throw new Error('Required parameter term was null or undefined when calling searchPartnerPins.');
        }

        if (countryCode === null || countryCode === undefined) {
            throw new Error('Required parameter countryCode was null or undefined when calling searchPartnerPins.');
        }

        let queryParameters: string[] = [];
        if (term !== undefined) {
            queryParameters.push('term=' + encodeURIComponent(String(term)));
        }
        if (countryCode !== undefined) {
            queryParameters.push('countryCode=' + encodeURIComponent(String(countryCode)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (locale !== undefined) {
            queryParameters.push('locale=' + encodeURIComponent(String(locale)));
        }
        if (limit !== undefined) {
            queryParameters.push('limit=' + encodeURIComponent(String(limit)));
        }

        const response: SearchPartnerPins200Response = await this.get(
            `${this.basePath}/search/partner/pins?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Search user\&#39;s boards
     * Search for boards for the "operation user_account". This includes boards of all board types. - By default, the "operation user_account" is the token user_account.  If using Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". @see /docs/reference/business-access/ : Understanding Business Access for more information.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param query Search query. Can contain pin description keywords or comma-separated pin IDs.
     */
    public async searchUserBoardsGet(adAccountId?: string, bookmark?: string, pageSize?: number, query?: string): Promise<SearchUserBoardsGet200Response> {
        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (query !== undefined) {
            queryParameters.push('query=' + encodeURIComponent(String(query)));
        }

        const response: SearchUserBoardsGet200Response = await this.get(
            `${this.basePath}/search/boards?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Search user\&#39;s Pins
     * Search for pins for the "operation user_account". - By default, the "operation user_account" is the token user_account.  If using Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". @see /docs/reference/business-access/ : Understanding Business Access for more information.
     * @param query Search query. Can contain pin description keywords or comma-separated pin IDs.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async searchUserPinsList(query: string, adAccountId?: string, bookmark?: string): Promise<PinsList200Response> {
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchUserPinsList.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (query !== undefined) {
            queryParameters.push('query=' + encodeURIComponent(String(query)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: PinsList200Response = await this.get(
            `${this.basePath}/search/pins?${queryParameters.join('&')}`,
        )

        return response;
    }

}
