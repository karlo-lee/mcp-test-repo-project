// User service for user management system (#2d5277527caf4041b14d16b893854c08)

import User from './User';

export default class UserService {
  constructor() {
    this.users = [];
  }

  // Create a new user
  createUser(id, name, email) {
    const user = new User(id, name, email);
    this.users.push(user);
    return user;
  }

  // Read user by ID
  getUser(id) {
    return this.users.find(user => user.id === id);
  }

  // Update user details
  updateUser(id, name, email) {
    const user = this.getUser(id);
    if (user) {
      user.updateDetails(name, email);
      return user;
    }
    return null;
  }

  // Delete user by ID
  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }

  // List all users
  getAllUsers() {
    return [...this.users];
  }
}