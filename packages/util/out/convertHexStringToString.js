"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertByteArrayToString_1 = require("./convertByteArrayToString");
const convertHexStringToByteArray_1 = require("./convertHexStringToByteArray");
exports.convertHexStringToString = (hex) => {
    return convertByteArrayToString_1.convertByteArrayToString(convertHexStringToByteArray_1.convertHexStringToByteArray(hex));
};
//# sourceMappingURL=convertHexStringToString.js.map