const { validationResult } = require('express-validator');
const { httpBadRequest } = require('../Utils/htttp-response');

// eslint-disable-next-line consistent-return
const validatePayload = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return httpBadRequest(res, { errors: errors?.array()[0] });
  }
  next();
};

module.exports = validatePayload;
