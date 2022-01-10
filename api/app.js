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

let authRouter = require("./routes/auth");
let indexRouter = require("./routes/index");
let infoRouter = require("./routes/info");
let playlistsRouter = require("./routes/playlists");

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* Set Cookie Settings */
app.use(
    session({
        name: 'session',
        secret: 'secretKeyWooo',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    })
);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/info', infoRouter);
app.use('/playlists', playlistsRouter);

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

module.exports = app;
