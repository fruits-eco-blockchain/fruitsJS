"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monitor_1 = require("../monitor");
const DefaultOptions = {
    autoStart: true
};
class LocalStorageMonitorRepository {
    constructor(storage, options = DefaultOptions) {
        this.storage = storage;
        this.options = options;
    }
    get(key) {
        const item = this.storage.getItem(key);
        const monitor = item && monitor_1.Monitor.deserialize(item, this.options.autoStart);
        return Promise.resolve(monitor || null);
    }
    getAll() {
        const monitors = [];
        for (let i = 0; i < this.storage.length; ++i) {
            const key = this.storage.key(i);
            const serializedMonitor = this.storage.getItem(key);
            monitors.push(monitor_1.Monitor.deserialize(serializedMonitor, this.options.autoStart));
        }
        return Promise.resolve(monitors);
    }
    insert(monitor) {
        if (this.storage.getItem(monitor.key)) {
            return Promise.reject(`Model with key '[${monitor.key}]' already exists`);
        }
        this.storage.setItem(monitor.key, monitor.serialize());
        return Promise.resolve();
    }
    remove(key) {
        if (this.storage.getItem(key)) {
            this.storage.removeItem(key);
        }
        return Promise.resolve();
    }
}
exports.LocalStorageMonitorRepository = LocalStorageMonitorRepository;
//# sourceMappingURL=localStorageMonitorRepository.js.map