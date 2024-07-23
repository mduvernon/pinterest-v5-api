import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { BulkDownloadRequest } from '../../Model/bulkDownloadRequest';
import { BulkDownloadResponse } from '../../Model/bulkDownloadResponse';
import { BulkUpsertRequest } from '../../Model/bulkUpsertRequest';
import { BulkUpsertResponse } from '../../Model/bulkUpsertResponse';
import { BulkUpsertStatusResponse } from '../../Model/bulkUpsertStatusResponse';

export class BulkService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.BulkService';

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
     * Get advertiser entities in bulk
     * Create an asynchronous report that may include information on campaigns, ad groups, product groups, ads, and/or keywords; can filter by campaigns. Though the entities may be active, archived, or paused, only active entities will return data.
     * @param adAccountId Unique identifier of an ad account.
     * @param bulkDownloadRequest Parameters to get ad entities in bulk
     */
    public async bulkDownloadCreate(adAccountId: string, bulkDownloadRequest: BulkDownloadRequest): Promise<BulkDownloadResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling bulkDownloadCreate.');
        }

        if (bulkDownloadRequest === null || bulkDownloadRequest === undefined) {
            throw new Error('Required parameter bulkDownloadRequest was null or undefined when calling bulkDownloadCreate.');
        }

        const response: BulkDownloadResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/bulk/download`,
            bulkDownloadRequest,
        )

        return response;
    }

    /**
     * Download advertiser entities in bulk
     * Get the status of a bulk request by &lt;code&gt;request_id&lt;/code&gt;, along with a download URL that will allow you to download the new or updated entity data (campaigns, ad groups, product groups, ads, or keywords).
     * @param adAccountId Unique identifier of an ad account.
     * @param bulkRequestId Unique identifier of a bulk upsert request.
     * @param includeDetails if set to True then attach the errors/details to all the requests
     */
    public async bulkRequestGet(adAccountId: string, bulkRequestId: string, includeDetails?: boolean): Promise<BulkUpsertStatusResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling bulkRequestGet.');
        }

        if (bulkRequestId === null || bulkRequestId === undefined) {
            throw new Error('Required parameter bulkRequestId was null or undefined when calling bulkRequestGet.');
        }

        let queryParameters: string[] = [];
        if (includeDetails !== undefined) {
            queryParameters.push('includeDetails=' + encodeURIComponent(String(includeDetails)));
        }

        const response: BulkUpsertStatusResponse = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/bulk/${encodeURIComponent(String(bulkRequestId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Create/update ad entities in bulk
     * Either create or update any combination of campaigns, ad groups, product groups, ads, or keywords. Note that this request will be processed asynchronously; the response will include a &lt;code&gt;request_id&lt;/code&gt; that can be used to obtain the status of the request.
     * @param adAccountId Unique identifier of an ad account.
     * @param bulkUpsertRequest Parameters to get create/update ad entities in bulk
     */
    public async bulkUpsertCreate(adAccountId: string, bulkUpsertRequest: BulkUpsertRequest): Promise<BulkUpsertResponse> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling bulkUpsertCreate.');
        }

        if (bulkUpsertRequest === null || bulkUpsertRequest === undefined) {
            throw new Error('Required parameter bulkUpsertRequest was null or undefined when calling bulkUpsertCreate.');
        }

        const response: BulkUpsertResponse = await this.post(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/bulk/upsert`,
            bulkUpsertRequest,
        )

        return response;
    }

}
