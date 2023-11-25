export declare enum TokenKind {
    EOF = 0,
    NewLine = 1,
    Identifier = 2,
    NumberLiteral = 3,
    StringLiteral = 4,
    Template = 5,
    TemplateStringElement = 6,
    TemplateExprElement = 7,
    NullKeyword = 8,
    TrueKeyword = 9,
    FalseKeyword = 10,
    EachKeyword = 11,
    ForKeyword = 12,
    LoopKeyword = 13,
    BreakKeyword = 14,
    ContinueKeyword = 15,
    MatchKeyword = 16,
    CaseKeyword = 17,
    DefaultKeyword = 18,
    IfKeyword = 19,
    ElifKeyword = 20,
    ElseKeyword = 21,
    ReturnKeyword = 22,
    EvalKeyword = 23,
    VarKeyword = 24,
    LetKeyword = 25,
    ExistsKeyword = 26,
    /** "!" */
    Not = 27,
    /** "!=" */
    NotEq = 28,
    /** "#[" */
    OpenSharpBracket = 29,
    /** "###" */
    Sharp3 = 30,
    /** "%" */
    Percent = 31,
    /** "&&" */
    And2 = 32,
    /** "(" */
    OpenParen = 33,
    /** ")" */
    CloseParen = 34,
    /** "*" */
    Asterisk = 35,
    /** "+" */
    Plus = 36,
    /** "+=" */
    PlusEq = 37,
    /** "," */
    Comma = 38,
    /** "-" */
    Minus = 39,
    /** "-=" */
    MinusEq = 40,
    /** "." */
    Dot = 41,
    /** "/" */
    Slash = 42,
    /** ":" */
    Colon = 43,
    /** "::" */
    Colon2 = 44,
    /** ";" */
    SemiColon = 45,
    /** "<" */
    Lt = 46,
    /** "<=" */
    LtEq = 47,
    /** "<:" */
    Out = 48,
    /** "=" */
    Eq = 49,
    /** "==" */
    Eq2 = 50,
    /** "=>" */
    Arrow = 51,
    /** ">" */
    Gt = 52,
    /** ">=" */
    GtEq = 53,
    /** "@" */
    At = 54,
    /** "[" */
    OpenBracket = 55,
    /** "\\" */
    BackSlash = 56,
    /** "]" */
    CloseBracket = 57,
    /** "^" */
    Hat = 58,
    /** "{" */
    OpenBrace = 59,
    /** "||" */
    Or2 = 60,
    /** "}" */
    CloseBrace = 61
}
export type TokenLocation = {
    column: number;
    line: number;
};
export declare class Token {
    kind: TokenKind;
    loc: {
        column: number;
        line: number;
    };
    hasLeftSpacing: boolean;
    /** for number literal, string literal */
    value?: string | undefined;
    /** for template syntax */
    children?: Token[] | undefined;
    constructor(kind: TokenKind, loc: {
        column: number;
        line: number;
    }, hasLeftSpacing?: boolean, 
    /** for number literal, string literal */
    value?: string | undefined, 
    /** for template syntax */
    children?: Token[] | undefined);
}
/**
 * - opts.value: for number literal, string literal
 * - opts.children: for template syntax
*/
export declare function TOKEN(kind: TokenKind, loc: TokenLocation, opts?: {
    hasLeftSpacing?: boolean;
    value?: Token['value'];
    children?: Token['children'];
}): Token;
//# sourceMappingURL=token.d.ts.map