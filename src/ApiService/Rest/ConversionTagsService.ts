import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { ConversionEventResponse } from '../../Model/conversionEventResponse';
import { ConversionTagCreate } from '../../Model/conversionTagCreate';
import { ConversionTagListResponse } from '../../Model/conversionTagListResponse';
import { ConversionTagResponse } from '../../Model/conversionTagResponse';
import { PageVisitConversionTagsGet200Response } from '../../Model/pageVisitConversionTagsGet200Response';

export class ConversionTagsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.ConversionTagsService';

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
     * Create conversion tag
     * Create a conversion tag, also known as &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/set-up-the-pinterest-tag" target&#x3D;"_blank"&gt;Pinterest tag, with the option to enable enhanced match.&lt;p/&gt; The Pinterest Tag tracks actions people take on the ad account’ s website after they view the ad account\&#39;s ad on Pinterest. The advertiser needs to customize this tag to track conversions.&lt;p/&gt; For more information, see:&lt;p/&gt; &lt;a class&#x3D;"reference external" href&#x3D;"https://help.pinterest.com/en/business/article/set-up-the-pinterest-tag"&gt;Set up the Pinterest tag&lt;p/&gt; &lt;a class&#x3D;"reference external" href&#x3D;"https://developers.pinterest.com/docs/conversions/pinterest-tag/"&gt;Pinterest Tag&lt;p/&gt; &lt;a class&#x3D;"reference external" href&#x3D;"https://developers.pinterest.com/docs/conversions/enhanced-match/"&gt;Enhanced match
     * @param adAccountId Unique identifier of an ad account.
     * @param conversionTagCreate Conversion Tag to create
     */
    public async conversionTagsCreate(adAccountId: string, conversionTagCreate: ConversionTagCreate): Promise<ConversionTagResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling conversionTagsCreate.');
        }

        if (conversionTagCreate === null || conversionTagCreate === undefined) {
            throw new Error('Required parameter conversionTagCreate was null or undefined when calling conversionTagsCreate.');
        }

        const response: ConversionTagResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/conversion_tags`,
            conversionTagCreate,
        )

        return response;
    }

    /**
     * Get conversion tag
     * Get information about an existing conversion tag.
     * @param adAccountId Unique identifier of an ad account.
     * @param conversionTagId Id of the conversion tag.
     */
    public async conversionTagsGet(adAccountId: string, conversionTagId: string): Promise<ConversionTagResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling conversionTagsGet.');
        }

        if (conversionTagId === null || conversionTagId === undefined) {
            throw new Error('Required parameter conversionTagId was null or undefined when calling conversionTagsGet.');
        }

        const response: ConversionTagResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/conversion_tags/${encodeURIComponent(String(conversionTagId))}`,
        )

        return response;
    }

    /**
     * Get conversion tags
     * List conversion tags associated with an ad account.
     * @param adAccountId Unique identifier of an ad account.
     * @param filterDeleted Filter out deleted tags.
     */
    public async conversionTagsList(adAccountId: string, filterDeleted?: boolean): Promise<ConversionTagListResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling conversionTagsList.');
        }

        let queryParameters: string[] = [];
        if (filterDeleted !== undefined) {
            queryParameters.push('filterDeleted=' + encodeURIComponent(String(filterDeleted)));
        }

        const response: ConversionTagListResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/conversion_tags?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get Ocpm eligible conversion tags
     * Get Ocpm eligible conversion tag events for an ad account.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async ocpmEligibleConversionTagsGet(adAccountId: string): Promise<{ [key: string]: Array<ConversionEventResponse>; }> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling ocpmEligibleConversionTagsGet.');
        }

        const response: { [key: string]: Array<ConversionEventResponse>; } = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/conversion_tags/ocpm_eligible`,
        )

        return response;
    }

    /**
     * Get page visit conversion tags
     * Get all page visit conversion tag events for an ad account.
     * @param adAccountId Unique identifier of an ad account.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param order The order in which to sort the items returned: “ASCENDING” or “DESCENDING” by ID. Note that higher-value IDs are associated with more-recently added items.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async pageVisitConversionTagsGet(adAccountId: string, pageSize?: number, order?: 'ASCENDING' | 'DESCENDING', bookmark?: string): Promise<PageVisitConversionTagsGet200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling pageVisitConversionTagsGet.');
        }

        let queryParameters: string[] = [];
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (order !== undefined) {
            queryParameters.push('order=' + encodeURIComponent(String(order)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: PageVisitConversionTagsGet200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/conversion_tags/page_visit?${queryParameters.join('&')}`,
        )

        return response;
    }

}
