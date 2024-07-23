
import { injectable } from "inversify";
import {
    RequestInit,
    HeadersInit,
    Response,
    fetch,
} from 'undici'

import { IFetchRequest } from '../Interface/IFetchRequest';

export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

@injectable()
export class FetchRequest implements IFetchRequest {

    private readonly _fetch: typeof fetch;

    constructor() {
        this._fetch = fetch;
    }

    public get<R = any>(url: string, config: RequestInit): Promise<Response> {
        return this._performNetworkCall<R>(url, RequestMethod.GET, undefined, config.headers);
    }

    public post<R = any>(url: string, config: RequestInit): Promise<Response> {
        return this._performNetworkCall<R>(url, RequestMethod.POST, this._getJsonBody(config.body), this._addJsonHeaders(config.headers));
    }

    public put<R = any>(url: string, config: RequestInit): Promise<Response> {
        return this._performNetworkCall<R>(url, RequestMethod.PUT, this._getJsonBody(config.body), this._addJsonHeaders(config.headers));
    }

    public patch<R = any>(url: string, config: RequestInit): Promise<Response> {
        return this._performNetworkCall<R>(url, RequestMethod.PATCH, this._getJsonBody(config.body), this._addJsonHeaders(config.headers));
    }

    public delete<R = any>(url: string, config: RequestInit): Promise<Response> {
        return this._performNetworkCall<R>(url, RequestMethod.DELETE, this._getJsonBody(config.body), this._addJsonHeaders(config.headers));
    }

    private _getJsonBody(body?: {} | FormData | URLSearchParams) {
        if (body === undefined || body instanceof FormData || body instanceof URLSearchParams) {
            return body;
        }

        return JSON.stringify(body);
    }

    private _addJsonHeaders(headers?: HeadersInit): HeadersInit {
        return Object.assign({}, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, headers);
    };

    private async _performNetworkCall<R = any>(url: string, method: string, body?: any, headers?: HeadersInit): Promise<Response> {

        // when using fetch & a multipart upload, the requests content-type is
        // handled by the browser, so should be left unset otherwise the
        // multipart boundary is not added
        if (headers && (headers as any)['Content-Type'] === 'multipart/form-data') {
            delete (headers as any)['Content-Type'];
        }

        let promise = this._fetch(url, {
            method: method,
            body: body,
            headers: headers
        });

        return promise;
    }
}

export default FetchRequest
