import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { AdAccountsCatalogsProductGroupsList200Response } from '../../Model/adAccountsCatalogsProductGroupsList200Response';

export class ProductGroupsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.ProductGroupsService';

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
     * Get catalog product groups
     * This endpoint is completely deprecated. Please use @see /docs/api/v5/#operation/catalogs_product_groups/list : List product groups from Catalogs API instead.
     * @param adAccountId Unique identifier of an ad account.
     * @param feedProfileId The feed profile id whose catalog product groups we want to return.
     */
    public async adAccountsCatalogsProductGroupsList(adAccountId: string, feedProfileId?: string): Promise<AdAccountsCatalogsProductGroupsList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling adAccountsCatalogsProductGroupsList.');
        }

        let queryParameters: string[] = [];
        if (feedProfileId !== undefined) {
            queryParameters.push('feedProfileId=' + encodeURIComponent(String(feedProfileId)));
        }

        const response: AdAccountsCatalogsProductGroupsList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/product_groups/catalogs?${queryParameters.join('&')}`,
        )

        return response;
    }

}
