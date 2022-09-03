const express = require('express');
const router = express.Router();

const {create} = require('../controllers/authController')

router.post('/auth', create)

module.exports = router;