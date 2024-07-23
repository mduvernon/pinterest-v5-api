import { PinterestApiConfig } from '../../Interface/PinterestApiConfig'

export const parameters: { pinterestApiConfig: PinterestApiConfig } = {
    pinterestApiConfig: {
        clientSecret: undefined,
        redirectUri: undefined,
        clientId: undefined,
        scope: undefined,
        autoRefreshToken: true,
    }
}
