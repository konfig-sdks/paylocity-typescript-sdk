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
 * @interface NewWorkEligibility
 */
export interface NewWorkEligibility {
    /**
     * Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an \'A\'
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'alienOrAdmissionDocumentNbr'?: string;
    /**
     * The date Employee I9 was verified by the employer. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'i9DateVerified'?: string;
    /**
     * Notes regarding employee\'s I9.<br  /> Max length: 4000
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'i9Notes'?: string;
    /**
     * Indicates if employee I9 is verified.
     * @type {boolean}
     * @memberof NewWorkEligibility
     */
    'i9Verified'?: boolean;
    /**
     * The date of employer verification of employee SSN. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'sSNDateVerified'?: string;
    /**
     * Notes regarding employee\'s SSN.<br  /> Max length: 4000
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'sSNNotes'?: string;
    /**
     * Indicates if employee SSN is verified.
     * @type {boolean}
     * @memberof NewWorkEligibility
     */
    'sSNVerified'?: boolean;
    /**
     * Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'visaType'?: string;
    /**
     * Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'workAuthorization'?: string;
    /**
     * End date of employee work eligibility. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'workUntil'?: string;
    /**
     * The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'attestedDate'?: string;
    /**
     * Form I-94 admission number.<br  /> Must be 11 numeric characters.
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'i94AdmissionNumber'?: string;
    /**
     * Foreign Passport Number.<br  /> Max length: 50
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'foreignPassportNumber'?: string;
    /**
     * If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30
     * @type {string}
     * @memberof NewWorkEligibility
     */
    'countryOfIssuance'?: string;
}
