export class AiScriptError extends Error {
    // name is read by Error.prototype.toString
    name = 'AiScript';
    info;
    constructor(message, info) {
        super(message);
        this.info = info;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AiScriptError);
        }
    }
}
/**
 * Wrapper for non-AiScript errors.
 */
export class NonAiScriptError extends AiScriptError {
    name = 'Internal';
    constructor(error) {
        super(error.message ?? `${error}`, error);
    }
}
/**
 * Parse-time errors.
 */
export class AiScriptSyntaxError extends AiScriptError {
    name = 'Syntax';
    constructor(message, info) {
        super(message, info);
    }
}
/**
 * Type validation(parser/plugins/validate-type) errors.
 */
export class AiScriptTypeError extends AiScriptError {
    name = 'Type';
    constructor(message, info) {
        super(message, info);
    }
}
/**
 * Interpret-time errors.
 */
export class AiScriptRuntimeError extends AiScriptError {
    name = 'Runtime';
    constructor(message, info) {
        super(message, info);
    }
}
/**
 * RuntimeError for illegal access to arrays.
 */
export class AiScriptIndexOutOfRangeError extends AiScriptRuntimeError {
    constructor(message, info) {
        super(message, info);
    }
}
//# sourceMappingURL=error.js.map