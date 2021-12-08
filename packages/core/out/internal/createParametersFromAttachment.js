"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attachment_1 = require("../typings/attachment");
exports.createParametersFromAttachment = (attachment, params) => {
    if (attachment instanceof attachment_1.AttachmentEncryptedMessage) {
        const em = attachment;
        return Object.assign({ encryptedMessageData: em.data, encryptedMessageNonce: em.nonce, messageToEncryptIsText: String(em.isText) }, params);
    }
    if (attachment instanceof attachment_1.AttachmentMessage) {
        const m = attachment;
        return Object.assign({ message: m.message, messageIsText: String(m.messageIsText) }, params);
    }
    throw new Error(`Unknown attachment type: ${JSON.stringify(attachment)}`);
};
//# sourceMappingURL=createParametersFromAttachment.js.map