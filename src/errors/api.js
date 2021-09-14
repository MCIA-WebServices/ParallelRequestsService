class ApiError extends Error {
    constructor ({ httpCode, description, code, name, info, hiddenInfo }) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.httpCode = httpCode;
        this.code = code;
        this.info = info;
        this.hiddenInfo = hiddenInfo;
        Error.captureStackTrace(this);
    }
}
   
module.exports = ApiError;