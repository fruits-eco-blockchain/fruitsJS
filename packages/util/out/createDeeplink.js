"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createDeeplinkArgs_1 = require("./typings/args/createDeeplinkArgs");
const convertStringToHexString_1 = require("./convertStringToHexString");
const convertStringToBase64String_1 = require("./convertStringToBase64String");
function encodePayload(payload, encoderFormat) {
    let data = payload;
    if (typeof payload !== 'string') {
        data = JSON.stringify(payload);
    }
    switch (encoderFormat) {
        case createDeeplinkArgs_1.EncoderFormat.Hexadecimal:
            return convertStringToHexString_1.convertStringToHexString(data);
        case createDeeplinkArgs_1.EncoderFormat.Base64:
            return convertStringToBase64String_1.convertStringToBase64String(data);
        case createDeeplinkArgs_1.EncoderFormat.Text:
        default:
            return data;
    }
}
exports.createDeeplink = (args) => {
    const { encoderFormat = createDeeplinkArgs_1.EncoderFormat.Base64, domain, action, payload } = args;
    let link = domain ? `fruits.${domain}://v1` : `fruits://v1`;
    if (action) {
        link += `?action=${action}`;
    }
    if (payload) {
        link += `&payload=${encodePayload(payload, encoderFormat)}`;
    }
    return link;
};
//# sourceMappingURL=createDeeplink.js.map