/**
 * ASTノード
*/
const statementTypes = [
    'def', 'return', 'each', 'for', 'loop', 'break', 'continue', 'assign', 'addAssign', 'subAssign',
];
export function isStatement(x) {
    return statementTypes.includes(x.type);
}
const expressionTypes = [
    'if', 'fn', 'match', 'block', 'exists', 'tmpl', 'str', 'num', 'bool', 'null', 'obj', 'arr', 'not', 'and', 'or', 'identifier', 'call', 'index', 'prop',
];
export function isExpression(x) {
    return expressionTypes.includes(x.type);
}
//# sourceMappingURL=node.js.map