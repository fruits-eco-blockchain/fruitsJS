"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("@fruitsjs/util");
const convertArgument = (value) => {
    if (typeof (value) === 'boolean') {
        return value ? '1' : '0';
    }
    if (typeof (value) === 'number') {
        return `${value}`;
    }
    return value;
};
exports.generateMethodCall = (args) => {
    const MaxArgs = 3;
    const argArray = args.methodArgs ? [args.methodHash, ...args.methodArgs] : [args.methodHash];
    if (argArray.length > MaxArgs + 1) {
        throw new Error(`At maximum ${MaxArgs} are supported`);
    }
    return argArray
        .map(convertArgument)
        .map(long => util_1.convertDecStringToHexString(long, 16))
        .map(util_1.convertHexEndianess)
        .join('');
};
//# sourceMappingURL=generateMethodCall.js.map