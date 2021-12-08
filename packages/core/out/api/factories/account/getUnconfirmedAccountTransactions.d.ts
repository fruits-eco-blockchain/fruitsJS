import { ChainService } from '../../../service/chainService';
import { UnconfirmedTransactionList } from '../../../typings/unconfirmedTransactionList';
export declare const getUnconfirmedAccountTransactions: (service: ChainService) => (accountId: string, includeIndirect?: boolean) => Promise<UnconfirmedTransactionList>;
