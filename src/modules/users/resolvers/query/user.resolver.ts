import { ModuleContext } from '@graphql-modules/core';

import { User } from '../../models/interfaces/user.interface';
import { UsersProvider } from '../../providers/users.provider';

interface Args {
  id: string;
}

export async function userResolverAsync(
  obj: any,
  { id }: Args,
  { injector }: ModuleContext
): Promise<User | null> {
  const user = await injector.get(UsersProvider).getUserByIdAsync(id);

  return user;
}
