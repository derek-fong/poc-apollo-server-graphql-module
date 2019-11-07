import { GraphQLModule } from '@graphql-modules/core';

import { typeDefs } from './type-definitions';
import { CommonModule } from '../common/common.module';
import { StoriesModule } from '../stories/stories.module';
import { UsersModule } from '../users/users.module';

export const CommentsModule = new GraphQLModule({
  typeDefs,
  imports: [CommonModule, StoriesModule, UsersModule],
  name: 'comments',
});
