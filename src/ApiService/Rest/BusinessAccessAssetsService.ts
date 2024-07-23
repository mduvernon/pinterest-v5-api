import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { BusinessAssetMembersGet200Response } from '../../Model/businessAssetMembersGet200Response';
import { BusinessAssetPartnersGet200Response } from '../../Model/businessAssetPartnersGet200Response';
import { BusinessAssetsGet200Response } from '../../Model/businessAssetsGet200Response';
import { BusinessMemberAssetsGet200Response } from '../../Model/businessMemberAssetsGet200Response';
import { BusinessMembersAssetAccessDeleteRequest } from '../../Model/businessMembersAssetAccessDeleteRequest';
import { BusinessPartnerAssetAccessGet200Response } from '../../Model/businessPartnerAssetAccessGet200Response';
import { DeleteMemberAccessResultsResponseArray } from '../../Model/deleteMemberAccessResultsResponseArray';
import { DeletePartnerAssetAccessBody } from '../../Model/deletePartnerAssetAccessBody';
import { DeletePartnerAssetsResultsResponseArray } from '../../Model/deletePartnerAssetsResultsResponseArray';
import { PartnerType } from '../../Model/partnerType';
import { PermissionsWithOwner } from '../../Model/permissionsWithOwner';
import { UpdateMemberAssetAccessBody } from '../../Model/updateMemberAssetAccessBody';
import { UpdateMemberAssetsResultsResponseArray } from '../../Model/updateMemberAssetsResultsResponseArray';
import { UpdatePartnerAssetAccessBody } from '../../Model/updatePartnerAssetAccessBody';
import { UpdatePartnerAssetsResultsResponseArray } from '../../Model/updatePartnerAssetsResultsResponseArray';

