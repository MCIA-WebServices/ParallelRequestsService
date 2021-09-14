const { appEnv } = require('config/env');
const apiRes = require('helpers/response');

function logErrorProduction (error) {
    console.error('Error   :: ' + error.name + ' - ' + error.code + ' - ' + error.message);
}

function logErrorDevelopment (error) {
    console.error(error);
}

function logErrorMiddleware (error, _req, _res, next) {
    if (appEnv === 'prod') logErrorProduction(error);
    if (appEnv === 'dev') logErrorDevelopment(error);
    next(error);
}
   
function returnError (error, _req, res, next) {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.httpCode || 500).send(apiRes.error(error.message, error.name, error.code, error.info));
}
   
module.exports = {
    logErrorMiddleware,
    returnError
};