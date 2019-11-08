import { ApolloServer } from 'apollo-server-express';
import { DateTimeMock, EmailAddressMock, URLMock } from 'graphql-scalars';

import { environment } from './environment';
import { MainModule } from './modules/main.module';

export const apolloServer = new ApolloServer({
  introspection: environment.apollo.server.introspection,
  mockEntireSchema: false,
  mocks: {
    DateTime: DateTimeMock,
    EmailAddress: EmailAddressMock,
    URL: URLMock,
  },
  modules: [MainModule],
  playground: environment.apollo.server.playground,
});
