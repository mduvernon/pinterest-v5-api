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
 * Budget type. If DAILY, an ad group\'s daily spend will not exceed the budget parameter value. If LIFETIME, the end_time parameter is **REQUIRED**, and the ad group spend is spread evenly between the ad group `start_time` and `end_time` range. A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. For CBO campaigns, only \"CBO_ADGROUP\" is allowed. For WEB_SESSIONS campaigns, only \"LIFETIME\" is allowed. For update, only draft ad groups may update budget type.
 */
export type BudgetType = 'DAILY' | 'LIFETIME' | 'CBO_ADGROUP';

export const BudgetType = {
    Daily: 'DAILY' as BudgetType,
    Lifetime: 'LIFETIME' as BudgetType,
    CboAdgroup: 'CBO_ADGROUP' as BudgetType
}
