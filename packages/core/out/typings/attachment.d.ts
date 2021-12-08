export declare class Attachment {
    type: string;
    constructor(type: string);
}
export declare class AttachmentMessage extends Attachment {
    messageIsText: boolean;
    message: string;
    constructor(data?: any);
}
export declare class AttachmentEncryptedMessage extends Attachment {
    data: string;
    nonce: string;
    isText: boolean;
    constructor(data?: any);
}
