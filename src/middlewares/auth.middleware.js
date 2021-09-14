
const { apikey } = require('config/env');

const ApiError = require('errors/api');

const auth = {

    authenticate: async (req, res, next) => {

        if (!req.headers.apikey)
        {
            throw new ApiError({ httpCode: '403', code: 1, name: 'AuthKeyNotProvided'});
        }
        if (req.headers.apikey == apikey)
        {
            return next();
        }
        throw new ApiError({ httpCode: '403', code: 1, name: 'NotValidApiKey'});
    }
};

module.exports = auth;