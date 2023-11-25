/**
 * CSTノード
 *
 * パーサーが生成する直接的な処理結果です。
 * パーサーが生成しやすい形式になっているため、インタプリタ等では操作しにくい構造になっていることがあります。
 * この処理結果がプラグインによって処理されるとASTノードとなります。
*/
const statementTypes = [
    'def', 'return', 'attr', 'each', 'for', 'loop', 'break', 'continue', 'assign', 'addAssign', 'subAssign',
];
export function isStatement(x) {
    return statementTypes.includes(x.type);
}
const expressionTypes = [
    'infix', 'if', 'fn', 'match', 'block', 'exists', 'tmpl', 'str', 'num', 'bool', 'null', 'obj', 'arr', 'identifier', 'call', 'index', 'prop',
];
export function isExpression(x) {
    return expressionTypes.includes(x.type);
}
// AST
export function hasChainProp(x) {
    return 'chain' in x && x.chain !== null;
}
export function CALL(target, args, loc) {
    return { type: 'call', target, args, loc };
}
export function INDEX(target, index, loc) {
    return { type: 'index', target, index, loc };
}
export function PROP(target, name, loc) {
    return { type: 'prop', target, name, loc };
}
//# sourceMappingURL=node.js.map