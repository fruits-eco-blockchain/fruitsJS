import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { SendAmountArgs } from '../../../typings/args/sendAmountArgs';
export declare const sendAmountToSingleRecipient: (service: ChainService) => (args: SendAmountArgs) => Promise<TransactionId>;
