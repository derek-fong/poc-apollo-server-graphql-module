import 'reflect-metadata';
import { UsersProvider } from './users.provider';

describe('UsersProvider', (): void => {
  let usersProvider = new UsersProvider();

  describe('getUserByIdAsync', (): void => {
    it('should get user with matching ID', async (): Promise<void> => {
      const testUserId = 'TEST_USER_ID';
      const testUser = await usersProvider.getUserByIdAsync(testUserId);
      expect(testUser.id).toEqual(testUserId);
    });
  });
});
