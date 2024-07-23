import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { DeletePartnersRequest } from '../../Model/deletePartnersRequest';
import { DeletePartnersResponse } from '../../Model/deletePartnersResponse';
import { DeletedMembersResponse } from '../../Model/deletedMembersResponse';
import { GetBusinessEmployers200Response } from '../../Model/getBusinessEmployers200Response';
import { GetBusinessMembers200Response } from '../../Model/getBusinessMembers200Response';
import { GetBusinessPartners200Response } from '../../Model/getBusinessPartners200Response';
import { MemberBusinessRole } from '../../Model/memberBusinessRole';
import { MembersToDeleteBody } from '../../Model/membersToDeleteBody';
import { PartnerType } from '../../Model/partnerType';
import { UpdateMemberBusinessRoleBody } from '../../Model/updateMemberBusinessRoleBody';
import { UpdateMemberResultsResponseArray } from '../../Model/updateMemberResultsResponseArray';

export class BusinessAccessRelationshipsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.BusinessAccessRelationshipsService';

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
     * Terminate business memberships
     * Terminate memberships between the specified members and your business.
     * @param businessId Business id
     * @param membersToDeleteBody List of members with role to delete.
     */
    public async deleteBusinessMembership(businessId: string, membersToDeleteBody: MembersToDeleteBody): Promise<DeletedMembersResponse> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling deleteBusinessMembership.');
        }

        if (membersToDeleteBody === null || membersToDeleteBody === undefined) {
            throw new Error('Required parameter membersToDeleteBody was null or undefined when calling deleteBusinessMembership.');
        }

        const response: DeletedMembersResponse = await this.delete(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/members`,
            membersToDeleteBody,
        )

        return response;
    }

    /**
     * Terminate business partnerships
     * Terminate partnerships between the specified partners and your business. Note: You may only batch terminate partners of the same partner type.
     * @param businessId Unique identifier of the requesting business.
     * @param deletePartnersRequest An object containing a "partner_ids" property composed of a list of partner IDs and a "partners_type" property specifying the type of partners to delete.
     */
    public async deleteBusinessPartners(businessId: string, deletePartnersRequest: DeletePartnersRequest): Promise<DeletePartnersResponse> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling deleteBusinessPartners.');
        }

        if (deletePartnersRequest === null || deletePartnersRequest === undefined) {
            throw new Error('Required parameter deletePartnersRequest was null or undefined when calling deleteBusinessPartners.');
        }

        const response: DeletePartnersResponse = await this.delete(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/partners`,
            deletePartnersRequest,
        )

        return response;
    }

    /**
     * List business employers for user
     * Get all of the viewing user\&#39;s business employers.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async getBusinessEmployers(pageSize?: number, bookmark?: string): Promise<GetBusinessEmployers200Response> {
        let queryParameters: string[] = [];
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: GetBusinessEmployers200Response = await this.get(
            `${this.basePath}/businesses/employers?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get business members
     * Get all members of the specified business. The return response will include the member\&#39;s business_role and assets they have access to if assets_summary&#x3D;TRUE
     * @param businessId Unique identifier of the requesting business.
     * @param assetsSummary Include assets summary in the response if this is true.  The assets summary returns a dictionary representing a summary of the assets for the business user ID, with information like the ad accounts and profiles the user has permissions for and what those permissions are
     * @param businessRoles A list of business roles to filter the members by. Only members whose roles are in the specified roles will be returned.
     * @param memberIds A list of business members ids separated by comma.
     * @param startIndex An index to start fetching the results from. Only the results starting from this index will be returned.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async getBusinessMembers(businessId: string, assetsSummary?: boolean, businessRoles?: Array<MemberBusinessRole>, memberIds?: string, startIndex?: number, bookmark?: string, pageSize?: number): Promise<GetBusinessMembers200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling getBusinessMembers.');
        }

        let queryParameters: string[] = [];
        if (assetsSummary !== undefined) {
            queryParameters.push('assetsSummary=' + encodeURIComponent(String(assetsSummary)));
        }
        if (businessRoles) {
            businessRoles.forEach((element) => {
                queryParameters.push('businessRoles=' + encodeURIComponent(String(element)));
            })
        }
        if (memberIds !== undefined) {
            queryParameters.push('memberIds=' + encodeURIComponent(String(memberIds)));
        }
        if (startIndex !== undefined) {
            queryParameters.push('startIndex=' + encodeURIComponent(String(startIndex)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: GetBusinessMembers200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/members?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get business partners
     * Get all partners of the specified business.  If the assets_summary&#x3D;TRUE and: - partner_type&#x3D;INTERNAL, the business assets returned are your business assets the partner has access to. - partner_type&#x3D;EXTERNAL, the business assets returned are your partner\&#39;s business assets the partner has granted you   access to.
     * @param businessId Unique identifier of the requesting business.
     * @param assetsSummary Include assets summary in the response if this is true.  The assets summary returns a dictionary representing a summary of the assets for the business user ID, with information like the ad accounts and profiles the user has permissions for and what those permissions are
     * @param partnerType Specifies whether to fetch internal or external (shared) partners. If partner_type&#x3D;INTERNAL, the asset being queried is for accesses the partner has to your business assets.&lt;br&gt; If partner_type&#x3D;EXTERNAL, the asset being queried is for the accesses you have to the partner\&#39;s business asset.
     * @param partnerIds A list of business partner ids separated by commas used to filter the results. Only partners with the specified ids will be returned.
     * @param startIndex An index to start fetching the results from. Only the results starting from this index will be returned.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async getBusinessPartners(businessId: string, assetsSummary?: boolean, partnerType?: PartnerType, partnerIds?: string, startIndex?: number, pageSize?: number, bookmark?: string): Promise<GetBusinessPartners200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling getBusinessPartners.');
        }

        let queryParameters: string[] = [];
        if (assetsSummary !== undefined) {
            queryParameters.push('assetsSummary=' + encodeURIComponent(String(assetsSummary)));
        }
        if (partnerType !== undefined) {
            queryParameters.push('partnerType=' + encodeURIComponent(String(partnerType)));
        }
        if (partnerIds !== undefined) {
            queryParameters.push('partnerIds=' + encodeURIComponent(String(partnerIds)));
        }
        if (startIndex !== undefined) {
            queryParameters.push('startIndex=' + encodeURIComponent(String(startIndex)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }

        const response: GetBusinessPartners200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/partners?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update member\&#39;s business role
     * Update a member\&#39;s business role within the business.
     * @param businessId Business id
     * @param updateMemberBusinessRoleBody List of objects with the member id and the business_role.
     */
    public async updateBusinessMemberships(businessId: string, updateMemberBusinessRoleBody: Array<UpdateMemberBusinessRoleBody>): Promise<UpdateMemberResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling updateBusinessMemberships.');
        }

        if (updateMemberBusinessRoleBody === null || updateMemberBusinessRoleBody === undefined) {
            throw new Error('Required parameter updateMemberBusinessRoleBody was null or undefined when calling updateBusinessMemberships.');
        }

        const response: UpdateMemberResultsResponseArray = await this.patch(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/members`,
            updateMemberBusinessRoleBody,
        )

        return response;
    }

}
