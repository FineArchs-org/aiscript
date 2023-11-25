import type * as Ast from '../node.js';
export type ParserPlugin = (nodes: Ast.Node[]) => Ast.Node[];
export type PluginType = 'validate' | 'transform';
export declare class Parser {
    private static instance?;
    private plugins;
    constructor();
    static parse(input: string): Ast.Node[];
    addPlugin(type: PluginType, plugin: ParserPlugin): void;
    parse(input: string): Ast.Node[];
}
//# sourceMappingURL=index.d.ts.map