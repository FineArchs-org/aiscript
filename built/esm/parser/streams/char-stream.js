/**
 * 入力文字列から文字を読み取るクラス
*/
export class CharStream {
    pages;
    firstPageIndex;
    lastPageIndex;
    pageIndex;
    address;
    _char;
    /** zero-based number */
    line;
    /** zero-based number */
    column;
    constructor(source, opts) {
        this.pages = new Map();
        this.pages.set(0, source);
        this.firstPageIndex = 0;
        this.lastPageIndex = 0;
        this.pageIndex = 0;
        this.address = 0;
        this.line = opts?.line ?? 0;
        this.column = opts?.column ?? 0;
        this.moveNext();
    }
    /**
     * ストリームの終わりに達しているかどうかを取得します。
    */
    get eof() {
        return this.endOfPage && this.isLastPage;
    }
    /**
     * カーソル位置にある文字を取得します。
    */
    get char() {
        if (this.eof) {
            throw new Error('end of stream');
        }
        return this._char;
    }
    /**
     * カーソル位置に対応するソースコード上の行番号と列番号を取得します。
    */
    getPos() {
        return {
            line: (this.line + 1),
            column: (this.column + 1),
        };
    }
    /**
     * カーソル位置を次の文字へ進めます。
    */
    next() {
        if (!this.eof && this._char === '\n') {
            this.line++;
            this.column = 0;
        }
        else {
            this.column++;
        }
        this.incAddr();
        this.moveNext();
    }
    /**
     * カーソル位置を前の文字へ戻します。
    */
    prev() {
        this.decAddr();
        this.movePrev();
    }
    get isFirstPage() {
        return (this.pageIndex <= this.firstPageIndex);
    }
    get isLastPage() {
        return (this.pageIndex >= this.lastPageIndex);
    }
    get endOfPage() {
        const page = this.pages.get(this.pageIndex);
        return (this.address >= page.length);
    }
    moveNext() {
        this.loadChar();
        while (true) {
            if (!this.eof && this._char === '\r') {
                this.incAddr();
                this.loadChar();
                continue;
            }
            break;
        }
    }
    incAddr() {
        if (!this.endOfPage) {
            this.address++;
        }
        else if (!this.isLastPage) {
            this.pageIndex++;
            this.address = 0;
        }
    }
    movePrev() {
        this.loadChar();
        while (true) {
            if (!this.eof && this._char === '\r') {
                this.decAddr();
                this.loadChar();
                continue;
            }
            break;
        }
    }
    decAddr() {
        if (this.address > 0) {
            this.address--;
        }
        else if (!this.isFirstPage) {
            this.pageIndex--;
            this.address = this.pages.get(this.pageIndex).length - 1;
        }
    }
    loadChar() {
        if (this.eof) {
            this._char = undefined;
        }
        else {
            this._char = this.pages.get(this.pageIndex)[this.address];
        }
    }
}
//# sourceMappingURL=char-stream.js.map