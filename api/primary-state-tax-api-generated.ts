/* tslint:disable */
/* eslint-disable */
/*
WebLink API

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

The version of the OpenAPI document: v2
Contact: webservices@paylocity.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ModelError } from '../models';
// @ts-ignore
import { StateTax } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PrimaryStateTaxApi - axios parameter creator
 * @export
 */
export const PrimaryStateTaxApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sends new or updated employee primary state tax information directly to Paylocity Payroll/HR solution.
         * @summary Add/update primary state tax
         * @param {string} companyId The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max
         * @param {string} employeeId The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max
         * @param {StateTax} json Primary State Tax Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addOrUpdateTax: async (companyId: string, employeeId: string, json: StateTax, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('addOrUpdateTax', 'companyId', companyId)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('addOrUpdateTax', 'employeeId', employeeId)
            // verify required parameter 'json' is not null or undefined
            assertParamExists('addOrUpdateTax', 'json', json)
            const localVarPath = `/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax`
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId !== undefined ? companyId : `-companyId-`)))
                .replace(`{${"employeeId"}}`, encodeURIComponent(String(employeeId !== undefined ? employeeId : `-employeeId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication paylocity_auth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "paylocity_auth", ["WebLinkAPI"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: json,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(json, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PrimaryStateTaxApi - functional programming interface
 * @export
 */
export const PrimaryStateTaxApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PrimaryStateTaxApiAxiosParamCreator(configuration)
    return {
        /**
         * Sends new or updated employee primary state tax information directly to Paylocity Payroll/HR solution.
         * @summary Add/update primary state tax
         * @param {PrimaryStateTaxApiAddOrUpdateTaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addOrUpdateTax(requestParameters: PrimaryStateTaxApiAddOrUpdateTaxRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const json: StateTax = {
                amount: requestParameters.amount,
                deductionsAmount: requestParameters.deductionsAmount,
                dependentsAmount: requestParameters.dependentsAmount,
                exemptions: requestParameters.exemptions,
                exemptions2: requestParameters.exemptions2,
                filingStatus: requestParameters.filingStatus,
                higherRate: requestParameters.higherRate,
                otherIncomeAmount: requestParameters.otherIncomeAmount,
                percentage: requestParameters.percentage,
                specialCheckCalc: requestParameters.specialCheckCalc,
                taxCalculationCode: requestParameters.taxCalculationCode,
                taxCode: requestParameters.taxCode,
                w4FormYear: requestParameters.w4FormYear
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addOrUpdateTax(requestParameters.companyId, requestParameters.employeeId, json, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PrimaryStateTaxApi - factory interface
 * @export
 */
export const PrimaryStateTaxApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PrimaryStateTaxApiFp(configuration)
    return {
        /**
         * Sends new or updated employee primary state tax information directly to Paylocity Payroll/HR solution.
         * @summary Add/update primary state tax
         * @param {PrimaryStateTaxApiAddOrUpdateTaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addOrUpdateTax(requestParameters: PrimaryStateTaxApiAddOrUpdateTaxRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addOrUpdateTax(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addOrUpdateTax operation in PrimaryStateTaxApi.
 * @export
 * @interface PrimaryStateTaxApiAddOrUpdateTaxRequest
 */
export type PrimaryStateTaxApiAddOrUpdateTaxRequest = {
    
    /**
    * The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max
    * @type {string}
    * @memberof PrimaryStateTaxApiAddOrUpdateTax
    */
    readonly companyId: string
    
    /**
    * The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max
    * @type {string}
    * @memberof PrimaryStateTaxApiAddOrUpdateTax
    */
    readonly employeeId: string
    
} & StateTax

/**
 * PrimaryStateTaxApiGenerated - object-oriented interface
 * @export
 * @class PrimaryStateTaxApiGenerated
 * @extends {BaseAPI}
 */
export class PrimaryStateTaxApiGenerated extends BaseAPI {
    /**
     * Sends new or updated employee primary state tax information directly to Paylocity Payroll/HR solution.
     * @summary Add/update primary state tax
     * @param {PrimaryStateTaxApiAddOrUpdateTaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryStateTaxApiGenerated
     */
    public addOrUpdateTax(requestParameters: PrimaryStateTaxApiAddOrUpdateTaxRequest, options?: AxiosRequestConfig) {
        return PrimaryStateTaxApiFp(this.configuration).addOrUpdateTax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}