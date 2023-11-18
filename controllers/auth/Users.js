const bcrypt = require('bcrypt');

class Users {
  constructor() {
    this.data = [];
    this.data.push({
      id: +new Date(),
      username: 'admin',
      password: bcrypt.hashSync('admin123', 10),
    });
  }

  add({
    username,
    password,
  }) {
    if (!username || !password) return false;

    this.data.push({
      id: +new Date(),
      username,
      password: bcrypt.hashSync(password, 10),
    });
    return true;
  }
}

module.exports = Users;
