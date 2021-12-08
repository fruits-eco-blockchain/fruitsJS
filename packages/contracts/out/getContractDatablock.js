"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("@fruitsjs/util");
function getContractDatablock(contract, position, length = 16) {
    const startIndex = position * 16;
    const requiredSize = startIndex + length;
    if (requiredSize > contract.machineData.length) {
        throw new Error(`Insufficient length for variable at position: ${startIndex} (and given length: ${length})`);
    }
    if (requiredSize % 2 !== 0) {
        throw new Error(`Invalid position: ${startIndex} (or given length: ${length}) - must be at least multiple of 2`);
    }
    return util_1.convertHexEndianess(contract.machineData.substr(startIndex, length));
}
exports.getContractDatablock = getContractDatablock;
//# sourceMappingURL=getContractDatablock.js.map