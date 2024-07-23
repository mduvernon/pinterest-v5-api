import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { LeadFormResponse } from '../../Model/leadFormResponse';
import { LeadFormTestRequest } from '../../Model/leadFormTestRequest';
import { LeadFormTestResponse } from '../../Model/leadFormTestResponse';
import { LeadFormsList200Response } from '../../Model/leadFormsList200Response';

export class LeadFormsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.LeadFormsService';

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
     * Get lead form by id
     * &lt;strong&gt;This feature is currently in beta and not available to all apps, if you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.&lt;/strong&gt;  Gets a lead form given it\&#39;s ID. It must also be associated with the provided ad account ID.  For more, see &lt;a class&#x3D;"reference external" href&#x3D;"https://help.pinterest.com/en/business/article/lead-ads"&gt;Lead ads.
     * @param adAccountId Unique identifier of an ad account.
     * @param leadFormId Unique identifier of a lead form.
     */
    public async leadFormGet(adAccountId: string, leadFormId: string): Promise<LeadFormResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling leadFormGet.');
        }

        if (leadFormId === null || leadFormId === undefined) {
            throw new Error('Required parameter leadFormId was null or undefined when calling leadFormGet.');
        }

        const response: LeadFormResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/lead_forms/${encodeURIComponent(String(leadFormId))}`,
        )

        return response;
    }

    /**
     * Create lead form test data
     * Create lead form test data based on the list of answers provided as part of the body. - List of answers should follow the questions creation order.  &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param leadFormId Unique identifier of a lead form.
     * @param leadFormTestRequest Subscription to create.
     */
    public async leadFormTestCreate(adAccountId: string, leadFormId: string, leadFormTestRequest: LeadFormTestRequest): Promise<LeadFormTestResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling leadFormTestCreate.');
        }

        if (leadFormId === null || leadFormId === undefined) {
            throw new Error('Required parameter leadFormId was null or undefined when calling leadFormTestCreate.');
        }

        if (leadFormTestRequest === null || leadFormTestRequest === undefined) {
            throw new Error('Required parameter leadFormTestRequest was null or undefined when calling leadFormTestCreate.');
        }

        const response: LeadFormTestResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/lead_forms/${encodeURIComponent(String(leadFormId))}/test`,
            leadFormTestRequest,
        )

        return response;
    }

    /**
     * Get lead forms
     * &lt;strong&gt;This feature is currently in beta and not available to all apps, if you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.&lt;/strong&gt;  Gets all Lead Forms associated with an ad account ID.  For more, see &lt;a class&#x3D;"reference external" href&#x3D;"https://help.pinterest.com/en/business/article/lead-ads"&gt;Lead ads.
     * @param adAccountId Unique identifier of an ad account.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param order The order in which to sort the items returned: “ASCENDING” or “DESCENDING” by ID. Note that higher-value IDs are associated with more-recently added items.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async leadFormsList(adAccountId: string, pageSize?: number, order?: 'ASCENDING' | 'DESCENDING', bookmark?: string): Promise<LeadFormsList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling leadFormsList.');
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

        const response: LeadFormsList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/lead_forms?${queryParameters.join('&')}`,
        )

        return response;
    }

}
