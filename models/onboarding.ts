/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Onboarding
 */
export interface Onboarding {
    /**
     * (optional) The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max
     * @type {string}
     * @memberof Onboarding
     */
    'employeeId'?: string;
    /**
     * Employee home 1st address line. <br  />Max length: 40
     * @type {string}
     * @memberof Onboarding
     */
    'address1'?: string;
    /**
     * Employee home 2nd address line. <br  />Max length: 40
     * @type {string}
     * @memberof Onboarding
     */
    'address2'?: string;
    /**
     * Valid values are *N, D, S. (N- employee won\'t automatically receive a salary or hours during payroll, D - employee will be automatically paid in defaultHours during payroll, S - employee will be automatically paid Salary amount during payroll)*. <br  />Max length: 3
     * @type {string}
     * @memberof Onboarding
     */
    'autoPayType'?: string;
    /**
     * Employee base rate, used for Hourly employees. <br  />Decimal (12,2)
     * @type {number}
     * @memberof Onboarding
     */
    'baseRate'?: number;
    /**
     * Employee home city. <br  />Max length: 40
     * @type {string}
     * @memberof Onboarding
     */
    'city'?: string;
    /**
     * Employer defined location, like *branch, division, department, etc.* Must match Company setup. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'costCenter1'?: string;
    /**
     * Employer defined location, like *branch, division, department, etc.* Must match Company setup. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'costCenter2'?: string;
    /**
     * Employer defined location, like *branch, division, department, etc.* Must match Company setup. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'costCenter3'?: string;
    /**
     * Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)
     * @type {number}
     * @memberof Onboarding
     */
    'defaultHours'?: number;
    /**
     * Employee current work status. Common values are *A (Active), L (Leave of Absence), T (Terminated)*. <br  />Max length: 20
     * @type {string}
     * @memberof Onboarding
     */
    'employeeStatus'?: string;
    /**
     * Employee current employment type. Common values RFT *(Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'employmentType'?: string;
    /**
     * Employee federal filing status. Common values *M (Married), S (Single)*. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'federalFilingStatus'?: string;
    /**
     * Employee first name. <br  />Max length: 40
     * @type {string}
     * @memberof Onboarding
     */
    'firstName': string;
    /**
     * Employee gender. Common values *M (Male), F (Female)*. <br  />Max length: 1
     * @type {string}
     * @memberof Onboarding
     */
    'sex'?: string;
    /**
     * Employee hired date. Common formats are MM-DD-CCYY, CCYY-MM-DD
     * @type {string}
     * @memberof Onboarding
     */
    'hireDate'?: string;
    /**
     * Employee home phone number. <br  />Max length: 12
     * @type {string}
     * @memberof Onboarding
     */
    'homePhone'?: string;
    /**
     * Employee last name. <br  />Max length: 40
     * @type {string}
     * @memberof Onboarding
     */
    'lastName': string;
    /**
     * Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'maritalStatus'?: string;
    /**
     * Employee personal mobile phone number. <br  />Max length: 12
     * @type {string}
     * @memberof Onboarding
     */
    'personalMobilePhone'?: string;
    /**
     * Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5
     * @type {string}
     * @memberof Onboarding
     */
    'payFrequency'?: string;
    /**
     * Employee personal email address. <br  />Max length: 50
     * @type {string}
     * @memberof Onboarding
     */
    'personalEmailAddress'?: string;
    /**
     * Employee pay type. Valid values are *Hourly or Salary*. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'payType'?: string;
    /**
     * Employee base rate frequency used with payType Hourly. Common values are *Hour or Week*. Default is Hour <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'ratePer'?: string;
    /**
     * Employee gross salary per pay period used with payType Salary. <br  />Decimal (12,2)
     * @type {number}
     * @memberof Onboarding
     */
    'salary'?: number;
    /**
     * Employee home state. <br  />Max length: 2
     * @type {string}
     * @memberof Onboarding
     */
    'state'?: string;
    /**
     * Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11
     * @type {string}
     * @memberof Onboarding
     */
    'ssn'?: string;
    /**
     * Employee state filing status. Common values are *M (Married), S (Single)*. <br  />Max length: 50
     * @type {string}
     * @memberof Onboarding
     */
    'stateFilingStatus'?: string;
    /**
     * Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2
     * @type {string}
     * @memberof Onboarding
     */
    'suiState'?: string;
    /**
     * Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15
     * @type {string}
     * @memberof Onboarding
     */
    'taxForm'?: string;
    /**
     * Employee primary tax state. <br  />Max Length: 2
     * @type {string}
     * @memberof Onboarding
     */
    'taxState'?: string;
    /**
     * Required. Employer assigned username to log into Onboarding. Duplicate usernames are not allowed. <br  />Must be between 3 and 20 characters and cannot have special characters other than . (period) and _ (underscore)
     * @type {string}
     * @memberof Onboarding
     */
    'userName'?: string;
    /**
     * Employee work email. <br  />Max length: 50
     * @type {string}
     * @memberof Onboarding
     */
    'workEmailAddress'?: string;
    /**
     * Employee home zip code. <br  />Max length: 10
     * @type {string}
     * @memberof Onboarding
     */
    'zip'?: string;
}

