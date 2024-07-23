import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { AdAccountCreateSubscriptionRequest } from '../../Model/adAccountCreateSubscriptionRequest';
import { AdAccountCreateSubscriptionResponse } from '../../Model/adAccountCreateSubscriptionResponse';
import { AdAccountGetSubscriptionResponse } from '../../Model/adAccountGetSubscriptionResponse';
import { AdAccountsSubscriptionsGetList200Response } from '../../Model/adAccountsSubscriptionsGetList200Response';

export class LeadAdsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.LeadAdsService';

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
     * Delete lead ads subscription
     * Delete an existing lead ads webhook subscription by ID. - Only requests for the OWNER or ADMIN of the ad_account will be allowed.  &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param subscriptionId Unique identifier of a subscription.
     */
    public async adAccountsSubscriptionsDelById(adAccountId: string, subscriptionId: string): Promise<any> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling adAccountsSubscriptionsDelById.');
        }

        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('Required parameter subscriptionId was null or undefined when calling adAccountsSubscriptionsDelById.');
        }

        const response: any = await this.delete(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/leads/subscriptions/${encodeURIComponent(String(subscriptionId))}`,
        )

        return response;
    }

    /**
     * Get lead ads subscription
     * Get a specific lead ads subscription record. - Only requests for the OWNER or ADMIN of the ad_account will be allowed.  &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param subscriptionId Unique identifier of a subscription.
     */
    public async adAccountsSubscriptionsGetById(adAccountId: string, subscriptionId: string): Promise<AdAccountGetSubscriptionResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling adAccountsSubscriptionsGetById.');
        }

        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('Required parameter subscriptionId was null or undefined when calling adAccountsSubscriptionsGetById.');
        }

        const response: AdAccountGetSubscriptionResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/leads/subscriptions/${encodeURIComponent(String(subscriptionId))}`,
        )

        return response;
    }

    /**
     * Get lead ads subscriptions
     * Get the advertiser\&#39;s list of lead ads subscriptions. - Only requests for the OWNER or ADMIN of the ad_account will be allowed.  &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async adAccountsSubscriptionsGetList(adAccountId: string, pageSize?: number, bookmark?: string): Promise<AdAccountsSubscriptionsGetList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling adAccountsSubscriptionsGetList.');
        }

        let queryParameters: string[] = [];
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: AdAccountsSubscriptionsGetList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/leads/subscriptions?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Create lead ads subscription
     * Create a lead ads webhook subscription. Subscriptions allow Pinterest to deliver lead data from Ads Manager directly to the subscriber. Subscriptions can exist for a specific lead form or at ad account level.  - Only requests for the OWNER or ADMIN of the ad_account will be allowed. - Advertisers can set up multiple integrations using ad_account_id + lead_form_id but only one integration per unique records. - For data security, egress lead data is encrypted with AES-256-GCM.  &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param adAccountCreateSubscriptionRequest Subscription to create.
     */
    public async adAccountsSubscriptionsPost(adAccountId: string, adAccountCreateSubscriptionRequest: AdAccountCreateSubscriptionRequest): Promise<AdAccountCreateSubscriptionResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling adAccountsSubscriptionsPost.');
        }

        if (adAccountCreateSubscriptionRequest === null || adAccountCreateSubscriptionRequest === undefined) {
            throw new Error('Required parameter adAccountCreateSubscriptionRequest was null or undefined when calling adAccountsSubscriptionsPost.');
        }

        const response: AdAccountCreateSubscriptionResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/leads/subscriptions`,
            adAccountCreateSubscriptionRequest,
        )

        return response;
    }

}
