var express = require('express');
var router = express.Router();
const cityRouter = require('./cityRoutes')
/* GET home page. */
//req = request, peticion del cliente
//res = response, mensaje que envia el servidor
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Cities'});
});

router.use('/city', cityRouter)

module.exports = router;