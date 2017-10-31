var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'item'
});

/* GET home page. */
router.get('/list', function(req, res, next) {
  connection.query('SELECT id,name FROM baobao', function(err, rows, fields) {
    res.header("Access-Control-Allow-Origin", "*")
    res.send(rows)

  });
});

router.post('/detail', function(req, res, next) {
  var id=req.body.abc
  connection.query('SELECT * FROM baobao WHERE id='
  +id+'', function(err, rows, fields) {
    res.header("Access-Control-Allow-Origin", "*")

    res.send(rows)
  });
});
router.post('/delete', function(req, res, next) {
  var id=req.body.id;
  connection.query('DELETE FROM baobao WHERE id='+id+'', function(err, rows, fields) {
    res.header("Access-Control-Allow-Origin", "*")
    res.send('É¾³ý³É¹¦£¡')

  });
});

module.exports = router;