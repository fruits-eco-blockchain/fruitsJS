"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    debug(msg) {
        console.log(`[DEBUG]: ${msg}`);
    }
    error(msg) {
        console.log(`[ERROR]: ${msg}`);
    }
    log(msg) {
        console.log(`[LOG]: ${msg}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
exports.consoleLogger = new ConsoleLogger();
//# sourceMappingURL=consoleLogger.js.map