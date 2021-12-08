import { ChainService } from '../../../service/chainService';
import { Transaction } from '../../../typings/transaction';
export declare const getTransaction: (service: ChainService) => (transactionId: string) => Promise<Transaction>;
