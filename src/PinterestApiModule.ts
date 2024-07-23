import { Container, ContainerModule } from 'inversify';

import { TYPES } from './Resources/Types';

import { OAuth2ApiService } from './ApiService/Auth/OAuth2ApiService';
import { PinterestApiService } from './ApiService/PinterestApiService';

import { ApiClient } from './Client/ApiClient';

import { FetchRequest } from './Request/FetchRequest';

import { ParameterService } from './Service/ParameterService';

import { parameters } from './Resources/configs/parameters';

import { setContainer } from './container';

/**
 * The PinterestApiModule
 */
class PinterestApiModule {

    public parameters = parameters;

    /**
     * Declare all Module Services
     *
     * @private
     */
    public bootstrap(app: { container: Container }): this {

        setContainer(app.container)

        const bindings = new ContainerModule((bind) => {
            // Api Services declarations
            bind<OAuth2ApiService>(TYPES.OAuth2ApiService).to(OAuth2ApiService);
            bind<PinterestApiService>(TYPES.PinterestApiService).to(PinterestApiService).inSingletonScope();

            // Client declaration
            bind<ApiClient>(TYPES.ApiClient).to(ApiClient).inSingletonScope();

            // Request declarations
            bind<FetchRequest>(TYPES.FetchRequest).to(FetchRequest).inSingletonScope();

            // Services declarations
            bind<ParameterService>(TYPES.ParameterService).to(ParameterService).inSingletonScope();
        });

        app.container.load(bindings);

        return this;
    }
}

export { PinterestApiModule };
