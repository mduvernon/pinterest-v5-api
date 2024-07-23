import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { AuthRespondInvitesBody } from '../../Model/authRespondInvitesBody';
import { CancelInvitesBody } from '../../Model/cancelInvitesBody';
import { CreateAssetAccessRequestBody } from '../../Model/createAssetAccessRequestBody';
import { CreateAssetAccessRequestResponse } from '../../Model/createAssetAccessRequestResponse';
import { CreateAssetInvitesRequest } from '../../Model/createAssetInvitesRequest';
import { CreateInvitesResultsResponseArray } from '../../Model/createInvitesResultsResponseArray';
import { CreateMembershipOrPartnershipInvitesBody } from '../../Model/createMembershipOrPartnershipInvitesBody';
import { DeleteInvitesResultsResponseArray } from '../../Model/deleteInvitesResultsResponseArray';
import { GetInvites200Response } from '../../Model/getInvites200Response';
import { InviteType } from '../../Model/inviteType';
import { RespondToInvitesResponseArray } from '../../Model/respondToInvitesResponseArray';
import { UpdateInvitesResultsResponseArray } from '../../Model/updateInvitesResultsResponseArray';

export class BusinessAccessInviteService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.BusinessAccessInviteService';

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
     * Create a request to access an existing partner\&#39;s assets.
     * Create a request to access an existing partner\&#39;s assets with the specified permissions. The request will be sent to the partner for approval. The assets that can be requested are ad accounts and profiles.
     * @param businessId Unique identifier of the requesting business.
     * @param createAssetAccessRequestBody
     */
    public async assetAccessRequestsCreate(businessId: string, createAssetAccessRequestBody: CreateAssetAccessRequestBody): Promise<CreateAssetAccessRequestResponse> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling assetAccessRequestsCreate.');
        }

        if (createAssetAccessRequestBody === null || createAssetAccessRequestBody === undefined) {
            throw new Error('Required parameter createAssetAccessRequestBody was null or undefined when calling assetAccessRequestsCreate.');
        }

        const response: CreateAssetAccessRequestResponse = await this.post(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/requests/assets/access`,
            createAssetAccessRequestBody,
        )

        return response;
    }

    /**
     * Cancel invites/requests
     * Cancel membership/partnership invites and/or requests.
     * @param businessId Business id
     * @param cancelInvitesBody A list with invite ids
     */
    public async cancelInvitesOrRequests(businessId: string, cancelInvitesBody: CancelInvitesBody): Promise<DeleteInvitesResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling cancelInvitesOrRequests.');
        }

        if (cancelInvitesBody === null || cancelInvitesBody === undefined) {
            throw new Error('Required parameter cancelInvitesBody was null or undefined when calling cancelInvitesOrRequests.');
        }

        const response: DeleteInvitesResultsResponseArray = await this.delete(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/invites`,
            cancelInvitesBody,
        )

        return response;
    }

    /**
     * Update invite/request with an asset permission
     * Assign asset permissions information to an existing invite/request. Can be used to: - Request access to a partner\&#39;s asset. Note: This is only for when no existing partnership exists. If an existing   partnership exists, use "Create a request to access an existing partner\&#39;s assets" to request access to your   partner\&#39;s assets.     - invite_type&#x3D;"PARTNER_REQUEST" - Invite a partner to access your business assets. Note: This is only for when there is no existing partnership.   If there is an existing partnership, use "Assign/Update partner asset permissions" to assign a partner access to   new assets.     - invite_type&#x3D;"PARTNER_INVITE" - Invite a member to access your business assets. Note: This is only for when there is no existing membership.   If there is an existing membership, use "Assign/Update member asset permissions" to assign a member access to new   assets.     - invite_type&#x3D;"MEMBER_INVITE"  To learn more about permission levels, visit https://help.pinterest.com/en/business/article/business-manager-overview.
     * @param businessId Unique identifier of the requesting business.
     * @param createAssetInvitesRequest A list of invites/requests together with the asset permissions to be assigned to the invite/request.
     */
    public async createAssetInvites(businessId: string, createAssetInvitesRequest: CreateAssetInvitesRequest): Promise<UpdateInvitesResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling createAssetInvites.');
        }

        if (createAssetInvitesRequest === null || createAssetInvitesRequest === undefined) {
            throw new Error('Required parameter createAssetInvitesRequest was null or undefined when calling createAssetInvites.');
        }

        const response: UpdateInvitesResultsResponseArray = await this.post(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/invites/assets/access`,
            createAssetInvitesRequest,
        )

        return response;
    }

    /**
     * Create invites or requests
     * Create batch invites or requests. Can create batch invites or requests as described below. - Invite members to join the business. This would required specifying the following:     - invite_type&#x3D;"MEMBER_INVITE"     - business_role&#x3D;"EMPLOYEE" OR business_role&#x3D;"BIZ_ADMIN" (To learn more about business roles, visit     https://help.pinterest.com/en/business/article/profile-permissions-in-business-access.)     - members - Invite partners to access your business assets. This would require specifying the following:     - invite_type&#x3D;"PARTNER_INVITE"     - business_role&#x3D;"PARTNER"     - partners - Request to be a partner so you can access their assets. This would require specifying the following:     - invite_type&#x3D;"PARTNER_REQUEST"     - business_role&#x3D;"PARTNER"     - partners
     * @param businessId Business id
     * @param createMembershipOrPartnershipInvitesBody An object with the properties: invite_type, partners, members, business_role
     */
    public async createMembershipOrPartnershipInvites(businessId: string, createMembershipOrPartnershipInvitesBody: CreateMembershipOrPartnershipInvitesBody): Promise<CreateInvitesResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling createMembershipOrPartnershipInvites.');
        }

        if (createMembershipOrPartnershipInvitesBody === null || createMembershipOrPartnershipInvitesBody === undefined) {
            throw new Error('Required parameter createMembershipOrPartnershipInvitesBody was null or undefined when calling createMembershipOrPartnershipInvites.');
        }

        const response: CreateInvitesResultsResponseArray = await this.post(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/invites`,
            createMembershipOrPartnershipInvitesBody,
        )

        return response;
    }

    /**
     * Get invites/requests
     * Get the membership/partnership invites and/or requests for the authorized user.
     * @param businessId Unique identifier of the requesting business.
     * @param isMember A boolean field to indicate whether the invite is to create a partnership or a membership.
     * @param inviteStatus A list of invite statuses to filter invites by. Only invites whose status is in the provided statuses will be returned.
     * @param inviteType Invite type to filter invites by. Only invites of the specified type will be returned.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async getInvites(businessId: string, isMember?: boolean, inviteStatus?: Array<'PENDING' | 'EXPIRED'>, inviteType?: InviteType, bookmark?: string, pageSize?: number): Promise<GetInvites200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling getInvites.');
        }

        let queryParameters: string[] = [];
        if (isMember !== undefined) {
            queryParameters.push('isMember=' + encodeURIComponent(String(isMember)));
        }
        if (inviteStatus) {
            inviteStatus.forEach((element) => {
                queryParameters.push('inviteStatus=' + encodeURIComponent(String(element)));
            })
        }
        if (inviteType !== undefined) {
            queryParameters.push('inviteType=' + encodeURIComponent(String(inviteType)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: GetInvites200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/invites?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Accept or decline an invite/request
     * Accept or decline invites or requests.
     * @param authRespondInvitesBody
     */
    public async respondBusinessAccessInvites(authRespondInvitesBody: AuthRespondInvitesBody): Promise<RespondToInvitesResponseArray> {
        if (authRespondInvitesBody === null || authRespondInvitesBody === undefined) {
            throw new Error('Required parameter authRespondInvitesBody was null or undefined when calling respondBusinessAccessInvites.');
        }

        const response: RespondToInvitesResponseArray = await this.patch(
            `${this.basePath}/businesses/invites`,
            authRespondInvitesBody,
        )

        return response;
    }

}
