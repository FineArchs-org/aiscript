import type * as Ast from '../node.js';
export declare function NODE(type: string, params: Record<string, any>, loc: {
    column: number;
    line: number;
}): Ast.Node;
export declare function CALL_NODE(name: string, args: Ast.Node[], loc: {
    column: number;
    line: number;
}): Ast.Node;
//# sourceMappingURL=utils.d.ts.map