import { Attachment } from '../attachment';
export interface DefaultSendArgs {
    feePlanck: string;
    senderPublicKey: string;
    senderPrivateKey: string;
    attachment?: Attachment;
    deadline?: number;
}
