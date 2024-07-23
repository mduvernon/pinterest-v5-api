import { PinterestApiError } from './PinterestApiError';
import { mapPinterestError } from "./mapPinterestError";

/**
 * Thrown when the access token provided is invalid.
 */
export class PinterestInvalidAccessToken extends PinterestApiError {
    constructor(err: any) {
        super(err);

        Object.setPrototypeOf(this, PinterestInvalidAccessToken.prototype);
    }
}
