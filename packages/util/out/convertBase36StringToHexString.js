"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
exports.convertBase36StringToHexString = (b36) => {
    return new bignumber_js_1.default(b36, 36).toString(16);
};
//# sourceMappingURL=convertBase36StringToHexString.js.map