import { Scanner } from './scanner.js';
import { parseTopLevel } from './syntaxes/toplevel.js';
import { validateKeyword } from './plugins/validate-keyword.js';
import { validateType } from './plugins/validate-type.js';
export class Parser {
    static instance;
    plugins;
    constructor() {
        this.plugins = {
            validate: [
                validateKeyword,
                validateType,
            ],
            transform: [],
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
        const scanner = new Scanner(input);
        nodes = parseTopLevel(scanner);
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