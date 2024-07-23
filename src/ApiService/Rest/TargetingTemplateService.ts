import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { TargetingTemplateCreate } from '../../Model/targetingTemplateCreate';
import { TargetingTemplateGetResponseData } from '../../Model/targetingTemplateGetResponseData';
import { TargetingTemplateList200Response } from '../../Model/targetingTemplateList200Response';
import { TargetingTemplateUpdateRequest } from '../../Model/targetingTemplateUpdateRequest';

export class TargetingTemplateService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.TargetingTemplateService';

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
     * Create targeting templates
     * &lt;p&gt;Targeting templates allow advertisers to save a set of targeting details including audience lists,  keywords &amp; interest, demographics, and placements to use more than once during the campaign creation process.&lt;/p&gt;  &lt;p&gt;Templates can be used to build out basic targeting criteria that you plan to use across campaigns and to reuse   performance targeting from prior campaigns for new campaigns.&lt;/p&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param targetingTemplateCreate targeting template creation entity
     */
    public async targetingTemplateCreate(adAccountId: string, targetingTemplateCreate: TargetingTemplateCreate): Promise<TargetingTemplateGetResponseData> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling targetingTemplateCreate.');
        }

        if (targetingTemplateCreate === null || targetingTemplateCreate === undefined) {
            throw new Error('Required parameter targetingTemplateCreate was null or undefined when calling targetingTemplateCreate.');
        }

        const response: TargetingTemplateGetResponseData = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/targeting_templates`,
            targetingTemplateCreate,
        )

        return response;
    }

    /**
     * List targeting templates
     * Get a list of the targeting templates in the specified &lt;code&gt;ad_account_id&lt;/code&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param order The order in which to sort the items returned: “ASCENDING” or “DESCENDING” by ID. Note that higher-value IDs are associated with more-recently added items.
     * @param includeSizing Include audience sizing in result or not
     * @param searchQuery Search keyword for targeting templates
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async targetingTemplateList(adAccountId: string, order?: 'ASCENDING' | 'DESCENDING', includeSizing?: boolean, searchQuery?: string, pageSize?: number, bookmark?: string): Promise<TargetingTemplateList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling targetingTemplateList.');
        }

        let queryParameters: string[] = [];
        if (order !== undefined) {
            queryParameters.push('order=' + encodeURIComponent(String(order)));
        }
        if (includeSizing !== undefined) {
            queryParameters.push('includeSizing=' + encodeURIComponent(String(includeSizing)));
        }
        if (searchQuery !== undefined) {
            queryParameters.push('searchQuery=' + encodeURIComponent(String(searchQuery)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: TargetingTemplateList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/targeting_templates?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update targeting templates
     * &lt;p&gt;Update the targeting template given advertiser ID and targeting template ID&lt;/p&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param targetingTemplateUpdateRequest Operation type and targeting template ID
     */
    public async targetingTemplateUpdate(adAccountId: string, targetingTemplateUpdateRequest: TargetingTemplateUpdateRequest): Promise<any> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling targetingTemplateUpdate.');
        }

        if (targetingTemplateUpdateRequest === null || targetingTemplateUpdateRequest === undefined) {
            throw new Error('Required parameter targetingTemplateUpdateRequest was null or undefined when calling targetingTemplateUpdate.');
        }

        const response: any = await this.patch(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/targeting_templates`,
            targetingTemplateUpdateRequest,
        )

        return response;
    }

}
