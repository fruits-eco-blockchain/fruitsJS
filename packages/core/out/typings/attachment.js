"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attachment {
    constructor(type) {
        this.type = type;
    }
}
exports.Attachment = Attachment;
class AttachmentMessage extends Attachment {
    constructor(data = {}) {
        super('message');
        this.messageIsText = data.messageIsText || false;
        this.message = data.message || undefined;
    }
}
exports.AttachmentMessage = AttachmentMessage;
class AttachmentEncryptedMessage extends Attachment {
    constructor(data = {}) {
        super('encrypted_message');
        this.data = data.data || undefined;
        this.nonce = data.nonce || undefined;
        this.isText = data.isText || false;
    }
}
exports.AttachmentEncryptedMessage = AttachmentEncryptedMessage;
//# sourceMappingURL=attachment.js.map