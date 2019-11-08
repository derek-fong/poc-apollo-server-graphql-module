import { GraphQLModule } from '@graphql-modules/core';

import { resolvers } from './resolvers';
import { typeDefs } from './type-definitions';

export const CommonModule = new GraphQLModule({
  resolvers,
  typeDefs,
  name: 'common',
});
