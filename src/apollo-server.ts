import { MainModule } from './modules/main.module';
import { ApolloServer } from 'apollo-server-express';

import { environment } from './environment';

export const apolloServer = new ApolloServer({
  introspection: environment.apollo.server.introspection,
  mocks: true,
  modules: [MainModule],
  playground: environment.apollo.server.playground,
});
