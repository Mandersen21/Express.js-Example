var express = require('express');
var path = require('path');
var cons = require('consolidate');
var app = express();

// Load static assets file
app.use(express.static('assets'));

// View engine
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// Routing
app.get('/', function (req, res) {
  res.render('index');
})

app.get('/1', function (req, res) {
  res.render('view1');
})

app.get('/2', function (req, res) {
  res.render('view2');
})

app.get('/3', function (req, res) {
  res.render('view3');
})

// Start service
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})