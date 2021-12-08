import {ChainService} from '../../../service';
import {TransactionIdList} from '../../../typings/transactionIdList';
import {GetAccountTransactionsArgs} from '../../../typings/args';


export const getAccountTransactionIds = (service: ChainService):
    (args: GetAccountTransactionsArgs) => Promise<TransactionIdList> =>
    (args: GetAccountTransactionsArgs): Promise<TransactionIdList> => {

        const parameters = {
            ...args,
            account: args.accountId,
        };
        delete parameters.accountId;

        return service.query('getAccountTransactionIds', parameters);
    };
