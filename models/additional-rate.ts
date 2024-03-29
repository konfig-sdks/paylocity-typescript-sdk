/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The additional pay rate model
 * @export
 * @interface AdditionalRate
 */
export interface AdditionalRate {
    /**
     * Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'changeReason'?: object;
    /**
     * Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'costCenter1'?: object;
    /**
     * Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'costCenter2'?: object;
    /**
     * Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'costCenter3'?: object;
    /**
     * Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'effectiveDate'?: object;
    /**
     * Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'endCheckDate'?: object;
    /**
     * Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'job'?: object;
    /**
     * Required. Enter dollar amount that corresponds to the Per selection.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'rate'?: object;
    /**
     * Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'rateCode'?: object;
    /**
     * Not required.<br  />Max length: 4000<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'rateNotes'?: object;
    /**
     * Required. Valid values are HOUR or WEEK.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'ratePer'?: object;
    /**
     * Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />
     * @type {object}
     * @memberof AdditionalRate
     */
    'shift'?: object;
}

