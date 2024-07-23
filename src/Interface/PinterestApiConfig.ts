export interface PinterestApiConfig {
    clientId: string | undefined;
    clientSecret: string | undefined;
    redirectUri: string | undefined;
    scope: string[] | undefined;
    autoRefreshToken: boolean;
}
