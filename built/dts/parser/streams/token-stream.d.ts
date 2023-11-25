import { TokenKind } from '../token.js';
import type { Token } from '../token.js';
/**
 * トークンの読み取りに関するインターフェース
*/
export interface ITokenStream {
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
}
/**
 * トークン列からトークンを読み取るクラス
*/
export declare class TokenStream implements ITokenStream {
    private source;
    private index;
    private _token;
    constructor(source: TokenStream['source']);
    private get eof();
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
    private load;
}
//# sourceMappingURL=token-stream.d.ts.map