export const NULL = {
    type: 'null',
};
export const TRUE = {
    type: 'bool',
    value: true,
};
export const FALSE = {
    type: 'bool',
    value: false,
};
export const NUM = (num) => ({
    type: 'num',
    value: num,
});
export const STR = (str) => ({
    type: 'str',
    value: str,
});
export const BOOL = (bool) => ({
    type: 'bool',
    value: bool,
});
export const OBJ = (obj) => ({
    type: 'obj',
    value: obj,
});
export const ARR = (arr) => ({
    type: 'arr',
    value: arr,
});
export const FN = (args, statements, scope) => ({
    type: 'fn',
    args: args,
    statements: statements,
    scope: scope,
});
export const FN_NATIVE = (fn) => ({
    type: 'fn',
    native: fn,
});
// Return文で値が返されたことを示すためのラッパー
export const RETURN = (v) => ({
    type: 'return',
    value: v,
});
export const BREAK = () => ({
    type: 'break',
    value: null,
});
export const CONTINUE = () => ({
    type: 'continue',
    value: null,
});
export const unWrapRet = (v) => v.type === 'return' ? v.value : v;
export const ERROR = (name, info) => ({
    type: 'error',
    value: name,
    info: info,
});
//# sourceMappingURL=value.js.map