const bcrypt = require('bcrypt');
const Users = require('./Users');
const { httpSuccess, httpUnauthorized } = require('../../Utils/htttp-response');
const { generateToken } = require('./token');

const userAdmin = new Users();

/** @type {import('express').Router} */
const postLogin = (req, res) => {
  const { username, password } = req.body;

  const user = userAdmin.data.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return httpUnauthorized(res, 'Invalid username or password');
  }

  const token = generateToken(username);

  return httpSuccess(res, {
    id: user.id,
    username: user.username,
    token,
  });
};

module.exports = {
  postLogin,
};
