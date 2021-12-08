"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GenesisBlockTime = Date.UTC(2021, 8, 15, 0, 0, 0, 0) / 1000;
class ChainTime {
    constructor(blockTimestamp) {
        this._chainTimestamp = blockTimestamp;
    }
    static fromChainTimestamp(timestamp) {
        return new ChainTime(timestamp);
    }
    static fromDate(date) {
        const blockTime = new ChainTime(0);
        blockTime.setDate(date);
        return blockTime;
    }
    getChainTimestamp() {
        return this._chainTimestamp;
    }
    setChainTimestamp(blockTimestamp) {
        this._chainTimestamp = blockTimestamp;
    }
    getEpoch() {
        return (GenesisBlockTime + this._chainTimestamp) * 1000;
    }
    getDate() {
        return new Date(this.getEpoch());
    }
    setDate(date) {
        this._chainTimestamp = Math.round(date.getTime() / 1000) - GenesisBlockTime;
    }
    equals(chainTime) {
        return this._chainTimestamp === chainTime._chainTimestamp;
    }
    before(chainTime) {
        return this._chainTimestamp < chainTime._chainTimestamp;
    }
    after(chainTime) {
        return this._chainTimestamp > chainTime._chainTimestamp;
    }
}
exports.ChainTime = ChainTime;
//# sourceMappingURL=chainTime.js.map