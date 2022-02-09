const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc  Get user tickets
// @route GET  /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');
  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    data: tickets,
  });
});

// @desc  Create new ticket
// @route POST /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');

  const newTicket = await Ticket.create({
    user: req.user.id,
    ...req.body,
  });

  res.status(201).json({
    success: true,
    data: newTicket,
  });
});

module.exports = {
  getTickets,
  createTicket,
};
