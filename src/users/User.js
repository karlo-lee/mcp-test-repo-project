// User class for user management system (#2d5277527caf4041b14d16b893854c08)

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Get user details
  getDetails() {
    return {
      id: this.id,
      name: this.name,
      email: this.email
    };
  }

  // Update user details
  updateDetails(name, email) {
    this.name = name;
    this.email = email;
  }
}

export default User;