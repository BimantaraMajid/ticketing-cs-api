const express = require('express');
const { body } = require('express-validator');
const validatePayload = require('../../middleware/express-validator');
const {
  getWorkOrder,
  createWorkOrder,
  getWorkOrderByID,
  sendNotification,
  acceptedWO,
  doneWO,
} = require('../../controllers/work-order');

const workOrdersRouter = express.Router();

workOrdersRouter.get('/', getWorkOrder);
workOrdersRouter.get('/:id', getWorkOrderByID);

workOrdersRouter.post(
  '/',
  [
    body('ticket_number').notEmpty().isString().withMessage('Required and value must be a string'),
    body('technician_name').notEmpty().isString().withMessage('Required and value must be a string'),
    body('type')
      .notEmpty()
      .isIn(['INTERNAL', 'EXTERNAL'])
      .withMessage('Invalid status value. Must be one of: INTERNAL , EXTERNAL'),
    body('description').isString().optional(),
    body('status').notEmpty()
      .isIn(['OPEN', 'CLOSED', 'SUBMITTED', 'ON PROGRESS'])
      .withMessage('Invalid status value. Must be one of: OPEN, CLOSED, SUBMITTED, ON PROGRESS.'),
    body('notification_type')
      .notEmpty()
      .isIn(['PHONE', 'EMAIL'])
      .withMessage('Invalid status value. Must be one of: PHONE , EMAIL'),
    body('email').notEmpty().isString().withMessage('Required and value must be a string'),
    body('phone').notEmpty().isString().withMessage('Required and value must be a string'),
  ],
  validatePayload,
  createWorkOrder,
);

workOrdersRouter.post('/:id/send/notification', sendNotification);
workOrdersRouter.post('/:id/accept-wo', acceptedWO);
workOrdersRouter.post('/:id/done', doneWO);

module.exports = workOrdersRouter;
