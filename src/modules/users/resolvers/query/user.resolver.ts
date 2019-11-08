import { ModuleContext } from '@graphql-modules/core';

import { UsersProvider } from '../../providers/users.provider';
import { User } from '../../../../graphql-codegen-typings';

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
