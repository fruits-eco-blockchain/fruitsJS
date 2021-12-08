import { MonitorRepository } from '../typings/monitorRepository';
import { GenericMonitor } from '../typings/GenericMonitor';
import { LocalStorage } from '../typings/LocalStorage';
interface Options {
    autoStart?: boolean;
}
export declare class LocalStorageMonitorRepository implements MonitorRepository {
    private storage;
    private options;
    constructor(storage: LocalStorage, options?: Options);
    get(key: any): Promise<GenericMonitor | null>;
    getAll(): Promise<GenericMonitor[]>;
    insert(monitor: GenericMonitor): Promise<void>;
    remove(key: any): Promise<void>;
}
export {};
