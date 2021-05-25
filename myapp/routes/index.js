var express = require('express');
var router = express.Router();
var fs = require('fs');
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



router.get('/:name/test/', function(req, res, next) {
  var params = req.params;
  var name = params.name;
  //var data = fs.readFileSync('../public/data/question1.txt', 'utf8');
  //console.log(data);
  var html = test.HTML(name);
  res.send(html);  
});

router.get('/:name/result', function(req, res, next) {
  var params = req.params;
  var name = params.name;
  var html = result.HTML(name);
  res.send(html);
});

module.exports = router;