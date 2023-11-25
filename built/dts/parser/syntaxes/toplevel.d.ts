import type * as Ast from '../../node.js';
import type { ITokenStream } from '../streams/token-stream.js';
/**
 * ```abnf
 * TopLevel = *(Namespace / Meta / Statement)
 * ```
*/
export declare function parseTopLevel(s: ITokenStream): Ast.Node[];
/**
 * ```abnf
 * Namespace = "::" IDENT "{" *(VarDef / FnDef / Namespace) "}"
 * ```
*/
export declare function parseNamespace(s: ITokenStream): Ast.Node;
/**
 * ```abnf
 * Meta = "###" [IDENT] StaticExpr
 * ```
*/
export declare function parseMeta(s: ITokenStream): Ast.Node;
//# sourceMappingURL=toplevel.d.ts.map