var express = require('express');
var router = express.Router();
var homepage = require('../views/homepage.js');
var userpage = require('../views/userpage.js');
var test = require('../views/test.js');
var result = require('../views/result.js');
var prob = require('../views/prob.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var html = homepage.HTML();
  res.send(html);
});

router.get('/prob', function(req, res, next) {
  var html = prob.HTML();
  res.send(html);
});


router.get('/:name', function(req, res, next) {
  var params = req.params;
  var name = params.name;
  var html = userpage.HTML(name);
  res.send(html);
});



router.get('/:name/test/:number', function(req, res, next) {
  var params = req.params;
  var name = params.name;
  var number = Number(params.number);
  var html = test.HTML(number+1, name);
  res.send(html);
});

router.get('/:name/result', function(req, res, next) {
  var params = req.params;
  var name = params.name;
  var html = result.HTML(name);
  res.send(html);
});

module.exports = router;