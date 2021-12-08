"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPeers = (service) => (active = true) => service.query('getPeers', {
    active,
});
//# sourceMappingURL=getPeers.js.map