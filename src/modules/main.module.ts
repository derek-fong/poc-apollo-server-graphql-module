import { GraphQLModule } from '@graphql-modules/core';

import { AuthorsModule } from './authors/authors.module';

export const MainModule = new GraphQLModule({
  imports: [AuthorsModule],
  name: 'main',
});
