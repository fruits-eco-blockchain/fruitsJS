import { TransactionId } from '../transactionId';
import { Alias } from '../alias';
export interface AliasApi {
    getAliasById: (aliasId: string) => Promise<Alias>;
    getAliasByName: (aliasName: string) => Promise<Alias>;
    setAlias: (aliasName: string, aliasURI: string, feeNQT: string, senderPublicKey: string, senderPrivateKey: string, deadline?: number) => Promise<TransactionId>;
}
