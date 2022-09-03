const express = require('express');
const router = express.Router();

const {create} = require('../controllers/itineraryController')

router.post('/itineraries', create)

module.exports = router;