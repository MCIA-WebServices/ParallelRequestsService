
let apiRes = {

    success: ( _info, data = {}) => {
        return data;
    },

    error: ( info, name, code, data) => {
        return { success: false, error: name, code: code, info, data };
    }
};

module.exports = apiRes;