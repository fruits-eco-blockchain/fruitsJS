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
const http_1 = require("@fruitsjs/http");
const util_1 = require("@fruitsjs/util");
const constants_1 = require("../constants");
class SettingsImpl {
    constructor(settings) {
        this.apiRootUrl = settings.apiRootUrl || constants_1.DefaultApiEndpoint;
        this.nodeHost = settings.nodeHost;
        this.httpClient = settings.httpClient || http_1.HttpClientFactory.createHttpClient(settings.nodeHost, settings.httpClientOptions);
        this.reliableNodeHosts = settings.reliableNodeHosts || [];
    }
}
class ChainService {
    constructor(settings) {
        this._relPath = constants_1.DefaultApiEndpoint;
        this.settings = new SettingsImpl(settings);
        const { apiRootUrl } = this.settings;
        if (apiRootUrl) {
            this._relPath = apiRootUrl.endsWith('/') ? apiRootUrl.substr(0, apiRootUrl.length - 1) : apiRootUrl;
        }
    }
    static throwAsHttpError(url, apiError) {
        const errorCode = apiError.errorCode && ` (Code: ${apiError.errorCode})` || '';
        throw new http_1.HttpError(url, 400, `${apiError.errorDescription || apiError.error}${errorCode}`, apiError);
    }
    toApiEndpoint(method, data = {}) {
        const request = `${this._relPath}?requestType=${method}`;
        const params = Object.keys(data)
            .filter(k => data[k] !== undefined)
            .map(k => `${k}=${encodeURIComponent(data[k])}`)
            .join('&');
        return params ? `${request}&${params}` : request;
    }
    query(method, args = {}, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = this.toApiEndpoint(method, args);
            const { response } = yield this.faultTolerantRequest(() => this.settings.httpClient.get(endpoint, options));
            if (response.errorCode || response.error || response.errorDescription) {
                ChainService.throwAsHttpError(endpoint, response);
            }
            return response;
        });
    }
    send(method, args = {}, body = {}, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = this.toApiEndpoint(method, args);
            const { response } = yield this.faultTolerantRequest(() => this.settings.httpClient.post(endpoint, body, options));
            if (response.errorCode || response.error || response.errorDescription) {
                ChainService.throwAsHttpError(endpoint, response);
            }
            return response;
        });
    }
    sendBodyString(method, args = {}, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = this.toApiEndpoint(method, args);
            const { response } = yield this.faultTolerantRequest(() => this.settings.httpClient.post(endpoint, body, options));
            if (response.errorCode || response.error || response.errorDescription) {
                ChainService.throwAsHttpError(endpoint, response);
            }
            return response;
        });
    }
    faultTolerantRequest(requestFn) {
        return __awaiter(this, void 0, void 0, function* () {
            const onFailureAsync = (e, retrialCount) => __awaiter(this, void 0, void 0, function* () {
                const shouldRetry = this.settings.reliableNodeHosts.length && retrialCount < this.settings.reliableNodeHosts.length;
                if (shouldRetry) {
                    yield this.selectBestHost(true);
                }
                return shouldRetry;
            });
            return yield util_1.asyncRetry({
                asyncFn: requestFn,
                onFailureAsync
            });
        });
    }
    selectBestHost(reconfigure = false, checkMethod = 'getBlockchainStatus') {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.settings.reliableNodeHosts.length) {
                throw new Error('No reliableNodeHosts configured');
            }
            const checkEndpoint = this.toApiEndpoint(checkMethod);
            let timeout = null;
            const requests = this.settings.reliableNodeHosts.map(host => {
                const absoluteUrl = `${host}${checkEndpoint}`;
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield this.settings.httpClient.get(absoluteUrl);
                        resolve(host);
                    }
                    catch (e) {
                        if (timeout) {
                            clearTimeout(timeout);
                        }
                        timeout = setTimeout(() => {
                            reject(null);
                        }, 10 * 1000);
                    }
                }));
            });
            const bestHost = yield Promise.race(requests);
            clearTimeout(timeout);
            if (!bestHost) {
                throw new Error('All reliableNodeHosts failed');
            }
            if (reconfigure) {
                this.settings = new SettingsImpl(Object.assign(Object.assign({}, this.settings), { httpClient: http_1.HttpClientFactory.createHttpClient(bestHost, this.settings.httpClientOptions), nodeHost: bestHost }));
            }
            return bestHost;
        });
    }
}
exports.ChainService = ChainService;
//# sourceMappingURL=chainService.js.map