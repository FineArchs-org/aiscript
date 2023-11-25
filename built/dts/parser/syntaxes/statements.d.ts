import type * as Ast from '../../node.js';
import type { ITokenStream } from '../streams/token-stream.js';
/**
 * ```abnf
 * Statement = VarDef / FnDef / Out / Return / Attr / Each / For / Loop
 *           / Break / Continue / Assign / Expr
 * ```
*/
export declare function parseStatement(s: ITokenStream): Ast.Node;
export declare function parseDefStatement(s: ITokenStream): Ast.Node;
/**
 * ```abnf
 * BlockOrStatement = Block / Statement
 * ```
*/
export declare function parseBlockOrStatement(s: ITokenStream): Ast.Node;
//# sourceMappingURL=statements.d.ts.map