"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curve25519_1 = require("./curve25519");
class ECKCDSA {
    static sign(h, x, s) {
        let w, i;
        let h1 = new Array(32);
        let x1 = new Array(32);
        let tmp1 = new Array(64);
        let tmp2 = new Array(64);
        curve25519_1.Curve25519.cpy32(h1, h);
        curve25519_1.Curve25519.cpy32(x1, x);
        let tmp3 = new Array(32);
        curve25519_1.Curve25519.divmod(tmp3, h1, 32, curve25519_1.Curve25519.ORDER, 32);
        curve25519_1.Curve25519.divmod(tmp3, x1, 32, curve25519_1.Curve25519.ORDER, 32);
        let v = new Array(32);
        curve25519_1.Curve25519.mula_small(v, x1, 0, h1, 32, -1);
        curve25519_1.Curve25519.mula_small(v, v, 0, curve25519_1.Curve25519.ORDER, 32, 1);
        curve25519_1.Curve25519.mula32(tmp1, v, s, 32, 1);
        curve25519_1.Curve25519.divmod(tmp2, tmp1, 64, curve25519_1.Curve25519.ORDER, 32);
        for (w = 0, i = 0; i < 32; i++)
            w |= v[i] = tmp1[i];
        return w !== 0 ? v : undefined;
    }
    static verify(v, h, P) {
        let d = new Array(32);
        let p = [curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray()];
        let s = [curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray()];
        let yx = [curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray()];
        let yz = [curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray()];
        let t1 = [curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray()];
        let t2 = [curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray(), curve25519_1.Curve25519.createUnpackedArray()];
        let vi = 0, hi = 0, di = 0, nvh = 0, i, j, k;
        curve25519_1.Curve25519.set(p[0], 9);
        curve25519_1.Curve25519.unpack(p[1], P);
        curve25519_1.Curve25519.x_to_y2(t1[0], t2[0], p[1]);
        curve25519_1.Curve25519.sqrt(t1[0], t2[0]);
        j = curve25519_1.Curve25519.is_negative(t1[0]);
        curve25519_1.Curve25519.add(t2[0], t2[0], curve25519_1.Curve25519.C39420360);
        curve25519_1.Curve25519.mul(t2[1], curve25519_1.Curve25519.BASE_2Y, t1[0]);
        curve25519_1.Curve25519.sub(t1[j], t2[0], t2[1]);
        curve25519_1.Curve25519.add(t1[1 - j], t2[0], t2[1]);
        curve25519_1.Curve25519.cpy(t2[0], p[1]);
        curve25519_1.Curve25519.sub(t2[0], t2[0], curve25519_1.Curve25519.C9);
        curve25519_1.Curve25519.sqr(t2[1], t2[0]);
        curve25519_1.Curve25519.recip(t2[0], t2[1], 0);
        curve25519_1.Curve25519.mul(s[0], t1[0], t2[0]);
        curve25519_1.Curve25519.sub(s[0], s[0], p[1]);
        curve25519_1.Curve25519.sub(s[0], s[0], curve25519_1.Curve25519.C486671);
        curve25519_1.Curve25519.mul(s[1], t1[1], t2[0]);
        curve25519_1.Curve25519.sub(s[1], s[1], p[1]);
        curve25519_1.Curve25519.sub(s[1], s[1], curve25519_1.Curve25519.C486671);
        curve25519_1.Curve25519.mul_small(s[0], s[0], 1);
        curve25519_1.Curve25519.mul_small(s[1], s[1], 1);
        for (i = 0; i < 32; i++) {
            vi = (vi >> 8) ^ (v[i] & 0xFF) ^ ((v[i] & 0xFF) << 1);
            hi = (hi >> 8) ^ (h[i] & 0xFF) ^ ((h[i] & 0xFF) << 1);
            nvh = ~(vi ^ hi);
            di = (nvh & (di & 0x80) >> 7) ^ vi;
            di ^= nvh & (di & 0x01) << 1;
            di ^= nvh & (di & 0x02) << 1;
            di ^= nvh & (di & 0x04) << 1;
            di ^= nvh & (di & 0x08) << 1;
            di ^= nvh & (di & 0x10) << 1;
            di ^= nvh & (di & 0x20) << 1;
            di ^= nvh & (di & 0x40) << 1;
            d[i] = di & 0xFF;
        }
        di = ((nvh & (di & 0x80) << 1) ^ vi) >> 8;
        curve25519_1.Curve25519.set(yx[0], 1);
        curve25519_1.Curve25519.cpy(yx[1], p[di]);
        curve25519_1.Curve25519.cpy(yx[2], s[0]);
        curve25519_1.Curve25519.set(yz[0], 0);
        curve25519_1.Curve25519.set(yz[1], 1);
        curve25519_1.Curve25519.set(yz[2], 1);
        vi = 0;
        hi = 0;
        for (i = 32; i-- !== 0;) {
            vi = (vi << 8) | (v[i] & 0xFF);
            hi = (hi << 8) | (h[i] & 0xFF);
            di = (di << 8) | (d[i] & 0xFF);
            for (j = 8; j-- !== 0;) {
                curve25519_1.Curve25519.mont_prep(t1[0], t2[0], yx[0], yz[0]);
                curve25519_1.Curve25519.mont_prep(t1[1], t2[1], yx[1], yz[1]);
                curve25519_1.Curve25519.mont_prep(t1[2], t2[2], yx[2], yz[2]);
                k = ((vi ^ vi >> 1) >> j & 1)
                    + ((hi ^ hi >> 1) >> j & 1);
                curve25519_1.Curve25519.mont_dbl(yx[2], yz[2], t1[k], t2[k], yx[0], yz[0]);
                k = (di >> j & 2) ^ ((di >> j & 1) << 1);
                curve25519_1.Curve25519.mont_add(t1[1], t2[1], t1[k], t2[k], yx[1], yz[1], p[di >> j & 1]);
                curve25519_1.Curve25519.mont_add(t1[2], t2[2], t1[0], t2[0], yx[2], yz[2], s[((vi ^ hi) >> j & 2) >> 1]);
            }
        }
        k = (vi & 1) + (hi & 1);
        curve25519_1.Curve25519.recip(t1[0], yz[k], 0);
        curve25519_1.Curve25519.mul(t1[1], yx[k], t1[0]);
        let Y = [];
        curve25519_1.Curve25519.pack(t1[1], Y);
        return Y;
    }
    static keygen(k) {
        let P = [];
        let s = [];
        k = k || [];
        curve25519_1.Curve25519.clamp(k);
        curve25519_1.Curve25519.core(P, s, k, null);
        return { p: P, s: s, k: k };
    }
    static clamp(k) {
        curve25519_1.Curve25519.clamp(k);
        return k;
    }
    static sharedkey(privateKey, publicKey) {
        let P = [];
        curve25519_1.Curve25519.core(P, null, privateKey, publicKey);
        return P;
    }
}
exports.ECKCDSA = ECKCDSA;
//# sourceMappingURL=ec-kcdsa.js.map