const express = require('express');
const router = express.Router();

//const cityController = require('../controllers/cityController') --> aca me traigo todo el objeto/controlador
const {create, read, update, destroy, getAll, filter} = require('../controllers/cityController') // aca me traigo una propiedad/metodo del objeto/controlador


//router.metodo('ruta', controlador)

router.post('/', create)
router.get('/:id', read)
router.patch('/:id', update)
router.delete('/:id', destroy)
router.get('/', filter)
router.get('/', getAll)


module.exports = router;