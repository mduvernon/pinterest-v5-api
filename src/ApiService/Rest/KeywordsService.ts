import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { KeywordUpdateBody } from '../../Model/keywordUpdateBody';
import { KeywordsGet200Response } from '../../Model/keywordsGet200Response';
import { KeywordsMetricsArrayResponse } from '../../Model/keywordsMetricsArrayResponse';
import { KeywordsRequest } from '../../Model/keywordsRequest';
import { KeywordsResponse } from '../../Model/keywordsResponse';
import { MatchType } from '../../Model/matchType';
import { TrendType } from '../../Model/trendType';
import { TrendingKeywordsResponse } from '../../Model/trendingKeywordsResponse';
import { TrendsSupportedRegion } from '../../Model/trendsSupportedRegion';

import { COLLECTION_FORMATS } from '../../Constant/variables';

export class KeywordsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.KeywordsService';

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
     * Get country\&#39;s keyword metrics
     * See keyword metrics for a specified country, aggregated across all of Pinterest. (Definitions are available from the "Get delivery metrics definitions" &lt;a href&#x3D;"/docs/api/v5/#operation/delivery_metrics/get"&gt;API endpoint).
     * @param adAccountId Unique identifier of an ad account.
     * @param countryCode Two letter country code (ISO 3166-1 alpha-2)
     * @param keywords Comma-separated keywords
     */
    public async countryKeywordsMetricsGet(adAccountId: string, countryCode: string, keywords: Array<string>): Promise<KeywordsMetricsArrayResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling countryKeywordsMetricsGet.');
        }

        if (countryCode === null || countryCode === undefined) {
            throw new Error('Required parameter countryCode was null or undefined when calling countryKeywordsMetricsGet.');
        }

        if (keywords === null || keywords === undefined) {
            throw new Error('Required parameter keywords was null or undefined when calling countryKeywordsMetricsGet.');
        }

        let queryParameters: string[] = [];
        if (countryCode !== undefined) {
            queryParameters.push('countryCode=' + encodeURIComponent(String(countryCode)));
        }
        if (keywords) {
            queryParameters.push('keywords=' + encodeURIComponent(keywords.join(COLLECTION_FORMATS['csv'])));
        }

        const response: KeywordsMetricsArrayResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/keywords/metrics?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Create keywords
     * &lt;p&gt;Create keywords for following entity types(advertiser, campaign, ad group or ad).&lt;/p&gt; &lt;p&gt;For more information, see &lt;a target&#x3D;"_blank" href&#x3D;"https://help.pinterest.com/en/business/article/keyword-targeting"&gt;Keyword targeting.&lt;/p&gt; &lt;p&gt;&lt;b&gt;Notes:&lt;/b&gt;&lt;/p&gt; &lt;ul style&#x3D;"list-style-type: square;"&gt; &lt;li&gt;Advertisers and campaigns can only be assigned keywords with excluding (\&#39;_NEGATIVE\&#39;).&lt;/li&gt; &lt;li&gt;All keyword match types are available for ad groups.&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;For more information on match types, see &lt;a  target&#x3D;"_blank" href&#x3D;"/docs/ads/targeting/#Match%20type%20and%20targeting%20level"&gt;match type enums.&lt;/p&gt; &lt;p&gt;&lt;b&gt;Returns:&lt;/b&gt;&lt;/p&gt; &lt;ul style&#x3D;"list-style-type: square;"&gt; &lt;li&gt;&lt;p&gt;A successful call returns an object containing an array of new keyword objects and an empty &amp;quot;errors&amp;quot; object array.&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;An unsuccessful call returns an empty keywords array, and, instead, inserts the entire object with nulled/negated properties into the &amp;quot;errors&amp;quot; object array:&lt;/p&gt; &lt;pre class&#x3D;"last literal-block"&gt; { "keywords": [], "errors": [ { "data": { "archived": null, "match_type": "EXACT", "parent_type": null, "value": "foobar", "parent_id": null, "type": "keyword", "id": null }, "error_messages": [ "Advertisers and Campaigns only accept excluded targeting attributes." ] } } &lt;/pre&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;&lt;b&gt;Rate limit&lt;/b&gt;: &lt;a href&#x3D;"/docs/redoc/#tag/Rate-Limits"&gt;WRITE.&lt;/p&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param keywordsRequest
     */
    public async keywordsCreate(adAccountId: string, keywordsRequest: KeywordsRequest): Promise<KeywordsResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling keywordsCreate.');
        }

        if (keywordsRequest === null || keywordsRequest === undefined) {
            throw new Error('Required parameter keywordsRequest was null or undefined when calling keywordsCreate.');
        }

        const response: KeywordsResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/keywords`,
            keywordsRequest,
        )

        return response;
    }

    /**
     * Get keywords
     * &lt;p&gt;Get a list of keywords based on the filters provided. If no filter is provided, it will default to the ad_account_id filter, which means it will only return keywords that specifically have parent_id set to the ad_account_id. Note: Keywords can have ad_account_ids, campaign_ids, and ad_group_ids set as their parent_ids. Keywords created through Ads Manager will have their parent_id set to an ad_group_id, not ad_account_id.&lt;/p&gt; &lt;p&gt;For more information, see &lt;a target&#x3D;"_blank" href&#x3D;"https://help.pinterest.com/en/business/article/keyword-targeting"&gt;Keyword targeting.&lt;/p&gt; &lt;p&gt;&lt;b&gt;Notes:&lt;/b&gt;&lt;/p&gt; &lt;ul style&#x3D;"list-style-type: square;"&gt; &lt;li&gt;Advertisers and campaigns can only be assigned keywords with excluding (\&#39;_NEGATIVE\&#39;).&lt;/li&gt; &lt;li&gt;All keyword match types are available for ad groups.&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;For more information on match types, see &lt;a target&#x3D;"_blank" href&#x3D;"/docs/ads/targeting/#Match%20type%20and%20targeting%20level"&gt;match type enums.&lt;/p&gt; &lt;p&gt;&lt;b&gt;Returns:&lt;/b&gt;&lt;/p&gt; &lt;ul style&#x3D;"list-style-type: square;"&gt; &lt;li&gt;&lt;p&gt;A successful call returns an object containing an array of new keyword objects and an empty &amp;quot;errors&amp;quot; object array.&lt;/p&gt;&lt;/li&gt; &lt;li&gt;&lt;p&gt;An unsuccessful call returns an empty keywords array, and, instead, inserts the entire object with nulled/negated properties into the &amp;quot;errors&amp;quot; object array:&lt;/p&gt; &lt;pre class&#x3D;"last literal-block"&gt; { "keywords": [], "errors": [ { "data": { "archived": null, "match_type": "EXACT", "parent_type": null, "value": "foobar", "parent_id": null, "type": "keyword", "id": null }, "error_messages": [ "Advertisers and Campaigns only accept excluded targeting attributes." ] } } &lt;/pre&gt;&lt;/li&gt; &lt;/ul&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param campaignId Campaign Id to use to filter the results.
     * @param adGroupId Ad group Id.
     * @param matchTypes Keyword &lt;a target&#x3D;"_blank" href&#x3D;"/docs/ads/targeting/#Match%20type%20and%20targeting%20level"&gt;match type
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async keywordsGet(adAccountId: string, campaignId?: string, adGroupId?: string, matchTypes?: Array<MatchType>, pageSize?: number, bookmark?: string): Promise<KeywordsGet200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling keywordsGet.');
        }

        let queryParameters: string[] = [];
        if (campaignId !== undefined) {
            queryParameters.push('campaignId=' + encodeURIComponent(String(campaignId)));
        }
        if (adGroupId !== undefined) {
            queryParameters.push('adGroupId=' + encodeURIComponent(String(adGroupId)));
        }
        if (matchTypes) {
            matchTypes.forEach((element) => {
                queryParameters.push('matchTypes=' + encodeURIComponent(String(element)));
            })
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: KeywordsGet200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/keywords?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update keywords
     * &lt;p&gt;Update one or more keywords\&#39; bid and archived fields.&lt;/p&gt; &lt;p&gt;Archiving a keyword effectively deletes it - keywords no longer receive metrics and no longer visible within the parent entity\&#39;s keywords list.&lt;/p&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param keywordUpdateBody
     */
    public async keywordsUpdate(adAccountId: string, keywordUpdateBody: KeywordUpdateBody): Promise<KeywordsResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling keywordsUpdate.');
        }

        if (keywordUpdateBody === null || keywordUpdateBody === undefined) {
            throw new Error('Required parameter keywordUpdateBody was null or undefined when calling keywordsUpdate.');
        }

        const response: KeywordsResponse = await this.patch(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/keywords`,
            keywordUpdateBody,
        )

        return response;
    }

    /**
     * List trending keywords
     * &lt;p&gt;Get the top trending search keywords among the Pinterest user audience.&lt;/p&gt; &lt;p&gt;Trending keywords can be used to inform ad targeting, budget strategy, and creative decisions about which products and Pins will resonate with your audience.&lt;/p&gt; &lt;p&gt;Geographic, demographic and interest-based filters are available to narrow down to the top trends among a specific audience. Multiple trend types are supported that can be used to identify newly-popular, evergreen or seasonal keywords.&lt;/p&gt; &lt;p&gt;For an interactive way to explore this data, please visit &lt;a href&#x3D;"https://trends.pinterest.com"&gt;trends.pinterest.com.
     * @param region The geographic region of interest. Only top trends within the specified region will be returned.&lt;br /&gt; The &#x60;region&#x60; parameter is formatted as ISO 3166-2 country codes delimited by &#x60;+&#x60;, corresponding to the following geographic areas: - &#x60;US&#x60; - United States - &#x60;CA&#x60; - Canada - &#x60;DE&#x60; - Germany - &#x60;FR&#x60; - France - &#x60;ES&#x60; - Spain - &#x60;IT&#x60; - Italy - &#x60;DE+AT+CH&#x60; - Germanic countries - &#x60;GB+IE&#x60; - Great Britain &amp; Ireland - &#x60;IT+ES+PT+GR+MT&#x60; - Southern Europe - &#x60;PL+RO+HU+SK+CZ&#x60; - Eastern Europe - &#x60;SE+DK+FI+NO&#x60; - Nordic countries - &#x60;NL+BE+LU&#x60; - Benelux - &#x60;AR&#x60; - Argentina - &#x60;BR&#x60; - Brazil - &#x60;CO&#x60; - Colombia - &#x60;MX&#x60; - Mexico - &#x60;MX+AR+CO+CL&#x60; - Hispanic LatAm - &#x60;AU+NZ&#x60; - Australasia
     * @param trendType The methodology used to rank how trendy a keyword is. - &#x60;growing&#x60; trends have high upward growth in search volume over the last quarter - &#x60;monthly&#x60; trends have high search volume in the last month - &#x60;yearly&#x60; trends have high search volume in the last year - &#x60;seasonal&#x60; trends have high upward growth in search volume over the last month and exhibit a seasonal recurring pattern (typically annual)
     * @param interests If set, filters the results to trends associated with the specified interests.&lt;br /&gt; If unset, trends for all interests will be returned.&lt;br /&gt; The list of supported interests is: - &#x60;animals&#x60; - Animals - &#x60;architecture&#x60; - Architecture - &#x60;art&#x60; - Art - &#x60;beauty&#x60; - Beauty - &#x60;childrens_fashion&#x60; - Children\&#39;s Fashion - &#x60;design&#x60; - Design - &#x60;diy_and_crafts&#x60; - DIY &amp; Crafts - &#x60;education&#x60; - Education - &#x60;electronics&#x60; - Electronics - &#x60;entertainment&#x60; - Entertainment - &#x60;event_planning&#x60; - Event Planning - &#x60;finance&#x60; - Finance - &#x60;food_and_drinks&#x60; - Food &amp; Drink - &#x60;gardening&#x60; - Gardening - &#x60;health&#x60; - Health - &#x60;home_decor&#x60; - Home Decor - &#x60;mens_fashion&#x60; - Men\&#39;s Fashion - &#x60;parenting&#x60; - Parenting - &#x60;quotes&#x60; - Quotes - &#x60;sport&#x60; - Sports - &#x60;travel&#x60; - Travel - &#x60;vehicles&#x60; - Vehicles - &#x60;wedding&#x60; - Wedding - &#x60;womens_fashion&#x60; - Women\&#39;s Fashion
     * @param genders If set, filters the results to trends among users who identify with the specified gender(s).&lt;br /&gt; If unset, trends among all genders will be returned.&lt;br /&gt; The &#x60;unknown&#x60; group includes users with unspecified or customized gender profile settings.
     * @param ages If set, filters the results to trends among users in the specified age range(s).&lt;br /&gt; If unset, trends among all age groups will be returned.
     * @param includeKeywords If set, filters the results to top trends which include at least one of the specified keywords.&lt;br /&gt; If unset, no keyword filtering logic is applied.
     * @param normalizeAgainstGroup Governs how the resulting time series data will be normalized to a [0-100] scale.&lt;br /&gt; By default (&#x60;false&#x60;), the data will be normalized independently for each keyword.  The peak search volume observation in *each* keyword\&#39;s time series will be represented by the value 100.  This is ideal for analyzing when an individual keyword is expected to peak in interest.&lt;br /&gt; If set to &#x60;true&#x60;, the data will be normalized as a group.  The peak search volume observation across *all* keywords in the response will be represented by the value 100, and all other values scaled accordingly.  Use this option when you wish to compare relative search volume between multiple keywords.
     * @param limit The maximum number of trending keywords that will be returned. Keywords are returned in trend-ranked order, so a &#x60;limit&#x60; of 50 will return the top 50 trends.
     */
    public async trendingKeywordsList(region: TrendsSupportedRegion, trendType: TrendType, interests?: Array<'animals' | 'architecture' | 'art' | 'beauty' | 'childrens_fashion' | 'design' | 'diy_and_crafts' | 'education' | 'electronics' | 'entertainment' | 'event_planning' | 'finance' | 'food_and_drinks' | 'gardening' | 'health' | 'home_decor' | 'mens_fashion' | 'parenting' | 'quotes' | 'sport' | 'travel' | 'vehicles' | 'wedding' | 'womens_fashion'>, genders?: Array<'female' | 'male' | 'unknown'>, ages?: Array<'18-24' | '25-34' | '35-44' | '45-49' | '50-54' | '55-64' | '65+'>, includeKeywords?: Array<string>, normalizeAgainstGroup?: boolean, limit?: number): Promise<TrendingKeywordsResponse> {
        if (region === null || region === undefined) {
            throw new Error('Required parameter region was null or undefined when calling trendingKeywordsList.');
        }

        if (trendType === null || trendType === undefined) {
            throw new Error('Required parameter trendType was null or undefined when calling trendingKeywordsList.');
        }

        let queryParameters: string[] = [];
        if (interests) {
            interests.forEach((element) => {
                queryParameters.push('interests=' + encodeURIComponent(String(element)));
            })
        }
        if (genders) {
            genders.forEach((element) => {
                queryParameters.push('genders=' + encodeURIComponent(String(element)));
            })
        }
        if (ages) {
            ages.forEach((element) => {
                queryParameters.push('ages=' + encodeURIComponent(String(element)));
            })
        }
        if (includeKeywords) {
            includeKeywords.forEach((element) => {
                queryParameters.push('includeKeywords=' + encodeURIComponent(String(element)));
            })
        }
        if (normalizeAgainstGroup !== undefined) {
            queryParameters.push('normalizeAgainstGroup=' + encodeURIComponent(String(normalizeAgainstGroup)));
        }
        if (limit !== undefined) {
            queryParameters.push('limit=' + encodeURIComponent(String(limit)));
        }

        const response: TrendingKeywordsResponse = await this.get(
            `${this.basePath}/trends/keywords/${encodeURIComponent(String(region))}/top/${encodeURIComponent(String(trendType))}?${queryParameters.join('&')}`,
        )

        return response;
    }

}
