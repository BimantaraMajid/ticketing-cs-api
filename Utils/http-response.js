const appPackage = require('../package.json');

function sendResponse(res, statusCode, success, message, data = {}, additionalHeaders = {}) {
  const response = {
    success,
    message,
    data,
    api_version: appPackage.version,
    ...additionalHeaders,
  };

  res.status(statusCode).json(response);
}

function httpSuccess(res, data) {
  sendResponse(res, 200, true, 'Success', data);
}

function httpCreated(res, data) {
  sendResponse(res, 201, true, 'Resource created', data);
}

function httpUpdated(res, data) {
  sendResponse(res, 200, true, 'Resource updated', data);
}

function httpBadRequest(res, data) {
  sendResponse(res, 400, false, 'Bad request', data);
}

function httpUnauthorized(res, message) {
  sendResponse(res, 401, false, message);
}

function httpForbidden(res, message) {
  sendResponse(res, 403, false, message);
}

function httpNotFound(res, data) {
  sendResponse(res, 404, false, 'Resource not found', data);
}

function httpConflict(res, data) {
  sendResponse(res, 409, false, 'Conflict', data);
}

function httpUnprocessableEntity(res, message, data) {
  sendResponse(res, 422, false, message, data);
}

function httpInternalServerError(res, error) {
  sendResponse(res, 500, false, 'Internal Server Error', error);
}

module.exports = {
  sendResponse,
  httpSuccess,
  httpCreated,
  httpUpdated,
  httpBadRequest,
  httpUnauthorized,
  httpForbidden,
  httpNotFound,
  httpConflict,
  httpUnprocessableEntity,
  httpInternalServerError,
};
