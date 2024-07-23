import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { Audience } from '../../Model/audience';
import { AudienceCreateCustomRequest } from '../../Model/audienceCreateCustomRequest';
import { AudienceCreateRequest } from '../../Model/audienceCreateRequest';
import { AudienceUpdateRequest } from '../../Model/audienceUpdateRequest';
import { AudiencesList200Response } from '../../Model/audiencesList200Response';

export class AudiencesService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.AudiencesService';

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
     * Create audience
     * Create an audience you can use in targeting for specific ad groups. Targeting combines customer information with the ways users interact with Pinterest to help you reach specific groups of users; you can include or exclude specific audience_ids when you create an ad group. &lt;p/&gt; For more, see &lt;a class&#x3D;"reference external" href&#x3D;"https://help.pinterest.com/en/business/article/audience-targeting" target&#x3D;"_blank"&gt;Audience targeting.
     * @param adAccountId Unique identifier of an ad account.
     * @param audienceCreateRequest List of ads to create, size limit [1, 30]
     */
    public async audiencesCreate(adAccountId: string, audienceCreateRequest: AudienceCreateRequest): Promise<Audience> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling audiencesCreate.');
        }

        if (audienceCreateRequest === null || audienceCreateRequest === undefined) {
            throw new Error('Required parameter audienceCreateRequest was null or undefined when calling audiencesCreate.');
        }

        const response: Audience = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/audiences`,
            audienceCreateRequest,
        )

        return response;
    }

    /**
     * Create custom audience
     * Create a custom audience and find the audiences you want your ads to reach.
     * @param adAccountId Unique identifier of an ad account.
     * @param audienceCreateCustomRequest Custom audience to create.
     */
    public async audiencesCreateCustom(adAccountId: string, audienceCreateCustomRequest: AudienceCreateCustomRequest): Promise<Audience> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling audiencesCreateCustom.');
        }

        if (audienceCreateCustomRequest === null || audienceCreateCustomRequest === undefined) {
            throw new Error('Required parameter audienceCreateCustomRequest was null or undefined when calling audiencesCreateCustom.');
        }

        const response: Audience = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/audiences/custom`,
            audienceCreateCustomRequest,
        )

        return response;
    }

    /**
     * Get audience
     * Get a specific audience given the audience ID.
     * @param adAccountId Unique identifier of an ad account.
     * @param audienceId Unique identifier of an audience
     */
    public async audiencesGet(adAccountId: string, audienceId: string): Promise<Audience> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling audiencesGet.');
        }

        if (audienceId === null || audienceId === undefined) {
            throw new Error('Required parameter audienceId was null or undefined when calling audiencesGet.');
        }

        const response: Audience = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/audiences/${encodeURIComponent(String(audienceId))}`,
        )

        return response;
    }

    /**
     * List audiences
     * Get list of audiences for the ad account.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param order The order in which to sort the items returned: “ASCENDING” or “DESCENDING” by ID. For received audiences, it is sorted by sharing event time. Note that higher-value IDs are associated with more-recently added items.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param ownershipType &lt;strong&gt;This feature is currently in beta and not available to all apps.&lt;/strong&gt; Filter audiences by ownership type.
     */
    public async audiencesList(adAccountId: string, bookmark?: string, order?: 'ASCENDING' | 'DESCENDING', pageSize?: number, ownershipType?: 'OWNED' | 'RECEIVED'): Promise<AudiencesList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling audiencesList.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (order !== undefined) {
            queryParameters.push('order=' + encodeURIComponent(String(order)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (ownershipType !== undefined) {
            queryParameters.push('ownershipType=' + encodeURIComponent(String(ownershipType)));
        }

        const response: AudiencesList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/audiences?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update audience
     * Update (edit or remove) an existing targeting audience.
     * @param adAccountId Unique identifier of an ad account.
     * @param audienceId Unique identifier of an audience
     * @param audienceUpdateRequest The audience to be updated.
     */
    public async audiencesUpdate(adAccountId: string, audienceId: string, audienceUpdateRequest?: AudienceUpdateRequest): Promise<Audience> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling audiencesUpdate.');
        }

        if (audienceId === null || audienceId === undefined) {
            throw new Error('Required parameter audienceId was null or undefined when calling audiencesUpdate.');
        }

        const response: Audience = await this.patch(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/audiences/${encodeURIComponent(String(audienceId))}`,
            audienceUpdateRequest,
        )

        return response;
    }
}
