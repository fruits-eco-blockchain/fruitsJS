"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockId = (service) => (height) => service.query('getBlockId', {
    height,
});
//# sourceMappingURL=getBlockId.js.map