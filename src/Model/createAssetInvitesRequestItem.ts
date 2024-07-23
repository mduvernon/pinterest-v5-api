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
import { InviteType } from './inviteType';
import { Permissions } from './permissions';


/**
 * Object declaring an asset role update to an invite.
 */
export interface CreateAssetInvitesRequestItem { 
    /**
     * Unique identifier of an invite.
     */
    invite_id: string;
    invite_type: InviteType;
    /**
     * An object mapping asset ids to lists of business permissions. This can be used to setting/requesting permissions on various assets. If accepting an invite or request, this object would be used to grant asset permissions to the member or partner. 
     */
    asset_id_to_permissions: { [key: string]: Array<Permissions>; };
}
export namespace CreateAssetInvitesRequestItem {
}
