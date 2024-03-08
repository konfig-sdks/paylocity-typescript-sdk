/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The emergency contact model
 * @export
 * @interface EmergencyContact
 */
export interface EmergencyContact {
    /**
     * 1st address line.
     * @type {object}
     * @memberof EmergencyContact
     */
    'address1'?: object;
    /**
     * 2nd address line.
     * @type {object}
     * @memberof EmergencyContact
     */
    'address2'?: object;
    /**
     * City.
     * @type {object}
     * @memberof EmergencyContact
     */
    'city'?: object;
    /**
     * County.
     * @type {object}
     * @memberof EmergencyContact
     */
    'country'?: object;
    /**
     * Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).
     * @type {object}
     * @memberof EmergencyContact
     */
    'county'?: object;
    /**
     * Contact email.  Must be valid email address format.
     * @type {object}
     * @memberof EmergencyContact
     */
    'email'?: object;
    /**
     * Required. Contact first name. <br  />Max length: 40
     * @type {object}
     * @memberof EmergencyContact
     */
    'firstName': object;
    /**
     * Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     * @type {object}
     * @memberof EmergencyContact
     */
    'homePhone'?: object;
    /**
     * Required. Contact last name. <br  />Max length: 40
     * @type {object}
     * @memberof EmergencyContact
     */
    'lastName': object;
    /**
     * Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     * @type {object}
     * @memberof EmergencyContact
     */
    'mobilePhone'?: object;
    /**
     * Notes. <br  />Max length: 1000
     * @type {object}
     * @memberof EmergencyContact
     */
    'notes'?: object;
    /**
     * Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     * @type {object}
     * @memberof EmergencyContact
     */
    'pager'?: object;
    /**
     * Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)
     * @type {object}
     * @memberof EmergencyContact
     */
    'primaryPhone'?: object;
    /**
     * Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).
     * @type {object}
     * @memberof EmergencyContact
     */
    'priority'?: object;
    /**
     * Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.
     * @type {object}
     * @memberof EmergencyContact
     */
    'relationship'?: object;
    /**
     * State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).
     * @type {object}
     * @memberof EmergencyContact
     */
    'state'?: object;
    /**
     * Valid values are *true* or *false*.
     * @type {boolean}
     * @memberof EmergencyContact
     */
    'syncEmployeeInfo'?: boolean;
    /**
     * Work Extension.
     * @type {object}
     * @memberof EmergencyContact
     */
    'workExtension'?: object;
    /**
     * Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.
     * @type {object}
     * @memberof EmergencyContact
     */
    'workPhone'?: object;
    /**
     * Postal code.  If U.S. address, must be a valid zip code.
     * @type {object}
     * @memberof EmergencyContact
     */
    'zip'?: object;
}
