const express = require('express');
const router = express.Router();
const cityRouter = require('./cities')
const authRouter = require('/auth')
/* GET home page. */
//req = request, peticion del cliente
//res = response, mensaje que envia el servidor
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Cities'});
});

//router.metodo('ruta', controlador)
router.use('/cities', cityRouter)
router.use('/auth', authRouter)

module.exports = router;