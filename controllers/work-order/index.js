const { Op } = require('sequelize');
const {
  httpSuccess,
  httpInternalServerError,
  httpCreated,
  httpUnprocessableEntity,
} = require('../../Utils/http-response');
const db = require('../../models');

/** @type {import('express').Router} */
const getWorkOrder = async (req, res) => {
  try {
    const workOrders = await db.workOrder.findAndCountAll();
    return httpSuccess(res, workOrders);
  } catch (error) {
    console.log(error);
    return httpInternalServerError(res);
  }
};

/** @type {import('express').Router} */
const getWorkOrderByID = async (req, res) => {
  try {
    const { id } = req.params;
    const workOrder = await db.workOrder.findByPk(id);
    return httpSuccess(res, workOrder);
  } catch (error) {
    return httpInternalServerError(res);
  }
};

/** @type {import('express').Router} */
const createWorkOrder = async (req, res) => {
  try {
    const ticket = await db.tickets.findOne({
      where: {
        ticket_number: {
          [Op.eq]: req.body.ticket_number,
        },
      },
    });

    if (!ticket?.id) return httpUnprocessableEntity(res, 'ticket not found, please provide a valid ticket number');

    const workOrder = await db.workOrder.create(req.body);

    ticket.status = 'SUBMITTED';
    await ticket.save();

    workOrder.setDataValue('ticket_status', ticket.status);
    return httpCreated(res, workOrder);
  } catch (error) {
    console.log(error);
    return httpInternalServerError(res);
  }
};

module.exports = {
  getWorkOrder,
  getWorkOrderByID,
  createWorkOrder,
  // updateWorkOrder,
};
