var cors = require('cors');
var express = require('express');
var path = require('path');

var index = require('./routes/index');
var news = require('./routes/news');
var passport = require('passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../pnf-client/build/'));
app.set('view engine', 'jade');

app.use('/static', express.static(path.join(__dirname, '../pnf-client/build/static/')));

// TODO: remove this after development is done.
app.use(cors());

// load passport strategies
 app.use(passport.initialize());
 var localSignupStrategy = require('./passport/signup_passport');
 var localLoginStrategy = require('./passport/login_passport');
 passport.use('local-signup', localSignupStrategy);
 passport.use('local-login', localLoginStrategy)

app.use('/', index);
app.use('/news', news);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send('404 Not Found');
});

module.exports = app;