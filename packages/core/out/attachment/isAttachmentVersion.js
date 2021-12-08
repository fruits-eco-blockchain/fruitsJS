"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAttachmentVersion(transaction, versionIdentifier) {
    const { attachment } = transaction;
    return attachment && (attachment[`version.${versionIdentifier}`] !== undefined);
}
exports.isAttachmentVersion = isAttachmentVersion;
//# sourceMappingURL=isAttachmentVersion.js.map