/**
 * Error object for ease of capturing if some service depends on .toJSON() method to log something
 */
export class PinterestError extends Error {
    public readonly meta;
    public readonly code: string;

    constructor(message: string, code = '', meta: any = {}) {
        super(message);

        Object.setPrototypeOf(this, PinterestError.prototype);
        this.name = PinterestError.name;

        this.code = code;
        this.meta = meta;
    }

    /**
     * returns a JSON representation of the Error
     *
     * @return {Object}  json representation of the Error
     */
    public toJSON(): Object {
        return {
            message: this.message,
            code: this.code,
            stack: this.stack,
            type: this.constructor.name,
            meta: this.meta || null
        };
    }
}
