"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const voidLogger_1 = require("./typings/voidLogger");
const eventEmitter_1 = require("./internal/eventEmitter");
const MonitorEvents = {
    Fulfilled: '@fruitsjs/monitor/fulfilled',
    Timeout: '@fruitsjs/monitor/timeout',
};
class Monitor {
    constructor(args) {
        this._timeoutSecs = -1;
        this._emitter = new eventEmitter_1.EventEmitter();
        this._intervalSecs = -1;
        this._startTime = -1;
        this._handle = undefined;
        const { asyncFetcherFn, compareFn, intervalSecs, key, logger, timeoutSecs, } = args;
        if (intervalSecs < 1) {
            throw new Error('interval must be greater than zero');
        }
        this._key = key;
        this._intervalSecs = intervalSecs;
        this._timeoutSecs = timeoutSecs;
        this._asyncFetcher = asyncFetcherFn;
        this._compareFn = compareFn;
        this._logger = logger || voidLogger_1.voidLogger;
    }
    get startTime() {
        return this._startTime;
    }
    get intervalSecs() {
        return this._intervalSecs;
    }
    get key() {
        return this._key;
    }
    get timeoutSecs() {
        return this._timeoutSecs;
    }
    static deserialize(serializedMonitor, autoStart = true) {
        const args = JSON.parse(serializedMonitor);
        const monitor = new Monitor(Object.assign(Object.assign({}, args), { asyncFetcherFn: Monitor._deserializeFunction(args.asyncFetcherFn), compareFn: Monitor._deserializeFunction(args.compareFn) }));
        monitor._startTime = args.startTime;
        if (autoStart && args.startTime > -1) {
            monitor.start();
        }
        return monitor;
    }
    static _serializeFunction(fn) {
        return fn.toString().replace(/\s+/g, ' ');
    }
    static _deserializeFunction(serialized) {
        return eval(serialized);
    }
    serialize() {
        return JSON.stringify({
            intervalSecs: this._intervalSecs,
            timeoutSecs: this._timeoutSecs,
            key: this._key,
            startTime: this._startTime,
            asyncFetcherFn: Monitor._serializeFunction(this._asyncFetcher),
            compareFn: Monitor._serializeFunction(this._compareFn),
        });
    }
    _debug(msg) {
        this._logger.debug(`[${this._key}] - ${msg}`);
    }
    _resetStartTime() {
        this._startTime = -1;
    }
    hasStarted() {
        return this.startTime !== -1;
    }
    isExpired() {
        return this.hasStarted()
            ? (Date.now() - this._startTime) / 1000 >= this._timeoutSecs
            : false;
    }
    start() {
        this._debug('Monitoring...');
        if (this.isExpired()) {
            this._debug('Monitor expired');
            this.stop();
            return this;
        }
        this._handle = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this._asyncFetcher();
                this._debug(`Fetched: ${JSON.stringify(data, null, '\t')}`);
                const predicateFulfilled = this._compareFn(data);
                if (predicateFulfilled) {
                    this._debug('Monitor predicate fulfilled');
                    this._emitter.emit(MonitorEvents.Fulfilled, {
                        key: this.key,
                        data
                    });
                    this._resetStartTime();
                }
                else if (!this.isExpired()) {
                    this.start();
                }
                else {
                    this._debug('Monitor timed out');
                    this._emitter.emit(MonitorEvents.Timeout, {
                        key: this.key,
                    });
                    this._resetStartTime();
                }
            }
            catch (e) {
                this._debug(`Monitor failed: ${e}`);
            }
        }), this._intervalSecs * 1000);
        if (!this.hasStarted()) {
            this._startTime = Date.now();
        }
        return this;
    }
    stop() {
        clearTimeout(this._handle);
        this._startTime = -1;
    }
    onTimeout(fn) {
        this._emitter.on(MonitorEvents.Timeout, fn);
        return this;
    }
    onFulfilled(fn) {
        this._emitter.on(MonitorEvents.Fulfilled, fn);
        return this;
    }
}
exports.Monitor = Monitor;
//# sourceMappingURL=monitor.js.map