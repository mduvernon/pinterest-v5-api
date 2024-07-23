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
import { UpdatableItemAttributes } from './updatableItemAttributes';
import { UpdateMaskFieldType } from './updateMaskFieldType';


/**
 * Object describing an item batch record to update items
 */
export interface ItemUpdateBatchRecord { 
    /**
     * The catalog item id in the merchant namespace
     */
    item_id?: string;
    attributes?: UpdatableItemAttributes;
    /**
     * The list of product attributes to be updated. Attributes specified in the update mask without a value specified in the body will be deleted from the product item.
     */
    update_mask?: Array<UpdateMaskFieldType> | null;
}
