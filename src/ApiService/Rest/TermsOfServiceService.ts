import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { TermsOfService } from '../../Model/termsOfService';

export class TermsOfServiceService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.TermsOfServiceService';

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
     * Get terms of service
     * Get the text of the terms of service and see whether the advertiser has accepted the terms of service.
     * @param adAccountId Unique identifier of an ad account.
     * @param includeHtml Return HTML in TOS text.
     * @param tosType Request type.
     */
    public async termsOfServiceGet(adAccountId: string, includeHtml?: boolean, tosType?: string): Promise<TermsOfService> {
        if (adAccountId === null || adAccountId === undefined) {
            throw new Error('Required parameter adAccountId was null or undefined when calling termsOfServiceGet.');
        }

        let queryParameters: string[] = [];
        if (includeHtml !== undefined) {
            queryParameters.push('includeHtml=' + encodeURIComponent(String(includeHtml)));
        }
        if (tosType !== undefined) {
            queryParameters.push('tosType=' + encodeURIComponent(String(tosType)));
        }

        const response: TermsOfService = await this.get(
            `${this.basePath}/ad_accounts/${encodeURIComponent(String(adAccountId))}/terms_of_service?${queryParameters.join('&')}`,
        )

        return response;
    }

}
