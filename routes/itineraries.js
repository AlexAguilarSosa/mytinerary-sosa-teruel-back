const express = require('express');
const router = express.Router();

const {create, update} = require('../controllers/itineraryController')

router.post('/itineraries', create)
router.patch('/itineraries/:id', update)


module.exports = router;