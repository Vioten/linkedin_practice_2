var express = require('express'),
app = express(),
path = require('path');
bodyParser = require('body-parser'),
logger = require('morgan'),
methodOverride = require('method-override');

require('locus');

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes

var main = require('./routes/main.js');
var auth = require('./routes/auth.js');

app.use('/', main);
app.use('/auth', auth);

// start server
app.listen('9001',() => {
  console.log('The Server is OVER 9000!!!');
});