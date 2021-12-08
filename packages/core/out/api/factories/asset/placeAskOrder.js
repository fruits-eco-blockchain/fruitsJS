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
const placeOrder_1 = require("./placeOrder");
exports.placeAskOrder = (service) => (args) => __awaiter(void 0, void 0, void 0, function* () {
    return placeOrder_1.placeOrder(service)(Object.assign({ type: 'ask' }, args));
});
//# sourceMappingURL=placeAskOrder.js.map