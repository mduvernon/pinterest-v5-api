import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { OrderLine } from '../../Model/orderLine';
import { OrderLinesList200Response } from '../../Model/orderLinesList200Response';

export class OrderLinesService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.OrderLinesService';

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
     * Get order line
     * Get a specific existing order line associated with an ad account.
     * @param adAccountId Unique identifier of an ad account.
     * @param orderLineId Unique identifier of an order line.
     */
    public async orderLinesGet(adAccountId: string, orderLineId: string): Promise<OrderLine> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling orderLinesGet.');
        }

        if (orderLineId === null || orderLineId === undefined) {
            throw new Error('Required parameter orderLineId was null or undefined when calling orderLinesGet.');
        }

        const response: OrderLine = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/order_lines/${encodeURIComponent(String(orderLineId))}`,
        )

        return response;
    }

    /**
     * Get order lines
     * List existing order lines associated with an ad account.
     * @param adAccountId Unique identifier of an ad account.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param order The order in which to sort the items returned: “ASCENDING” or “DESCENDING” by ID. Note that higher-value IDs are associated with more-recently added items.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async orderLinesList(adAccountId: string, pageSize?: number, order?: 'ASCENDING' | 'DESCENDING', bookmark?: string): Promise<OrderLinesList200Response> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling orderLinesList.');
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

        const response: OrderLinesList200Response = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/order_lines?${queryParameters.join('&')}`,
        )

        return response;
    }

}
