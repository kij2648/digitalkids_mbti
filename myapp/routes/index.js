var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql')
var db = mysql.createConnection({
  host:'digitalkids.ctldyevd7fsr.ap-northeast-2.rds.amazonaws.com',
  user:'digitalkids',
  password:'lotte89!',
  port:3306,
  database: 'mbti',
})
db.connect();

var homepage = require('../views/homepage.js');
var userpage = require('../views/userpage.js');
var test = require('../views/test.js');
var result = require('../views/result.js');
var friend = require('../views/friend.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  var html = homepage.HTML();
  res.send(html);
});

router.post('/create', function(req, res, next) {
  var post = req.body;
  var name = post.name;
  db.query('SELECT * FROM my_page', function(error, mypage){
    newNumber = mypage.length + 1;
    sqlquery = "INSERT INTO my_page (mp_id, mp_name) VALUES ("+newNumber +", '"+name+"')";
    redirection = '/'+newNumber+'/'
    db.query(sqlquery, function(error, mypage){
      res.redirect(redirection);
    })
  });
});


router.get('/:id/', function(req, res, next) {
  var params = req.params;
  var id = params.id;
  sqlquery = 'SELECT * FROM my_page WHERE mp_id=' + id;
  db.query(sqlquery, function(error, mp){
    var name = mp[0].mp_name;
    var html = userpage.HTML(name);
    res.send(html);
  });
});

router.get('/:id/friend', function(req, res, next) {
  var params = req.params;
  var id = params.id;
  sqlquery = 'SELECT * FROM my_page WHERE mp_id=' + id;
  db.query(sqlquery, function(error, mp){
    var name = mp[0].mp_name;
    var html = friend.HTML(name);
    res.send(html);
  });
});

router.post('/:id/create', function(req, res, next) {
  var post = req.body;
  var name = post.name;
  var redirection = './'+name+'/test'
  res.redirect(redirection);
});

router.get('/:id/:fid/test/', function(req, res, next) {
  var params = req.params;
  var id = params.id;
  var fname = params.fid;
  sqlquery = 'SELECT * FROM my_page WHERE mp_id=' + id;
  db.query(sqlquery, function(error, mp){
    var name = mp[0].mp_name;
    var html = test.HTML(name, fname);
    res.send(html);
  });
});

router.post('/:id/fcreate', function(req, res, next) {
  var params = req.params;
  var id = params.id;
  var post = req.body;
  var name = post.name;
  var redirection = './result/mbti'
  db.query('SELECT * FROM friends_test_page', function(error, fpage){
    newNumber = fpage.length + 1;
    sqlquery = "INSERT INTO friends_test_page (ftp_id, ftp_name, mp_id, mbti_id) VALUES ("+ newNumber +", '"+ name +"' ,"+ id +" ,1)";
    db.query(sqlquery, function(error, mypage){
      res.redirect(redirection);
    })
  });
});

router.get('/:id/result/mbti', function(req, res, next) {
  var params = req.params;
  var id = params.id;
  sqlquery = 'SELECT * FROM my_page WHERE mp_id=' + id;
  db.query(sqlquery, function(error, mp){
    var name = mp[0].mp_name;
    var html = result.HTML(name);
    res.send(html);
  });
});

module.exports = router;