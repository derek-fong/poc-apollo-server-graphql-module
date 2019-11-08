import { GraphQLModule } from '@graphql-modules/core';

import { typeDefs } from './type-definitions';
import { UsersModule } from '../users/users.module';

export const AuthorsModule = new GraphQLModule({
  typeDefs,
  imports: [UsersModule],
  name: 'authors',
});
