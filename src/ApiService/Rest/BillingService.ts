import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { AdsCreditRedeemRequest } from '../../Model/adsCreditRedeemRequest';
import { AdsCreditRedeemResponse } from '../../Model/adsCreditRedeemResponse';
import { AdsCreditsDiscountsGet200Response } from '../../Model/adsCreditsDiscountsGet200Response';
import { BillingProfilesGet200Response } from '../../Model/billingProfilesGet200Response';
import { SSIOAccountResponse } from '../../Model/sSIOAccountResponse';
import { SSIOCreateInsertionOrderRequest } from '../../Model/sSIOCreateInsertionOrderRequest';
import { SSIOCreateInsertionOrderResponse } from '../../Model/sSIOCreateInsertionOrderResponse';
import { SSIOEditInsertionOrderRequest } from '../../Model/sSIOEditInsertionOrderRequest';
import { SSIOEditInsertionOrderResponse } from '../../Model/sSIOEditInsertionOrderResponse';
import { SSIOInsertionOrderStatusResponse } from '../../Model/sSIOInsertionOrderStatusResponse';
import { SsioInsertionOrdersStatusGetByAdAccount200Response } from '../../Model/ssioInsertionOrdersStatusGetByAdAccount200Response';
import { SsioOrderLinesGetByAdAccount200Response } from '../../Model/ssioOrderLinesGetByAdAccount200Response';

