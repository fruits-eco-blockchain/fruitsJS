"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpResponse_1 = require("./httpResponse");
const httpError_1 = require("./httpError");
class HttpMock {
    constructor() {
        this._replyFunctions = HttpMock.initialReplyFunctions();
        this.reset();
    }
    static initialReplyFunctions() {
        return {
            get: {},
            post: {},
            put: {},
            delete: {}
        };
    }
    createReplyFn(status, data) {
        return () => Promise.resolve(new httpResponse_1.HttpResponse(status, data));
    }
    createErrorFn(requestUrl, status, message, data = null) {
        return () => {
            throw new httpError_1.HttpError(requestUrl, status, message, data);
        };
    }
    reset() {
        this._replyFunctions = HttpMock.initialReplyFunctions();
    }
    registerResponse(method, url, status, data) {
        this._replyFunctions[method][url] = this.createReplyFn(status, data);
    }
    registerError(method, url, status, message, data) {
        this._replyFunctions[method][url] = this.createErrorFn(url, status, message, data);
    }
    get(url) {
        return this.request('get', url);
    }
    delete(url) {
        return this.request('delete', url);
    }
    post(url, payload) {
        return this.request('post', url);
    }
    put(url, payload) {
        return this.request('put', url);
    }
    request(method, url) {
        const replyFn = this._replyFunctions[method][url] || this._replyFunctions[method][HttpMock.ForAll];
        if (!replyFn) {
            throw new Error(`Could not find any mocked function for method ${method.toUpperCase()} url ${url}`);
        }
        return replyFn();
    }
}
HttpMock.ForAll = '__all';
class HttpMockBuilder {
    constructor() {
        this._httpMock = new HttpMock();
    }
    static create() {
        return new HttpMockBuilder();
    }
    onReply(method, status, data, url = HttpMock.ForAll) {
        this._httpMock.registerResponse(method, url, status, data);
        return this;
    }
    onThrowError(method, status, errorMessage, data, url = HttpMock.ForAll) {
        this._httpMock.registerError(method, url, status, errorMessage, data);
        return this;
    }
    onGetReply(status, data, url) {
        return this.onReply('get', status, data, url);
    }
    onGetThrowError(status, errorMessage, data = null, url = HttpMock.ForAll) {
        return this.onThrowError('get', status, errorMessage, data, url);
    }
    onPostReply(status, data, url) {
        return this.onReply('post', status, data, url);
    }
    onPostThrowError(status, errorMessage, data, url = HttpMock.ForAll) {
        return this.onThrowError('post', status, errorMessage, data, url);
    }
    onPutReply(status, data, url) {
        return this.onReply('put', status, data, url);
    }
    onPutThrowError(status, errorMessage, data, url = HttpMock.ForAll) {
        return this.onThrowError('put', status, errorMessage, data, url);
    }
    onDeleteReply(status, data, url) {
        return this.onReply('delete', status, data, url);
    }
    onDeleteThrowError(status, errorMessage, data, url = HttpMock.ForAll) {
        return this.onThrowError('delete', status, errorMessage, data, url);
    }
    build() {
        return this._httpMock;
    }
}
exports.HttpMockBuilder = HttpMockBuilder;
//# sourceMappingURL=httpMockBuilder.js.map