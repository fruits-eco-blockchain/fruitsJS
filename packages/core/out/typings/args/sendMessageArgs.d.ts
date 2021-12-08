export interface SendMessageArgs {
    message: string;
    messageIsText?: boolean;
    feePlanck: string;
    recipientId: string;
    recipientPublicKey?: string;
    senderPublicKey: string;
    senderPrivateKey: string;
    deadline?: number;
}
