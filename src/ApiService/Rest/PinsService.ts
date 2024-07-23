import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { Pin } from '../../Model/pin';
import { PinAnalyticsMetricsResponse } from '../../Model/pinAnalyticsMetricsResponse';
import { PinCreate } from '../../Model/pinCreate';
import { PinUpdate } from '../../Model/pinUpdate';
import { PinsAnalyticsMetricTypesParameterInner } from '../../Model/pinsAnalyticsMetricTypesParameterInner';
import { PinsList200Response } from '../../Model/pinsList200Response';
import { PinsSaveRequest } from '../../Model/pinsSaveRequest';

import { COLLECTION_FORMATS } from '../../Constant/variables';

export class PinsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.PinsService';

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
     * Get multiple Pin analytics
     * &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;  Get analytics for multiple pins owned by the "operation user_account" - or on a group board that has been shared with this account. - The maximum number of pins supported in a single request is 100. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via &lt;a href&#x3D;"https://developers.pinterest.com/docs/api/v5/#operation/ad_accounts/list"&gt;List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account:  - For Pins on public async or protected boards: Admin, Analyst. - For Pins on secret boards: Admin.  If Pin was created before &lt;code&gt;2023-03-20&lt;/code&gt; lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.
     * @param startDate Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today.
     * @param endDate Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date.
     * @param metricTypes Pin metric types to get data for.
     * @param pinIds List of Pin IDs.
     * @param appTypes Apps or devices to get data for, default is all.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async multiPinsAnalytics(startDate: string, endDate: string, metricTypes: Array<PinsAnalyticsMetricTypesParameterInner>, pinIds?: Array<string>, appTypes?: 'ALL' | 'MOBILE' | 'TABLET' | 'WEB', adAccountId?: string): Promise<{ [key: string]: { [key: string]: PinAnalyticsMetricsResponse; }; }> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling multiPinsAnalytics.');
        }

        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling multiPinsAnalytics.');
        }

        if (metricTypes === null || metricTypes === undefined) {
            throw new Error('Required parameter metricTypes was null or undefined when calling multiPinsAnalytics.');
        }

        let queryParameters: string[] = [];
        if (pinIds) {
            pinIds.forEach((element) => {
                queryParameters.push('pinIds=' + encodeURIComponent(String(element)));
            })
        }
        if (startDate !== undefined) {
            queryParameters.push('startDate=' + encodeURIComponent(String(startDate)));
        }
        if (endDate !== undefined) {
            queryParameters.push('endDate=' + encodeURIComponent(String(endDate)));
        }
        if (appTypes !== undefined) {
            queryParameters.push('appTypes=' + encodeURIComponent(String(appTypes)));
        }
        if (metricTypes) {
            queryParameters.push('metricTypes=' + encodeURIComponent(metricTypes.join(COLLECTION_FORMATS['csv'])));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: { [key: string]: { [key: string]: PinAnalyticsMetricsResponse; }; } = await this.get(
            `${this.basePath}/pins/analytics?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get Pin analytics
     * Get analytics for a Pin owned by the "operation user_account" - or on a group board that has been shared with this account. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via &lt;a href&#x3D;"https://developers.pinterest.com/docs/api/v5/#operation/ad_accounts/list"&gt;List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account:  - For Pins on public async or protected boards: Admin, Analyst. - For Pins on secret boards: Admin.  If Pin was created before &lt;code&gt;2023-03-20&lt;/code&gt; lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.
     * @param pinId Unique identifier of a Pin.
     * @param startDate Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today.
     * @param endDate Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date.
     * @param metricTypes Pin metric types to get data for. Keep in mind this cannot have ALL if split_field is set to any value other than &lt;code&gt;NO_SPLIT&lt;/code&gt;.
     * @param appTypes Apps or devices to get data for, default is all.
     * @param splitField How to split the data into groups. Not including this param means data won\&#39;t be split.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async pinsAnalytics(pinId: string, startDate: string, endDate: string, metricTypes: Array<PinsAnalyticsMetricTypesParameterInner>, appTypes?: 'ALL' | 'MOBILE' | 'TABLET' | 'WEB', splitField?: 'NO_SPLIT' | 'APP_TYPE', adAccountId?: string): Promise<{ [key: string]: PinAnalyticsMetricsResponse; }> {
        if (pinId === null || pinId === undefined) {
            throw new Error('Required parameter pinId was null or undefined when calling pinsAnalytics.');
        }

        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling pinsAnalytics.');
        }

        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling pinsAnalytics.');
        }

        if (metricTypes === null || metricTypes === undefined) {
            throw new Error('Required parameter metricTypes was null or undefined when calling pinsAnalytics.');
        }

        let queryParameters: string[] = [];
        if (startDate !== undefined) {
            queryParameters.push('startDate=' + encodeURIComponent(String(startDate)));
        }
        if (endDate !== undefined) {
            queryParameters.push('endDate=' + encodeURIComponent(String(endDate)));
        }
        if (appTypes !== undefined) {
            queryParameters.push('appTypes=' + encodeURIComponent(String(appTypes)));
        }
        if (metricTypes) {
            queryParameters.push('metricTypes=' + encodeURIComponent(metricTypes.join(COLLECTION_FORMATS['csv'])));
        }
        if (splitField !== undefined) {
            queryParameters.push('splitField=' + encodeURIComponent(String(splitField)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: { [key: string]: PinAnalyticsMetricsResponse; } = await this.get(
            `${this.basePath}/pins/${encodeURIComponent(String(pinId))}/analytics?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Create Pin
     * Create a Pin on a board or board section owned by the "operation user_account".  Note: If the current "operation user_account" (defined by the access token) has access to another user\&#39;s Ad Accounts via Pinterest Business Access, you can modify your request to make use of the current operation_user_account\&#39;s permissions to those Ad Accounts by including the ad_account_id in the path parameters for the request (e.g. .../?ad_account_id&#x3D;12345&amp;...).  - This function is intended solely for publishing new content created by the user. If you are interested in saving content created by others to your Pinterest boards, sometimes called \&#39;curated content\&#39;, please use our @see /docs/add-ons/save-button : Save button instead. For more tips on creating fresh content for Pinterest, review our @see /docs/content/content-creation/ : Content App Solutions Guide.  &lt;strong&gt;@see /docs/content/content-creation/#Creating%20video%20Pins : Learn more&lt;/strong&gt; about video Pin creation.
     * @param pinCreate Create a new Pin.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async pinsCreate(pinCreate: PinCreate, adAccountId?: string): Promise<Pin> {
        if (pinCreate === null || pinCreate === undefined) {
            throw new Error('Required parameter pinCreate was null or undefined when calling pinsCreate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: { [key: string]: PinAnalyticsMetricsResponse; } = await this.post(
            `${this.basePath}/pins?${queryParameters.join('&')}`,
            pinCreate,
        )

        return response;
    }

    /**
     * Delete Pin
     * Delete a Pins owned by the "operation user_account" - or on a group board that has been shared with this account. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account:  - For Pins on public async or protected boards: Owner, Admin, Analyst, Campaign Manager. - For Pins on secret boards: Owner, Admin.
     * @param pinId Unique identifier of a Pin.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async pinsDelete(pinId: string, adAccountId?: string): Promise<any> {
        if (pinId === null || pinId === undefined) {
            throw new Error('Required parameter pinId was null or undefined when calling pinsDelete.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: any = await this.delete(
            `${this.basePath}/pins/${encodeURIComponent(String(pinId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get Pin
     * Get a Pin owned by the "operation user_account" - or on a group board that has been shared with this account. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account:  - For Pins on public async or protected boards: Owner, Admin, Analyst, Campaign Manager. - For Pins on secret boards: Owner, Admin.
     * @param pinId Unique identifier of a Pin.
     * @param pinMetrics Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before &lt;code&gt;2023-03-20&lt;/code&gt; lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async pinsGet(pinId: string, pinMetrics?: boolean, adAccountId?: string): Promise<Pin> {
        if (pinId === null || pinId === undefined) {
            throw new Error('Required parameter pinId was null or undefined when calling pinsGet.');
        }

        let queryParameters: string[] = [];
        if (pinMetrics !== undefined) {
            queryParameters.push('pinMetrics=' + encodeURIComponent(String(pinMetrics)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Pin = await this.get(
            `${this.basePath}/pins/${encodeURIComponent(String(pinId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List Pins
     * Get a list of the Pins owned by the "operation user_account".   - By default, the "operation user_account" is the token user_account.   - All Pins owned by the "operation user_account" are included, regardless of who owns the board they are on. Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".  Disclaimer: there are known performance issues when filtering by field &lt;code&gt;creative_type&lt;/code&gt; and including protected pins. If your request is timing out in this scenario we encourage you to use @see /docs/api/v5/#operation/boards/list_pins : GET List Pins on Board.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param pinFilter Pin filter.
     * @param includeProtectedPins Specify if return pins from protected boards
     * @param pinType The type of pins to return, currently only enabled for private pins
     * @param creativeTypes Pin creative types filter. &lt;/p&gt;&lt;strong&gt;Note:&lt;/strong&gt; SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.
     * @param adAccountId Unique identifier of an ad account.
     * @param pinMetrics Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before &lt;code&gt;2023-03-20&lt;/code&gt; lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.
     */
    public async pinsList(bookmark?: string, pageSize?: number, pinFilter?: 'exclude_native' | 'exclude_repins' | 'has_been_promoted', includeProtectedPins?: boolean, pinType?: 'PRIVATE', creativeTypes?: Array<'REGULAR' | 'VIDEO' | 'SHOPPING' | 'CAROUSEL' | 'MAX_VIDEO' | 'SHOP_THE_PIN' | 'COLLECTION' | 'IDEA'>, adAccountId?: string, pinMetrics?: boolean): Promise<PinsList200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (pinFilter !== undefined) {
            queryParameters.push('pinFilter=' + encodeURIComponent(String(pinFilter)));
        }
        if (includeProtectedPins !== undefined) {
            queryParameters.push('includeProtectedPins=' + encodeURIComponent(String(includeProtectedPins)));
        }
        if (pinType !== undefined) {
            queryParameters.push('pinType=' + encodeURIComponent(String(pinType)));
        }
        if (creativeTypes) {
            creativeTypes.forEach((element) => {
                queryParameters.push('creativeTypes=' + encodeURIComponent(String(element)));
            })
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (pinMetrics !== undefined) {
            queryParameters.push('pinMetrics=' + encodeURIComponent(String(pinMetrics)));
        }

        const response: PinsList200Response = await this.get(
            `${this.basePath}/pins?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Save Pin
     * Save a Pin on a board or board section owned by the "operation user_account". - By default, the "operation user_account" is the token user_account. Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account:  - For Pins on public async or protected boards: Owner, Admin, Analyst, Campaign Manager. - For Pins on secret boards: Owner, Admin.  - Any Pin type can be saved: image Pin, video Pin, Idea Pin, product Pin, etc. - Any public async Pin can be saved given a pin ID.
     * @param pinId Unique identifier of a Pin.
     * @param pinsSaveRequest Request object used to save an existing pin
     * @param adAccountId Unique identifier of an ad account.
     */
    public async pinsSave(pinId: string, pinsSaveRequest: PinsSaveRequest, adAccountId?: string): Promise<Pin> {
        if (pinId === null || pinId === undefined) {
            throw new Error('Required parameter pinId was null or undefined when calling pinsSave.');
        }

        if (pinsSaveRequest === null || pinsSaveRequest === undefined) {
            throw new Error('Required parameter pinsSaveRequest was null or undefined when calling pinsSave.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Pin = await this.post(
            `${this.basePath}/pins/${encodeURIComponent(String(pinId))}/save?${queryParameters.join('&')}`,
            pinsSaveRequest,
        )

        return response;
    }

    /**
     * Update Pin
     * Update a pin owned by the "operating user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account:  - For Pins on public async or protected boards: Owner, Admin, Analyst, Campaign Manager. - For Pins on secret boards: Owner, Admin.  &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;
     * @param pinId Unique identifier of a Pin.
     * @param pinUpdate
     * @param adAccountId Unique identifier of an ad account.
     */
    public async pinsUpdate(pinId: string, pinUpdate: PinUpdate, adAccountId?: string): Promise<Pin> {
        if (pinId === null || pinId === undefined) {
            throw new Error('Required parameter pinId was null or undefined when calling pinsUpdate.');
        }

        if (pinUpdate === null || pinUpdate === undefined) {
            throw new Error('Required parameter pinUpdate was null or undefined when calling pinsUpdate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Pin = await this.patch(
            `${this.basePath}/pins/${encodeURIComponent(String(pinId))}?${queryParameters.join('&')}`,
            pinUpdate,
        )

        return response;
    }

}
