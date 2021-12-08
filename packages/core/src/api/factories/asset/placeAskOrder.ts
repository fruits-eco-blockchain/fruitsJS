/**
 * Copyright (c) 2020 Fruits Dev Team
 */
import {ChainService} from '../../../service/chainService';
import {TransactionId} from '../../../typings/transactionId';
import {TransactionResponse} from '../../../typings/transactionResponse';
import {DefaultDeadline} from '../../../constants';
import {createParametersFromAttachment} from '../../../internal/createParametersFromAttachment';
import {IssueAssetArgs, PlaceOrderArgs} from '../../../typings/args';
import {signAndBroadcastTransaction} from '../transaction/signAndBroadcastTransaction';
import {placeOrder} from './placeOrder';

/**
 *
 * Use with [[ApiComposer]] and belongs to [[AssetApi.placeAskOrder]].
 *
 * See details at [[AssetApi.placeAskOrder]]
 * @module core.api.factories
 *
 */
export const placeAskOrder = (service: ChainService):
    (args: PlaceOrderArgs) => Promise<TransactionId> =>
    async (args: PlaceOrderArgs): Promise<TransactionId> => {

        return placeOrder(service)({
            type: 'ask',
            ...args,
        });

    };
