import { GraphQLModule } from '@graphql-modules/core';

import { typeDefs } from './type-definitions';
import { AuthorsModule } from '../authors/authors.module';
import { CommonModule } from '../common/common.module';
import { UsersModule } from '../users/users.module';

export const StoriesModule = new GraphQLModule({
  typeDefs,
  imports: [CommonModule, AuthorsModule, UsersModule],
  name: 'stories',
});
