"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpAdapterAxios_1 = require("./httpAdapterAxios");
class HttpClientFactory {
    static createHttpClient(baseUrl, options) {
        return new httpAdapterAxios_1.HttpAdapterAxios(baseUrl, options);
    }
}
exports.HttpClientFactory = HttpClientFactory;
//# sourceMappingURL=httpClientFactory.js.map