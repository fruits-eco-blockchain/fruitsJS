import { GenericMonitor } from './GenericMonitor';
export interface MonitorRepository {
    getAll(): Promise<GenericMonitor[]>;
    get(monitorKey: any): Promise<GenericMonitor | null>;
    insert(monitor: GenericMonitor): Promise<void>;
    remove(monitorKey: any): Promise<void>;
}
