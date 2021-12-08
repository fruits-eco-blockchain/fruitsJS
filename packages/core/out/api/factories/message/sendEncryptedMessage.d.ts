import { ChainService } from '../../../service/chainService';
import { TransactionId } from '../../../typings/transactionId';
import { SendEncryptedMessageArgs } from '../../../typings/args/sendEncryptedMessageArgs';
export declare const sendEncryptedMessage: (service: ChainService) => (args: SendEncryptedMessageArgs) => Promise<TransactionId>;
