import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { SendMessageArgs } from '../../../typings/args';
export declare const sendMessage: (service: ChainService) => (args: SendMessageArgs) => Promise<TransactionId>;
