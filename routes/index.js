const express = require('express');
const authRouter = require('./login');
const ticketsRouter = require('./tickets');
const verifyToken = require('../middleware/verify-token');
const workOrdersRouter = require('./work-order');

const indexRouter = express.Router();

indexRouter.use('/', authRouter);
indexRouter.use('/tickets', verifyToken, ticketsRouter);
indexRouter.use('/work-order', verifyToken, workOrdersRouter);

module.exports = indexRouter;
