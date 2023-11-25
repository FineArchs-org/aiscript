/**
 * 入力文字列から文字を読み取るクラス
*/
export declare class CharStream {
    private pages;
    private firstPageIndex;
    private lastPageIndex;
    private pageIndex;
    private address;
    private _char?;
    /** zero-based number */
    private line;
    /** zero-based number */
    private column;
    constructor(source: string, opts?: {
        line?: number;
        column?: number;
    });
    /**
     * ストリームの終わりに達しているかどうかを取得します。
    */
    get eof(): boolean;
    /**
     * カーソル位置にある文字を取得します。
    */
    get char(): string;
    /**
     * カーソル位置に対応するソースコード上の行番号と列番号を取得します。
    */
    getPos(): {
        line: number;
        column: number;
    };
    /**
     * カーソル位置を次の文字へ進めます。
    */
    next(): void;
    /**
     * カーソル位置を前の文字へ戻します。
    */
    prev(): void;
    private get isFirstPage();
    private get isLastPage();
    private get endOfPage();
    private moveNext;
    private incAddr;
    private movePrev;
    private decAddr;
    private loadChar;
}
//# sourceMappingURL=char-stream.d.ts.map