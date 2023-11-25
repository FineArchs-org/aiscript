import type { Loc } from './node.js';
export declare abstract class AiScriptError extends Error {
    name: string;
    info?: any;
    loc?: Loc;
    constructor(message: string, info?: any);
}
/**
 * Wrapper for non-AiScript errors.
 */
export declare class NonAiScriptError extends AiScriptError {
    name: string;
    constructor(error: any);
}
/**
 * Parse-time errors.
 */
export declare class AiScriptSyntaxError extends AiScriptError {
    loc: Loc;
    name: string;
    constructor(message: string, loc: Loc, info?: any);
}
/**
 * Type validation(parser/plugins/validate-type) errors.
 */
export declare class AiScriptTypeError extends AiScriptError {
    loc: Loc;
    name: string;
    constructor(message: string, loc: Loc, info?: any);
}
/**
 * Namespace collection errors.
 */
export declare class AiScriptNamespaceError extends AiScriptError {
    loc: Loc;
    name: string;
    constructor(message: string, loc: Loc, info?: any);
}
/**
 * Interpret-time errors.
 */
export declare class AiScriptRuntimeError extends AiScriptError {
    name: string;
    constructor(message: string, info?: any);
}
/**
 * RuntimeError for illegal access to arrays.
 */
export declare class AiScriptIndexOutOfRangeError extends AiScriptRuntimeError {
    constructor(message: string, info?: any);
}
//# sourceMappingURL=error.d.ts.map