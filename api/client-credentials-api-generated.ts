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
import { AddClientSecret } from '../models';
// @ts-ignore
import { ClientCredentialsResponse } from '../models';
// @ts-ignore
import { ModelError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ClientCredentialsApi - axios parameter creator
 * @export
 */
export const ClientCredentialsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Obtain new client secret for Paylocity-issued client id. See Weblink Authentication section for details.
         * @summary Obtain new client secret.
         * @param {AddClientSecret} json Add Client Secret Model
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtainNewClientSecret: async (json: AddClientSecret, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'json' is not null or undefined
            assertParamExists('obtainNewClientSecret', 'json', json)
            const localVarPath = `/v2/credentials/secrets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
                pathTemplate: '/v2/credentials/secrets',
                httpMethod: 'POST'
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
 * ClientCredentialsApi - functional programming interface
 * @export
 */
export const ClientCredentialsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientCredentialsApiAxiosParamCreator(configuration)
    return {
        /**
         * Obtain new client secret for Paylocity-issued client id. See Weblink Authentication section for details.
         * @summary Obtain new client secret.
         * @param {ClientCredentialsApiObtainNewClientSecretRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async obtainNewClientSecret(requestParameters: ClientCredentialsApiObtainNewClientSecretRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ClientCredentialsResponse>>> {
            const json: AddClientSecret = {
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.obtainNewClientSecret(json, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClientCredentialsApi - factory interface
 * @export
 */
export const ClientCredentialsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientCredentialsApiFp(configuration)
    return {
        /**
         * Obtain new client secret for Paylocity-issued client id. See Weblink Authentication section for details.
         * @summary Obtain new client secret.
         * @param {ClientCredentialsApiObtainNewClientSecretRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtainNewClientSecret(requestParameters: ClientCredentialsApiObtainNewClientSecretRequest, options?: AxiosRequestConfig): AxiosPromise<Array<ClientCredentialsResponse>> {
            return localVarFp.obtainNewClientSecret(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for obtainNewClientSecret operation in ClientCredentialsApi.
 * @export
 * @interface ClientCredentialsApiObtainNewClientSecretRequest
 */
export type ClientCredentialsApiObtainNewClientSecretRequest = {
    
} & AddClientSecret

/**
 * ClientCredentialsApiGenerated - object-oriented interface
 * @export
 * @class ClientCredentialsApiGenerated
 * @extends {BaseAPI}
 */
export class ClientCredentialsApiGenerated extends BaseAPI {
    /**
     * Obtain new client secret for Paylocity-issued client id. See Weblink Authentication section for details.
     * @summary Obtain new client secret.
     * @param {ClientCredentialsApiObtainNewClientSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientCredentialsApiGenerated
     */
    public obtainNewClientSecret(requestParameters: ClientCredentialsApiObtainNewClientSecretRequest, options?: AxiosRequestConfig) {
        return ClientCredentialsApiFp(this.configuration).obtainNewClientSecret(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
