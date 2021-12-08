import { MonitorRepository } from '../typings/monitorRepository';
import { GenericMonitor } from '../typings/GenericMonitor';
export declare class MemoryMonitorRepository implements MonitorRepository {
    private monitors;
    get(key: any): Promise<GenericMonitor | null>;
    getAll(): Promise<GenericMonitor[]>;
    insert(monitor: GenericMonitor): Promise<void>;
    remove(key: any): Promise<void>;
}
