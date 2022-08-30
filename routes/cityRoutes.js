const express = require('express');
const router = express.Router();

//const cityController = require('../controllers/cityController') --> aca me traigo todo el objeto/controlador
const {create, read} = require('../controllers/cityController') // aca me traigo una propiedad/metodo del objeto/controlador


router.post('/', create)
router.get('/:id', read)

module.exports = router;