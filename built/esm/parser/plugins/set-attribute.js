import { AiScriptSyntaxError } from '../../error.js';
export function setAttribute(nodes) {
    const result = [];
    const stockedAttrs = [];
    for (const node of nodes) {
        if (node.type === 'attr') {
            stockedAttrs.push(node);
        }
        else if (node.type === 'def') {
            if (node.attr == null) {
                node.attr = [];
            }
            node.attr.push(...stockedAttrs);
            // clear all
            stockedAttrs.splice(0, stockedAttrs.length);
            if (node.expr.type === 'fn') {
                node.expr.children = setAttribute(node.expr.children);
            }
            result.push(node);
        }
        else {
            if (stockedAttrs.length > 0) {
                throw new AiScriptSyntaxError('invalid attribute.');
            }
            switch (node.type) {
                case 'fn': {
                    node.children = setAttribute(node.children);
                    break;
                }
                case 'block': {
                    node.statements = setAttribute(node.statements);
                    break;
                }
            }
            result.push(node);
        }
    }
    if (stockedAttrs.length > 0) {
        throw new AiScriptSyntaxError('invalid attribute.');
    }
    return result;
}
//# sourceMappingURL=set-attribute.js.map