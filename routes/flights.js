const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights/new
// controller action is new so '/new'
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
router.post('/:id/destinations', flightsCtrl.createDestination);
router.post('/:id', flightsCtrl.delete);

module.exports = router;