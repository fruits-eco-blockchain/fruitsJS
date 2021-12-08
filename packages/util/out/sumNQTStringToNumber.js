"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertNQTStringToNumber_1 = require("./convertNQTStringToNumber");
function sumNQTStringToNumber(...nqts) {
    return nqts.reduce((sum, v) => sum + convertNQTStringToNumber_1.convertNQTStringToNumber(v), 0);
}
exports.sumNQTStringToNumber = sumNQTStringToNumber;
//# sourceMappingURL=sumNQTStringToNumber.js.map