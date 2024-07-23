import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { Account } from '../../Model/account';
import { AnalyticsMetricsResponse } from '../../Model/analyticsMetricsResponse';
import { BoardsUserFollowsList200Response } from '../../Model/boardsUserFollowsList200Response';
import { FollowUserRequest } from '../../Model/followUserRequest';
import { FollowersList200Response } from '../../Model/followersList200Response';
import { LinkedBusiness } from '../../Model/linkedBusiness';
import { TopPinsAnalyticsResponse } from '../../Model/topPinsAnalyticsResponse';
import { TopVideoPinsAnalyticsResponse } from '../../Model/topVideoPinsAnalyticsResponse';
import { UserAccountFollowedInterests200Response } from '../../Model/userAccountFollowedInterests200Response';
import { UserFollowingFeedType } from '../../Model/userFollowingFeedType';
import { UserFollowingGet200Response } from '../../Model/userFollowingGet200Response';
import { UserSummary } from '../../Model/userSummary';
import { UserWebsiteSummary } from '../../Model/userWebsiteSummary';
import { UserWebsiteVerificationCode } from '../../Model/userWebsiteVerificationCode';
import { UserWebsiteVerifyRequest } from '../../Model/userWebsiteVerifyRequest';
import { UserWebsitesGet200Response } from '../../Model/userWebsitesGet200Response';

import { COLLECTION_FORMATS } from '../../Constant/variables';

