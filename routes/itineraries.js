const express = require('express');
const router = express.Router();

const {create, update, destroy} = require('../controllers/itineraryController')

router.post('/itineraries', create)
router.patch('/itineraries/:id', update)
router.delete('/itineraries/:id', destroy)


module.exports = router;