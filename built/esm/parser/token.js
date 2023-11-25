export var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["EOF"] = 0] = "EOF";
    TokenKind[TokenKind["NewLine"] = 1] = "NewLine";
    TokenKind[TokenKind["Identifier"] = 2] = "Identifier";
    // literal
    TokenKind[TokenKind["NumberLiteral"] = 3] = "NumberLiteral";
    TokenKind[TokenKind["StringLiteral"] = 4] = "StringLiteral";
    // template string
    TokenKind[TokenKind["Template"] = 5] = "Template";
    TokenKind[TokenKind["TemplateStringElement"] = 6] = "TemplateStringElement";
    TokenKind[TokenKind["TemplateExprElement"] = 7] = "TemplateExprElement";
    // keyword
    TokenKind[TokenKind["NullKeyword"] = 8] = "NullKeyword";
    TokenKind[TokenKind["TrueKeyword"] = 9] = "TrueKeyword";
    TokenKind[TokenKind["FalseKeyword"] = 10] = "FalseKeyword";
    TokenKind[TokenKind["EachKeyword"] = 11] = "EachKeyword";
    TokenKind[TokenKind["ForKeyword"] = 12] = "ForKeyword";
    TokenKind[TokenKind["LoopKeyword"] = 13] = "LoopKeyword";
    TokenKind[TokenKind["BreakKeyword"] = 14] = "BreakKeyword";
    TokenKind[TokenKind["ContinueKeyword"] = 15] = "ContinueKeyword";
    TokenKind[TokenKind["MatchKeyword"] = 16] = "MatchKeyword";
    TokenKind[TokenKind["CaseKeyword"] = 17] = "CaseKeyword";
    TokenKind[TokenKind["DefaultKeyword"] = 18] = "DefaultKeyword";
    TokenKind[TokenKind["IfKeyword"] = 19] = "IfKeyword";
    TokenKind[TokenKind["ElifKeyword"] = 20] = "ElifKeyword";
    TokenKind[TokenKind["ElseKeyword"] = 21] = "ElseKeyword";
    TokenKind[TokenKind["ReturnKeyword"] = 22] = "ReturnKeyword";
    TokenKind[TokenKind["EvalKeyword"] = 23] = "EvalKeyword";
    TokenKind[TokenKind["VarKeyword"] = 24] = "VarKeyword";
    TokenKind[TokenKind["LetKeyword"] = 25] = "LetKeyword";
    TokenKind[TokenKind["ExistsKeyword"] = 26] = "ExistsKeyword";
    /** "!" */
    TokenKind[TokenKind["Not"] = 27] = "Not";
    /** "!=" */
    TokenKind[TokenKind["NotEq"] = 28] = "NotEq";
    /** "#[" */
    TokenKind[TokenKind["OpenSharpBracket"] = 29] = "OpenSharpBracket";
    /** "###" */
    TokenKind[TokenKind["Sharp3"] = 30] = "Sharp3";
    /** "%" */
    TokenKind[TokenKind["Percent"] = 31] = "Percent";
    /** "&&" */
    TokenKind[TokenKind["And2"] = 32] = "And2";
    /** "(" */
    TokenKind[TokenKind["OpenParen"] = 33] = "OpenParen";
    /** ")" */
    TokenKind[TokenKind["CloseParen"] = 34] = "CloseParen";
    /** "*" */
    TokenKind[TokenKind["Asterisk"] = 35] = "Asterisk";
    /** "+" */
    TokenKind[TokenKind["Plus"] = 36] = "Plus";
    /** "+=" */
    TokenKind[TokenKind["PlusEq"] = 37] = "PlusEq";
    /** "," */
    TokenKind[TokenKind["Comma"] = 38] = "Comma";
    /** "-" */
    TokenKind[TokenKind["Minus"] = 39] = "Minus";
    /** "-=" */
    TokenKind[TokenKind["MinusEq"] = 40] = "MinusEq";
    /** "." */
    TokenKind[TokenKind["Dot"] = 41] = "Dot";
    /** "/" */
    TokenKind[TokenKind["Slash"] = 42] = "Slash";
    /** ":" */
    TokenKind[TokenKind["Colon"] = 43] = "Colon";
    /** "::" */
    TokenKind[TokenKind["Colon2"] = 44] = "Colon2";
    /** ";" */
    TokenKind[TokenKind["SemiColon"] = 45] = "SemiColon";
    /** "<" */
    TokenKind[TokenKind["Lt"] = 46] = "Lt";
    /** "<=" */
    TokenKind[TokenKind["LtEq"] = 47] = "LtEq";
    /** "<:" */
    TokenKind[TokenKind["Out"] = 48] = "Out";
    /** "=" */
    TokenKind[TokenKind["Eq"] = 49] = "Eq";
    /** "==" */
    TokenKind[TokenKind["Eq2"] = 50] = "Eq2";
    /** "=>" */
    TokenKind[TokenKind["Arrow"] = 51] = "Arrow";
    /** ">" */
    TokenKind[TokenKind["Gt"] = 52] = "Gt";
    /** ">=" */
    TokenKind[TokenKind["GtEq"] = 53] = "GtEq";
    /** "@" */
    TokenKind[TokenKind["At"] = 54] = "At";
    /** "[" */
    TokenKind[TokenKind["OpenBracket"] = 55] = "OpenBracket";
    /** "\\" */
    TokenKind[TokenKind["BackSlash"] = 56] = "BackSlash";
    /** "]" */
    TokenKind[TokenKind["CloseBracket"] = 57] = "CloseBracket";
    /** "^" */
    TokenKind[TokenKind["Hat"] = 58] = "Hat";
    /** "{" */
    TokenKind[TokenKind["OpenBrace"] = 59] = "OpenBrace";
    /** "||" */
    TokenKind[TokenKind["Or2"] = 60] = "Or2";
    /** "}" */
    TokenKind[TokenKind["CloseBrace"] = 61] = "CloseBrace";
})(TokenKind || (TokenKind = {}));
export class Token {
    kind;
    loc;
    hasLeftSpacing;
    value;
    children;
    constructor(kind, loc, hasLeftSpacing = false, 
    /** for number literal, string literal */
    value, 
    /** for template syntax */
    children) {
        this.kind = kind;
        this.loc = loc;
        this.hasLeftSpacing = hasLeftSpacing;
        this.value = value;
        this.children = children;
    }
}
/**
 * - opts.value: for number literal, string literal
 * - opts.children: for template syntax
*/
export function TOKEN(kind, loc, opts) {
    return new Token(kind, loc, opts?.hasLeftSpacing, opts?.value, opts?.children);
}
//# sourceMappingURL=token.js.map