"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("@fruitsjs/util");
const countCodePages_1 = require("./countCodePages");
function calculateMinimumCreationFee(hexCode, isCIP20active = false) {
    const DataPages = 1;
    const baseFee = util_1.Amount.fromPlanck((isCIP20active ? util_1.FeeQuantPlanck * 10 : util_1.OneFruitPlanck).toString(10));
    return baseFee.multiply(2 + countCodePages_1.countCodePages(hexCode) + DataPages);
}
exports.calculateMinimumCreationFee = calculateMinimumCreationFee;
//# sourceMappingURL=calculateMinimumCreationFee.js.map