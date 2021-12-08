import { DefaultSendArgs } from './defaultSendArgs';
export interface TransferAssetArgs extends DefaultSendArgs {
    asset: string;
    quantity: string | number;
    recipientId: string;
    recipientPublicKey?: string;
}
