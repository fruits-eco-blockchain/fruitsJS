import { ChainService } from '../../../service';
import { CallContractMethodArgs } from '../../../typings/args';
import { TransactionId } from '../../../typings/transactionId';
export declare const callContractMethod: (service: ChainService) => (args: CallContractMethodArgs) => Promise<TransactionId>;
