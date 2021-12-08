import { ChainService } from '../../../service';
import { TransactionIdList } from '../../../typings/transactionIdList';
import { GetAccountTransactionsArgs } from '../../../typings/args';
export declare const getAccountTransactionIds: (service: ChainService) => (args: GetAccountTransactionsArgs) => Promise<TransactionIdList>;
