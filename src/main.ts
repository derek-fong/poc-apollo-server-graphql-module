import express from 'express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

import { apolloServer } from './apollo-server';
import { environment } from './environment';

(async function bootstrap(): Promise<void> {
  const app = express();
  const voyagerEndpointUrl = environment.voyager.endpointUrl;

  if (voyagerEndpointUrl) {
    app.use(
      '(/:baseDir)?/voyager',
      voyagerMiddleware({ endpointUrl: voyagerEndpointUrl })
    );
  }

  apolloServer.applyMiddleware({ app, path: '/' });

  try {
    const port = environment.port;
    const httpServer = await app.listen(port);

    console.log(`GraphQL server is listening on port ${port}. `);

    // Hot module replacement.
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(
        async (): Promise<void> => {
          if (httpServer && typeof httpServer.close === 'function') {
            await httpServer.close();
          }
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
})();