export class BillingService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.BillingService';

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
     * Redeem ad credits
     * Redeem ads credit on behalf of the ad account id and apply it towards billing.  &lt;strong&gt;This endpoint might not be available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param adsCreditRedeemRequest Redeem ad credits request.
     */
    public async adsCreditRedeem(adAccountId: string, adsCreditRedeemRequest: AdsCreditRedeemRequest): Promise<AdsCreditRedeemResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling adsCreditRedeem.');
        }

        if (adsCreditRedeemRequest === null || adsCreditRedeemRequest === undefined) {
            throw new Error('Required parameter adsCreditRedeemRequest was null or undefined when calling adsCreditRedeem.');
        }

        const response: AdsCreditRedeemResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ads_credit/redeem`,
            adsCreditRedeemRequest,
        )

        return response;
    }

    /**
     * Get ads credit discounts
     * Returns the list of discounts applied to the account.  &lt;strong&gt;This endpoint might not be available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async adsCreditsDiscountsGet(adAccountId: string, bookmark?: string, pageSize?: number): Promise<AdsCreditsDiscountsGet200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling adsCreditsDiscountsGet.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: AdsCreditsDiscountsGet200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ads_credit/discounts?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get billing profiles
     * Get billing profiles in the advertiser account.  &lt;strong&gt;This endpoint might not be available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param isActive Return active billing profiles, if false return all billing profiles.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async billingProfilesGet(adAccountId: string, isActive: boolean, bookmark?: string, pageSize?: number): Promise<BillingProfilesGet200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling billingProfilesGet.');
        }

        if (isActive === null || isActive === undefined) {
            throw new Error('Required parameter isActive was null or undefined when calling billingProfilesGet.');
        }

        let queryParameters: string[] = [];
        if (isActive !== undefined) {
            queryParameters.push('isActive=' + encodeURIComponent(String(isActive)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: BillingProfilesGet200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/billing_profiles?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get Salesforce account details including bill-to information.
     * Get Salesforce account details including bill-to information to be used in insertion orders process for &lt;code&gt;ad_account_id&lt;/code&gt;. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Finance, Campaign.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async ssioAccountsGet(adAccountId: string): Promise<SSIOAccountResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling ssioAccountsGet.');
        }

        const response: SSIOAccountResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ssio/accounts`,
        )

        return response;
    }

    /**
     * Create insertion order through SSIO.
     * Create insertion order through SSIO for &lt;code&gt;ad_account_id&lt;/code&gt;. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Finance, Campaign.
     * @param adAccountId Unique identifier of an ad account.
     * @param sSIOCreateInsertionOrderRequest Order line to create.
     */
    public async ssioInsertionOrderCreate(adAccountId: string, sSIOCreateInsertionOrderRequest: SSIOCreateInsertionOrderRequest): Promise<SSIOCreateInsertionOrderResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling ssioInsertionOrderCreate.');
        }

        if (sSIOCreateInsertionOrderRequest === null || sSIOCreateInsertionOrderRequest === undefined) {
            throw new Error('Required parameter sSIOCreateInsertionOrderRequest was null or undefined when calling ssioInsertionOrderCreate.');
        }

        const response: SSIOCreateInsertionOrderResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ssio/insertion_orders`,
            sSIOCreateInsertionOrderRequest,
        )

        return response;
    }

    /**
     * Edit insertion order through SSIO.
     * Edit insertion order through SSIO for &lt;code&gt;ad_account_id&lt;/code&gt;. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Finance, Campaign.
     * @param adAccountId Unique identifier of an ad account.
     * @param sSIOEditInsertionOrderRequest Order line to create.
     */
    public async ssioInsertionOrderEdit(adAccountId: string, sSIOEditInsertionOrderRequest: SSIOEditInsertionOrderRequest): Promise<SSIOEditInsertionOrderResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling ssioInsertionOrderEdit.');
        }

        if (sSIOEditInsertionOrderRequest === null || sSIOEditInsertionOrderRequest === undefined) {
            throw new Error('Required parameter sSIOEditInsertionOrderRequest was null or undefined when calling ssioInsertionOrderEdit.');
        }

        const response: SSIOEditInsertionOrderResponse = await this.patch(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ssio/insertion_orders`,
            sSIOEditInsertionOrderRequest,
        )

        return response;
    }

    /**
     * Get insertion order status by ad account id.
     * Get insertion order status for account id &lt;code&gt;ad_account_id&lt;/code&gt;. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Finance, Campaign.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async ssioInsertionOrdersStatusGetByAdAccount(adAccountId: string, bookmark?: string, pageSize?: number): Promise<SsioInsertionOrdersStatusGetByAdAccount200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling ssioInsertionOrdersStatusGetByAdAccount.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: SsioInsertionOrdersStatusGetByAdAccount200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ssio/insertion_orders/status?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get insertion order status by pin order id.
     * Get insertion order status for pin order id &lt;code&gt;pin_order_id&lt;/code&gt;. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Finance, Campaign.
     * @param adAccountId Unique identifier of an ad account.
     * @param pinOrderId The pin order id associated with the ssio insertion order
     */
    public async ssioInsertionOrdersStatusGetByPinOrderId(adAccountId: string, pinOrderId: string): Promise<SSIOInsertionOrderStatusResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling ssioInsertionOrdersStatusGetByPinOrderId.');
        }

        if (pinOrderId === null || pinOrderId === undefined) {
            throw new Error('Required parameter pinOrderId was null or undefined when calling ssioInsertionOrdersStatusGetByPinOrderId.');
        }

        const response: SSIOInsertionOrderStatusResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ssio/insertion_orders/${encodeURIComponent(String(pinOrderId))}/status`,
        )

        return response;
    }

    /**
     * Get Salesforce order lines by ad account id.
     * Get Salesforce order lines for account id &lt;code&gt;ad_account_id&lt;/code&gt;. - The token\&#39;s user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access: Admin, Finance, Campaign.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param pinOrderId The pin order id associated with the ssio insertino order
     */
    public async ssioOrderLinesGetByAdAccount(adAccountId: string, bookmark?: string, pageSize?: number, pinOrderId?: string): Promise<SsioOrderLinesGetByAdAccount200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling ssioOrderLinesGetByAdAccount.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (pinOrderId !== undefined) {
            queryParameters.push('pinOrderId=' + encodeURIComponent(String(pinOrderId)));
        }

        const response: SsioOrderLinesGetByAdAccount200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/ssio/order_lines?${queryParameters.join('&')}`,
        )

        return response;
    }

}
