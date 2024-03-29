/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The sensitive data model
 * @export
 * @interface SensitiveData
 */
export interface SensitiveData {
    /**
     * Add or update disability data.
     * @type {object}
     * @memberof SensitiveData
     */
    'disability'?: object;
    /**
     * Add or update ethnicity data.
     * @type {object}
     * @memberof SensitiveData
     */
    'ethnicity'?: object;
    /**
     * Add or update gender data.
     * @type {object}
     * @memberof SensitiveData
     */
    'gender'?: object;
    /**
     * Add or update veteran data.
     * @type {object}
     * @memberof SensitiveData
     */
    'veteran'?: object;
}

