const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function create(req, res) {
    const ticket = { ...req.body, flight: req.params.id };
    Ticket.create(ticket, function (err) {
        res.redirect(`/flights/${req.params.id}`)
    });
}

function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id });
}