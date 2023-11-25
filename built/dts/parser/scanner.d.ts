import { CharStream } from './streams/char-stream.js';
import { TokenKind } from './token.js';
import type { ITokenStream } from './streams/token-stream.js';
import type { Token } from './token.js';
/**
 * 入力文字列からトークンを読み取るクラス
*/
export declare class Scanner implements ITokenStream {
    private stream;
    private _tokens;
    constructor(source: string);
    constructor(stream: CharStream);
    /**
     * カーソル位置にあるトークンを取得します。
    */
    get token(): Token;
    /**
     * カーソル位置にあるトークンの種類を取得します。
    */
    get kind(): TokenKind;
    /**
     * カーソル位置を次のトークンへ進めます。
    */
    next(): void;
    /**
     * トークンの先読みを行います。カーソル位置は移動されません。
    */
    lookahead(offset: number): Token;
    /**
     * カーソル位置にあるトークンが指定したトークンの種類と一致するかを確認します。
     * 一致しなかった場合には文法エラーを発生させます。
    */
    expect(kind: TokenKind): void;
    /**
     * カーソル位置にあるトークンが指定したトークンの種類と一致することを確認し、
     * カーソル位置を次のトークンへ進めます。
    */
    nextWith(kind: TokenKind): void;
    private readToken;
    private tryReadWord;
    private tryReadDigits;
    private readStringLiteral;
    private readTemplate;
    private skipCommentLine;
    private skipCommentRange;
}
//# sourceMappingURL=scanner.d.ts.map