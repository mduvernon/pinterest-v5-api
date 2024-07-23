import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { AdAccountsCountryResponse } from '../../Model/adAccountsCountryResponse';
import { BookClosedResponse } from '../../Model/bookClosedResponse';
import { DeliveryMetricsResponse } from '../../Model/deliveryMetricsResponse';
import { SingleInterestTargetingOptionResponse } from '../../Model/singleInterestTargetingOptionResponse';

export class ResourcesService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.ResourcesService';

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
     * Get ad accounts countries
     * Get Ad Accounts countries
     */
    public async adAccountCountriesGet(): Promise<AdAccountsCountryResponse> {

        const response: AdAccountsCountryResponse = await this.get(
            `${this.basePath}/resources/ad_account_countries`,
        )

        return response;
    }

    /**
     * Get available metrics\&#39; definitions
     * Get the definitions for ads and organic metrics available across both synchronous and asynchronous report endpoints. The &#x60;display_name&#x60; attribute will match how the metric is named in our native tools like Ads Manager. @see /docs/content/analytics/ : Organic Analytics and @see /docs/ads/ad-analytics-reporting/ : Ads Analytics for more information.
     * @param reportType Report type.
     */
    public async deliveryMetricsGet(reportType?: 'SYNC' | 'ASYNC'): Promise<DeliveryMetricsResponse> {
        let queryParameters: string[] = [];
        if (reportType !== undefined) {
            queryParameters.push('reportType=' + encodeURIComponent(String(reportType)));
        }

        const response: AdAccountsCountryResponse = await this.get(
            `${this.basePath}/resources/delivery_metrics?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get interest details
     * &lt;p&gt;Get details of a specific interest given interest ID.&lt;/p&gt; &lt;p&gt;Click &lt;a href&#x3D;"https://docs.google.com/spreadsheets/d/1HxL-0Z3p2fgxis9YBP2HWC3tvPrs1hAuHDRtH-NJTIM/edit#gid&#x3D;118370875" target&#x3D;"_blank"&gt;here for a spreadsheet listing interests and their IDs.&lt;/p&gt;
     * @param interestId Unique identifier of an interest.
     */
    public async interestTargetingOptionsGet(interestId: string): Promise<SingleInterestTargetingOptionResponse> {
        if (interestId === null || interestId === undefined) {
            throw new Error('Required parameter interestId was null or undefined when calling interestTargetingOptionsGet.');
        }

        const response: SingleInterestTargetingOptionResponse = await this.get(
            `${this.basePath}/resources/targeting/interests/${encodeURIComponent(String(interestId))}`,
        )

        return response;
    }

    /**
     * Get lead form questions
     * Get a list of all lead form question type names. Some questions might not be used.  &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     */
    public async leadFormQuestionsGet(): Promise<any> {
        const response: SingleInterestTargetingOptionResponse = await this.get(
            `${this.basePath}/resources/lead_form_questions`,
        )

        return response;
    }

    /**
     * Get metrics ready state
     * Learn whether conversion or non-conversion metrics are finalized and ready to query.
     * @param date Analytics reports request date (UTC). Format: YYYY-MM-DD
     */
    public async metricsReadyStateGet(date: string): Promise<BookClosedResponse> {
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling metricsReadyStateGet.');
        }

        let queryParameters: string[] = [];
        if (date !== undefined) {
            queryParameters.push('date=' + encodeURIComponent(String(date)));
        }

        const response: BookClosedResponse = await this.get(
            `${this.basePath}/resources/metrics_ready_state?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get targeting options
     * &lt;p&gt;You can use targeting values in ads placement to define your intended audience. &lt;/p&gt; &lt;p&gt;Targeting metrics are organized around targeting specifications.&lt;/p&gt; &lt;p&gt;For more information on ads targeting, see &lt;a class&#x3D;"reference external" href&#x3D;"https://help.pinterest.com/en/business/article/audience-targeting" target&#x3D;"_blank"&gt;Audience targeting.&lt;/p&gt; &lt;p&gt;&lt;b&gt;Sample return:&lt;/b&gt;&lt;/p&gt; &lt;pre class&#x3D;"literal-block"&gt; [{&amp;quot;36313&amp;quot;: &amp;quot;Australia: Moreton Bay - North&amp;quot;, &amp;quot;124735&amp;quot;: &amp;quot;Canada: North Battleford&amp;quot;, &amp;quot;36109&amp;quot;: &amp;quot;Australia: Murray&amp;quot;, &amp;quot;36108&amp;quot;: &amp;quot;Australia: Mid North Coast&amp;quot;, &amp;quot;36101&amp;quot;: &amp;quot;Australia: Capital Region&amp;quot;, &amp;quot;811&amp;quot;: &amp;quot;U.S.: Reno&amp;quot;, &amp;quot;36103&amp;quot;: &amp;quot;Australia: Central West&amp;quot;, &amp;quot;36102&amp;quot;: &amp;quot;Australia: Central Coast&amp;quot;, &amp;quot;36105&amp;quot;: &amp;quot;Australia: Far West and Orana&amp;quot;, &amp;quot;36104&amp;quot;: &amp;quot;Australia: Coffs Harbour - Grafton&amp;quot;, &amp;quot;36107&amp;quot;: &amp;quot;Australia: Illawarra&amp;quot;, &amp;quot;36106&amp;quot;: &amp;quot;Australia: Hunter Valley Exc Newcastle&amp;quot;, &amp;quot;554017&amp;quot;: &amp;quot;New Zealand: Wanganui&amp;quot;, &amp;quot;554016&amp;quot;: &amp;quot;New Zealand: Marlborough&amp;quot;, &amp;quot;554015&amp;quot;: &amp;quot;New Zealand: Gisborne&amp;quot;, &amp;quot;554014&amp;quot;: &amp;quot;New Zealand: Tararua&amp;quot;, &amp;quot;554013&amp;quot;: &amp;quot;New Zealand: Invercargill&amp;quot;, &amp;quot;GR&amp;quot;: &amp;quot;Greece&amp;quot;, &amp;quot;554011&amp;quot;: &amp;quot;New Zealand: Whangarei&amp;quot;, &amp;quot;554010&amp;quot;: &amp;quot;New Zealand: Far North&amp;quot;, &amp;quot;717&amp;quot;: &amp;quot;U.S.: Quincy-Hannibal-Keokuk&amp;quot;, &amp;quot;716&amp;quot;: &amp;quot;U.S.: Baton Rouge&amp;quot;,...}] &lt;/pre&gt;
     * @param targetingType Public targeting type.
     * @param clientId Client ID.
     * @param oauthSignature Oauth signature
     * @param timestamp Timestamp
     */
    public async targetingOptionsGet(targetingType: 'APPTYPE' | 'GENDER' | 'LOCALE' | 'AGE_BUCKET' | 'LOCATION' | 'GEO' | 'INTEREST' | 'KEYWORD' | 'AUDIENCE_INCLUDE' | 'AUDIENCE_EXCLUDE', clientId?: string, oauthSignature?: string, timestamp?: string): Promise<Array<object>> {
        if (targetingType === null || targetingType === undefined) {
            throw new Error('Required parameter targetingType was null or undefined when calling targetingOptionsGet.');
        }

        let queryParameters: string[] = [];
        if (clientId !== undefined) {
            queryParameters.push('clientId=' + encodeURIComponent(String(clientId)));
        }
        if (oauthSignature !== undefined) {
            queryParameters.push('oauthSignature=' + encodeURIComponent(String(oauthSignature)));
        }
        if (timestamp !== undefined) {
            queryParameters.push('timestamp=' + encodeURIComponent(String(timestamp)));
        }

        const response: Array<object> = await this.get(
            `${this.basePath}/resources/targeting/${encodeURIComponent(String(targetingType))}?${queryParameters.join('&')}`,
        )

        return response;
    }

}
