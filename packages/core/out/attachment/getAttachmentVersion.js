"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAttachmentVersion(transaction) {
    const { attachment } = transaction;
    if (!attachment) {
        return undefined;
    }
    const versionIdentifier = Object.keys(attachment).filter(k => k.startsWith('version'));
    if (versionIdentifier.length === 0) {
        return undefined;
    }
    const identifier = versionIdentifier[0];
    return identifier.substr(identifier.indexOf('.') + 1);
}
exports.getAttachmentVersion = getAttachmentVersion;
//# sourceMappingURL=getAttachmentVersion.js.map