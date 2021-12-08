export interface PublishContractArgs {
    activationAmountPlanck: string;
    codeHex: string;
    deadline?: number;
    description: string;
    isCIP20Active: boolean;
    name: string;
    senderPublicKey: string;
    senderPrivateKey: string;
}
