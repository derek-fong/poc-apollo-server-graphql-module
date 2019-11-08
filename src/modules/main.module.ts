import 'reflect-metadata';
import { GraphQLModule } from '@graphql-modules/core';

import { AuthorsModule } from './authors/authors.module';
import { CommentsModule } from './comments/comments.module';
import { StoriesModule } from './stories/stories.module';

export const MainModule = new GraphQLModule({
  imports: [AuthorsModule, CommentsModule, StoriesModule],
  name: 'main',
});
