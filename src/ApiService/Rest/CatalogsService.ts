import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { CatalogsCreateReportResponse } from '../../Model/catalogsCreateReportResponse';
import { CatalogsFeed } from '../../Model/catalogsFeed';
import { CatalogsItemValidationIssue } from '../../Model/catalogsItemValidationIssue';
import { CatalogsItems } from '../../Model/catalogsItems';
import { CatalogsItemsBatch } from '../../Model/catalogsItemsBatch';
import { CatalogsItemsFilters } from '../../Model/catalogsItemsFilters';
import { CatalogsItemsRequest } from '../../Model/catalogsItemsRequest';
import { CatalogsList200Response } from '../../Model/catalogsList200Response';
import { CatalogsListProductsByFilterRequest } from '../../Model/catalogsListProductsByFilterRequest';
import { CatalogsProductGroupPinsList200Response } from '../../Model/catalogsProductGroupPinsList200Response';
import { CatalogsProductGroupProductCounts } from '../../Model/catalogsProductGroupProductCounts';
import { CatalogsProductGroupsList200Response } from '../../Model/catalogsProductGroupsList200Response';
import { CatalogsProductGroupsUpdateRequest } from '../../Model/catalogsProductGroupsUpdateRequest';
import { CatalogsReport } from '../../Model/catalogsReport';
import { CatalogsReportParameters } from '../../Model/catalogsReportParameters';
import { CatalogsVerticalProductGroup } from '../../Model/catalogsVerticalProductGroup';
import { FeedProcessingResultsList200Response } from '../../Model/feedProcessingResultsList200Response';
import { FeedsCreateRequest } from '../../Model/feedsCreateRequest';
import { FeedsList200Response } from '../../Model/feedsList200Response';
import { FeedsUpdateRequest } from '../../Model/feedsUpdateRequest';
import { ItemsBatchPostRequest } from '../../Model/itemsBatchPostRequest';
import { ItemsIssuesList200Response } from '../../Model/itemsIssuesList200Response';
import { MultipleProductGroupsInner } from '../../Model/multipleProductGroupsInner';
import { ReportsStats200Response } from '../../Model/reportsStats200Response';

import { COLLECTION_FORMATS } from '../../Constant/variables';

