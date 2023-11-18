const express = require('express');
const { body } = require('express-validator');
const { postLogin } = require('../../controllers/auth');
const validatePayload = require('../../middleware/express-validator');

const authRouter = express.Router();

authRouter.post(
  '/login',
  [
    body('username').notEmpty().withMessage('required'),
    body('password').notEmpty().withMessage('required'),
  ],
  validatePayload,
  postLogin,
);

authRouter.post('/register', () => { });

module.exports = authRouter;
