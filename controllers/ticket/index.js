const {
  httpSuccess,
  httpInternalServerError,
  httpCreated,
  httpUnprocessableEntity,
} = require('../../Utils/http-response');
const db = require('../../models');

/** @type {import('express').Router} */
const getTickets = async (req, res) => {
  try {
    const tickets = await db.tickets.findAndCountAll();
    return httpSuccess(res, tickets);
  } catch (error) {
    return httpInternalServerError(res);
  }
};

const getTicketsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await db.tickets.findByPk(id);
    return httpSuccess(res, ticket);
  } catch (error) {
    return httpInternalServerError(res);
  }
};

const createTicket = async (req, res) => {
  try {
    const {
      operator,
      customer,
      description,
      status,
    } = req.body;

    const ticket = await db.tickets.create({
      operator,
      customer,
      description,
      status,
    });

    return httpCreated(res, ticket);
  } catch (error) {
    return httpInternalServerError(res);
  }
};

const doneTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await db.tickets.findByPk(id);
    if (!ticket) return httpUnprocessableEntity(res, 'work order not found, please provide a valid work order id');

    ticket.status = 'DONE';
    ticket.save();

    return httpSuccess(res, ticket);
  } catch (error) {
    return httpInternalServerError(res);
  }
};

module.exports = {
  getTickets,
  getTicketsByID,
  createTicket,
  doneTicket,
};
