import { PinterestInvalidAccessToken } from "./PinterestInvalidAccessToken";
import { PinterestApiError } from "./PinterestApiError";

export const checkPinterestResponse = (data: any) => {
    if (data?.code === 2) {
        throw new PinterestInvalidAccessToken(data);
    } else if (data?.code !== undefined) {
        throw new PinterestApiError(data);
    } else if (data?.error || data?.errors || data?.errorMessage) {
        throw new PinterestApiError(data);
    }
};