export class BusinessAccessAssetsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.BusinessAccessAssetsService';

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
     * Get members with access to asset
     * Get all the members the requesting business has granted access to on the given asset.
     * @param businessId Unique identifier of the requesting business.
     * @param assetId Unique identifier of a business asset.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param startIndex An index to start fetching the results from. Only the results starting from this index will be returned.
     */
    public async businessAssetMembersGet(businessId: string, assetId: string, bookmark?: string, pageSize?: number, startIndex?: number): Promise<BusinessAssetMembersGet200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessAssetMembersGet.');
        }

        if (assetId === null || assetId === undefined) {
            throw new Error('Required parameter assetId was null or undefined when calling businessAssetMembersGet.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (startIndex !== undefined) {
            queryParameters.push('startIndex=' + encodeURIComponent(String(startIndex)));
        }

        const response: BusinessAssetMembersGet200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/assets/${encodeURIComponent(String(assetId))}/members?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get partners with access to asset
     * Get all the partners the requesting business has granted access to on the given asset. Note: If the asset has been shared with you, an empty array will be returned. This is because an asset shared with you cannot be shared with a different partner.
     * @param businessId Unique identifier of the requesting business.
     * @param assetId Unique identifier of a business asset.
     * @param startIndex An index to start fetching the results from. Only the results starting from this index will be returned.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async businessAssetPartnersGet(businessId: string, assetId: string, startIndex?: number, bookmark?: string, pageSize?: number): Promise<BusinessAssetPartnersGet200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessAssetPartnersGet.');
        }

        if (assetId === null || assetId === undefined) {
            throw new Error('Required parameter assetId was null or undefined when calling businessAssetPartnersGet.');
        }

        let queryParameters: string[] = [];
        if (startIndex !== undefined) {
            queryParameters.push('startIndex=' + encodeURIComponent(String(startIndex)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: BusinessAssetPartnersGet200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/assets/${encodeURIComponent(String(assetId))}/partners?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List business assets
     * Get all the assets the requesting business has access to. This includes assets the business owns and assets the business has access to through partnerships.
     * @param businessId Unique identifier of the requesting business.
     * @param permissions A list of asset permissions used to filter the assets. Only assets where the requesting business has at least one of the specified permissions will be returned.
     * @param assetType A resource type to filter the assets by. Only assets of the specified type will be returned.
     * @param startIndex An index to start fetching the results from. Only the results starting from this index will be returned.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async businessAssetsGet(businessId: string, permissions?: Array<PermissionsWithOwner>, assetType?: 'AD_ACCOUNT' | 'PROFILE', startIndex?: number, bookmark?: string, pageSize?: number): Promise<BusinessAssetsGet200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessAssetsGet.');
        }

        let queryParameters: string[] = [];
        if (permissions) {
            permissions.forEach((element) => {
                queryParameters.push('permissions=' + encodeURIComponent(String(element)));
            })
        }
        if (assetType !== undefined) {
            queryParameters.push('assetType=' + encodeURIComponent(String(assetType)));
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

        const response: BusinessAssetsGet200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/assets?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get assets assigned to a member
     * Get assets on which you assigned asset permissions to the given member. Can be used to: - get all assets, regardless of asset type or - get assets of one asset type by using the asset_type query. The return response will include the permissions the member has to that asset and the asset type.
     * @param businessId Unique identifier of the requesting business.
     * @param memberId The member id to fetch assets for.
     * @param assetType A resource type to filter the assets by. Only assets of the specified type will be returned.
     * @param startIndex An index to start fetching the results from. Only the results starting from this index will be returned.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async businessMemberAssetsGet(businessId: string, memberId: string, assetType?: 'AD_ACCOUNT' | 'PROFILE', startIndex?: number, bookmark?: string, pageSize?: number): Promise<BusinessMemberAssetsGet200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessMemberAssetsGet.');
        }

        if (memberId === null || memberId === undefined) {
            throw new Error('Required parameter memberId was null or undefined when calling businessMemberAssetsGet.');
        }

        let queryParameters: string[] = [];
        if (assetType !== undefined) {
            queryParameters.push('assetType=' + encodeURIComponent(String(assetType)));
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

        const response: BusinessMemberAssetsGet200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/members/${encodeURIComponent(String(memberId))}/assets?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Delete member access to asset
     * Terminate multiple members\&#39; access to an asset.
     * @param businessId Unique identifier of the requesting business.
     * @param businessMembersAssetAccessDeleteRequest List member assset permissions to delete.
     */
    public async businessMembersAssetAccessDelete(businessId: string, businessMembersAssetAccessDeleteRequest: BusinessMembersAssetAccessDeleteRequest): Promise<DeleteMemberAccessResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessMembersAssetAccessDelete.');
        }

        if (businessMembersAssetAccessDeleteRequest === null || businessMembersAssetAccessDeleteRequest === undefined) {
            throw new Error('Required parameter businessMembersAssetAccessDeleteRequest was null or undefined when calling businessMembersAssetAccessDelete.');
        }

        const response: DeleteMemberAccessResultsResponseArray = await this.delete(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/members/assets/access`,
            businessMembersAssetAccessDeleteRequest,
        )

        return response;
    }

    /**
     * Assign/Update member asset permissions
     * Grant multiple members access to assets and/or update multiple member\&#39;s exisiting permissions to an asset. Note: Not all listed permissions are applicable to each asset type. For example, PROFILE_PUBLISHER would not be applicable to an asset of type AD_ACCOUNT. The permission level PROFILE_PUBLISHER is only available to an asset of the type PROFILE.
     * @param businessId Unique identifier of the requesting business.
     * @param updateMemberAssetAccessBody List of member asset permissions to create or update.
     */
    public async businessMembersAssetAccessUpdate(businessId: string, updateMemberAssetAccessBody: UpdateMemberAssetAccessBody): Promise<UpdateMemberAssetsResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessMembersAssetAccessUpdate.');
        }

        if (updateMemberAssetAccessBody === null || updateMemberAssetAccessBody === undefined) {
            throw new Error('Required parameter updateMemberAssetAccessBody was null or undefined when calling businessMembersAssetAccessUpdate.');
        }

        const response: UpdateMemberAssetsResultsResponseArray = await this.patch(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/members/assets/access`,
            updateMemberAssetAccessBody,
        )

        return response;
    }

    /**
     * Get assets assigned to a partner or assets assigned by a partner
     * Can be used to get the business assets your partner has granted you access to or the business assets you have granted your partner access to. If you specify: - partner_type&#x3D;INTERNAL, you will retrieve your business assets that the partner has access to. - partner_type&#x3D;EXTERNAL, you will retrieve the partner\&#39;s business assets that the partner has granted you access to.
     * @param businessId Unique identifier of the requesting business.
     * @param partnerId The partner id to be bound to the Business
     * @param partnerType Specifies whether to fetch internal or external (shared) partners. If partner_type&#x3D;INTERNAL, the asset being queried is for accesses the partner has to your business assets.&lt;br&gt; If partner_type&#x3D;EXTERNAL, the asset being queried is for the accesses you have to the partner\&#39;s business asset.
     * @param assetType A resource type to filter the assets by. Only assets of the specified type will be returned.
     * @param startIndex An index to start fetching the results from. Only the results starting from this index will be returned.
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param bookmark Cursor used to fetch the next page of items
     */
    public async businessPartnerAssetAccessGet(businessId: string, partnerId: string, partnerType?: PartnerType, assetType?: 'AD_ACCOUNT' | 'PROFILE', startIndex?: number, pageSize?: number, bookmark?: string): Promise<BusinessPartnerAssetAccessGet200Response> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessPartnerAssetAccessGet.');
        }

        if (partnerId === null || partnerId === undefined) {
            throw new Error('Required parameter partnerId was null or undefined when calling businessPartnerAssetAccessGet.');
        }

        let queryParameters: string[] = [];
        if (partnerType !== undefined) {
            queryParameters.push('partnerType=' + encodeURIComponent(String(partnerType)));
        }
        if (assetType !== undefined) {
            queryParameters.push('assetType=' + encodeURIComponent(String(assetType)));
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

        const response: BusinessPartnerAssetAccessGet200Response = await this.get(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/partners/${encodeURIComponent(String(partnerId))}/assets?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Delete partner access to asset
     * Terminate multiple partners\&#39; access to an asset. If - partner_type&#x3D;INTERNAL: You will terminate a partner\&#39;s asset access to your business assets. - partner_type&#x3D;EXTERNAL: You will terminate your own access to your partner\&#39;s business assets.
     * @param businessId Unique identifier of the requesting business.
     * @param deletePartnerAssetAccessBody
     */
    public async deletePartnerAssetAccessHandlerImpl(businessId: string, deletePartnerAssetAccessBody: DeletePartnerAssetAccessBody): Promise<DeletePartnerAssetsResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling deletePartnerAssetAccessHandlerImpl.');
        }

        if (deletePartnerAssetAccessBody === null || deletePartnerAssetAccessBody === undefined) {
            throw new Error('Required parameter deletePartnerAssetAccessBody was null or undefined when calling deletePartnerAssetAccessHandlerImpl.');
        }

        const response: DeletePartnerAssetsResultsResponseArray = await this.delete(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/partners/assets`,
            deletePartnerAssetAccessBody,
        )

        return response;
    }

    /**
     * Assign/Update partner asset permissions
     * Grant multiple partners access to assets and/or update multiple partner\&#39;s exisiting permissions to an asset. If your partner already had permissions on the asset, they will be overriden with the new permissions you assign to them. To learn more about permission levels, visit https://help.pinterest.com/en/business/article/business-manager-overview  Note: Not all listed permissions are applicable to each asset type. For example, PROFILE_PUBLISHER would not be applicable to an asset of type AD_ACCOUNT. The permission level PROFILE_PUBLISHER is only available to an asset of the type PROFILE.
     * @param businessId Unique identifier of the requesting business.
     * @param updatePartnerAssetAccessBody A list of assets and permissions to assign to your partners.
     */
    public async updatePartnerAssetAccessHandlerImpl(businessId: string, updatePartnerAssetAccessBody: UpdatePartnerAssetAccessBody): Promise<UpdatePartnerAssetsResultsResponseArray> {
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling updatePartnerAssetAccessHandlerImpl.');
        }

        if (updatePartnerAssetAccessBody === null || updatePartnerAssetAccessBody === undefined) {
            throw new Error('Required parameter updatePartnerAssetAccessBody was null or undefined when calling updatePartnerAssetAccessHandlerImpl.');
        }

        const response: UpdatePartnerAssetsResultsResponseArray = await this.patch(
            `${this.basePath}/businesses/${encodeURIComponent(String(businessId))}/partners/assets`,
            updatePartnerAssetAccessBody,
        )

        return response;
    }

}
