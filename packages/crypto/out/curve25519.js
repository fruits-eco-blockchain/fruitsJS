"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curve25519 {
    static clamp(k) {
        k[31] &= 0x7F;
        k[31] |= 0x40;
        k[0] &= 0xF8;
    }
    static cpy32(d, s) {
        for (let i = 0; i < 32; i++)
            d[i] = s[i];
    }
    static mula_small(p, q, m, x, n, z) {
        m = m | 0;
        n = n | 0;
        z = z | 0;
        let v = 0;
        for (let i = 0; i < n; ++i) {
            v += (q[i + m] & 0xFF) + z * (x[i] & 0xFF);
            p[i + m] = (v & 0xFF);
            v >>= 8;
        }
        return v;
    }
    static mula32(p, x, y, t, z) {
        t = t | 0;
        z = z | 0;
        let n = 31;
        let w = 0;
        let i = 0;
        for (; i < t; i++) {
            let zy = z * (y[i] & 0xFF);
            w += Curve25519.mula_small(p, p, i, x, n, zy) + (p[i + n] & 0xFF) + zy * (x[n] & 0xFF);
            p[i + n] = w & 0xFF;
            w >>= 8;
        }
        p[i + n] = (w + (p[i + n] & 0xFF)) & 0xFF;
        return w >> 8;
    }
    static divmod(q, r, n, d, t) {
        n = n | 0;
        t = t | 0;
        let rn = 0;
        let dt = (d[t - 1] & 0xFF) << 8;
        if (t > 1)
            dt |= (d[t - 2] & 0xFF);
        while (n-- >= t) {
            let z = (rn << 16) | ((r[n] & 0xFF) << 8);
            if (n > 0)
                z |= (r[n - 1] & 0xFF);
            let i = n - t + 1;
            z /= dt;
            rn += Curve25519.mula_small(r, r, i, d, t, -z);
            q[i] = (z + rn) & 0xFF;
            Curve25519.mula_small(r, r, i, d, t, -rn);
            rn = r[n] & 0xFF;
            r[n] = 0;
        }
        r[t - 1] = rn & 0xFF;
    }
    static numsize(x, n) {
        while (n-- !== 0 && x[n] === 0) { }
        return n + 1;
    }
    static egcd32(x, y, a, b) {
        let an, bn = 32, qn, i;
        for (i = 0; i < 32; i++)
            x[i] = y[i] = 0;
        x[0] = 1;
        an = Curve25519.numsize(a, 32);
        if (an === 0)
            return y;
        let temp = new Array(32);
        while (true) {
            qn = bn - an + 1;
            Curve25519.divmod(temp, b, bn, a, an);
            bn = Curve25519.numsize(b, bn);
            if (bn === 0)
                return x;
            Curve25519.mula32(y, x, temp, qn, -1);
            qn = an - bn + 1;
            Curve25519.divmod(temp, a, an, b, bn);
            an = Curve25519.numsize(a, an);
            if (an === 0)
                return y;
            Curve25519.mula32(x, y, temp, qn, -1);
        }
    }
    static unpack(x, m) {
        for (let i = 0; i < Curve25519.KEY_SIZE; i += 2)
            x[i / 2] = m[i] & 0xFF | ((m[i + 1] & 0xFF) << 8);
    }
    static is_overflow(x) {
        return (((x[0] > Curve25519.P26 - 19)) &&
            ((x[1] & x[3] & x[5] & x[7] & x[9]) === Curve25519.P25) &&
            ((x[2] & x[4] & x[6] & x[8]) === Curve25519.P26)) || (x[9] > Curve25519.P25);
    }
    static pack(x, m) {
        for (let i = 0; i < Curve25519.UNPACKED_SIZE; ++i) {
            m[2 * i] = x[i] & 0x00FF;
            m[2 * i + 1] = (x[i] & 0xFF00) >> 8;
        }
    }
    static createUnpackedArray() {
        return new Uint16Array(Curve25519.UNPACKED_SIZE);
    }
    static cpy(d, s) {
        for (let i = 0; i < Curve25519.UNPACKED_SIZE; ++i)
            d[i] = s[i];
    }
    static set(d, s) {
        d[0] = s;
        for (let i = 1; i < Curve25519.UNPACKED_SIZE; ++i)
            d[i] = 0;
    }
    static recip(y, x, sqrtassist) {
        let t0 = Curve25519.createUnpackedArray();
        let t1 = Curve25519.createUnpackedArray();
        let t2 = Curve25519.createUnpackedArray();
        let t3 = Curve25519.createUnpackedArray();
        let t4 = Curve25519.createUnpackedArray();
        let i;
        Curve25519.sqr(t1, x);
        Curve25519.sqr(t2, t1);
        Curve25519.sqr(t0, t2);
        Curve25519.mul(t2, t0, x);
        Curve25519.mul(t0, t2, t1);
        Curve25519.sqr(t1, t0);
        Curve25519.mul(t3, t1, t2);
        Curve25519.sqr(t1, t3);
        Curve25519.sqr(t2, t1);
        Curve25519.sqr(t1, t2);
        Curve25519.sqr(t2, t1);
        Curve25519.sqr(t1, t2);
        Curve25519.mul(t2, t1, t3);
        Curve25519.sqr(t1, t2);
        Curve25519.sqr(t3, t1);
        for (i = 1; i < 5; i++) {
            Curve25519.sqr(t1, t3);
            Curve25519.sqr(t3, t1);
        }
        Curve25519.mul(t1, t3, t2);
        Curve25519.sqr(t3, t1);
        Curve25519.sqr(t4, t3);
        for (i = 1; i < 10; i++) {
            Curve25519.sqr(t3, t4);
            Curve25519.sqr(t4, t3);
        }
        Curve25519.mul(t3, t4, t1);
        for (i = 0; i < 5; i++) {
            Curve25519.sqr(t1, t3);
            Curve25519.sqr(t3, t1);
        }
        Curve25519.mul(t1, t3, t2);
        Curve25519.sqr(t2, t1);
        Curve25519.sqr(t3, t2);
        for (i = 1; i < 25; i++) {
            Curve25519.sqr(t2, t3);
            Curve25519.sqr(t3, t2);
        }
        Curve25519.mul(t2, t3, t1);
        Curve25519.sqr(t3, t2);
        Curve25519.sqr(t4, t3);
        for (i = 1; i < 50; i++) {
            Curve25519.sqr(t3, t4);
            Curve25519.sqr(t4, t3);
        }
        Curve25519.mul(t3, t4, t2);
        for (i = 0; i < 25; i++) {
            Curve25519.sqr(t4, t3);
            Curve25519.sqr(t3, t4);
        }
        Curve25519.mul(t2, t3, t1);
        Curve25519.sqr(t1, t2);
        Curve25519.sqr(t2, t1);
        if (sqrtassist !== 0) {
            Curve25519.mul(y, x, t2);
        }
        else {
            Curve25519.sqr(t1, t2);
            Curve25519.sqr(t2, t1);
            Curve25519.sqr(t1, t2);
            Curve25519.mul(y, t1, t0);
        }
    }
    static is_negative(x) {
        let isOverflowOrNegative = Curve25519.is_overflow(x) || x[9] < 0;
        let leastSignificantBit = x[0] & 1;
        return ((isOverflowOrNegative ? 1 : 0) ^ leastSignificantBit) & 0xFFFFFFFF;
    }
    static sqrt(x, u) {
        let v = Curve25519.createUnpackedArray();
        let t1 = Curve25519.createUnpackedArray();
        let t2 = Curve25519.createUnpackedArray();
        Curve25519.add(t1, u, u);
        Curve25519.recip(v, t1, 1);
        Curve25519.sqr(x, v);
        Curve25519.mul(t2, t1, x);
        Curve25519.sub(t2, t2, Curve25519.C1);
        Curve25519.mul(t1, v, t2);
        Curve25519.mul(x, u, t1);
    }
    static c255lsqr8h(a7, a6, a5, a4, a3, a2, a1, a0) {
        let r = [];
        let v;
        v = a0 * a0;
        r[0] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a0 * a1;
        r[1] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a0 * a2 + a1 * a1;
        r[2] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a0 * a3 + 2 * a1 * a2;
        r[3] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a0 * a4 + 2 * a1 * a3 + a2 * a2;
        r[4] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a0 * a5 + 2 * a1 * a4 + 2 * a2 * a3;
        r[5] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a0 * a6 + 2 * a1 * a5 + 2 * a2 * a4 + a3 * a3;
        r[6] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a0 * a7 + 2 * a1 * a6 + 2 * a2 * a5 + 2 * a3 * a4;
        r[7] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a1 * a7 + 2 * a2 * a6 + 2 * a3 * a5 + a4 * a4;
        r[8] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a2 * a7 + 2 * a3 * a6 + 2 * a4 * a5;
        r[9] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a3 * a7 + 2 * a4 * a6 + a5 * a5;
        r[10] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a4 * a7 + 2 * a5 * a6;
        r[11] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a5 * a7 + a6 * a6;
        r[12] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + 2 * a6 * a7;
        r[13] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a7 * a7;
        r[14] = v & 0xFFFF;
        r[15] = ((v / 0x10000) | 0);
        return r;
    }
    static sqr(r, a) {
        let x = Curve25519.c255lsqr8h(a[15], a[14], a[13], a[12], a[11], a[10], a[9], a[8]);
        let z = Curve25519.c255lsqr8h(a[7], a[6], a[5], a[4], a[3], a[2], a[1], a[0]);
        let y = Curve25519.c255lsqr8h(a[15] + a[7], a[14] + a[6], a[13] + a[5], a[12] + a[4], a[11] + a[3], a[10] + a[2], a[9] + a[1], a[8] + a[0]);
        let v;
        v = 0x800000 + z[0] + (y[8] - x[8] - z[8] + x[0] - 0x80) * 38;
        r[0] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[1] + (y[9] - x[9] - z[9] + x[1]) * 38;
        r[1] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[2] + (y[10] - x[10] - z[10] + x[2]) * 38;
        r[2] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[3] + (y[11] - x[11] - z[11] + x[3]) * 38;
        r[3] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[4] + (y[12] - x[12] - z[12] + x[4]) * 38;
        r[4] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[5] + (y[13] - x[13] - z[13] + x[5]) * 38;
        r[5] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[6] + (y[14] - x[14] - z[14] + x[6]) * 38;
        r[6] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[7] + (y[15] - x[15] - z[15] + x[7]) * 38;
        r[7] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[8] + y[0] - x[0] - z[0] + x[8] * 38;
        r[8] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[9] + y[1] - x[1] - z[1] + x[9] * 38;
        r[9] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[10] + y[2] - x[2] - z[2] + x[10] * 38;
        r[10] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[11] + y[3] - x[3] - z[3] + x[11] * 38;
        r[11] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[12] + y[4] - x[4] - z[4] + x[12] * 38;
        r[12] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[13] + y[5] - x[5] - z[5] + x[13] * 38;
        r[13] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[14] + y[6] - x[6] - z[6] + x[14] * 38;
        r[14] = v & 0xFFFF;
        let r15 = 0x7fff80 + ((v / 0x10000) | 0) + z[15] + y[7] - x[7] - z[7] + x[15] * 38;
        Curve25519.c255lreduce(r, r15);
    }
    static c255lmul8h(a7, a6, a5, a4, a3, a2, a1, a0, b7, b6, b5, b4, b3, b2, b1, b0) {
        let r = [];
        let v;
        v = a0 * b0;
        r[0] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a0 * b1 + a1 * b0;
        r[1] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a0 * b2 + a1 * b1 + a2 * b0;
        r[2] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a0 * b3 + a1 * b2 + a2 * b1 + a3 * b0;
        r[3] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a0 * b4 + a1 * b3 + a2 * b2 + a3 * b1 + a4 * b0;
        r[4] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a0 * b5 + a1 * b4 + a2 * b3 + a3 * b2 + a4 * b1 + a5 * b0;
        r[5] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a0 * b6 + a1 * b5 + a2 * b4 + a3 * b3 + a4 * b2 + a5 * b1 + a6 * b0;
        r[6] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a0 * b7 + a1 * b6 + a2 * b5 + a3 * b4 + a4 * b3 + a5 * b2 + a6 * b1 + a7 * b0;
        r[7] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a1 * b7 + a2 * b6 + a3 * b5 + a4 * b4 + a5 * b3 + a6 * b2 + a7 * b1;
        r[8] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a2 * b7 + a3 * b6 + a4 * b5 + a5 * b4 + a6 * b3 + a7 * b2;
        r[9] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a3 * b7 + a4 * b6 + a5 * b5 + a6 * b4 + a7 * b3;
        r[10] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a4 * b7 + a5 * b6 + a6 * b5 + a7 * b4;
        r[11] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a5 * b7 + a6 * b6 + a7 * b5;
        r[12] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a6 * b7 + a7 * b6;
        r[13] = v & 0xFFFF;
        v = ((v / 0x10000) | 0) + a7 * b7;
        r[14] = v & 0xFFFF;
        r[15] = ((v / 0x10000) | 0);
        return r;
    }
    static mul(r, a, b) {
        let x = Curve25519.c255lmul8h(a[15], a[14], a[13], a[12], a[11], a[10], a[9], a[8], b[15], b[14], b[13], b[12], b[11], b[10], b[9], b[8]);
        let z = Curve25519.c255lmul8h(a[7], a[6], a[5], a[4], a[3], a[2], a[1], a[0], b[7], b[6], b[5], b[4], b[3], b[2], b[1], b[0]);
        let y = Curve25519.c255lmul8h(a[15] + a[7], a[14] + a[6], a[13] + a[5], a[12] + a[4], a[11] + a[3], a[10] + a[2], a[9] + a[1], a[8] + a[0], b[15] + b[7], b[14] + b[6], b[13] + b[5], b[12] + b[4], b[11] + b[3], b[10] + b[2], b[9] + b[1], b[8] + b[0]);
        let v;
        v = 0x800000 + z[0] + (y[8] - x[8] - z[8] + x[0] - 0x80) * 38;
        r[0] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[1] + (y[9] - x[9] - z[9] + x[1]) * 38;
        r[1] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[2] + (y[10] - x[10] - z[10] + x[2]) * 38;
        r[2] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[3] + (y[11] - x[11] - z[11] + x[3]) * 38;
        r[3] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[4] + (y[12] - x[12] - z[12] + x[4]) * 38;
        r[4] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[5] + (y[13] - x[13] - z[13] + x[5]) * 38;
        r[5] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[6] + (y[14] - x[14] - z[14] + x[6]) * 38;
        r[6] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[7] + (y[15] - x[15] - z[15] + x[7]) * 38;
        r[7] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[8] + y[0] - x[0] - z[0] + x[8] * 38;
        r[8] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[9] + y[1] - x[1] - z[1] + x[9] * 38;
        r[9] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[10] + y[2] - x[2] - z[2] + x[10] * 38;
        r[10] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[11] + y[3] - x[3] - z[3] + x[11] * 38;
        r[11] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[12] + y[4] - x[4] - z[4] + x[12] * 38;
        r[12] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[13] + y[5] - x[5] - z[5] + x[13] * 38;
        r[13] = v & 0xFFFF;
        v = 0x7fff80 + ((v / 0x10000) | 0) + z[14] + y[6] - x[6] - z[6] + x[14] * 38;
        r[14] = v & 0xFFFF;
        let r15 = 0x7fff80 + ((v / 0x10000) | 0) + z[15] + y[7] - x[7] - z[7] + x[15] * 38;
        Curve25519.c255lreduce(r, r15);
    }
    static c255lreduce(a, a15) {
        let v = a15;
        a[15] = v & 0x7FFF;
        v = ((v / 0x8000) | 0) * 19;
        for (let i = 0; i <= 14; ++i) {
            v += a[i];
            a[i] = v & 0xFFFF;
            v = ((v / 0x10000) | 0);
        }
        a[15] += v;
    }
    static add(r, a, b) {
        let v;
        v = (((a[15] / 0x8000) | 0) + ((b[15] / 0x8000) | 0)) * 19 + a[0] + b[0];
        r[0] = v & 0xFFFF;
        for (let i = 1; i <= 14; ++i) {
            v = ((v / 0x10000) | 0) + a[i] + b[i];
            r[i] = v & 0xFFFF;
        }
        r[15] = ((v / 0x10000) | 0) + (a[15] & 0x7FFF) + (b[15] & 0x7FFF);
    }
    static sub(r, a, b) {
        let v;
        v = 0x80000 + (((a[15] / 0x8000) | 0) - ((b[15] / 0x8000) | 0) - 1) * 19 + a[0] - b[0];
        r[0] = v & 0xFFFF;
        for (let i = 1; i <= 14; ++i) {
            v = ((v / 0x10000) | 0) + 0x7fff8 + a[i] - b[i];
            r[i] = v & 0xFFFF;
        }
        r[15] = ((v / 0x10000) | 0) + 0x7ff8 + (a[15] & 0x7FFF) - (b[15] & 0x7FFF);
    }
    static mul_small(r, a, m) {
        let v;
        v = a[0] * m;
        r[0] = v & 0xFFFF;
        for (let i = 1; i <= 14; ++i) {
            v = ((v / 0x10000) | 0) + a[i] * m;
            r[i] = v & 0xFFFF;
        }
        let r15 = ((v / 0x10000) | 0) + a[15] * m;
        Curve25519.c255lreduce(r, r15);
    }
    static mont_prep(t1, t2, ax, az) {
        Curve25519.add(t1, ax, az);
        Curve25519.sub(t2, ax, az);
    }
    static mont_add(t1, t2, t3, t4, ax, az, dx) {
        Curve25519.mul(ax, t2, t3);
        Curve25519.mul(az, t1, t4);
        Curve25519.add(t1, ax, az);
        Curve25519.sub(t2, ax, az);
        Curve25519.sqr(ax, t1);
        Curve25519.sqr(t1, t2);
        Curve25519.mul(az, t1, dx);
    }
    static mont_dbl(t1, t2, t3, t4, bx, bz) {
        Curve25519.sqr(t1, t3);
        Curve25519.sqr(t2, t4);
        Curve25519.mul(bx, t1, t2);
        Curve25519.sub(t2, t1, t2);
        Curve25519.mul_small(bz, t2, 121665);
        Curve25519.add(t1, t1, bz);
        Curve25519.mul(bz, t1, t2);
    }
    static x_to_y2(t, y2, x) {
        Curve25519.sqr(t, x);
        Curve25519.mul_small(y2, x, 486662);
        Curve25519.add(t, t, y2);
        Curve25519.add(t, t, Curve25519.C1);
        Curve25519.mul(y2, t, x);
    }
    static core(Px, s, k, Gx) {
        let dx = Curve25519.createUnpackedArray();
        let t1 = Curve25519.createUnpackedArray();
        let t2 = Curve25519.createUnpackedArray();
        let t3 = Curve25519.createUnpackedArray();
        let t4 = Curve25519.createUnpackedArray();
        let x = [Curve25519.createUnpackedArray(), Curve25519.createUnpackedArray()];
        let z = [Curve25519.createUnpackedArray(), Curve25519.createUnpackedArray()];
        let i, j;
        if (Gx !== null)
            Curve25519.unpack(dx, Gx);
        else
            Curve25519.set(dx, 9);
        Curve25519.set(x[0], 1);
        Curve25519.set(z[0], 0);
        Curve25519.cpy(x[1], dx);
        Curve25519.set(z[1], 1);
        for (i = 32; i-- !== 0;) {
            for (j = 8; j-- !== 0;) {
                let bit1 = (k[i] & 0xFF) >> j & 1;
                let bit0 = ~(k[i] & 0xFF) >> j & 1;
                let ax = x[bit0];
                let az = z[bit0];
                let bx = x[bit1];
                let bz = z[bit1];
                Curve25519.mont_prep(t1, t2, ax, az);
                Curve25519.mont_prep(t3, t4, bx, bz);
                Curve25519.mont_add(t1, t2, t3, t4, ax, az, dx);
                Curve25519.mont_dbl(t1, t2, t3, t4, bx, bz);
            }
        }
        Curve25519.recip(t1, z[0], 0);
        Curve25519.mul(dx, x[0], t1);
        Curve25519.pack(dx, Px);
        if (s !== null) {
            Curve25519.x_to_y2(t2, t1, dx);
            Curve25519.recip(t3, z[1], 0);
            Curve25519.mul(t2, x[1], t3);
            Curve25519.add(t2, t2, dx);
            Curve25519.add(t2, t2, Curve25519.C486671);
            Curve25519.sub(dx, dx, Curve25519.C9);
            Curve25519.sqr(t3, dx);
            Curve25519.mul(dx, t2, t3);
            Curve25519.sub(dx, dx, t1);
            Curve25519.sub(dx, dx, Curve25519.C39420360);
            Curve25519.mul(t1, dx, Curve25519.BASE_R2Y);
            if (Curve25519.is_negative(t1) !== 0)
                Curve25519.cpy32(s, k);
            else
                Curve25519.mula_small(s, Curve25519.ORDER_TIMES_8, 0, k, 32, -1);
            let temp1 = new Array(32);
            let temp2 = new Array(64);
            let temp3 = new Array(64);
            Curve25519.cpy32(temp1, Curve25519.ORDER);
            Curve25519.cpy32(s, Curve25519.egcd32(temp2, temp3, s, temp1));
            if ((s[31] & 0x80) !== 0)
                Curve25519.mula_small(s, s, 0, Curve25519.ORDER, 32, 1);
        }
    }
}
exports.Curve25519 = Curve25519;
Curve25519.KEY_SIZE = 32;
Curve25519.UNPACKED_SIZE = 16;
Curve25519.ORDER = [
    237, 211, 245, 92,
    26, 99, 18, 88,
    214, 156, 247, 162,
    222, 249, 222, 20,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 16
];
Curve25519.ORDER_TIMES_8 = [
    104, 159, 174, 231,
    210, 24, 147, 192,
    178, 230, 188, 23,
    245, 206, 247, 166,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 128
];
Curve25519.BASE_2Y = [
    22587, 610, 29883, 44076,
    15515, 9479, 25859, 56197,
    23910, 4462, 17831, 16322,
    62102, 36542, 52412, 16035
];
Curve25519.BASE_R2Y = [
    5744, 16384, 61977, 54121,
    8776, 18501, 26522, 34893,
    23833, 5823, 55924, 58749,
    24147, 14085, 13606, 6080
];
Curve25519.C1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Curve25519.C9 = [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Curve25519.C486671 = [0x6D0F, 0x0007, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Curve25519.C39420360 = [0x81C8, 0x0259, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Curve25519.P25 = 33554431;
Curve25519.P26 = 67108863;
//# sourceMappingURL=curve25519.js.map