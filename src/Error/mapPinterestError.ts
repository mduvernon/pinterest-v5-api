export const rawError = Symbol('raw-error');

export const mapPinterestError = (err: any) => {
    if (!err) {
        return {};
    }

    const error: any = {
        message: err.message,
        code: err.code,
        meta: {
            [rawError]: err
        }
    };

    return error;
};
