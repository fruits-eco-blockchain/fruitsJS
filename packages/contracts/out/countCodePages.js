"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function countCodePages(hexCode) {
    return Math.ceil((hexCode.length / 2) / constants_1.CodePageSize);
}
exports.countCodePages = countCodePages;
//# sourceMappingURL=countCodePages.js.map