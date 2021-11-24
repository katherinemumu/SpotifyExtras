let createError = require('http-errors');
let express = require('express');
let path = require('path');
let session = require('cookie-session')
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require("cors");
let http = require("http");
let querystring = require("querystring");
let request = require("request");

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/userinfo');
let testAPIRouter = require("./routes/testAPI");
let loginRouter = require("./routes/login");

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth/login', loginRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

/* Set Cookie Settings */
app.use(
    session({
      name: 'session',
      secret: 'secretKeyWooo',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    })
);

module.exports = app;
