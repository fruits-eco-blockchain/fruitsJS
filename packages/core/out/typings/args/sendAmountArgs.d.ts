import { DefaultSendArgs } from './defaultSendArgs';
export interface SendAmountArgs extends DefaultSendArgs {
    amountPlanck: string;
    recipientId: string;
    recipientPublicKey?: string;
}
