"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_base64_1 = require("js-base64");
exports.convertStringToBase64String = (str, isURICompatible = true) => {
    return isURICompatible ? js_base64_1.Base64.encodeURI(str) : js_base64_1.Base64.encode(str);
};
//# sourceMappingURL=convertStringToBase64String.js.map