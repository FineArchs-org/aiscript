import { AiScriptSyntaxError } from '../../error.js';
import { TOKEN, TokenKind } from '../token.js';
/**
 * トークン列からトークンを読み取るクラス
*/
export class TokenStream {
    source;
    index;
    _token;
    constructor(source) {
        this.source = source;
        this.index = 0;
        this.load();
    }
    get eof() {
        return (this.index >= this.source.length);
    }
    /**
     * カーソル位置にあるトークンを取得します。
    */
    get token() {
        if (this.eof) {
            return TOKEN(TokenKind.EOF, { line: -1, column: -1 });
        }
        return this._token;
    }
    /**
     * カーソル位置にあるトークンの種類を取得します。
    */
    get kind() {
        return this.token.kind;
    }
    /**
     * カーソル位置を次のトークンへ進めます。
    */
    next() {
        if (!this.eof) {
            this.index++;
        }
        this.load();
    }
    /**
     * トークンの先読みを行います。カーソル位置は移動されません。
    */
    lookahead(offset) {
        if (this.index + offset < this.source.length) {
            return this.source[this.index + offset];
        }
        else {
            return TOKEN(TokenKind.EOF, { line: -1, column: -1 });
        }
    }
    /**
     * カーソル位置にあるトークンが指定したトークンの種類と一致するかを確認します。
     * 一致しなかった場合には文法エラーを発生させます。
    */
    expect(kind) {
        if (this.kind !== kind) {
            throw new AiScriptSyntaxError(`unexpected token: ${TokenKind[this.kind]}`, this.token.loc);
        }
    }
    /**
     * カーソル位置にあるトークンが指定したトークンの種類と一致することを確認し、
     * カーソル位置を次のトークンへ進めます。
    */
    nextWith(kind) {
        this.expect(kind);
        this.next();
    }
    load() {
        if (this.eof) {
            this._token = TOKEN(TokenKind.EOF, { line: -1, column: -1 });
        }
        else {
            this._token = this.source[this.index];
        }
    }
}
//# sourceMappingURL=token-stream.js.map