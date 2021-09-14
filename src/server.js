const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const asyncHandler = require('express-async-handler');
const helmet = require('helmet');

require('app-module-path').addPath(__dirname);

const { appEnv, parallelEP } = require('config/env');

const { logErrorMiddleware, returnError } = require('errors/management');

const auth = require('middlewares/auth.middleware');

const parallelRouter = require('routes/parallel.routes');

const app = express();

app.use(logger(appEnv));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(helmet());
app.disable('x-powered-by');

app.use(parallelEP, asyncHandler(auth.authenticate), asyncHandler(parallelRouter));

app.use(logErrorMiddleware);
app.use(returnError);


module.exports = app;