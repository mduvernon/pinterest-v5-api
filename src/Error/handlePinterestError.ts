import { mapPinterestError } from "./mapPinterestError";
import { PinterestError } from "./PinterestError";

export const handlePinterestError = (err: any) => {
    if (err instanceof PinterestError) {
        throw err;
    }

    const { message, code, meta } = mapPinterestError(err);

    throw new PinterestError(message, code, meta);
};
