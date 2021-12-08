"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToQNT = (quantity, decimals) => {
    quantity = String(quantity);
    const parts = quantity.split('.');
    let qnt = parts[0];
    if (parts.length === 1) {
        if (decimals) {
            for (let i = 0; i < decimals; i++) {
                qnt += '0';
            }
        }
    }
    else if (parts.length === 2) {
        let fraction = parts[1];
        if (fraction.length > decimals) {
            throw new Error('Fraction can only have ' + decimals + 'decimals max.');
        }
        else if (fraction.length < decimals) {
            for (let i = fraction.length; i < decimals; i++) {
                fraction += '0';
            }
        }
        qnt += fraction;
    }
    else {
        throw new Error('Invalid input.');
    }
    if (!/^\d+$/.test(qnt)) {
        throw new Error('Invalid input. Only numbers and a dot are accepted.');
    }
    return qnt.replace(/^0+/, '');
};
//# sourceMappingURL=convertToQNT.js.map