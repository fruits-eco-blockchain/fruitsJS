export declare class Curve25519 {
    static KEY_SIZE: number;
    static UNPACKED_SIZE: number;
    static ORDER: number[];
    static ORDER_TIMES_8: number[];
    static BASE_2Y: number[];
    static BASE_R2Y: number[];
    static C1: number[];
    static C9: number[];
    static C486671: number[];
    static C39420360: number[];
    static P25: number;
    static P26: number;
    static clamp(k: any): void;
    static cpy32(d: any, s: any): void;
    static mula_small(p: any, q: any, m: any, x: any, n: any, z: any): number;
    static mula32(p: any, x: any, y: any, t: any, z: any): number;
    static divmod(q: any, r: any, n: any, d: any, t: any): void;
    static numsize(x: any, n: any): any;
    static egcd32(x: any, y: any, a: any, b: any): any;
    static unpack(x: any, m: any): void;
    static is_overflow(x: any): boolean;
    static pack(x: any, m: any): void;
    static createUnpackedArray(): Uint16Array;
    static cpy(d: any, s: any): void;
    static set(d: any, s: any): void;
    static recip(y: any, x: any, sqrtassist: any): void;
    static is_negative(x: any): number;
    static sqrt(x: any, u: any): void;
    static c255lsqr8h(a7: any, a6: any, a5: any, a4: any, a3: any, a2: any, a1: any, a0: any): any[];
    static sqr(r: any, a: any): void;
    static c255lmul8h(a7: any, a6: any, a5: any, a4: any, a3: any, a2: any, a1: any, a0: any, b7: any, b6: any, b5: any, b4: any, b3: any, b2: any, b1: any, b0: any): any[];
    static mul(r: any, a: any, b: any): void;
    static c255lreduce(a: any, a15: any): void;
    static add(r: any, a: any, b: any): void;
    static sub(r: any, a: any, b: any): void;
    static mul_small(r: any, a: any, m: any): void;
    static mont_prep(t1: any, t2: any, ax: any, az: any): void;
    static mont_add(t1: any, t2: any, t3: any, t4: any, ax: any, az: any, dx: any): void;
    static mont_dbl(t1: any, t2: any, t3: any, t4: any, bx: any, bz: any): void;
    static x_to_y2(t: any, y2: any, x: any): void;
    static core(Px: any, s: any, k: any, Gx: any): void;
}