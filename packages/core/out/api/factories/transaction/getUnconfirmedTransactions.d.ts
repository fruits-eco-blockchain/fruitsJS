import { ChainService } from '../../../service';
import { UnconfirmedTransactionList } from '../../..';
export declare const getUnconfirmedTransactions: (service: ChainService) => () => Promise<UnconfirmedTransactionList>;
