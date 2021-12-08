"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Converter {
    static convertHexStringToByteArray(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2)
            bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
    }
    static convertByteArrayToHexString(bytes) {
        for (var hex = [], i = 0; i < bytes.length; i++) {
            hex.push((bytes[i] >>> 4).toString(16));
            hex.push((bytes[i] & 0xF).toString(16));
        }
        return hex.join("");
    }
    static convertStringToByteArray(str) {
        str = unescape(encodeURIComponent(str));
        let bytes = new Array(str.length);
        for (let i = 0; i < str.length; ++i)
            bytes[i] = str.charCodeAt(i);
        return bytes;
    }
    static convertStringToHexString(str) {
        return Converter.convertByteArrayToHexString(Converter.convertStringToByteArray(str));
    }
    static convertHexStringToString(hex) {
        return Converter.convertByteArrayToString(Converter.convertHexStringToByteArray(hex));
    }
    static checkBytesToIntInput(bytes, numBytes, opt_startIndex) {
        let startIndex = opt_startIndex || 0;
        if (startIndex < 0) {
            throw new Error('Start index should not be negative');
        }
        if (bytes.length < startIndex + numBytes) {
            throw new Error('Need at least ' + (numBytes) + ' bytes to convert to an integer');
        }
        return startIndex;
    }
    static convertByteArrayToWordArray(ba) {
        var wa = [], i;
        for (i = 0; i < ba.length; i++) {
            wa[(i / 4) | 0] |= ba[i] << (24 - 8 * i);
        }
        return CryptoJS.lib.WordArray.create(wa, ba.length);
    }
    static convertWordToByteArray(word, length) {
        var ba = [], i, xFF = 0xFF;
        if (length > 0)
            ba.push(word >>> 24);
        if (length > 1)
            ba.push((word >>> 16) & xFF);
        if (length > 2)
            ba.push((word >>> 8) & xFF);
        if (length > 3)
            ba.push(word & xFF);
        return ba;
    }
    static convertWordArrayToByteArray(wordArray, length = 0) {
        if (wordArray.hasOwnProperty("sigBytes") && wordArray.hasOwnProperty("words")) {
            length = wordArray.sigBytes;
            wordArray = wordArray.words;
        }
        let result = [], bytes, i = 0;
        while (length > 0) {
            bytes = Converter.convertWordToByteArray(wordArray[i], Math.min(4, length));
            length -= bytes.length;
            result.push(bytes);
            i++;
        }
        return [].concat.apply([], result);
    }
    static convertByteArrayToString(bytes, opt_startIndex = 0, length = 0) {
        if (length == 0) {
            return "";
        }
        if (opt_startIndex && length) {
            let index = Converter.checkBytesToIntInput(bytes, parseInt(length.toString(), 10), parseInt(opt_startIndex.toString(), 10));
            bytes = bytes.slice(opt_startIndex, opt_startIndex + length);
        }
        return decodeURIComponent(escape(String.fromCharCode.apply(null, bytes)));
    }
    static convertWordArrayToUint8Array(wordArray) {
        let len = wordArray.words.length, u8_array = new Uint8Array(len << 2), offset = 0, word, i;
        for (i = 0; i < len; i++) {
            word = wordArray.words[i];
            u8_array[offset++] = word >> 24;
            u8_array[offset++] = (word >> 16) & 0xff;
            u8_array[offset++] = (word >> 8) & 0xff;
            u8_array[offset++] = word & 0xff;
        }
        return u8_array;
    }
}
exports.Converter = Converter;
//# sourceMappingURL=converter.js.map