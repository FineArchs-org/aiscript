import { AiScriptSyntaxError } from '../error.js';
import * as parser from './parser.js';
import { validateKeyword } from './plugins/validate-keyword.js';
import { validateType } from './plugins/validate-type.js';
import { setAttribute } from './plugins/set-attribute.js';
import { transformChain } from './plugins/transform-chain.js';
import { infixToFnCall } from './plugins/infix-to-fncall.js';
export class Parser {
    static instance;
    plugins;
    constructor() {
        this.plugins = {
            validate: [
                validateKeyword,
                validateType,
            ],
            transform: [
                setAttribute,
                transformChain,
                infixToFnCall,
            ],
        };
    }
    static parse(input) {
        if (Parser.instance == null) {
            Parser.instance = new Parser();
        }
        return Parser.instance.parse(input);
    }
    addPlugin(type, plugin) {
        switch (type) {
            case 'validate':
                this.plugins.validate.push(plugin);
                break;
            case 'transform':
                this.plugins.transform.push(plugin);
                break;
            default:
                throw new Error('unknown plugin type');
        }
    }
    parse(input) {
        let nodes;
        // generate a node tree
        try {
            // apply preprocessor
            const code = parser.parse(input, { startRule: 'Preprocess' });
            // apply main parser
            nodes = parser.parse(code, { startRule: 'Main' });
        }
        catch (e) {
            if (e.location) {
                if (e.expected) {
                    throw new AiScriptSyntaxError(`Parsing error. (Line ${e.location.start.line}:${e.location.start.column})`, e);
                }
                else {
                    throw new AiScriptSyntaxError(`${e.message} (Line ${e.location.start.line}:${e.location.start.column})`, e);
                }
            }
            throw e;
        }
        // validate the node tree
        for (const plugin of this.plugins.validate) {
            nodes = plugin(nodes);
        }
        // transform the node tree
        for (const plugin of this.plugins.transform) {
            nodes = plugin(nodes);
        }
        return nodes;
    }
}
//# sourceMappingURL=index.js.map