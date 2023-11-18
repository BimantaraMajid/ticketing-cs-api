const jwt = require('jsonwebtoken');

const generateToken = (username) => jwt.sign({ username }, process.env.JWT_KEY, { expiresIn: '1h' });

module.exports = {
  generateToken,
};
