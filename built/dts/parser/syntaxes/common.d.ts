import type { ITokenStream } from '../streams/token-stream.js';
import type * as Ast from '../../node.js';
/**
 * ```abnf
 * Params = "(" [IDENT [":" Type] *(SEP IDENT [":" Type])] ")"
 * ```
*/
export declare function parseParams(s: ITokenStream): {
    name: string;
    argType?: Ast.Node;
}[];
/**
 * ```abnf
 * Block = "{" *Statement "}"
 * ```
*/
export declare function parseBlock(s: ITokenStream): Ast.Node[];
export declare function parseType(s: ITokenStream): Ast.Node;
//# sourceMappingURL=common.d.ts.map