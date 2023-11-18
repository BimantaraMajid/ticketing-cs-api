const jwt = require('jsonwebtoken');
const { httpUnauthorized } = require('../Utils/http-response');

/** @type {import('express').Router} */
// eslint-disable-next-line consistent-return
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return httpUnauthorized(res, { message: 'Unauthorized: Token is missing' });
  }

  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return httpUnauthorized(res, { message: 'Unauthorized: Invalid token' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
