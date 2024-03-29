/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The staged employee model
 * @export
 * @interface StagedEmployee
 */
export interface StagedEmployee {
    /**
     * Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'additionalDirectDeposit'?: Array<object>;
    /**
     * Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'benefitSetup'?: Array<object>;
    /**
     * Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     * @type {object}
     * @memberof StagedEmployee
     */
    'birthDate'?: object;
    /**
     * Up to 8 custom fields of boolean (checkbox) type value.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'customBooleanFields'?: Array<object>;
    /**
     * Up to 8 custom fields of the date type value.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'customDateFields'?: Array<object>;
    /**
     * Up to 8 custom fields of the dropdown type value.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'customDropDownFields'?: Array<object>;
    /**
     * Up to 8 custom fields of numeric type value.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'customNumberFields'?: Array<object>;
    /**
     * Up to 8 custom fields of text type value.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'customTextFields'?: Array<object>;
    /**
     * Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'departmentPosition'?: Array<object>;
    /**
     * Indicates if employee has disability status.
     * @type {object}
     * @memberof StagedEmployee
     */
    'disabilityDescription'?: object;
    /**
     * Leave blank to have Paylocity Payroll/HR solution automatically assign the next available employee ID.<br  /> Max length: 10
     * @type {object}
     * @memberof StagedEmployee
     */
    'employeeId'?: object;
    /**
     * Employee ethnicity.<br  /> Max length: 10
     * @type {object}
     * @memberof StagedEmployee
     */
    'ethnicity'?: object;
    /**
     * Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'federalTax'?: Array<object>;
    /**
     * Employee first name. <br  />Max length: 40
     * @type {object}
     * @memberof StagedEmployee
     */
    'firstName'?: object;
    /**
     * Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     * @type {object}
     * @memberof StagedEmployee
     */
    'fitwExemptReason'?: object;
    /**
     * Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
     * @type {object}
     * @memberof StagedEmployee
     */
    'futaExemptReason'?: object;
    /**
     * Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1
     * @type {object}
     * @memberof StagedEmployee
     */
    'gender'?: object;
    /**
     * Add employee\'s home address, personal phone numbers, and personal email.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'homeAddress'?: Array<object>;
    /**
     * Indicates if employee in agriculture or farming.
     * @type {object}
     * @memberof StagedEmployee
     */
    'isEmployee943'?: object;
    /**
     * Indicates if employee is a smoker.
     * @type {object}
     * @memberof StagedEmployee
     */
    'isSmoker'?: object;
    /**
     * Employee last name. <br  />Max length: 40
     * @type {object}
     * @memberof StagedEmployee
     */
    'lastName'?: object;
    /**
     * Add local tax code, filing status, and exemptions including PA-PSD taxes.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'localTax'?: Array<object>;
    /**
     * Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'mainDirectDeposit'?: Array<object>;
    /**
     * Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10
     * @type {object}
     * @memberof StagedEmployee
     */
    'maritalStatus'?: object;
    /**
     * Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30
     * @type {object}
     * @memberof StagedEmployee
     */
    'medExemptReason'?: object;
    /**
     * Employee middle name.<br  /> Max length: 20
     * @type {object}
     * @memberof StagedEmployee
     */
    'middleName'?: object;
    /**
     * Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'nonPrimaryStateTax'?: Array<object>;
    /**
     * Employee preferred display name.<br  /> Max length: 20
     * @type {object}
     * @memberof StagedEmployee
     */
    'preferredName'?: object;
    /**
     * Add hourly or salary pay rate, effective date, and pay frequency.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'primaryPayRate'?: Array<object>;
    /**
     * Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'primaryStateTax'?: Array<object>;
    /**
     * Prior last name if applicable.<br  />Max length: 40
     * @type {object}
     * @memberof StagedEmployee
     */
    'priorLastName'?: object;
    /**
     * Employee preferred salutation. <br  />Max length: 10
     * @type {object}
     * @memberof StagedEmployee
     */
    'salutation'?: object;
    /**
     * Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     * @type {object}
     * @memberof StagedEmployee
     */
    'sitwExemptReason'?: object;
    /**
     * Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     * @type {object}
     * @memberof StagedEmployee
     */
    'ssExemptReason'?: object;
    /**
     * Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11
     * @type {object}
     * @memberof StagedEmployee
     */
    'ssn'?: object;
    /**
     * Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'status'?: Array<object>;
    /**
     * Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30
     * @type {object}
     * @memberof StagedEmployee
     */
    'suffix'?: object;
    /**
     * Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30
     * @type {object}
     * @memberof StagedEmployee
     */
    'suiExemptReason'?: object;
    /**
     * Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2
     * @type {object}
     * @memberof StagedEmployee
     */
    'suiState'?: object;
    /**
     * Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1
     * @type {object}
     * @memberof StagedEmployee
     */
    'taxDistributionCode1099R'?: object;
    /**
     * Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15
     * @type {object}
     * @memberof StagedEmployee
     */
    'taxForm'?: object;
    /**
     * Indicates if employee is a veteran.
     * @type {object}
     * @memberof StagedEmployee
     */
    'veteranDescription'?: object;
    /**
     * Add Web Time badge number and charge rate and synchronize Paylocity Payroll/HR solution and Web Time employee data.
     * @type {object}
     * @memberof StagedEmployee
     */
    'webTime'?: object;
    /**
     * Add employee\'s work address, phone numbers, and email. Work Location drop down field is not included.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'workAddress'?: Array<object>;
    /**
     * Add I-9 work authorization information.
     * @type {Array<object>}
     * @memberof StagedEmployee
     */
    'workEligibility'?: Array<object>;
}

