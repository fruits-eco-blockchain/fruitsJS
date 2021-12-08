import { ChainService } from '../../../service/chainService';
import { TransactionList } from '../../../typings/transactionList';
import { GetAccountTransactionsArgs } from '../../../typings/args';
export declare const getAccountTransactions: (service: ChainService) => (args: GetAccountTransactionsArgs) => Promise<TransactionList>;
