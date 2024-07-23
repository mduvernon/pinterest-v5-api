import { PinterestInvalidAccessToken } from "./PinterestInvalidAccessToken";

/**
 * isPinterestAuthTokenExpired
 *
 * @param {any} error
 * @returns {boolean}
 */
export const isPinterestAuthTokenExpired = (error: any): boolean => {
    const {
        meta
    } = error;

    if (error instanceof PinterestInvalidAccessToken) {
        return true;
    }

    if (meta?.Errors?.ErrorCode) {
        return meta?.Errors?.ErrorCode == 932;
    }

    return false;
}
