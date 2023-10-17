var createError = require('http-errors');
var express = require('express');
var path = require('path');
const exphbs  = require('hbs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var channelsRouter= require('./routes/channels');
var aboutRouter = require('./routes/about')

var app = express();
require('./config/passport')
// Configura sesiones
app.use(session({
  secret: 'tu-secreto', // Cambia esto por una clave secreta real
  resave: true,
  saveUninitialized: true
}));

// Configura connect-flash
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

app.set('secretKey', 'dnNode');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/channels', channelsRouter);
app.use('/about', aboutRouter)

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, req.app.get('secretKey'), function (error, payload) {
      if (error) {
        return res.status(401).json({ message: error.message });
      } else {
        console.log(payload);
        next();
        return;
      }
    });
  } else {
    res.status(401).json({ message: 'Token must be provided' });
  }
}

app.verifyToken = verifyToken;

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;
