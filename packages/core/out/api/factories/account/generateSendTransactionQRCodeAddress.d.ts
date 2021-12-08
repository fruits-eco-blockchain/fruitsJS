import { ChainService } from '../../../service/chainService';
export declare const generateSendTransactionQRCodeAddress: (service: ChainService) => (receiverId: string, amountNQT?: number, feeSuggestionType?: string, feeNQT?: number, immutable?: boolean) => Promise<string>;
