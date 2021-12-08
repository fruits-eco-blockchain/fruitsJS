"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("@fruitsjs/util");
const getContractDatablock_1 = require("./getContractDatablock");
const countCodePages_1 = require("./countCodePages");
class ContractDataView {
    constructor(_contract) {
        this._contract = _contract;
    }
    getContract() {
        return this._contract;
    }
    countCodePages() {
        return countCodePages_1.countCodePages(this._contract.machineCode);
    }
    getVariableAsString(index) {
        const hexData = this.getHexDataAt(index, ContractDataView.VariableLength);
        return util_1.convertHexStringToString(hexData.replace(/00/g, ''));
    }
    getDataBlocksAsString(index, count) {
        const hexData = this.getHexDataAt(index, count * ContractDataView.VariableLength);
        return util_1.convertHexStringToString(hexData.replace(/00/g, ''));
    }
    getVariableAsDecimal(index) {
        return util_1.convertHexStringToDecString(this.getVariable(index));
    }
    getVariable(index) {
        return this.getHexDataAt(index, ContractDataView.VariableLength);
    }
    getHexDataAt(index, length) {
        const l = length ? length : this._contract.machineData.length - ContractDataView.VariableLength * index;
        return getContractDatablock_1.getContractDatablock(this._contract, index, l);
    }
}
exports.ContractDataView = ContractDataView;
ContractDataView.VariableLength = 16;
//# sourceMappingURL=ContractDataView.js.map