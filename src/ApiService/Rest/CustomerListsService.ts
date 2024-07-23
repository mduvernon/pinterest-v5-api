import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { CustomerList } from '../../Model/customerList';
import { CustomerListRequest } from '../../Model/customerListRequest';
import { CustomerListUpdateRequest } from '../../Model/customerListUpdateRequest';
import { CustomerListsList200Response } from '../../Model/customerListsList200Response';

export class CustomerListsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.CustomerListsService';

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
     * Create customer lists
     * &lt;p&gt;Create a customer list from your records(hashed or plain-text email addresses, or hashed MAIDs or IDFAs).&lt;/p&gt; &lt;p&gt;A customer list is one of the four types of Pinterest audiences: for more information, see &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/audience-targeting" target&#x3D;"_blank"&gt;Audience targeting or the &lt;a href&#x3D;"/docs/ads/targeting/#Audiences" target&#x3D;"_blank"&gt;Audiences section of the ads management guide.&lt;p/&gt;  &lt;p&gt;&lt;b&gt;Please review our &lt;u&gt;&lt;a href&#x3D;"https://help.pinterest.com/en/business/article/audience-targeting#section-13341" target&#x3D;"_blank"&gt;requirements&lt;/u&gt; for what type of information is allowed when uploading a customer list.&lt;/b&gt;&lt;/p&gt; &lt;p&gt;When you create a customer list, the system scans the list for existing Pinterest accounts; the list must include at least 100 Pinterest accounts. Your original list will be deleted when the matching process is complete. The filtered list – containing only the Pinterest accounts that were included in your starting list – is what will be used to create the audience.&lt;/p&gt; &lt;p&gt;Note that once you have created your customer list, you must convert it into an audience (of the “ CUSTOMER_LIST” type) using the &lt;a href&#x3D;"#operation/create_audience_handler"&gt;create audience endpoint before it can be used.&lt;/p&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param customerListRequest Parameters to get Customer lists info
     */
    public async customerListsCreate(adAccountId: string, customerListRequest: CustomerListRequest): Promise<CustomerList> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling customerListsCreate.');
        }

        if (customerListRequest === null || customerListRequest === undefined) {
            throw new Error('Required parameter customerListRequest was null or undefined when calling customerListsCreate.');
        }

        const response: CustomerList = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/customer_lists`,
            customerListRequest,
        )

        return response;
    }

    /**
     * Get customer list
     * Gets a specific customer list given the customer list ID.
     * @param adAccountId Unique identifier of an ad account.
     * @param customerListId Unique identifier of a customer list
     */
    public async customerListsGet(adAccountId: string, customerListId: string): Promise<CustomerList> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling customerListsGet.');
        }

        if (customerListId === null || customerListId === undefined) {
            throw new Error('Required parameter customerListId was null or undefined when calling customerListsGet.');
        }

        const response: CustomerList = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/customer_lists/${encodeURIComponent(String(customerListId))}`,
        )

        return response;
    }

    /**
     * Get customer lists
     * &lt;p&gt;Get a set of customer lists including id and name based on the filters provided.&lt;/p&gt; &lt;p&gt;(Customer lists are a type of audience.) For more information, see &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/audience-targeting" target&#x3D;"_blank"&gt;Audience targeting  or the &lt;a href&#x3D;"/docs/ads/targeting/#Audiences" target&#x3D;"_blank"&gt;Audiences section of the ads management guide.&lt;/p&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param order The order in which to sort the items returned: “ASCENDING” or “DESCENDING” by ID. Note that higher-value IDs are associated with more-recently added items.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async customerListsList(adAccountId: string, pageSize?: number, order?: 'ASCENDING' | 'DESCENDING', bookmark?: string): Promise<CustomerListsList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling customerListsList.');
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

        const response: CustomerListsList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/customer_lists?${queryParameters.join('&')}`,
        )

        return response;
    }


    /**
     * Update customer list
     * &lt;p&gt;Append or remove records to/from an existing customer list. (A customer list is one of the four types of Pinterest audiences.)&lt;/p&gt; &lt;p&gt;When you add records to an existing customer list, the system scans the additions for existing Pinterest accounts; those are the records that will be added to your “CUSTOMER_LIST” audience. Your original list of records  to add will be deleted when the matching process is complete.&lt;/p&gt; &lt;p&gt;For more information, see &lt;a href&#x3D;"https://help.pinterest.com/en/business/article/audience-targeting" target&#x3D;"_blank"&gt;Audience targeting or the &lt;a href&#x3D;"/docs/ads/targeting/#Audiences" target&#x3D;"_blank"&gt;Audiences section of the ads management guide.&lt;/p&gt;
     * @param adAccountId Unique identifier of an ad account.
     * @param customerListId Unique identifier of a customer list
     * @param customerListUpdateRequest
     */
    public async customerListsUpdate(adAccountId: string, customerListId: string, customerListUpdateRequest: CustomerListUpdateRequest): Promise<CustomerList> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling customerListsUpdate.');
        }

        if (customerListId === null || customerListId === undefined) {
            throw new Error('Required parameter customerListId was null or undefined when calling customerListsUpdate.');
        }

        if (customerListUpdateRequest === null || customerListUpdateRequest === undefined) {
            throw new Error('Required parameter customerListUpdateRequest was null or undefined when calling customerListsUpdate.');
        }

        const response: CustomerList = await this.patch(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/customer_lists/${encodeURIComponent(String(customerListId))}`,
            customerListUpdateRequest,
        )

        return response;
    }

}
