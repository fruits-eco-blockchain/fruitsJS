import { ChainService } from '../../../service/chainService';
export declare const generateSendTransactionQRCode: (service: ChainService) => (receiverId: string, amountNQT?: number, feeSuggestionType?: string, feeNQT?: number, immutable?: boolean) => Promise<ArrayBuffer>;
