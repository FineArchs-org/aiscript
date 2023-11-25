import type { Value, VStr, VNum, VBool, VFn, VObj, VArr } from './value.js';
export declare function expectAny(val: Value | null | undefined): asserts val is Value;
export declare function assertBoolean(val: Value | null | undefined): asserts val is VBool;
export declare function assertFunction(val: Value | null | undefined): asserts val is VFn;
export declare function assertString(val: Value | null | undefined): asserts val is VStr;
export declare function assertNumber(val: Value | null | undefined): asserts val is VNum;
export declare function assertObject(val: Value | null | undefined): asserts val is VObj;
export declare function assertArray(val: Value | null | undefined): asserts val is VArr;
export declare function isBoolean(val: Value): val is VBool;
export declare function isFunction(val: Value): val is VFn;
export declare function isString(val: Value): val is VStr;
export declare function isNumber(val: Value): val is VNum;
export declare function isObject(val: Value): val is VObj;
export declare function isArray(val: Value): val is VArr;
export declare function eq(a: Value, b: Value): boolean;
export declare function valToString(val: Value, simple?: boolean): string;
export declare function valToJs(val: Value): any;
export declare function jsToVal(val: any): Value;
export declare function getLangVersion(input: string): string | null;
/**
 * @param literalLike - `true` なら出力をリテラルに似せる
 */
export declare function reprValue(value: Value, literalLike?: boolean, processedObjects?: Set<object>): string;
//# sourceMappingURL=util.d.ts.map