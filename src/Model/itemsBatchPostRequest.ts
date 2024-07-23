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
import { BatchOperation } from './batchOperation';
import { CatalogsItemsBatchRequest } from './catalogsItemsBatchRequest';
import { CatalogsType } from './catalogsType';
import { CatalogsVerticalBatchRequest } from './catalogsVerticalBatchRequest';
import { Country } from './country';
import { ItemDeleteBatchRecord } from './itemDeleteBatchRecord';
import { Language } from './language';


/**
 * @type ItemsBatchPostRequest
 * @export
 */
export type ItemsBatchPostRequest = CatalogsItemsBatchRequest | CatalogsVerticalBatchRequest;

