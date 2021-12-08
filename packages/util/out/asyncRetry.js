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
function asyncRetry(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const { asyncFn, onFailureAsync, retryCount = 1, maxRetrials = 20 } = args;
        try {
            return yield asyncFn();
        }
        catch (e) {
            if (retryCount > maxRetrials) {
                throw e;
            }
            const shouldRetry = yield onFailureAsync(e, retryCount);
            if (shouldRetry) {
                yield asyncRetry({ asyncFn, onFailureAsync, retryCount: retryCount + 1 });
            }
            else {
                throw e;
            }
        }
    });
}
exports.asyncRetry = asyncRetry;
//# sourceMappingURL=asyncRetry.js.map