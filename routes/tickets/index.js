const express = require('express');
const { httpSuccess } = require('../../Utils/htttp-response');

const ticketsRouter = express.Router();

ticketsRouter.get('/', (req, res) => httpSuccess(res, { message: 'success' }));

module.exports = ticketsRouter;
