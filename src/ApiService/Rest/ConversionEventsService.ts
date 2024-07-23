import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { ConversionApiResponse } from '../../Model/conversionApiResponse';
import { ConversionEvents } from '../../Model/conversionEvents';

export class ConversionEventsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.ConversionEventsService';

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
     * Send conversions
     * The Pinterest API offers advertisers a way to send Pinterest their conversion information (including web conversions, in-app conversions, or even offline conversions) based on their &lt;code&gt;ad_account_id&lt;/code&gt;. The request body should be a JSON object. - This endpoint requires an &lt;code&gt;access_token&lt;/code&gt; be generated through Ads Manager. Review the &lt;a href&#x3D;"/docs/conversions/conversions/"&gt;Conversions Guide for more details. - The token\&#39;s &lt;code&gt;user_account&lt;/code&gt; must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Analyst, Audience, Campaign. (Note that the token can be used across multiple ad accounts under an user ID.) - This endpoint has a rate limit of 5,000 calls per minute per ad account. - If the merchant is submitting this information using both Pinterest conversion tags and the Pinterest API, Pinterest will remove duplicate information before reporting. (Note that events that took place offline cannot be deduplicated.)
     * @param adAccountId Unique identifier of an ad account.
     * @param conversionEvents Conversion events.
     * @param test Include query param ?test&#x3D;true to mark the request as a test request. The events will not be recorded but the API will still return the same response messages. Use this mode to verify your requests are working and your events are constructed correctly. Warning: If you use this query parameter, be certain that it is off (set to false or deleted) before sending a legitimate (non-testing) request.
     */
    public async eventsCreate(adAccountId: string, conversionEvents: ConversionEvents, test?: boolean): Promise<ConversionApiResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling eventsCreate.');
        }

        if (conversionEvents === null || conversionEvents === undefined) {
            throw new Error('Required parameter conversionEvents was null or undefined when calling eventsCreate.');
        }

        let queryParameters: string[] = [];
        if (test !== undefined) {
            queryParameters.push('test=' + encodeURIComponent(String(test)));
        }

        const response: ConversionApiResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/events?${queryParameters.join('&')}`,
            conversionEvents,
        )

        return response;
    }

}
