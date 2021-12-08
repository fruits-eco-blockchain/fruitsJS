import { DefaultSendArgs } from './defaultSendArgs';
export interface SetAccountInfoArgs extends DefaultSendArgs {
    name: string;
    description: string;
}
