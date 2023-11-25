import * as Cst from './node.js';
export function visitNode(node, fn) {
    const result = fn(node);
    // nested nodes
    switch (result.type) {
        case 'def': {
            result.expr = visitNode(result.expr, fn);
            break;
        }
        case 'return': {
            result.expr = visitNode(result.expr, fn);
            break;
        }
        case 'each': {
            result.items = visitNode(result.items, fn);
            result.for = visitNode(result.for, fn);
            break;
        }
        case 'for': {
            if (result.from != null) {
                result.from = visitNode(result.from, fn);
            }
            if (result.to != null) {
                result.to = visitNode(result.to, fn);
            }
            if (result.times != null) {
                result.times = visitNode(result.times, fn);
            }
            result.for = visitNode(result.for, fn);
            break;
        }
        case 'loop': {
            for (let i = 0; i < result.statements.length; i++) {
                result.statements[i] = visitNode(result.statements[i], fn);
            }
            break;
        }
        case 'addAssign':
        case 'subAssign':
        case 'assign': {
            result.expr = visitNode(result.expr, fn);
            result.dest = visitNode(result.dest, fn);
            break;
        }
        case 'infix': {
            for (let i = 0; i < result.operands.length; i++) {
                result.operands[i] = visitNode(result.operands[i], fn);
            }
            break;
        }
        case 'not': {
            result.expr = visitNode(result.expr, fn);
            break;
        }
        case 'if': {
            result.cond = visitNode(result.cond, fn);
            result.then = visitNode(result.then, fn);
            for (const prop of result.elseif) {
                prop.cond = visitNode(prop.cond, fn);
                prop.then = visitNode(prop.then, fn);
            }
            if (result.else != null) {
                result.else = visitNode(result.else, fn);
            }
            break;
        }
        case 'fn': {
            for (let i = 0; i < result.children.length; i++) {
                result.children[i] = visitNode(result.children[i], fn);
            }
            break;
        }
        case 'match': {
            result.about = visitNode(result.about, fn);
            for (const prop of result.qs) {
                prop.q = visitNode(prop.q, fn);
                prop.a = visitNode(prop.a, fn);
            }
            if (result.default != null) {
                result.default = visitNode(result.default, fn);
            }
            break;
        }
        case 'block': {
            for (let i = 0; i < result.statements.length; i++) {
                result.statements[i] = visitNode(result.statements[i], fn);
            }
            break;
        }
        case 'exists': {
            result.identifier = visitNode(result.identifier, fn);
            break;
        }
        case 'tmpl': {
            for (let i = 0; i < result.tmpl.length; i++) {
                const item = result.tmpl[i];
                if (typeof item !== 'string') {
                    result.tmpl[i] = visitNode(item, fn);
                }
            }
            break;
        }
        case 'obj': {
            for (const item of result.value) {
                result.value.set(item[0], visitNode(item[1], fn));
            }
            break;
        }
        case 'arr': {
            for (let i = 0; i < result.value.length; i++) {
                result.value[i] = visitNode(result.value[i], fn);
            }
            break;
        }
        case 'callChain': {
            for (let i = 0; i < result.args.length; i++) {
                result.args[i] = visitNode(result.args[i], fn);
            }
            break;
        }
        case 'indexChain': {
            result.index = visitNode(result.index, fn);
            break;
        }
        case 'call': {
            result.target = visitNode(result.target, fn);
            for (let i = 0; i < result.args.length; i++) {
                result.args[i] = visitNode(result.args[i], fn);
            }
            break;
        }
        case 'index': {
            result.target = visitNode(result.target, fn);
            result.index = visitNode(result.index, fn);
            break;
        }
        case 'prop': {
            result.target = visitNode(result.target, fn);
            break;
        }
        case 'ns': {
            for (let i = 0; i < result.members.length; i++) {
                result.members[i] = visitNode(result.members[i], fn);
            }
            break;
        }
        case 'or':
        case 'and': {
            result.left = visitNode(result.left, fn);
            result.right = visitNode(result.right, fn);
            break;
        }
    }
    if (Cst.hasChainProp(result)) {
        if (result.chain != null) {
            for (let i = 0; i < result.chain.length; i++) {
                result.chain[i] = visitNode(result.chain[i], fn);
            }
        }
    }
    return result;
}
//# sourceMappingURL=visit.js.map