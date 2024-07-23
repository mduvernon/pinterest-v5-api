/**
 * Pinterest REST API
 * Pinterest\'s REST API
 *
 * The version of the OpenAPI document: 5.13.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BaseInviteDataResponseInviteData } from './baseInviteDataResponseInviteData';
import { BusinessAccessUserSummary } from './businessAccessUserSummary';
import { InviteAssetsSummary } from './inviteAssetsSummary';


export interface InviteResponse { 
    assets_summary?: InviteAssetsSummary | null;
    /**
     * The access level a user would be granted on the business if the invite/request is accepted. This can be EMPLOYEE, BIZ_ADMIN, or PARTNER.
     */
    business_roles?: Array<string>;
    /**
     * Metadata for the business that created the invite/request.
     */
    created_by_business?: BusinessAccessUserSummary | null;
    /**
     * Metadata for the user that created the invite/request.
     */
    created_by_user?: BusinessAccessUserSummary | null;
    /**
     * The time the invite/request was created. Returned in milliseconds.
     */
    created_time?: number;
    /**
     * Unique identifier of the invite/request.
     */
    id?: string;
    invite_data?: BaseInviteDataResponseInviteData;
    /**
     * Indicates whether the invite/request was received.
     */
    is_received_invite?: boolean;
    /**
     * Metadata for the member/partner that was sent the invite/request.
     */
    user?: BusinessAccessUserSummary;
}
