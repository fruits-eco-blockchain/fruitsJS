import { TransactionId } from '../transactionId';
import { SendMessageArgs } from '../args';
import { SendEncryptedMessageArgs } from '../args/sendEncryptedMessageArgs';
export interface MessageApi {
    sendMessage: (args: SendMessageArgs) => Promise<TransactionId>;
    sendEncryptedMessage: (args: SendEncryptedMessageArgs) => Promise<TransactionId>;
}
