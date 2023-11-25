export class AiScriptError extends Error {
    // name is read by Error.prototype.toString
    name = 'AiScript';
    info;
    loc;
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
    loc;
    name = 'Syntax';
    constructor(message, loc, info) {
        super(`${message} (Line ${loc.line}, Column ${loc.column})`, info);
        this.loc = loc;
    }
}
/**
 * Type validation(parser/plugins/validate-type) errors.
 */
export class AiScriptTypeError extends AiScriptError {
    loc;
    name = 'Type';
    constructor(message, loc, info) {
        super(`${message} (Line ${loc.line}, Column ${loc.column})`, info);
        this.loc = loc;
    }
}
/**
 * Namespace collection errors.
 */
export class AiScriptNamespaceError extends AiScriptError {
    loc;
    name = 'Namespace';
    constructor(message, loc, info) {
        super(`${message} (Line ${loc.line}, Column ${loc.column})`, info);
        this.loc = loc;
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