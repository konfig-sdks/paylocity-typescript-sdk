/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The Local Tax model
 * @export
 * @interface LocalTax
 */
export interface LocalTax {
    /**
     * Local tax exemptions value.<br  />Decimal (12,2)
     * @type {object}
     * @memberof LocalTax
     */
    'exemptions'?: object;
    /**
     * Local tax exemptions 2 value.<br  />Decimal (12,2)
     * @type {object}
     * @memberof LocalTax
     */
    'exemptions2'?: object;
    /**
     * Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50
     * @type {object}
     * @memberof LocalTax
     */
    'filingStatus'?: object;
    /**
     * Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9
     * @type {object}
     * @memberof LocalTax
     */
    'residentPSD'?: object;
    /**
     * Local tax code.<br  />Max length: 50
     * @type {object}
     * @memberof LocalTax
     */
    'taxCode'?: object;
    /**
     * Work location PSD. Must match Company setup. <br  /> Max length: 9
     * @type {object}
     * @memberof LocalTax
     */
    'workPSD'?: object;
}

