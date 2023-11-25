/**
 * CSTノード
 *
 * パーサーが生成する直接的な処理結果です。
 * パーサーが生成しやすい形式になっているため、インタプリタ等では操作しにくい構造になっていることがあります。
 * この処理結果がプラグインによって処理されるとASTノードとなります。
*/
export type Node = Namespace | Meta | Statement | Expression | ChainMember | TypeSource;
export type Statement = Definition | Return | Attribute | // AST
Each | For | Loop | Break | Continue | Assign | AddAssign | SubAssign;
export declare function isStatement(x: Node): x is Statement;
export type Expression = Infix | Not | And | Or | If | Fn | Match | Block | Exists | Tmpl | Str | Num | Bool | Null | Obj | Arr | Identifier | Call | // IR
Index | // IR
Prop;
export declare function isExpression(x: Node): x is Expression;
type NodeBase = {
    __AST_NODE: never;
    loc?: {
        start: number;
        end: number;
    };
};
export type Namespace = NodeBase & {
    type: 'ns';
    name: string;
    members: (Definition | Namespace)[];
};
export type Meta = NodeBase & {
    type: 'meta';
    name: string | null;
    value: Expression;
};
export type Definition = NodeBase & {
    type: 'def';
    name: string;
    varType?: TypeSource;
    expr: Expression;
    mut: boolean;
    attr?: Attribute[];
};
export type Attribute = NodeBase & {
    type: 'attr';
    name: string;
    value: Expression;
};
export type Return = NodeBase & {
    type: 'return';
    expr: Expression;
};
export type Each = NodeBase & {
    type: 'each';
    var: string;
    items: Expression;
    for: Statement | Expression;
};
export type For = NodeBase & {
    type: 'for';
    var?: string;
    from?: Expression;
    to?: Expression;
    times?: Expression;
    for: Statement | Expression;
};
export type Loop = NodeBase & {
    type: 'loop';
    statements: (Statement | Expression)[];
};
export type Break = NodeBase & {
    type: 'break';
};
export type Continue = NodeBase & {
    type: 'continue';
};
export type AddAssign = NodeBase & {
    type: 'addAssign';
    dest: Expression;
    expr: Expression;
};
export type SubAssign = NodeBase & {
    type: 'subAssign';
    dest: Expression;
    expr: Expression;
};
export type Assign = NodeBase & {
    type: 'assign';
    dest: Expression;
    expr: Expression;
};
export type InfixOperator = '||' | '&&' | '==' | '!=' | '<=' | '>=' | '<' | '>' | '+' | '-' | '*' | '^' | '/' | '%';
export type Infix = NodeBase & {
    type: 'infix';
    operands: Expression[];
    operators: InfixOperator[];
};
export type Not = NodeBase & {
    type: 'not';
    expr: Expression;
};
export type And = NodeBase & {
    type: 'and';
    left: Expression;
    right: Expression;
};
export type Or = NodeBase & {
    type: 'or';
    left: Expression;
    right: Expression;
};
export type If = NodeBase & {
    type: 'if';
    cond: Expression;
    then: Statement | Expression;
    elseif: {
        cond: Expression;
        then: Statement | Expression;
    }[];
    else?: Statement | Expression;
};
export type Fn = NodeBase & ChainProp & {
    type: 'fn';
    args: {
        name: string;
        argType?: TypeSource;
    }[];
    retType?: TypeSource;
    children: (Statement | Expression)[];
};
export type Match = NodeBase & ChainProp & {
    type: 'match';
    about: Expression;
    qs: {
        q: Expression;
        a: Statement | Expression;
    }[];
    default?: Statement | Expression;
};
export type Block = NodeBase & ChainProp & {
    type: 'block';
    statements: (Statement | Expression)[];
};
export type Exists = NodeBase & ChainProp & {
    type: 'exists';
    identifier: Identifier;
};
export type Tmpl = NodeBase & ChainProp & {
    type: 'tmpl';
    tmpl: (string | Expression)[];
};
export type Str = NodeBase & ChainProp & {
    type: 'str';
    value: string;
};
export type Num = NodeBase & ChainProp & {
    type: 'num';
    value: number;
};
export type Bool = NodeBase & ChainProp & {
    type: 'bool';
    value: boolean;
};
export type Null = NodeBase & ChainProp & {
    type: 'null';
};
export type Obj = NodeBase & ChainProp & {
    type: 'obj';
    value: Map<string, Expression>;
};
export type Arr = NodeBase & ChainProp & {
    type: 'arr';
    value: Expression[];
};
export type Identifier = NodeBase & ChainProp & {
    type: 'identifier';
    name: string;
};
type ChainProp = {
    chain?: ChainMember[];
};
export declare function hasChainProp<T extends Node>(x: T): x is T & ChainProp;
export type ChainMember = CallChain | IndexChain | PropChain;
export type CallChain = NodeBase & {
    type: 'callChain';
    args: Expression[];
};
export type IndexChain = NodeBase & {
    type: 'indexChain';
    index: Expression;
};
export type PropChain = NodeBase & {
    type: 'propChain';
    name: string;
};
export type Call = NodeBase & {
    type: 'call';
    target: Expression;
    args: Expression[];
};
export declare function CALL(target: Call['target'], args: Call['args'], loc?: {
    start: number;
    end: number;
}): Call;
export type Index = NodeBase & {
    type: 'index';
    target: Expression;
    index: Expression;
};
export declare function INDEX(target: Index['target'], index: Index['index'], loc?: {
    start: number;
    end: number;
}): Index;
export type Prop = NodeBase & {
    type: 'prop';
    target: Expression;
    name: string;
};
export declare function PROP(target: Prop['target'], name: Prop['name'], loc?: {
    start: number;
    end: number;
}): Prop;
export type TypeSource = NamedTypeSource | FnTypeSource;
export type NamedTypeSource = NodeBase & {
    type: 'namedTypeSource';
    name: string;
    inner?: TypeSource;
};
export type FnTypeSource = NodeBase & {
    type: 'fnTypeSource';
    args: TypeSource[];
    result: TypeSource;
};
export {};
//# sourceMappingURL=node.d.ts.map