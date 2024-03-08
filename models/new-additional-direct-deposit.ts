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
 * @interface NewAdditionalDirectDeposit
 */
export interface NewAdditionalDirectDeposit {
    /**
     * Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br /><small>new with Web Link 16.6 release</small>
     * @type {string}
     * @memberof NewAdditionalDirectDeposit
     */
    'accountType'?: string;
    /**
     * ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br /><small>new with Web Link 16.6 release</small>
     * @type {string}
     * @memberof NewAdditionalDirectDeposit
     */
    'routingNumber'?: string;
    /**
     * Account number, entered without special characters and spaces. <br  />Max length: 17<br /><small>new with Web Link 16.6 release</small>
     * @type {string}
     * @memberof NewAdditionalDirectDeposit
     */
    'accountNumber'?: string;
    /**
     * Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br /><small>new with Web Link 16.6 release</small>
     * @type {string}
     * @memberof NewAdditionalDirectDeposit
     */
    'amountType'?: string;
    /**
     * Amount value to be deposited to the account.<br  />Decimal (12,2)<br /><small>new with Web Link 16.6 release</small>
     * @type {number}
     * @memberof NewAdditionalDirectDeposit
     */
    'amount'?: number;
    /**
     * Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br /><small>new with Web Link 16.6 release</small>
     * @type {boolean}
     * @memberof NewAdditionalDirectDeposit
     */
    'blockSpecial'?: boolean;
    /**
     * Name on the bank account. Defaults to employee\'s name. <br  />Max length: 30<br /><small>new with Web Link 16.6 release</small>
     * @type {string}
     * @memberof NewAdditionalDirectDeposit
     */
    'nameOnAccount'?: string;
    /**
     * Indicates if account will not pre-note.<br /><small>new with Web Link 16.6 release</small>
     * @type {boolean}
     * @memberof NewAdditionalDirectDeposit
     */
    'skipPreNote'?: boolean;
    /**
     * Date to end the pre-note of the account. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.<br /><small>new with Web Link 16.6 release</small>
     * @type {string}
     * @memberof NewAdditionalDirectDeposit
     */
    'preNoteDate'?: string;
}

