import { PinterestError } from "./PinterestError";
import { mapPinterestError } from "./mapPinterestError";

/**
 * Thrown when an Error occurs on pinterest's side.
 */
export class PinterestApiError extends PinterestError {

    constructor(err: any) {
        const { message, code, meta } = mapPinterestError(err);

        super(message, code, meta);

        Object.setPrototypeOf(this, PinterestError.prototype);
    }

}
