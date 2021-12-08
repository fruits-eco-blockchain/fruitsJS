import { Logger } from './logger';
export declare class VoidLogger implements Logger {
    debug(msg: string): void;
    error(msg: string): void;
    log(msg: string): void;
}
export declare const voidLogger: VoidLogger;
