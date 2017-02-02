var express = require('express');
var path = require('path');
var app = express();

// Load static assets file
app.use(express.static('assets'));

// View engine
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// Routing
app.get('/', function (req, res) {
  res.render('home');
})

app.get('/view1', function (req, res) {
  res.render('view1');
})

app.get('/view2', function (req, res) {
  res.render('view2');
})

app.get('/view3', function (req, res) {
  res.render('view3');
})

app.get('/view4', function (req, res) {
  res.render('view4');
})

app.get('/view5', function (req, res) {
  res.render('view5');
})

app.get('/view6', function (req, res) {
  res.render('view6');
})

// Start service
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})