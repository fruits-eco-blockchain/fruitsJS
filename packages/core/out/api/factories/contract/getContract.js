"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContract = (service) => (id) => service.query('getAT', {
    at: id,
});
//# sourceMappingURL=getContract.js.map