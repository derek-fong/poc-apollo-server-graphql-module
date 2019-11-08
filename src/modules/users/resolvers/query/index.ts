import { userResolverAsync } from './user.resolver';

export const queryResolver = {
  user: userResolverAsync,
};