export class UserAccountService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.UserAccountService';

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
     * List following boards
     * Get a list of the boards a user follows. The request returns a board summary object array.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param explicitFollowing Whether or not to include implicit user follows, which means followees with board follows. When explicit_following is True, it means we only want explicit user follows.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardsUserFollowsList(bookmark?: string, pageSize?: number, explicitFollowing?: boolean, adAccountId?: string): Promise<BoardsUserFollowsList200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (explicitFollowing !== undefined) {
            queryParameters.push('explicitFollowing=' + encodeURIComponent(String(explicitFollowing)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: BoardsUserFollowsList200Response = await this.get(
            `${this.basePath}/user_account/following/boards?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Follow user
     * &lt;strong&gt;This endpoint is currently in beta and not available to all apps. @see /docs/new/about-beta-access/ : Learn more.&lt;/strong&gt;  Use this request, as a signed-in user, to follow another user.
     * @param username A valid username
     * @param followUserRequest Follow a user.
     */
    public async followUserUpdate(username: string, followUserRequest: FollowUserRequest): Promise<UserSummary> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling followUserUpdate.');
        }

        if (followUserRequest === null || followUserRequest === undefined) {
            throw new Error('Required parameter followUserRequest was null or undefined when calling followUserUpdate.');
        }

        const response: UserSummary = await this.post(
            `${this.basePath}/user_account/following/${encodeURIComponent(String(username))}`,
            followUserRequest,
        )

        return response;
    }

    /**
     * List followers
     * Get a list of your followers.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async followersList(bookmark?: string, pageSize?: number): Promise<FollowersList200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: FollowersList200Response = await this.get(
            `${this.basePath}/user_account/followers?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List linked businesses
     * Get a list of your linked business accounts.
     */
    public async linkedBusinessAccountsGet(): Promise<LinkedBusiness> {
        const response: LinkedBusiness = await this.get(
            `${this.basePath}/user_account/businesses`,
        )

        return response;
    }

    /**
     * Unverify website
     * Unverifu a website verified by the signed-in user.
     * @param website Website with path or domain only
     */
    public async unverifyWebsiteDelete(website: string): Promise<any> {
        if (website === null || website === undefined) {
            throw new Error('Required parameter website was null or undefined when calling unverifyWebsiteDelete.');
        }

        let queryParameters: string[] = [];
        if (website !== undefined) {
            queryParameters.push('website=' + encodeURIComponent(String(website)));
        }

        const response: any = await this.delete(
            `${this.basePath}/user_account/websites?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get user account analytics
     * Get analytics for the "operation user_account" - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
     * @param startDate Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today.
     * @param endDate Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date.
     * @param fromClaimedContent Filter on Pins that match your claimed domain.
     * @param pinFormat Pin formats to get data for, default is all.
     * @param appTypes Apps or devices to get data for, default is all.
     * @param contentType Filter to paid or organic data. Default is all.
     * @param source Filter to activity from Pins created and saved by your, or activity created and saved by others from your claimed accounts
     * @param metricTypes Metric types to get data for, default is all.
     * @param splitField How to split the data into groups. Not including this param means data won\&#39;t be split.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async userAccountAnalytics(startDate: string, endDate: string, fromClaimedContent?: 'OTHER' | 'CLAIMED' | 'BOTH', pinFormat?: 'ALL' | 'ORGANIC_IMAGE' | 'ORGANIC_PRODUCT' | 'ORGANIC_VIDEO' | 'ADS_STANDARD' | 'ADS_PRODUCT' | 'ADS_VIDEO' | 'ADS_IDEA' | 'PRODUCT' | 'REGULAR' | 'VIDEO', appTypes?: 'ALL' | 'MOBILE' | 'TABLET' | 'WEB', contentType?: 'ALL' | 'PAID' | 'ORGANIC', source?: 'ALL' | 'YOUR_PINS' | 'OTHER_PINS', metricTypes?: Array<'ENGAGEMENT' | 'ENGAGEMENT_RATE' | 'IMPRESSION' | 'OUTBOUND_CLICK' | 'OUTBOUND_CLICK_RATE' | 'PIN_CLICK' | 'PIN_CLICK_RATE' | 'SAVE' | 'SAVE_RATE'>, splitField?: 'NO_SPLIT' | 'APP_TYPE' | 'OWNED_CONTENT' | 'SOURCE' | 'PIN_FORMAT', adAccountId?: string): Promise<{ [key: string]: AnalyticsMetricsResponse; }> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling userAccountAnalytics.');
        }

        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling userAccountAnalytics.');
        }

        let queryParameters: string[] = [];
        if (startDate !== undefined) {
            queryParameters.push('startDate=' + encodeURIComponent(String(startDate)));
        }
        if (endDate !== undefined) {
            queryParameters.push('endDate=' + encodeURIComponent(String(endDate)));
        }
        if (fromClaimedContent !== undefined) {
            queryParameters.push('fromClaimedContent=' + encodeURIComponent(String(fromClaimedContent)));
        }
        if (pinFormat !== undefined) {
            queryParameters.push('pinFormat=' + encodeURIComponent(String(pinFormat)));
        }
        if (appTypes !== undefined) {
            queryParameters.push('appTypes=' + encodeURIComponent(String(appTypes)));
        }
        if (contentType !== undefined) {
            queryParameters.push('contentType=' + encodeURIComponent(String(contentType)));
        }
        if (source !== undefined) {
            queryParameters.push('source=' + encodeURIComponent(String(source)));
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

        const response: { [key: string]: AnalyticsMetricsResponse; } = await this.get(
            `${this.basePath}/user_account/analytics?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get user account top pins analytics
     * Gets analytics data about a user\&#39;s top pins (limited to the top 50). - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
     * @param startDate Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today.
     * @param endDate Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date.
     * @param sortBy Specify sorting order for metrics
     * @param fromClaimedContent Filter on Pins that match your claimed domain.
     * @param pinFormat Pin formats to get data for, default is all.
     * @param appTypes Apps or devices to get data for, default is all.
     * @param contentType Filter to paid or organic data. Default is all.
     * @param source Filter to activity from Pins created and saved by your, or activity created and saved by others from your claimed accounts
     * @param metricTypes Metric types to get data for, default is all.
     * @param numOfPins Number of pins to include, default is 10. Max is 50.
     * @param createdInLastNDays Get metrics for pins created in the last "n" days.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async userAccountAnalyticsTopPins(startDate: string, endDate: string, sortBy: 'ENGAGEMENT' | 'IMPRESSION' | 'OUTBOUND_CLICK' | 'PIN_CLICK' | 'SAVE', fromClaimedContent?: 'OTHER' | 'CLAIMED' | 'BOTH', pinFormat?: 'ALL' | 'ORGANIC_IMAGE' | 'ORGANIC_PRODUCT' | 'ORGANIC_VIDEO' | 'ADS_STANDARD' | 'ADS_PRODUCT' | 'ADS_VIDEO' | 'ADS_IDEA' | 'PRODUCT' | 'REGULAR' | 'VIDEO', appTypes?: 'ALL' | 'MOBILE' | 'TABLET' | 'WEB', contentType?: 'ALL' | 'PAID' | 'ORGANIC', source?: 'ALL' | 'YOUR_PINS' | 'OTHER_PINS', metricTypes?: Array<'ENGAGEMENT' | 'ENGAGEMENT_RATE' | 'IMPRESSION' | 'OUTBOUND_CLICK' | 'OUTBOUND_CLICK_RATE' | 'PIN_CLICK' | 'PIN_CLICK_RATE' | 'SAVE' | 'SAVE_RATE'>, numOfPins?: number, createdInLastNDays?: 30, adAccountId?: string): Promise<TopPinsAnalyticsResponse> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling userAccountAnalyticsTopPins.');
        }

        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling userAccountAnalyticsTopPins.');
        }

        if (sortBy === null || sortBy === undefined) {
            throw new Error('Required parameter sortBy was null or undefined when calling userAccountAnalyticsTopPins.');
        }

        let queryParameters: string[] = [];
        if (startDate !== undefined) {
            queryParameters.push('startDate=' + encodeURIComponent(String(startDate)));
        }
        if (endDate !== undefined) {
            queryParameters.push('endDate=' + encodeURIComponent(String(endDate)));
        }
        if (sortBy !== undefined) {
            queryParameters.push('sortBy=' + encodeURIComponent(String(sortBy)));
        }
        if (fromClaimedContent !== undefined) {
            queryParameters.push('fromClaimedContent=' + encodeURIComponent(String(fromClaimedContent)));
        }
        if (pinFormat !== undefined) {
            queryParameters.push('pinFormat=' + encodeURIComponent(String(pinFormat)));
        }
        if (appTypes !== undefined) {
            queryParameters.push('appTypes=' + encodeURIComponent(String(appTypes)));
        }
        if (contentType !== undefined) {
            queryParameters.push('contentType=' + encodeURIComponent(String(contentType)));
        }
        if (source !== undefined) {
            queryParameters.push('source=' + encodeURIComponent(String(source)));
        }
        if (metricTypes) {
            queryParameters.push('metricTypes=' + encodeURIComponent(metricTypes.join(COLLECTION_FORMATS['csv'])));
        }
        if (numOfPins !== undefined) {
            queryParameters.push('numOfPins=' + encodeURIComponent(String(numOfPins)));
        }
        if (createdInLastNDays !== undefined) {
            queryParameters.push('createdInLastNDays=' + encodeURIComponent(String(createdInLastNDays)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: TopPinsAnalyticsResponse = await this.get(
            `${this.basePath}/user_account/analytics/top_pins?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get user account top video pins analytics
     * Gets analytics data about a user\&#39;s top video pins (limited to the top 50). - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
     * @param startDate Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today.
     * @param endDate Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date.
     * @param sortBy Specify sorting order for video metrics
     * @param fromClaimedContent Filter on Pins that match your claimed domain.
     * @param pinFormat Pin formats to get data for, default is all.
     * @param appTypes Apps or devices to get data for, default is all.
     * @param contentType Filter to paid or organic data. Default is all.
     * @param source Filter to activity from Pins created and saved by your, or activity created and saved by others from your claimed accounts
     * @param metricTypes Metric types to get video data for, default is all.
     * @param numOfPins Number of pins to include, default is 10. Max is 50.
     * @param createdInLastNDays Get metrics for pins created in the last "n" days.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async userAccountAnalyticsTopVideoPins(startDate: string, endDate: string, sortBy: 'IMPRESSION' | 'SAVE' | 'OUTBOUND_CLICK' | 'VIDEO_MRC_VIEW' | 'VIDEO_AVG_WATCH_TIME' | 'VIDEO_V50_WATCH_TIME' | 'QUARTILE_95_PERCENT_VIEW' | 'VIDEO_10S_VIEW' | 'VIDEO_START', fromClaimedContent?: 'OTHER' | 'CLAIMED' | 'BOTH', pinFormat?: 'ALL' | 'ORGANIC_IMAGE' | 'ORGANIC_PRODUCT' | 'ORGANIC_VIDEO' | 'ADS_STANDARD' | 'ADS_PRODUCT' | 'ADS_VIDEO' | 'ADS_IDEA' | 'PRODUCT' | 'REGULAR' | 'VIDEO', appTypes?: 'ALL' | 'MOBILE' | 'TABLET' | 'WEB', contentType?: 'ALL' | 'PAID' | 'ORGANIC', source?: 'ALL' | 'YOUR_PINS' | 'OTHER_PINS', metricTypes?: Array<'IMPRESSION' | 'SAVE' | 'VIDEO_MRC_VIEW' | 'VIDEO_AVG_WATCH_TIME' | 'VIDEO_V50_WATCH_TIME' | 'QUARTILE_95_PERCENT_VIEW' | 'VIDEO_10S_VIEW' | 'VIDEO_START' | 'OUTBOUND_CLICK'>, numOfPins?: number, createdInLastNDays?: 30, adAccountId?: string): Promise<TopVideoPinsAnalyticsResponse> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling userAccountAnalyticsTopVideoPins.');
        }

        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling userAccountAnalyticsTopVideoPins.');
        }

        if (sortBy === null || sortBy === undefined) {
            throw new Error('Required parameter sortBy was null or undefined when calling userAccountAnalyticsTopVideoPins.');
        }

        let queryParameters: string[] = [];
        if (startDate !== undefined) {
            queryParameters.push('startDate=' + encodeURIComponent(String(startDate)));
        }
        if (endDate !== undefined) {
            queryParameters.push('endDate=' + encodeURIComponent(String(endDate)));
        }
        if (sortBy !== undefined) {
            queryParameters.push('sortBy=' + encodeURIComponent(String(sortBy)));
        }
        if (fromClaimedContent !== undefined) {
            queryParameters.push('fromClaimedContent=' + encodeURIComponent(String(fromClaimedContent)));
        }
        if (pinFormat !== undefined) {
            queryParameters.push('pinFormat=' + encodeURIComponent(String(pinFormat)));
        }
        if (appTypes !== undefined) {
            queryParameters.push('appTypes=' + encodeURIComponent(String(appTypes)));
        }
        if (contentType !== undefined) {
            queryParameters.push('contentType=' + encodeURIComponent(String(contentType)));
        }
        if (source !== undefined) {
            queryParameters.push('source=' + encodeURIComponent(String(source)));
        }
        if (metricTypes) {
            queryParameters.push('metricTypes=' + encodeURIComponent(metricTypes.join(COLLECTION_FORMATS['csv'])));
        }
        if (numOfPins !== undefined) {
            queryParameters.push('numOfPins=' + encodeURIComponent(String(numOfPins)));
        }
        if (createdInLastNDays !== undefined) {
            queryParameters.push('createdInLastNDays=' + encodeURIComponent(String(createdInLastNDays)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: TopVideoPinsAnalyticsResponse = await this.get(
            `${this.basePath}/user_account/analytics/top_video_pins?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List following interests
     * Get a list of a user\&#39;s following interests in one place.
     * @param username A valid username
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async userAccountFollowedInterests(username: string, bookmark?: string, pageSize?: number): Promise<UserAccountFollowedInterests200Response> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling userAccountFollowedInterests.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: UserAccountFollowedInterests200Response = await this.get(
            `${this.basePath}/users/${encodeURIComponent(String(username))}/interests/follow?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get user account
     * Get account information for the "operation user_account"
     * - By default, the "operation user_account" is the token user_account.
     * If using Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
     * @see /docs/reference/business-access/ : Understanding Business Access for more information.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async userAccountGet(adAccountId?: string): Promise<Account> {
        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Account = await this.get(
            `${this.basePath}/user_account?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List following
     * Get a list of who a certain user follows.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param feedType Thrift param specifying what type of followees will be kept. Default to include all followees.
     * @param explicitFollowing Whether or not to include implicit user follows, which means followees with board follows. When explicit_following is True, it means we only want explicit user follows.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async userFollowingGet(bookmark?: string, pageSize?: number, feedType?: UserFollowingFeedType, explicitFollowing?: boolean, adAccountId?: string): Promise<UserFollowingGet200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (feedType !== undefined) {
            queryParameters.push('feedType=' + encodeURIComponent(String(feedType)));
        }
        if (explicitFollowing !== undefined) {
            queryParameters.push('explicitFollowing=' + encodeURIComponent(String(explicitFollowing)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: UserFollowingGet200Response = await this.get(
            `${this.basePath}/user_account/following?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get user websites
     * Get user websites, claimed or not
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async userWebsitesGet(bookmark?: string, pageSize?: number): Promise<UserWebsitesGet200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: UserWebsitesGet200Response = await this.get(
            `${this.basePath}/user_account/websites?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Verify website
     * Verify a website as a signed-in user.
     * @param userWebsiteVerifyRequest Verify a website.
     */
    public async verifyWebsiteUpdate(userWebsiteVerifyRequest: UserWebsiteVerifyRequest): Promise<UserWebsiteSummary> {
        if (userWebsiteVerifyRequest === null || userWebsiteVerifyRequest === undefined) {
            throw new Error('Required parameter userWebsiteVerifyRequest was null or undefined when calling verifyWebsiteUpdate.');
        }

        const response: UserWebsiteSummary = await this.post(
            `${this.basePath}/user_account/websites`,
            userWebsiteVerifyRequest,
        )

        return response;
    }

    /**
     * Get user verification code for website claiming
     * Get verification code for user to install on the website to claim it.
     */
    public async websiteVerificationGet(): Promise<UserWebsiteVerificationCode> {
        const response: UserWebsiteVerificationCode = await this.get(
            `${this.basePath}/user_account/websites/verification`,
        )

        return response;
    }

}
