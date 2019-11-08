import { GraphQLModule } from '@graphql-modules/core';

import { providers } from './providers';
import { resolvers } from './resolvers';
import { typeDefs } from './type-definitions';
import { CommonModule } from '../common/common.module';

export const UsersModule = new GraphQLModule({
  providers,
  resolvers,
  typeDefs,
  imports: [CommonModule],
  name: 'users',
});
