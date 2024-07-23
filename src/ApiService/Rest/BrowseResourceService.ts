import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { UserActivityPinsResourceResponse } from '../../Model/userActivityPinsResourceResponse';
import { UserResourceResponse } from '../../Model/userResourceResponse';

/**
 * BrowseResourceService
 *  - Perform actions that could be done in a browser through Resource API
 */
export class BrowseResourceService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.BrowseResourceService';

    constructor(
        serviceName: string,
        client: ApiClient,
        oAuth2: OAuth2ApiService
    ) {
        super(serviceName, client, oAuth2);
    }

    get basePath() {
        return 'https://pinterest.com/resource';
    }

    /**
     * Get User Resource
     *
     * @param username Unique username identifier of the account to get resource from.
     * @returns {Promise<UserResourceResponse>}
     */
    public async userResourceGet(username: string): Promise<UserResourceResponse> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling userResourceGet.');
        }

        let queryParameters: string[] = [];

        const source_url = encodeURIComponent(`/${username}/`);
        const data = {
            options: {
                username,
                field_set_key: "profile"
            }
        }

        queryParameters.push(`source_url=${source_url}`);
        queryParameters.push(`data=${encodeURIComponent(JSON.stringify(data))}`);

        const response: UserResourceResponse = await this.get(
            `${this.basePath}/UserResource/get?${queryParameters.join('&')}`,
            { isPublic: true }
        )

        return response;
    }

    /**
     * Get User Activity Pins Resource
     *
     * @param username Unique username identifier of the account to get resource from.
     * @param userId Unique user identifier of the account to get resource from.
     * @param bookmarks List of bookmarks to get the next page of pins.
     * @param exclude_add_pin_rep Exclude add pin rep.
     * @param field_set_key Field set key.
     * @param is_own_profile_pins Is own profile pins.
     * @param redux_normalize_feed Redux normalize feed.
     * @returns {Promise<UserActivityPinsResourceResponse>}
     */
    public async userActivityPinsResourceGet(username: string, user_id: string, bookmarks: string[] = [], exclude_add_pin_rep: boolean = true, field_set_key: string = 'grid_item', is_own_profile_pins: boolean = true, redux_normalize_feed: boolean = true): Promise<UserActivityPinsResourceResponse> {

        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling userActivityPinsResourceGet.');
        }

        if (user_id === null || user_id === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling userActivityPinsResourceGet.');
        }

        let queryParameters: string[] = [];

        const source_url = encodeURIComponent(`/${username}/`);
        const data = {
            options: {
                bookmarks,
                username,
                exclude_add_pin_rep,
                field_set_key,
                is_own_profile_pins,
                redux_normalize_feed,
                user_id
            }
        }

        queryParameters.push(`source_url=${source_url}`);
        queryParameters.push(`data=${encodeURIComponent(JSON.stringify(data))}`);

        const response: UserActivityPinsResourceResponse = await this.get(
            `${this.basePath}/UserActivityPinsResource/get?${queryParameters.join('&')}`,
            { isPublic: true }
        )

        return response;
    }

}
