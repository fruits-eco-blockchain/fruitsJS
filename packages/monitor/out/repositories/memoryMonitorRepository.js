"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemoryMonitorRepository {
    constructor() {
        this.monitors = {};
    }
    get(key) {
        return Promise.resolve(this.monitors[key] || null);
    }
    getAll() {
        const monitors = Object.keys(this.monitors).map(k => this.monitors[k]);
        return Promise.resolve(monitors);
    }
    insert(monitor) {
        if (this.monitors[monitor.key]) {
            return Promise.reject(`Monitor with key '[${monitor.key}]' already exists`);
        }
        this.monitors[monitor.key] = monitor;
        monitor.stop();
        return Promise.resolve();
    }
    remove(key) {
        if (this.monitors[key]) {
            delete this.monitors[key];
        }
        return Promise.resolve();
    }
}
exports.MemoryMonitorRepository = MemoryMonitorRepository;
//# sourceMappingURL=memoryMonitorRepository.js.map