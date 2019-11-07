import { Injectable } from '@graphql-modules/di';

import { User } from '../../../graphql-codegen-typings';

@Injectable()
export class UsersProvider {
  /**
   * Get user by ID.
   * @async
   * @param id - User ID.
   * @returns User with matching ID.
   */
  getUserByIdAsync(id: string): Promise<User> {
    return Promise.resolve({
      id,
      emailAddress: 'foo@bar.com',
      firstName: 'Foo',
      lastName: 'Bar',
    });
  }
}
