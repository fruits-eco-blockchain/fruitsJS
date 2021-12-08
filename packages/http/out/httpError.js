"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError {
    constructor(requestUrl, status, message, data) {
        this.requestUrl = requestUrl;
        this.status = status;
        this.message = message;
        this.data = data;
        this.timestamp = Date.now();
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=httpError.js.map