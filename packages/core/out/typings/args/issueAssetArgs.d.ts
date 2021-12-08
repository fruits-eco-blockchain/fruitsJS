import { Attachment } from '../attachment';
export interface IssueAssetArgs {
    amountPlanck: string;
    decimals: number;
    description: string;
    name: string;
    quantity: string | number;
    senderPublicKey: string;
    senderPrivateKey: string;
    attachment?: Attachment;
    deadline?: number;
    encryptToSelfMessageData?: string;
    encryptToSelfMessageNonce?: string;
    messageToEncryptToSelfIsText?: boolean;
    referenceTransactionHash: string;
    icon: string;
}
