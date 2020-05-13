const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    createDestination,
    delete: deleteFlight
};

function deleteFlight(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.remove();
        flight.save(function (err) {
            res.redirect('/flights');
        })
    })
}

function createDestination(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body);
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', {
                flight,
                tickets
            });
        });
    });
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}

function create(req, res) {
    // airline, flight number, and departure date
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${flight._id}`);
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}