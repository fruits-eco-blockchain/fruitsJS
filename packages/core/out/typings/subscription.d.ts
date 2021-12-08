export interface Subscription {
    readonly id: string;
    readonly sender: string;
    readonly senderRS: string;
    readonly recipient: string;
    readonly recipientRS: string;
    readonly amountNQT: string;
    readonly frequency: number;
    readonly timeNext: number;
    readonly requestProcessingTime: number;
}
