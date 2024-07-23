import { injectable } from "inversify";

/**
 * ParameterService
 *  - Service to store and retrieve parameters
 */
@injectable()
export class ParameterService {
    private _parameters: Map<string, any> = new Map<string, any>();

    public getParameters(): Map<string, any> {
        return this._parameters;
    }

    public setParameters(parameters: Map<string, any>): ParameterService {
        this._parameters = parameters;

        return this;
    }

    public has(key: string): boolean {
        return this._parameters.has(key);
    }

    public get<T>(key: string): T {
        return this._parameters.get(key);
    }

    public set<T>(key: string, value: T): ParameterService {
        this._parameters.set(key, value);

        return this;
    }
}