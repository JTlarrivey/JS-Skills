// userService.js
import { getUserFromDB } from './userRepository';

export async function getUserDisplayName(userId) {
  const user = await getUserFromDB(userId);
  return `${user.firstName} ${user.lastName}`;
}

// userRepository.js (mocked for testing)
export async function getUserFromDB(id) {
  // Simulate DB
  return { id, firstName: "Ada", lastName: "Lovelace" };
}

// userService.test.js
import { getUserDisplayName } from './userService';

test('returns full name for a given user ID', async () => {
  const name = await getUserDisplayName(1);
  expect(name).toBe('Ada Lovelace');
});
