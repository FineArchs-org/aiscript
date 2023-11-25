export function NODE(type, params, loc) {
    const node = { type };
    for (const key of Object.keys(params)) {
        if (params[key] !== undefined) {
            node[key] = params[key];
        }
    }
    node.loc = loc;
    return node;
}
export function CALL_NODE(name, args, loc) {
    return NODE('call', {
        target: NODE('identifier', { name }, loc),
        args,
    }, loc);
}
//# sourceMappingURL=utils.js.map