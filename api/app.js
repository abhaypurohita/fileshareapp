var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//custom config
var config = require('./config');
//db - mongo
var db = require('./database');

var index = require('./routes/index');
//include upload router
var upload = require('./routes/upload');
//include download router
var download = require('./routes/download');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//connect to db
const url = config.mongodb.protocol+config.mongodb.host+config.mongodb.port+config.mongodb.collection;
db.connect(url, function(err) {
  if(err) {
    //@todo - present custom view for error
    console.log('Unable to connect to mongodb');
    process.exit(1);
  }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', index);
//route to upload
app.use('/api/upload', upload);
//route to download
app.use('/api/download', download);
app.use('/api/download/:name', download);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
