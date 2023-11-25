import { TokenKind } from '../token.js';
import { AiScriptSyntaxError } from '../../error.js';
import { NODE } from '../utils.js';
import { parseStatement } from './statements.js';
/**
 * ```abnf
 * Params = "(" [IDENT [":" Type] *(SEP IDENT [":" Type])] ")"
 * ```
*/
export function parseParams(s) {
    const items = [];
    s.nextWith(TokenKind.OpenParen);
    if (s.kind === TokenKind.NewLine) {
        s.next();
    }
    while (s.kind !== TokenKind.CloseParen) {
        s.expect(TokenKind.Identifier);
        const name = s.token.value;
        s.next();
        let type;
        if (s.kind === TokenKind.Colon) {
            s.next();
            type = parseType(s);
        }
        items.push({ name, argType: type });
        // separator
        switch (s.kind) {
            case TokenKind.NewLine: {
                s.next();
                break;
            }
            case TokenKind.Comma: {
                s.next();
                if (s.kind === TokenKind.NewLine) {
                    s.next();
                }
                break;
            }
            case TokenKind.CloseParen: {
                break;
            }
            default: {
                throw new AiScriptSyntaxError('separator expected', s.token.loc);
            }
        }
    }
    s.nextWith(TokenKind.CloseParen);
    return items;
}
/**
 * ```abnf
 * Block = "{" *Statement "}"
 * ```
*/
export function parseBlock(s) {
    s.nextWith(TokenKind.OpenBrace);
    while (s.kind === TokenKind.NewLine) {
        s.next();
    }
    const steps = [];
    while (s.kind !== TokenKind.CloseBrace) {
        steps.push(parseStatement(s));
        // terminator
        switch (s.kind) {
            case TokenKind.NewLine:
            case TokenKind.SemiColon: {
                while ([TokenKind.NewLine, TokenKind.SemiColon].includes(s.kind)) {
                    s.next();
                }
                break;
            }
            case TokenKind.CloseBrace: {
                break;
            }
            default: {
                throw new AiScriptSyntaxError('Multiple statements cannot be placed on a single line.', s.token.loc);
            }
        }
    }
    s.nextWith(TokenKind.CloseBrace);
    return steps;
}
//#region Type
export function parseType(s) {
    if (s.kind === TokenKind.At) {
        return parseFnType(s);
    }
    else {
        return parseNamedType(s);
    }
}
/**
 * ```abnf
 * FnType = "@" "(" ParamTypes ")" "=>" Type
 * ParamTypes = [Type *(SEP Type)]
 * ```
*/
function parseFnType(s) {
    const loc = s.token.loc;
    s.nextWith(TokenKind.At);
    s.nextWith(TokenKind.OpenParen);
    const params = [];
    while (s.kind !== TokenKind.CloseParen) {
        if (params.length > 0) {
            switch (s.kind) {
                case TokenKind.Comma: {
                    s.next();
                    break;
                }
                default: {
                    throw new AiScriptSyntaxError('separator expected', s.token.loc);
                }
            }
        }
        const type = parseType(s);
        params.push(type);
    }
    s.nextWith(TokenKind.CloseParen);
    s.nextWith(TokenKind.Arrow);
    const resultType = parseType(s);
    return NODE('fnTypeSource', { args: params, result: resultType }, loc);
}
/**
 * ```abnf
 * NamedType = IDENT ["<" Type ">"]
 * ```
*/
function parseNamedType(s) {
    const loc = s.token.loc;
    s.expect(TokenKind.Identifier);
    const name = s.token.value;
    s.next();
    // inner type
    let inner = null;
    if (s.kind === TokenKind.Lt) {
        s.next();
        inner = parseType(s);
        s.nextWith(TokenKind.Gt);
    }
    return NODE('namedTypeSource', { name, inner }, loc);
}
//#endregion Type
//# sourceMappingURL=common.js.map