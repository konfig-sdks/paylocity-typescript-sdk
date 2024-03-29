/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The Direct Deposit model
 * @export
 * @interface DirectDeposit
 */
export interface DirectDeposit {
    /**
     * Additional Direct Deposits that are not the main Direct Deposit.
     * @type {Array<object>}
     * @memberof DirectDeposit
     */
    'additionalDirectDeposit'?: Array<object>;
    /**
     * The main Direct Deposit account.
     * @type {object}
     * @memberof DirectDeposit
     */
    'mainDirectDeposit'?: object;
}

