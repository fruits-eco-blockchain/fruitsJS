"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_base64_1 = require("js-base64");
exports.convertBase64StringToString = (b64) => {
    return js_base64_1.Base64.decode(b64);
};
//# sourceMappingURL=convertBase64StringToString.js.map