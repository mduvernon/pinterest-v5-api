const TYPES = {
    // Api Services
    OAuth2ApiService: Symbol.for('pinterest_api.OAuth2ApiService'),
    PinterestApiService: Symbol.for('pinterest_api.PinterestApiService'),

    // Client
    ApiClient: Symbol.for('pinterest_api.ApiClient'),

    // Request
    FetchRequest: Symbol.for('pinterest_api.FetchRequest'),

    // Services
    ParameterService: Symbol.for('pinterest_api.ParameterService'),
};

export { TYPES };
