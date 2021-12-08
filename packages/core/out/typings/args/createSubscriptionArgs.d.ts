import { Attachment } from '../attachment';
export interface CreateSubscriptionArgs {
    amountPlanck: string;
    feePlanck: string;
    frequency: number;
    recipientId: string;
    recipientPublicKey?: string;
    senderPublicKey: string;
    senderPrivateKey: string;
    attachment?: Attachment;
    deadline?: number;
}
