import type { Node } from '../node.js';
import type { Scope } from './scope.js';
export type VNull = {
    type: 'null';
};
export type VBool = {
    type: 'bool';
    value: boolean;
};
export type VNum = {
    type: 'num';
    value: number;
};
export type VStr = {
    type: 'str';
    value: string;
};
export type VArr = {
    type: 'arr';
    value: Value[];
};
export type VObj = {
    type: 'obj';
    value: Map<string, Value>;
};
/**
 * When your AiScript NATIVE function passes VFn.call to other caller(s) whose error thrown outside the scope, use VFn.topCall instead to keep it under AiScript error control system.
 */
export type VFn = {
    type: 'fn';
    args?: string[];
    statements?: Node[];
    native?: (args: (Value | undefined)[], opts: {
        call: (fn: VFn, args: Value[]) => Promise<Value>;
        topCall: (fn: VFn, args: Value[]) => Promise<Value>;
        registerAbortHandler: (handler: () => void) => void;
        unregisterAbortHandler: (handler: () => void) => void;
    }) => Value | Promise<Value> | void;
    scope?: Scope;
};
export type VReturn = {
    type: 'return';
    value: Value;
};
export type VBreak = {
    type: 'break';
    value: null;
};
export type VContinue = {
    type: 'continue';
    value: null;
};
export type VError = {
    type: 'error';
    value: string;
    info?: Value;
};
export type Attr = {
    attr?: {
        name: string;
        value: Value;
    }[];
};
export type Value = (VNull | VBool | VNum | VStr | VArr | VObj | VFn | VReturn | VBreak | VContinue | VError) & Attr;
export declare const NULL: {
    type: "null";
};
export declare const TRUE: {
    type: "bool";
    value: boolean;
};
export declare const FALSE: {
    type: "bool";
    value: boolean;
};
export declare const NUM: (num: VNum['value']) => VNum;
export declare const STR: (str: VStr['value']) => VStr;
export declare const BOOL: (bool: VBool['value']) => VBool;
export declare const OBJ: (obj: VObj['value']) => VObj;
export declare const ARR: (arr: VArr['value']) => VArr;
export declare const FN: (args: VFn['args'], statements: VFn['statements'], scope: VFn['scope']) => VFn;
export declare const FN_NATIVE: (fn: VFn['native']) => VFn;
export declare const RETURN: (v: VReturn['value']) => Value;
export declare const BREAK: () => Value;
export declare const CONTINUE: () => Value;
export declare const unWrapRet: (v: Value) => Value;
export declare const ERROR: (name: string, info?: Value) => Value;
//# sourceMappingURL=value.d.ts.map