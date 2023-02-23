/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A single query vector within a `QueryRequest`.
 * @export
 * @interface QueryVector
 */
export interface QueryVector {
    /**
     * The query vector values. This should be the same length as the dimension of the index being queried.
     * @type {Array<number>}
     * @memberof QueryVector
     */
    values: Array<number>;
    /**
     * An override for the number of results to return for this query vector.
     * @type {number}
     * @memberof QueryVector
     */
    topK?: number;
    /**
     * An override the namespace to search.
     * @type {string}
     * @memberof QueryVector
     */
    namespace?: string;
    /**
     * An override for the metadata filter to apply. This replaces the request-level filter.
     * @type {object}
     * @memberof QueryVector
     */
    filter?: object;
}

/**
 * Check if a given object implements the QueryVector interface.
 */
export function instanceOfQueryVector(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function QueryVectorFromJSON(json: any): QueryVector {
    return QueryVectorFromJSONTyped(json, false);
}

export function QueryVectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryVector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'values': json['values'],
        'topK': !exists(json, 'topK') ? undefined : json['topK'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'filter': !exists(json, 'filter') ? undefined : json['filter'],
    };
}

export function QueryVectorToJSON(value?: QueryVector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'values': value.values,
        'topK': value.topK,
        'namespace': value.namespace,
        'filter': value.filter,
    };
}

