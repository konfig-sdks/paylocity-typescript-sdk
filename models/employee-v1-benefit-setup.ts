/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Benefit Setup
 * @export
 * @interface EmployeeV1BenefitSetup
 */
export interface EmployeeV1BenefitSetup {
    /**
     * Benefit Class code. Values are configured in Paylocity Payroll/HR solution Company > Setup > Benefits > Classes.<br  />Max length: 30
     * @type {string}
     * @memberof EmployeeV1BenefitSetup
     */
    'benefitClass'?: string;
    /**
     * Date when Benefit Class takes effect. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     * @type {string}
     * @memberof EmployeeV1BenefitSetup
     */
    'benefitClassEffectiveDate'?: string;
    /**
     * Salary used to configure benefits.<br  />Decimal(12,2)
     * @type {number}
     * @memberof EmployeeV1BenefitSetup
     */
    'benefitSalary'?: number;
    /**
     * Date when Benefit Salary takes effect. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     * @type {string}
     * @memberof EmployeeV1BenefitSetup
     */
    'benefitSalaryEffectiveDate'?: string;
    /**
     * Applicable only for ACA Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.
     * @type {boolean}
     * @memberof EmployeeV1BenefitSetup
     */
    'doNotApplyAdministrativePeriod'?: boolean;
    /**
     * Only valid for ACA Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.
     * @type {boolean}
     * @memberof EmployeeV1BenefitSetup
     */
    'measureACAEligibility'?: boolean;
}
