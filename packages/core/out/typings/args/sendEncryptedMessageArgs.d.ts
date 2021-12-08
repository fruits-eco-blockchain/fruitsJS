import { Keys } from '@fruitsjs/crypto';
export interface SendEncryptedMessageArgs {
    message: string;
    feePlanck: string;
    recipientId: string;
    recipientPublicKey: string;
    senderKeys: Keys;
    deadline?: number;
}
