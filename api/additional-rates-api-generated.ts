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
import { AdditionalRate } from '../models';
// @ts-ignore
import { ModelError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AdditionalRatesApi - axios parameter creator
 * @export
 */
export const AdditionalRatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sends new or updated employee additional rates information directly to Paylocity Payroll/HR solution.
         * @summary Add/update additional rates
         * @param {string} companyId The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max
         * @param {string} employeeId The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max
         * @param {AdditionalRate} json Additional Rate Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEmployeeAdditionalRates: async (companyId: string, employeeId: string, json: AdditionalRate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('updateEmployeeAdditionalRates', 'companyId', companyId)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('updateEmployeeAdditionalRates', 'employeeId', employeeId)
            // verify required parameter 'json' is not null or undefined
            assertParamExists('updateEmployeeAdditionalRates', 'json', json)
            const localVarPath = `/v2/companies/{companyId}/employees/{employeeId}/additionalRates`
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
                pathTemplate: '/v2/companies/{companyId}/employees/{employeeId}/additionalRates',
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
 * AdditionalRatesApi - functional programming interface
 * @export
 */
export const AdditionalRatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdditionalRatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Sends new or updated employee additional rates information directly to Paylocity Payroll/HR solution.
         * @summary Add/update additional rates
         * @param {AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEmployeeAdditionalRates(requestParameters: AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const json: AdditionalRate = {
                changeReason: requestParameters.changeReason,
                costCenter1: requestParameters.costCenter1,
                costCenter2: requestParameters.costCenter2,
                costCenter3: requestParameters.costCenter3,
                effectiveDate: requestParameters.effectiveDate,
                endCheckDate: requestParameters.endCheckDate,
                job: requestParameters.job,
                rate: requestParameters.rate,
                rateCode: requestParameters.rateCode,
                rateNotes: requestParameters.rateNotes,
                ratePer: requestParameters.ratePer,
                shift: requestParameters.shift
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEmployeeAdditionalRates(requestParameters.companyId, requestParameters.employeeId, json, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdditionalRatesApi - factory interface
 * @export
 */
export const AdditionalRatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdditionalRatesApiFp(configuration)
    return {
        /**
         * Sends new or updated employee additional rates information directly to Paylocity Payroll/HR solution.
         * @summary Add/update additional rates
         * @param {AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEmployeeAdditionalRates(requestParameters: AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateEmployeeAdditionalRates(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for updateEmployeeAdditionalRates operation in AdditionalRatesApi.
 * @export
 * @interface AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest
 */
export type AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest = {
    
    /**
    * The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max
    * @type {string}
    * @memberof AdditionalRatesApiUpdateEmployeeAdditionalRates
    */
    readonly companyId: string
    
    /**
    * The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max
    * @type {string}
    * @memberof AdditionalRatesApiUpdateEmployeeAdditionalRates
    */
    readonly employeeId: string
    
} & AdditionalRate

/**
 * AdditionalRatesApiGenerated - object-oriented interface
 * @export
 * @class AdditionalRatesApiGenerated
 * @extends {BaseAPI}
 */
export class AdditionalRatesApiGenerated extends BaseAPI {
    /**
     * Sends new or updated employee additional rates information directly to Paylocity Payroll/HR solution.
     * @summary Add/update additional rates
     * @param {AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdditionalRatesApiGenerated
     */
    public updateEmployeeAdditionalRates(requestParameters: AdditionalRatesApiUpdateEmployeeAdditionalRatesRequest, options?: AxiosRequestConfig) {
        return AdditionalRatesApiFp(this.configuration).updateEmployeeAdditionalRates(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
