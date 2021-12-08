import { DefaultSendArgs } from './defaultSendArgs';
export interface PlaceOrderArgs extends DefaultSendArgs {
    asset: string;
    pricePlanck: string;
    quantity: string | number;
}