export class CatalogsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.CatalogsService';

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
     * List catalogs
     * Fetch catalogs owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsList(bookmark?: string, pageSize?: number, adAccountId?: string): Promise<CatalogsList200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsList200Response = await this.get(
            `${this.basePath}/catalogs?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List products for a Product Group
     * Get a list of product pins for a given Catalogs Product Group Id owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  Note: This endpoint only supports RETAIL catalog at the moment.  @see /docs/shopping/catalog/ : Learn more
     * @param productGroupId Unique identifier of a product group
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupPinsList(productGroupId: string, bookmark?: string, pageSize?: number, adAccountId?: string): Promise<CatalogsProductGroupPinsList200Response> {
        if (productGroupId === null || productGroupId === undefined) {
            throw new Error('Required parameter productGroupId was null or undefined when calling catalogsProductGroupPinsList.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsProductGroupPinsList200Response = await this.get(
            `${this.basePath}/catalogs/product_groups/${encodeURIComponent(String(productGroupId))}/products?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Create single product group
     * Create product group to use in Catalogs owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param multipleProductGroupsInner Request object used to create a single catalogs product groups.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsCreate(multipleProductGroupsInner: MultipleProductGroupsInner, adAccountId?: string): Promise<CatalogsVerticalProductGroup> {
        if (multipleProductGroupsInner === null || multipleProductGroupsInner === undefined) {
            throw new Error('Required parameter multipleProductGroupsInner was null or undefined when calling catalogsProductGroupsCreate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsVerticalProductGroup = await this.post(
            `${this.basePath}/catalogs/product_groups?${queryParameters.join('&')}`,
            multipleProductGroupsInner,
        )

        return response;
    }

    /**
     * Create multiple product group
     * Create product group to use in Catalogs owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param multipleProductGroupsInner Request object used to create one or more catalogs product groups.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsCreateMany(multipleProductGroupsInner: Array<MultipleProductGroupsInner>, adAccountId?: string): Promise<Array<string>> {
        if (multipleProductGroupsInner === null || multipleProductGroupsInner === undefined) {
            throw new Error('Required parameter multipleProductGroupsInner was null or undefined when calling catalogsProductGroupsCreateMany.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Array<string> = await this.post(
            `${this.basePath}/catalogs/product_groups/multiple?${queryParameters.join('&')}`,
            multipleProductGroupsInner,
        )

        return response;
    }

    /**
     * Delete single product group
     * Delete a product group owned by the "operation user_account" from being in use in Catalogs. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more
     * @param productGroupId Unique identifier of a product group
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsDelete(productGroupId: string, adAccountId?: string): Promise<any> {
        if (productGroupId === null || productGroupId === undefined) {
            throw new Error('Required parameter productGroupId was null or undefined when calling catalogsProductGroupsDelete.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: any = await this.delete(
            `${this.basePath}/catalogs/product_groups/${encodeURIComponent(String(productGroupId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Delete multiple product groups
     * Delete product groups owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more
     * @param id Comma-separated list of product group ids
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsDeleteMany(id: Array<number>, adAccountId?: string): Promise<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling catalogsProductGroupsDeleteMany.');
        }

        let queryParameters: string[] = [];
        if (id) {
            queryParameters.push('id=' + encodeURIComponent(id.join(COLLECTION_FORMATS['csv'])));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: any = await this.delete(
            `${this.basePath}/catalogs/product_groups/multiple?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get single product group
     * Get a singe product group for a given Catalogs Product Group Id owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more
     * @param productGroupId Unique identifier of a product group
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsGet(productGroupId: string, adAccountId?: string): Promise<CatalogsVerticalProductGroup> {
        if (productGroupId === null || productGroupId === undefined) {
            throw new Error('Required parameter productGroupId was null or undefined when calling catalogsProductGroupsGet.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsVerticalProductGroup = await this.get(
            `${this.basePath}/catalogs/product_groups/${encodeURIComponent(String(productGroupId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List product groups
     * Get a list of product groups for a given Catalogs Feed Id owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more
     * @param id Comma-separated list of product group ids
     * @param feedId Filter entities for a given feed_id. If not given, all feeds are considered.
     * @param catalogId Filter entities for a given catalog_id. If not given, all catalogs are considered.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsList(id?: Array<number>, feedId?: string, catalogId?: string, bookmark?: string, pageSize?: number, adAccountId?: string): Promise<CatalogsProductGroupsList200Response> {
        let queryParameters: string[] = [];
        if (id) {
            queryParameters.push('id=' + encodeURIComponent(id.join(COLLECTION_FORMATS['csv'])));
        }
        if (feedId !== undefined) {
            queryParameters.push('feedId=' + encodeURIComponent(String(feedId)));
        }
        if (catalogId !== undefined) {
            queryParameters.push('catalogId=' + encodeURIComponent(String(catalogId)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsProductGroupsList200Response = await this.get(
            `${this.basePath}/catalogs/product_groups?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get product counts for a Product Group
     * Get a product counts for a given Catalogs Product Group owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  Note: This endpoint only supports RETAIL catalog at the moment.  @see /docs/shopping/catalog/ : Learn more
     * @param productGroupId Unique identifier of a product group
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsProductCountsGet(productGroupId: string, adAccountId?: string): Promise<CatalogsProductGroupProductCounts> {
        if (productGroupId === null || productGroupId === undefined) {
            throw new Error('Required parameter productGroupId was null or undefined when calling catalogsProductGroupsProductCountsGet.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsProductGroupProductCounts = await this.get(
            `${this.basePath}/catalogs/product_groups/${encodeURIComponent(String(productGroupId))}/product_counts?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update single product group
     * Update product group owned by the "operation user_account" to use in Catalogs. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param productGroupId Unique identifier of a product group
     * @param catalogsProductGroupsUpdateRequest Request object used to Update a catalogs product group.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async catalogsProductGroupsUpdate(productGroupId: string, catalogsProductGroupsUpdateRequest: CatalogsProductGroupsUpdateRequest, adAccountId?: string): Promise<CatalogsVerticalProductGroup> {
        if (productGroupId === null || productGroupId === undefined) {
            throw new Error('Required parameter productGroupId was null or undefined when calling catalogsProductGroupsUpdate.');
        }

        if (catalogsProductGroupsUpdateRequest === null || catalogsProductGroupsUpdateRequest === undefined) {
            throw new Error('Required parameter catalogsProductGroupsUpdateRequest was null or undefined when calling catalogsProductGroupsUpdate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsVerticalProductGroup = await this.patch(
            `${this.basePath}/catalogs/product_groups/${encodeURIComponent(String(productGroupId))}?${queryParameters.join('&')}`,
            catalogsProductGroupsUpdateRequest,
        )

        return response;
    }

    /**
     * List processing results for a given feed
     * Fetch a feed processing results owned by the "operation user_account". Please note that for now the bookmark parameter is not functional and only the first page will be available until it is implemented in some release in the near future. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more
     * @param feedId Unique identifier of a feed
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async feedProcessingResultsList(feedId: string, bookmark?: string, pageSize?: number, adAccountId?: string): Promise<FeedProcessingResultsList200Response> {
        if (feedId === null || feedId === undefined) {
            throw new Error('Required parameter feedId was null or undefined when calling feedProcessingResultsList.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: FeedProcessingResultsList200Response = await this.get(
            `${this.basePath}/catalogs/feeds/${encodeURIComponent(String(feedId))}/processing_results?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Create feed
     * Create a new feed owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Please, be aware that "default_country" and "default_locale" are not required in the spec for forward compatibility but for now the API will not accept requests without those fields.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  For Retail partners, refer to @see https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs : Before you get started with Catalogs. For Hotel parterns, refer to @see /docs/shopping/catalog/ : Pinterest API for shopping.  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param feedsCreateRequest Request object used to created a feed.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async feedsCreate(feedsCreateRequest: FeedsCreateRequest, adAccountId?: string): Promise<CatalogsFeed> {
        if (feedsCreateRequest === null || feedsCreateRequest === undefined) {
            throw new Error('Required parameter feedsCreateRequest was null or undefined when calling feedsCreate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsFeed = await this.post(
            `${this.basePath}/catalogs/feeds?${queryParameters.join('&')}`,
            feedsCreateRequest,
        )

        return response;
    }

    /**
     * Delete feed
     * Delete a feed owned by the "operating user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  For Retail partners, refer to @see https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs : Before you get started with Catalogs. For Hotel parterns, refer to @see /docs/shopping/catalog/ : Pinterest API for shopping.
     * @param feedId Unique identifier of a feed
     * @param adAccountId Unique identifier of an ad account.
     */
    public async feedsDelete(feedId: string, adAccountId?: string): Promise<any> {
        if (feedId === null || feedId === undefined) {
            throw new Error('Required parameter feedId was null or undefined when calling feedsDelete.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsFeed = await this.delete(
            `${this.basePath}/catalogs/feeds/${encodeURIComponent(String(feedId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get feed
     * Get a single feed owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  For Retail partners, refer to @see https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs : Before you get started with Catalogs. For Hotel parterns, refer to @see /docs/shopping/catalog/ : Pinterest API for shopping.
     * @param feedId Unique identifier of a feed
     * @param adAccountId Unique identifier of an ad account.
     */
    public async feedsGet(feedId: string, adAccountId?: string): Promise<CatalogsFeed> {
        if (feedId === null || feedId === undefined) {
            throw new Error('Required parameter feedId was null or undefined when calling feedsGet.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsFeed = await this.delete(
            `${this.basePath}/catalogs/feeds/${encodeURIComponent(String(feedId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Ingest items for a given feed
     * Ingest items for a given feed owned by the "operation user_account".  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more  Note: This endpoint is only allowed in the Pinterest API Sandbox (https://api-sandbox.pinterest.com/v5). Go to https://developers.pinterest.com/docs/dev-tools/sandbox/ for more information.
     * @param feedId Unique identifier of a feed
     * @param adAccountId Unique identifier of an ad account.
     */
    public async feedsIngest(feedId: string, adAccountId?: string): Promise<any> {
        if (feedId === null || feedId === undefined) {
            throw new Error('Required parameter feedId was null or undefined when calling feedsIngest.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsFeed = await this.post(
            `${this.basePath}/catalogs/feeds/${encodeURIComponent(String(feedId))}/ingest?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List feeds
     * Fetch feeds owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  For Retail partners, refer to @see https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs : Before you get started with Catalogs. For Hotel parterns, refer to @see /docs/shopping/catalog/ : Pinterest API for shopping.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param catalogId Filter entities for a given catalog_id. If not given, all catalogs are considered.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async feedsList(bookmark?: string, pageSize?: number, catalogId?: string, adAccountId?: string): Promise<FeedsList200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (catalogId !== undefined) {
            queryParameters.push('catalogId=' + encodeURIComponent(String(catalogId)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: FeedsList200Response = await this.get(
            `${this.basePath}/catalogs/feeds?${queryParameters.join('&')}`
        )

        return response;
    }

    /**
     * Update feed
     * Update a feed owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  For Retail partners, refer to @see https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs : Before you get started with Catalogs. For Hotel parterns, refer to @see /docs/shopping/catalog/ : Pinterest API for shopping.  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param feedId Unique identifier of a feed
     * @param feedsUpdateRequest Request object used to update a feed.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async feedsUpdate(feedId: string, feedsUpdateRequest: FeedsUpdateRequest, adAccountId?: string): Promise<CatalogsFeed> {
        if (feedId === null || feedId === undefined) {
            throw new Error('Required parameter feedId was null or undefined when calling feedsUpdate.');
        }

        if (feedsUpdateRequest === null || feedsUpdateRequest === undefined) {
            throw new Error('Required parameter feedsUpdateRequest was null or undefined when calling feedsUpdate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsFeed = await this.patch(
            `${this.basePath}/catalogs/feeds/${encodeURIComponent(String(feedId))}?${queryParameters.join('&')}`,
            feedsUpdateRequest,
        )

        return response;
    }

    /**
     * Get catalogs item batch status
     * Get a single catalogs items batch owned by the "operating user_account". &lt;a href&#x3D;"/docs/shopping/catalog/#Update%20items%20in%20batch" target&#x3D;"_blank"&gt;See detailed documentation here. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.
     * @param batchId Id of a catalogs items batch to fetch
     * @param adAccountId Unique identifier of an ad account.
     */
    public async itemsBatchGet(batchId: string, adAccountId?: string): Promise<CatalogsItemsBatch> {
        if (batchId === null || batchId === undefined) {
            throw new Error('Required parameter batchId was null or undefined when calling itemsBatchGet.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsItemsBatch = await this.get(
            `${this.basePath}/catalogs/items/batch/${encodeURIComponent(String(batchId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Operate on item batch
     * This endpoint supports multiple operations on a set of one or more catalog items owned by the "operation user_account". &lt;a href&#x3D;"/docs/shopping/catalog/#Update%20items%20in%20batch" target&#x3D;"_blank"&gt;See detailed documentation here. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param itemsBatchPostRequest Request object used to create catalogs items in a batch
     * @param adAccountId Unique identifier of an ad account.
     */
    public async itemsBatchPost(itemsBatchPostRequest: ItemsBatchPostRequest, adAccountId?: string): Promise<CatalogsItemsBatch> {
        if (itemsBatchPostRequest === null || itemsBatchPostRequest === undefined) {
            throw new Error('Required parameter itemsBatchPostRequest was null or undefined when calling itemsBatchPost.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsItemsBatch = await this.post(
            `${this.basePath}/catalogs/items/batch?${queryParameters.join('&')}`,
            itemsBatchPostRequest,
        )

        return response;
    }

    /**
     * Get catalogs items
     * Get the items of the catalog owned by the "operation user_account". &lt;a href&#x3D;"/docs/shopping/catalog/#Update%20items%20in%20batch" target&#x3D;"_blank"&gt;See detailed documentation here. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param country Country for the Catalogs Items
     * @param language Language for the Catalogs Items
     * @param adAccountId Unique identifier of an ad account.
     * @param itemIds This parameter is deprecated. Use filters instead.
     * @param filters Identifies items to be retrieved. This is a required parameter.
     */
    public async itemsGet(country: string, language: string, adAccountId?: string, itemIds?: Array<string>, filters?: CatalogsItemsFilters): Promise<CatalogsItems> {
        if (country === null || country === undefined) {
            throw new Error('Required parameter country was null or undefined when calling itemsGet.');
        }

        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling itemsGet.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (country !== undefined) {
            queryParameters.push('country=' + encodeURIComponent(String(country)));
        }
        if (language !== undefined) {
            queryParameters.push('language=' + encodeURIComponent(String(language)));
        }
        if (itemIds) {
            itemIds.forEach((element) => {
                queryParameters.push('itemIds=' + encodeURIComponent(String(element)));
            })
        }
        if (filters !== undefined) {
            queryParameters.push('filters=' + encodeURIComponent(String(filters)));
        }

        const response: CatalogsItems = await this.get(
            `${this.basePath}/catalogs/items?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List item issues for a given processing result
     * List item validation issues for a given feed processing result owned by the "operation user_account". Up to 20 random samples of affected items are returned for each error and warning code. Please note that for now query parameters \&#39;item_numbers\&#39; and \&#39;item_validation_issue\&#39; cannot be used simultaneously until it is implemented in some release in the future. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  @see /docs/shopping/catalog/ : Learn more
     * @param processingResultId Unique identifier of a feed processing result. It can be acquired from the "id" field of the "items" array within the response of the [List processing results for a given feed](https://developers.pinterest.com/docs/api/v5/#operation/feed_processing_results/list).
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param itemNumbers Item number based on order of appearance in the Catalogs Feed. For example, \&#39;0\&#39; refers to first item found in a feed that was downloaded from a \&#39;location\&#39; specified during feed creation.
     * @param itemValidationIssue Filter item validation issues that have a given type of item validation issue.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async itemsIssuesList(processingResultId: string, bookmark?: string, pageSize?: number, itemNumbers?: Array<number>, itemValidationIssue?: CatalogsItemValidationIssue, adAccountId?: string): Promise<ItemsIssuesList200Response> {
        if (processingResultId === null || processingResultId === undefined) {
            throw new Error('Required parameter processingResultId was null or undefined when calling itemsIssuesList.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (itemNumbers) {
            itemNumbers.forEach((element) => {
                queryParameters.push('itemNumbers=' + encodeURIComponent(String(element)));
            })
        }
        if (itemValidationIssue !== undefined) {
            queryParameters.push('itemValidationIssue=' + encodeURIComponent(String(itemValidationIssue)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: ItemsIssuesList200Response = await this.get(
            `${this.basePath}/catalogs/processing_results/${encodeURIComponent(String(processingResultId))}/item_issues?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get catalogs items (POST)
     * Get the items of the catalog owned by the "operation user_account". &lt;a href&#x3D;"/docs/shopping/catalog/#Update%20items%20in%20batch" target&#x3D;"_blank"&gt;See detailed documentation here. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  Note: The catalog type of Creative Assets is only allowed in the @see https://api-sandbox.pinterest.com/v5 : Pinterest API Sandbox. If access is required, please contact your partner manager.
     * @param catalogsItemsRequest Request object used to get catalogs items
     * @param adAccountId Unique identifier of an ad account.
     */
    public async itemsPost(catalogsItemsRequest: CatalogsItemsRequest, adAccountId?: string): Promise<CatalogsItems> {
        if (catalogsItemsRequest === null || catalogsItemsRequest === undefined) {
            throw new Error('Required parameter catalogsItemsRequest was null or undefined when calling itemsPost.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsItems = await this.post(
            `${this.basePath}/catalogs/items?${queryParameters.join('&')}`,
            catalogsItemsRequest,
        )

        return response;
    }

    /**
     * List products for Product Group Filters
     * List products Pins owned by the "operation user_account" that meet the criteria specified in the Catalogs Product Group Filter given in the request. - This endpoint has been implemented in POST to allow for complex filters. This specific POST endpoint is designed to be idempotent. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.  Note: This endpoint only supports RETAIL catalog at the moment.  @see /docs/shopping/catalog/ : Learn more
     * @param catalogsListProductsByFilterRequest Object holding a group of filters for a catalog product group
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async productsByProductGroupFilterList(catalogsListProductsByFilterRequest: CatalogsListProductsByFilterRequest, bookmark?: string, pageSize?: number, adAccountId?: string): Promise<CatalogsProductGroupPinsList200Response> {
        if (catalogsListProductsByFilterRequest === null || catalogsListProductsByFilterRequest === undefined) {
            throw new Error('Required parameter catalogsListProductsByFilterRequest was null or undefined when calling productsByProductGroupFilterList.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsProductGroupPinsList200Response = await this.post(
            `${this.basePath}/catalogs/products/get_by_product_group_filters?${queryParameters.join('&')}`,
            catalogsListProductsByFilterRequest,
        )

        return response;
    }

    /**
     * Build catalogs report
     * Async request to create a report of the catalog owned by the "operation user_account". This endpoint generates a report upon receiving the first approved request of the day. Any following requests with identical parameters will yield the same report even if data has changed. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.
     * @param catalogsReportParameters Request object to asynchronously create a report.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async reportsCreate(catalogsReportParameters: CatalogsReportParameters, adAccountId?: string): Promise<CatalogsCreateReportResponse> {
        if (catalogsReportParameters === null || catalogsReportParameters === undefined) {
            throw new Error('Required parameter catalogsReportParameters was null or undefined when calling reportsCreate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: CatalogsCreateReportResponse = await this.post(
            `${this.basePath}/catalogs/reports?${queryParameters.join('&')}`,
            catalogsReportParameters,
        )

        return response;
    }

    /**
     * Get catalogs report
     * This returns a URL to a report given a token returned from @see /docs/api/v5/#operation/reports/create : Build catalogs report. You can use the URL to download the report. - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.
     * @param token Token returned from async build report call
     * @param adAccountId Unique identifier of an ad account.
     */
    public async reportsGet(token: string, adAccountId?: string): Promise<CatalogsReport> {
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling reportsGet.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (token !== undefined) {
            queryParameters.push('token=' + encodeURIComponent(String(token)));
        }

        const response: CatalogsReport = await this.get(
            `${this.basePath}/catalogs/reports?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List report stats
     * List aggregated numbers of issues for a catalog owned by the "operation user_account". - By default, the "operation user_account" is the token user_account.  Optional: Business Access: Specify an &lt;code&gt;ad_account_id&lt;/code&gt; (obtained via @see /docs/api/v5/#operation/ad_accounts/list : List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts"&gt;Business Access roles on the ad_account: Owner, Admin, Catalogs Manager.
     * @param parameters Contains the parameters for report identification.
     * @param adAccountId Unique identifier of an ad account.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async reportsStats(parameters: CatalogsReportParameters, adAccountId?: string, pageSize?: number, bookmark?: string): Promise<ReportsStats200Response> {
        if (parameters === null || parameters === undefined) {
            throw new Error('Required parameter parameters was null or undefined when calling reportsStats.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (parameters !== undefined) {
            queryParameters.push('parameters=' + encodeURIComponent(String(parameters)));
        }

        const response: ReportsStats200Response = await this.get(
            `${this.basePath}/catalogs/reports/stats?${queryParameters.join('&')}`,
        )

        return response;
    }

}
