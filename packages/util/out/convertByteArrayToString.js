"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertByteArrayToString = (byteArray, startIndex = 0, length = null) => {
    if (length === 0) {
        return '';
    }
    let bytes = byteArray;
    if (startIndex !== 0) {
        const len = length === null ? byteArray.length - startIndex : length;
        checkBytesToIntInput(bytes, len, startIndex);
        bytes = byteArray.slice(startIndex, startIndex + len);
    }
    return decodeURIComponent(escape(String.fromCharCode.apply(null, Array.from(bytes))));
};
function checkBytesToIntInput(bytes, numBytes, startIndex = 0) {
    if (startIndex < 0) {
        throw new Error('Start index should not be negative');
    }
    if (bytes.length < startIndex + numBytes) {
        throw new Error('Need at least ' + (numBytes) + ' bytes to convert to an integer');
    }
    return startIndex;
}
//# sourceMappingURL=convertByteArrayToString.js.map