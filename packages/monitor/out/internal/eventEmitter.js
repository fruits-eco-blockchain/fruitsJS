"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNode_1 = require("./isNode");
class EventEmitter {
    constructor() {
        if (isNode_1.isNode()) {
            const Events = require('events');
            this._emitter = new Events();
        }
        else {
            this._emitter = {
                on: (name, cb) => {
                    window.addEventListener(name, e => cb(e.detail));
                },
                once: (name, cb) => {
                    const singleCallback = (data) => {
                        cb(data);
                    };
                    window.addEventListener(name, (e) => {
                        singleCallback(e.detail);
                        window.removeEventListener(name, singleCallback);
                    });
                },
                off: (name, cb) => {
                    window.removeEventListener(name, cb);
                },
                emit: (name, payload) => {
                    window.dispatchEvent(new window.CustomEvent(name, {
                        detail: payload
                    }));
                },
            };
        }
    }
    off(eventName, fn) {
        this._emitter.off(eventName, fn);
    }
    on(eventName, fn) {
        this._emitter.on(eventName, fn);
    }
    once(eventName, fn) {
        this._emitter.once(eventName, fn);
    }
    emit(eventName, payload) {
        this._emitter.emit(eventName, payload);
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=eventEmitter.js.map