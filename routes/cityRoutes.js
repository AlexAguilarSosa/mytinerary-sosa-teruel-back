const express = require('express');
const router = express.Router();

//const cityController = require('../controllers/cityController') --> aca me traigo todo el objeto/controlador
const {create} = require('../controllers/cityController') // aca me traigo una propiedad/metodo del objeto/controlador


router.post('/', create)

module.exports = router;
