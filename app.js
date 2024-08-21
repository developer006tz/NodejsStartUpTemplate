const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const logger = require('morgan');

const apiRouter = require('./routes/api');
const authRouter = require('./routes/api/auth');
const { authenticateUser } = require('./middleware/auth');
const webRouter = require('./routes/web');
const cors = require('./middleware/cors');
const noCache = require('./middleware/control-cache');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(cors);
app.use(noCache);

app.use('/api/auth', authRouter);
app.use('/api', authenticateUser, apiRouter);
app.use('/', webRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({ message: err.message})
});

module.exports = app;