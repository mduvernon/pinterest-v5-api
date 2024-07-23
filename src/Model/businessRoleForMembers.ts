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


/**
 * The access level a member has to the business. Values are case-sensitive. <br> - EMPLOYEE: Can only view and access assets you assign to them. They cannot see details about other employees, partners, or other assets. <br> - BIZ_ADMIN: Have full control of roles and can add employees and partners as well as grant asset access.
 */
export type BusinessRoleForMembers = 'EMPLOYEE' | 'BIZ_ADMIN';

export const BusinessRoleForMembers = {
    Employee: 'EMPLOYEE' as BusinessRoleForMembers,
    BizAdmin: 'BIZ_ADMIN' as BusinessRoleForMembers
}
