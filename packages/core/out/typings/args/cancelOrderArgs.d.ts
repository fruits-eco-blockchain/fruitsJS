import { DefaultSendArgs } from './defaultSendArgs';
export interface CancelOrderArgs extends DefaultSendArgs {
    order: string;
}
