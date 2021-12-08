import { Attachment } from '../attachment';
export interface CancelSubscriptionArgs {
    subscriptionId: string;
    feePlanck: string;
    senderPublicKey: string;
    senderPrivateKey: string;
    attachment?: Attachment;
    deadline?: number;
}
