import { queryResolver } from './query';

export const resolvers = {
  BaseUser: {
    __resolveType() {
      return null;
    },
  },
  Query: queryResolver,
};
