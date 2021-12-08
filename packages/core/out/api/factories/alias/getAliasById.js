"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAliasById = (service) => (aliasId) => service.query('getAlias', {
    aliasId,
});
//# sourceMappingURL=getAliasById.js.map