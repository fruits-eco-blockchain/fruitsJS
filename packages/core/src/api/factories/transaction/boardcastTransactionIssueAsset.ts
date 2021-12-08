import {ChainService} from '../../../service';
import {TransactionId} from '../../../typings/transactionId';
import {AxiosRequestConfig} from 'axios';

const config: AxiosRequestConfig = {headers: {'Content-Type': 'application/json'}};

export const boardcastTransactionIssueAsset = (service: ChainService):
    (signedTransactionPayload: string) => Promise<TransactionId> =>
    (signedTransactionPayload: string): Promise<TransactionId> =>
        service.sendBodyString('broadcastTransaction', {}, signedTransactionPayload, config);
