import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
export declare const setAlias: (service: ChainService) => (aliasName: string, aliasURI: string, feeNQT: string, senderPublicKey: string, senderPrivateKey: string, deadline: number) => Promise<TransactionId>;
