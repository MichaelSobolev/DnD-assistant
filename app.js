/* eslint-disable no-console */

// ------------------------- //
// Connect dependencies
const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const CreateError = require('http-errors');

// ------------------------- //
// Connect routers
const indexRouter = require('./src/routes/index.router');
const userRouter = require('./src/routes/user.router');
const ruleRouter = require('./src/routes/rules.router');
const sheetRouter = require('./src/routes/sheet.router');


// ------------------------- //
// Start a server
const app = express();
const PORT = process.env.PORT || 3001;

// ------------------------- //
// Express setting
// HBS
app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));
// Cors
app.use(cors());
// morgan ( FIXME выпилить на релизе)
app.use(morgan('dev'));
// Specify static folder
app.use(express.static(path.join(process.env.PWD, 'public')));
// fileUpload module
app.use(fileUpload());
// Query encoders
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------------------------- //
// Session settings
const sessionConfig = {
  store: new FileStore(),
  key: 'auth', // Cookie name
  secret: 'gchjtghasdjkl;bjkll', // key
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { expires: 180 * 24 * 60 * 60e3 },
};
app.use(session(sessionConfig));

// ------------------------- //
// Session middlware for authorization
app.use(async (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId;
    res.locals.name = req.session.userName;
  }
  next();
});


// ------------------------- //
// Routing
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/rules', ruleRouter);
app.use('/sheet', sheetRouter);


// ------------------------- //
// Error page middleware
app.use((req, res, next) => {
  const error = new CreateError(404, 'Запрашиваемой страницы не существует на сервере.');
  console.log(error);
  next(error);
});

app.use((err, req, res, next) => {
  const appMode = req.app.get('env');
  let error;

  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  res.locals.message = err.message;
  res.locals.error = error;

  res.status(err.status || 500);

  res.render('error');
});

// ------------------------- //

app.listen(PORT, () => console.log('Server is running on port', PORT));
