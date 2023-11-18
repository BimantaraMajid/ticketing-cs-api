const express = require('express');
const { body } = require('express-validator');
const { createTicket, getTickets, getTicketsByID } = require('../../controllers/ticket');
const validatePayload = require('../../middleware/express-validator');

const ticketsRouter = express.Router();

ticketsRouter.get('/', getTickets);
ticketsRouter.get('/:id', getTicketsByID);

ticketsRouter.post(
  '/',
  [
    body('operator').notEmpty().isString().withMessage('Required and value must be a string'),
    body('customer').notEmpty().isString().withMessage('Required and value must be a string'),
    body('description').optional().isString(),
    body('status').notEmpty()
      .isIn(['OPEN', 'CLOSED', 'SUBMITTED', 'ON PROGRESS'])
      .withMessage('Invalid status value. Must be one of: OPEN, CLOSED, SUBMITTED, ON PROGRESS.'),
  ],
  validatePayload,
  createTicket,
);

module.exports = ticketsRouter;
