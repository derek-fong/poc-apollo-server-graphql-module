import 'reflect-metadata';
import { gql } from 'apollo-server-express';
import { execute } from 'graphql';

import { UsersProvider } from '../../providers/users.provider';
import { UsersModule } from '../../users.module';
import { User } from '../../../../graphql-codegen-typings';

describe('userResolver', (): void => {
  const { schema, injector } = UsersModule;
  const testUser: User = {
    id: 'TEST_USER_ID',
    emailAddress: 'test@user.com',
    firstName: 'Test',
    lastName: 'User',
  };

  injector.provide({
    provide: UsersProvider,
    overwrite: true,
    useClass: class MockUsersProvider {
      getUserByIdAsync(id: string): Promise<User> {
        return Promise.resolve({
          ...testUser,
          id,
        });
      }
    },
  });

  it('should get user with matching ID', async (): Promise<void> => {
    const result = await execute({
      schema,
      document: gql`
        query User($id: ID!) {
          user(id: $id) {
            id
            emailAddress
            firstName
            lastName
          }
        }
      `,
      variableValues: {
        id: testUser.id,
      },
    });

    expect(result.errors).toBeFalsy();
    expect((result.data as { user: User }).user).toEqual(testUser);
  });
});
