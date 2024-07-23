import { Container } from 'inversify';

import { PinterestApiModule } from './PinterestApiModule';

export * from './ApiService'

export * from './Client'

export * from './Constant'

export * from './Error'

export * from './Event'

export * from './Interface'

export * from './Model'

export * from './Request'

export * from './Resources'

/**
 * @summary Import and call this function to add this module to your API.
 * @param {Object} app The app core instance (container) 
 * @returns {PinterestApiModule}
 */
export default function bootstrap(app: { container: Container }): PinterestApiModule {
    return new PinterestApiModule().bootstrap(app)
}

/**
 * Import in this way () => await module.bootstrap(<AppCoreInstance>)
 */
export const module = { bootstrap }
