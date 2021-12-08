"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const httpResponse_1 = require("./httpResponse");
const httpError_1 = require("./httpError");
const DefaultAxiosOptions = {};
class HttpAdapterAxios {
    constructor(baseURL, options = DefaultAxiosOptions) {
        this._clientImpl = axios_1.default.create(Object.assign({ baseURL }, options));
    }
    static mountError(url, error) {
        if (error.response) {
            return new httpError_1.HttpError(url, error.response.status, error.response.statusText, error.response.data);
        }
        else if (error.message) {
            return new httpError_1.HttpError(url, 0, 'Request failed', error.message);
        }
        else if (error.request) {
            return new httpError_1.HttpError(url, 0, 'Request failed', error.request);
        }
        return new httpError_1.HttpError(url, -1, 'Http Configuration error', null);
    }
    get(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, data } = yield this._clientImpl.get(url, options);
                return new httpResponse_1.HttpResponse(status, data);
            }
            catch (error) {
                throw HttpAdapterAxios.mountError(url, error);
            }
        });
    }
    post(url, payload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, data } = yield this._clientImpl.post(url, payload, options);
                return new httpResponse_1.HttpResponse(status, data);
            }
            catch (error) {
                throw HttpAdapterAxios.mountError(url, error);
            }
        });
    }
    put(url, payload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, data } = yield this._clientImpl.put(url, payload, options);
                return new httpResponse_1.HttpResponse(status, data);
            }
            catch (error) {
                throw HttpAdapterAxios.mountError(url, error);
            }
        });
    }
    delete(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, data } = yield this._clientImpl.delete(url, options);
                return new httpResponse_1.HttpResponse(status, data);
            }
            catch (error) {
                throw HttpAdapterAxios.mountError(url, error);
            }
        });
    }
}
exports.HttpAdapterAxios = HttpAdapterAxios;
//# sourceMappingURL=httpAdapterAxios.js.map