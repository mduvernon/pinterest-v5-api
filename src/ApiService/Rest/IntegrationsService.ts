import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { IntegrationLogsRequest } from '../../Model/integrationLogsRequest';
import { IntegrationLogsSuccessResponse } from '../../Model/integrationLogsSuccessResponse';
import { IntegrationMetadata } from '../../Model/integrationMetadata';
import { IntegrationRecord } from '../../Model/integrationRecord';
import { IntegrationRequest } from '../../Model/integrationRequest';
import { IntegrationRequestPatch } from '../../Model/integrationRequestPatch';
import { IntegrationsGetList200Response } from '../../Model/integrationsGetList200Response';

export class IntegrationsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.IntegrationsService';

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
     * Delete commerce integration
     * Delete commerce integration metadata for the given external business ID. Note: If you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.
     * @param externalBusinessId External business ID for the integration.
     */
    public async integrationsCommerceDel(externalBusinessId: string): Promise<any> {
        if (externalBusinessId === null || externalBusinessId === undefined) {
            throw new Error('Required parameter externalBusinessId was null or undefined when calling integrationsCommerceDel.');
        }

        const response: any = await this.delete(
            `${this.basePath}/integrations/commerce/${encodeURIComponent(String(externalBusinessId))}`,
        )

        return response;
    }

    /**
     * Get commerce integration
     * Get commerce integration metadata associated with the given external business ID. Note: If you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.
     * @param externalBusinessId External business ID for the integration.
     */
    public async integrationsCommerceGet(externalBusinessId: string): Promise<IntegrationMetadata> {
        if (externalBusinessId === null || externalBusinessId === undefined) {
            throw new Error('Required parameter externalBusinessId was null or undefined when calling integrationsCommerceGet.');
        }

        const response: IntegrationMetadata = await this.get(
            `${this.basePath}/integrations/commerce/${encodeURIComponent(String(externalBusinessId))}`,
        )

        return response;
    }

    /**
     * Update commerce integration
     * Update commerce integration metadata for the given external business ID. Note: If you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.
     * @param externalBusinessId External business ID for the integration.
     * @param integrationRequestPatch Parameters to get create/update the Integration Metadata
     */
    public async integrationsCommercePatch(externalBusinessId: string, integrationRequestPatch?: IntegrationRequestPatch): Promise<IntegrationMetadata> {
        if (externalBusinessId === null || externalBusinessId === undefined) {
            throw new Error('Required parameter externalBusinessId was null or undefined when calling integrationsCommercePatch.');
        }

        const response: IntegrationMetadata = await this.patch(
            `${this.basePath}/integrations/commerce/${encodeURIComponent(String(externalBusinessId))}`,
            integrationRequestPatch,
        )

        return response;
    }

    /**
     * Create commerce integration
     * Create commerce integration metadata to link an external business ID with a Pinterest merchant &amp; ad account. Note: If you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.
     * @param integrationRequest Parameters to get create/update the Integration Metadata
     */
    public async integrationsCommercePost(integrationRequest?: IntegrationRequest): Promise<IntegrationMetadata> {
        const response: IntegrationMetadata = await this.post(
            `${this.basePath}/integrations/commerce`,
            integrationRequest,
        )

        return response;
    }

    /**
     * Get integration metadata
     * Get integration metadata by ID. Note: If you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.
     * @param id Integration ID.
     */
    public async integrationsGetById(id: string): Promise<IntegrationRecord> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling integrationsGetById.');
        }

        const response: IntegrationRecord = await this.get(
            `${this.basePath}/integrations/${encodeURIComponent(String(id))}`,
        )

        return response;
    }

    /**
     * Get integration metadata list
     * Get integration metadata list. Note: If you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async integrationsGetList(bookmark?: string, pageSize?: number): Promise<IntegrationsGetList200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: IntegrationsGetList200Response = await this.get(
            `${this.basePath}/integrations?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Receives batched logs from integration applications.
     * This endpoint receives batched logs from integration applications on partner platforms. Note: If you\&#39;re interested in joining the beta, please reach out to your Pinterest account manager.
     * @param integrationLogsRequest Ingest log information from external integration application.
     */
    public async integrationsLogsPost(integrationLogsRequest: IntegrationLogsRequest): Promise<IntegrationLogsSuccessResponse> {
        if (integrationLogsRequest === null || integrationLogsRequest === undefined) {
            throw new Error('Required parameter integrationLogsRequest was null or undefined when calling integrationsLogsPost.');
        }

        const response: IntegrationLogsSuccessResponse = await this.post(
            `${this.basePath}/integrations/logs`,
            integrationLogsRequest,
        )

        return response;
    }

}
