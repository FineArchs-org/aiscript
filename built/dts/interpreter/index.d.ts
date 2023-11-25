/**
 * AiScript interpreter
 */
import { AiScriptError } from '../error.js';
import { Scope } from './scope.js';
import type { Value, VFn } from './value.js';
import type * as Ast from '../node.js';
export declare class Interpreter {
    private opts;
    stepCount: number;
    private stop;
    scope: Scope;
    private abortHandlers;
    private vars;
    constructor(consts: Record<string, Value>, opts?: {
        in?(q: string): Promise<string>;
        out?(value: Value): void;
        err?(e: AiScriptError): void;
        log?(type: string, params: Record<string, any>): void;
        maxStep?: number;
    });
    exec(script?: Ast.Node[]): Promise<void>;
    /**
     * Executes AiScript Function.
     * When it fails,
     * (i)If error callback is registered via constructor, this.abort is called and the callback executed, then returns ERROR('func_failed').
     * (ii)Otherwise, just throws a error.
     *
     * @remarks This is the same function as that passed to AiScript NATIVE functions as opts.topCall.
     *
     * @param fn - the function
     * @param args - arguments for the function
     * @returns Return value of the function, or ERROR('func_failed') when the (i) condition above is fulfilled.
     */
    execFn(fn: VFn, args: Value[]): Promise<Value>;
    /**
     * Executes AiScript Function.
     * Almost same as execFn but when error occurs this always throws and never calls callback.
     *
     * @remarks This is the same function as that passed to AiScript NATIVE functions as opts.call.
     *
     * @param fn - the function
     * @param args - arguments for the function
     * @returns Return value of the function.
     */
    execFnSimple(fn: VFn, args: Value[]): Promise<Value>;
    static collectMetadata(script?: Ast.Node[]): Map<any, any> | undefined;
    private handleError;
    private log;
    private collectNs;
    private collectNsMember;
    private _fn;
    private _eval;
    private _run;
    registerAbortHandler(handler: () => void): void;
    unregisterAbortHandler(handler: () => void): void;
    abort(): void;
    private assign;
}
//# sourceMappingURL=index.d.ts.map