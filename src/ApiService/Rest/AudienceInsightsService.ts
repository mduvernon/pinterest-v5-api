import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { AudienceDefinitionResponse } from '../../Model/audienceDefinitionResponse';
import { AudienceInsightType } from '../../Model/audienceInsightType';
import { AudienceInsightsResponse } from '../../Model/audienceInsightsResponse';

export class AudienceInsightsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.AudienceInsightsService';

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
     * Get audience insights
     * Get Audience Insights for an ad account. The response will return insights for 3 types of audiences: the ad account\&#39;s engaged audience on Pinterest, the ad account\&#39;s total audience on Pinterest and Pinterest\&#39;s total audience.&lt;p/&gt; &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/audience-insights" target&#x3D;"_blank"&gt;Learn more about Audience Insights.
     * @param adAccountId Unique identifier of an ad account.
     * @param audienceInsightType Type of audience insights.
     */
    public async audienceInsightsGet(adAccountId: string, audienceInsightType: AudienceInsightType): Promise<AudienceInsightsResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling audienceInsightsGet.');
        }

        if (audienceInsightType === null || audienceInsightType === undefined) {
            throw new Error('Required parameter audienceInsightType was null or undefined when calling audienceInsightsGet.');
        }

        let queryParameters: string[] = [];
        if (audienceInsightType !== undefined) {
            queryParameters.push('audienceInsightType=' + encodeURIComponent(String(audienceInsightType)));
        }

        const response: AudienceInsightsResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/audience_insights?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get audience insights scope and type
     * Get the scope and type of available audiences, which along with a date, is an audience that has recently had an interaction (referred to here as a type) on pins. Interacted pins can belong to at least the most common **partner** or **Pinterest** scopes. This means that user interactions made on advertiser or partner pins will have the **partner** scope. You can also have user interactions performed in general on Pinterest with the **Pinterest** scope. In that case, you can then use the returned type and scope values together on requests to other endpoints to retrieve insight metrics for a desired audience.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async audienceInsightsScopeAndTypeGet(adAccountId: string): Promise<AudienceDefinitionResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling audienceInsightsScopeAndTypeGet.');
        }

        const response: AudienceDefinitionResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/insights/audiences`,
        )

        return response;
    }

}
