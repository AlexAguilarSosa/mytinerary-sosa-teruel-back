var express = require('express');
var router = express.Router();

/* GET home page. */
//req = request, peticion del cliente
//res = response, mensaje que envia el servidor
router.get('/', function(req, res, next) {
  res.json([]);
});

router.get('/:id', function(req, res, next) {
  res.json({
    id : req.params.id
  });
});

module.exports = router;
