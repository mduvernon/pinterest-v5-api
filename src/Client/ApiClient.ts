import { inject, injectable } from "inversify";

import { TYPES } from "../Resources/Types";

import { PinterestApiConfig } from '../Interface/PinterestApiConfig';
import { ParameterService } from "../Service/ParameterService";
import { FetchRequest } from "../Request/FetchRequest";

@injectable()
export class ApiClient {

    /**
     * Service name
     *
     * @type {string}
     */
    public readonly name: string;

    /**
     * req
     *  - The fetch wrapper for request
     *
     * @type {FetchRequest}
     */
    public readonly req: FetchRequest

    /**
     * config
     * - The config for the pinterest api
     *
     * @type {PinterestApiConfig}
     */
    public readonly config: PinterestApiConfig

    public readonly clientSecret: string

    public readonly clientId: string

    public readonly redirectUri: string

    public readonly scope: string[]

    /**
     * Constructor
     *
     * @param parameterService
     * @param req
     */
    constructor(
        @inject(TYPES.ParameterService) parameterService: ParameterService,
        @inject(TYPES.FetchRequest) req: FetchRequest
    ) {
        const config = parameterService.get<PinterestApiConfig>("pinterestApiConfig");

        this.name = "pinterest_api.ApiClient";

        let {
            clientId,
            clientSecret,
            redirectUri,
            scope,
        } = config;

        this.config = config;

        this.req = req;
        this.clientSecret = clientSecret;
        this.clientId = clientId;
        this.scope = scope;
        this.redirectUri = redirectUri;

        if (!(this.scope?.length > 0) || !this.clientId || !this.clientSecret || !this.redirectUri) {
            throw new Error("Pinterest missing required parameters (scope, clientId, clientSecret, redirectUri)")
        }

        if (!this.req || !(this.req instanceof FetchRequest)) {
            throw new Error("Invalid 'req' is not a FetchRequest instance")
        }
    }

    /**
     * getBasicAuthHeader
     *
     * @returns {{ "Authorization": string }} The Basic Auth Header
     */
    public getBasicAuthHeader(): { "Authorization": string } {
        const token: string = btoa(`${this.clientId}:${this.clientSecret}`);

        return { "Authorization": `Basic ${token}`, }
    }
}
