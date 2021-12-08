"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typings_1 = require("./typings");
const convertHexStringToString_1 = require("./convertHexStringToString");
const convertBase64StringToString_1 = require("./convertBase64StringToString");
const MandatoryPattern = /^fruits.?(.+)?:\/\/(v.+?)\??/i;
exports.parseDeeplink = (deeplink, encoderFormat = typings_1.EncoderFormat.Base64) => {
    const throwError = () => {
        throw new Error('Invalid deeplink: ' + deeplink);
    };
    const decodePayload = (payload, format) => {
        let decoded = payload;
        switch (format) {
            case typings_1.EncoderFormat.Hexadecimal:
                decoded = convertHexStringToString_1.convertHexStringToString(payload);
                break;
            case typings_1.EncoderFormat.Base64:
                decoded = convertBase64StringToString_1.convertBase64StringToString(payload);
                break;
            case typings_1.EncoderFormat.Text:
            default:
        }
        try {
            return JSON.parse(decoded);
        }
        catch (e) {
            return decoded;
        }
    };
    const extractQueryValue = (query, paramName) => {
        if (!query.startsWith(paramName + '=')) {
            throwError();
        }
        return query.split('=')[1];
    };
    const mandatoryMatches = deeplink.match(MandatoryPattern);
    if (!mandatoryMatches || mandatoryMatches.length !== 3) {
        throwError();
    }
    const result = {
        domain: mandatoryMatches[1],
        version: mandatoryMatches[2],
        action: undefined,
        payload: undefined,
        decodedPayload: undefined
    };
    try {
        const startQueryString = deeplink.indexOf('?');
        if (startQueryString !== -1) {
            const queries = deeplink.substring(startQueryString + 1).split('&');
            if (queries.length >= 1) {
                if (queries.length > 2) {
                    throwError();
                }
                result.action = extractQueryValue(queries[0], 'action');
                if (queries.length === 2) {
                    result.payload = extractQueryValue(queries[1], 'payload');
                    result.decodedPayload = decodePayload(result.payload, encoderFormat);
                }
            }
        }
    }
    catch (e) {
        throwError();
    }
    return result;
};
//# sourceMappingURL=parseDeeplink.js.map