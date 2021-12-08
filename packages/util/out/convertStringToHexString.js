"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertStringToByteArray_1 = require("./convertStringToByteArray");
const convertByteArrayToHexString_1 = require("./convertByteArrayToHexString");
exports.convertStringToHexString = (str) => {
    return convertByteArrayToHexString_1.convertByteArrayToHexString(convertStringToByteArray_1.convertStringToByteArray(str));
};
//# sourceMappingURL=convertStringToHexString.js.map