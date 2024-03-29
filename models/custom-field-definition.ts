/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldDefinitionValuesInner } from './custom-field-definition-values-inner';

/**
 * 
 * @export
 * @interface CustomFieldDefinition
 */
export interface CustomFieldDefinition {
    /**
     * The custom field category.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    'category'?: string;
    /**
     * Specifies the default value of the custom field.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    'defaultValue'?: string;
    /**
     * Indicates whether the custom field is required.
     * @type {boolean}
     * @memberof CustomFieldDefinition
     */
    'isRequired'?: boolean;
    /**
     * The custom field label.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    'label'?: string;
    /**
     * The custom field type.
     * @type {string}
     * @memberof CustomFieldDefinition
     */
    'type'?: string;
    /**
     * A set of values that are applicable to the custom field.
     * @type {Array<CustomFieldDefinitionValuesInner>}
     * @memberof CustomFieldDefinition
     */
    'values'?: Array<CustomFieldDefinitionValuesInner>;
}

