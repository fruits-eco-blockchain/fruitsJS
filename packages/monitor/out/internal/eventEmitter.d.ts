export declare class EventEmitter {
    private readonly _emitter;
    constructor();
    off(eventName: string | symbol, fn: Function): void;
    on(eventName: string | symbol, fn: Function): void;
    once(eventName: string | symbol, fn: Function): void;
    emit(eventName: string | symbol, payload?: unknown): void;
}
