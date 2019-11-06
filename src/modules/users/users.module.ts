import { GraphQLModule } from '@graphql-modules/core';

import { typeDefs } from './type-definitions';

export const UsersModule = new GraphQLModule({
  name: 'users',
  // imports,
  // providers,
  // resolversComposition
  // resolvers,
  typeDefs,
});
