// Test cases for user management system (#2d5277527caf4041b14d16b893854c08)

import UserService from '../src/users/UserService';

const userService = new UserService();

// Test creating a user
it('should create a user', () => {
  const user = userService.createUser(1, 'John Doe', 'john@example.com');
  expect(user).toBeDefined();
  expect(user.id).toBe(1);
  expect(user.name).toBe('John Doe');
  expect(user.email).toBe('john@example.com');
});

// Test getting a user
it('should get a user by ID', () => {
  const user = userService.getUser(1);
  expect(user).toBeDefined();
  expect(user.id).toBe(1);
});

// Test updating a user
it('should update a user', () => {
  const updatedUser = userService.updateUser(1, 'Jane Doe', 'jane@example.com');
  expect(updatedUser).toBeDefined();
  expect(updatedUser.name).toBe('Jane Doe');
  expect(updatedUser.email).toBe('jane@example.com');
});

// Test deleting a user
it('should delete a user', () => {
  const deletedUser = userService.deleteUser(1);
  expect(deletedUser).toBeDefined();
  expect(userService.getUser(1)).toBeUndefined();
});