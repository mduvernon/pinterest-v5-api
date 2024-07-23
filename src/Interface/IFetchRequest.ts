import {
    RequestInit,
    Response,
    fetch,
} from 'undici'

export interface IFetchRequest<T = typeof fetch, C = RequestInit> {
    get(url: string, config?: C): Promise<Response>;

    delete(url: string, config?: C): Promise<Response>;

    post(url: string, config?: C): Promise<Response>;

    patch(url: string, config?: C): Promise<Response>;

    put(url: string, config?: C): Promise<Response>;
}

export default IFetchRequest
