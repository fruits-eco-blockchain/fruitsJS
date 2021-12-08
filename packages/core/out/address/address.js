"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@fruitsjs/crypto");
const util_1 = require("@fruitsjs/util");
const ensureReedSolomonAddress_1 = require("./ensureReedSolomonAddress");
const tokenizeReedSolomonAddress_1 = require("./tokenizeReedSolomonAddress");
const convertReedSolomonAddressToNumericId_1 = require("./convertReedSolomonAddressToNumericId");
const convertNumericIdToReedSolomonAddress_1 = require("./convertNumericIdToReedSolomonAddress");
const constants_1 = require("../constants");
function ensureValidPublicKey(publicKey) {
    if (!(publicKey && /^[a-fA-F0-9]{64}/.test(publicKey))) {
        throw new Error('Invalid Public Key Format');
    }
}
class Address {
    constructor(args) {
        if (args.publicKey) {
            this.constructFromPublicKey(args.publicKey, args.prefix);
        }
        else if (args.address) {
            this.constructFromAddress(args.address);
        }
        else {
            throw new Error('Invalid arguments');
        }
    }
    static create(anyValidAddress, prefix = constants_1.AddressPrefix.MainNet) {
        try {
            tokenizeReedSolomonAddress_1.tokenizeReedSolomonAddress(anyValidAddress);
            return Address.fromReedSolomonAddress(anyValidAddress);
        }
        catch (e) {
            try {
                ensureValidPublicKey(anyValidAddress);
                return Address.fromPublicKey(anyValidAddress, prefix);
            }
            catch (innerError) {
                return Address.fromNumericId(anyValidAddress, prefix);
            }
        }
    }
    static fromNumericId(numericId, prefix = constants_1.AddressPrefix.MainNet) {
        const address = convertNumericIdToReedSolomonAddress_1.convertNumericIdToReedSolomonAddress(numericId, prefix);
        return new Address({ address });
    }
    static fromPublicKey(publicKey, prefix = constants_1.AddressPrefix.MainNet) {
        return new Address({ publicKey: publicKey.toUpperCase(), prefix });
    }
    static fromReedSolomonAddress(address) {
        ensureReedSolomonAddress_1.ensureReedSolomonAddress(address);
        const { extension, prefix } = tokenizeReedSolomonAddress_1.tokenizeReedSolomonAddress(address);
        if (extension) {
            const publicKey = util_1.convertBase36StringToHexString(extension);
            if (convertReedSolomonAddressToNumericId_1.convertReedSolomonAddressToNumericId(address) !== crypto_1.getAccountIdFromPublicKey(publicKey)) {
                throw Error('Address and Public Key do not match');
            }
            return new Address({ publicKey, prefix });
        }
        return new Address({ address });
    }
    getPublicKey() {
        return this._publicKey;
    }
    getNumericId() {
        return this._numericId;
    }
    getReedSolomonAddress(withPrefix = true) {
        return withPrefix ? this._rs : this._rs.substr(this._rs.indexOf('-') + 1);
    }
    getReedSolomonAddressExtended(withPrefix = true) {
        if (!this._publicKey) {
            throw new Error('No public key available');
        }
        return `${this.getReedSolomonAddress(withPrefix)}-${util_1.convertHexStringToBase36String(this._publicKey)}`.toUpperCase();
    }
    equals(address) {
        return this._numericId === address._numericId;
    }
    constructFromPublicKey(publicKey, prefix) {
        ensureValidPublicKey(publicKey);
        this._publicKey = publicKey;
        this._numericId = crypto_1.getAccountIdFromPublicKey(publicKey);
        this._rs = convertNumericIdToReedSolomonAddress_1.convertNumericIdToReedSolomonAddress(this._numericId, prefix);
    }
    constructFromAddress(address) {
        this._publicKey = '';
        this._rs = address;
        this._numericId = convertReedSolomonAddressToNumericId_1.convertReedSolomonAddressToNumericId(address);
    }
}
exports.Address = Address;
//# sourceMappingURL=address.js.map