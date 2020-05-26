const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  delete: deleteFlight,
};

function deleteFlight(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log(`deleteFlight: ${flight}, ${err}`);
    flight.remove();
    flight.save(function (err) {
      res.redirect("/flights");
    });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render("flights/show", {
        flight,
        tickets,
      });
    });
  });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    console.log(`=====================>>>>>>>><<<<<<<< error line 35: ${err}`);
    if (flights) {
      console.log(`index flights: ${flights}, ${err}`);
      res.render("flights/index", { flights });
    } else {
      res.render("flights/index");
    }
  });
}

function create(req, res) {
  // airline, flight number, and departure date
  //   for (let key in req.body) {
  //     console.log(`req.body: ${req.body} and key: ${key}`);
  //     if (req.body[key] === "") delete req.body[key];
  //   }
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    res.redirect(`/flights/${flight._id}`);
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}
