/**
 * ASTノード
 *
 * ASTノードはCSTノードをインタプリタ等から操作しやすい構造に変形したものです。
*/
export type Loc = {
    start: number;
    end: number;
};
export type Node = Namespace | Meta | Statement | Expression | TypeSource;
export type Statement = Definition | Return | Each | For | Loop | Break | Continue | Assign | AddAssign | SubAssign;
export declare function isStatement(x: Node): x is Statement;
export type Expression = If | Fn | Match | Block | Exists | Tmpl | Str | Num | Bool | Null | Obj | Arr | Not | And | Or | Identifier | Call | Index | Prop;
export declare function isExpression(x: Node): x is Expression;
type NodeBase = {
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
    attr: Attribute[];
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
export type Fn = NodeBase & {
    type: 'fn';
    args: {
        name: string;
        argType?: TypeSource;
    }[];
    retType?: TypeSource;
    children: (Statement | Expression)[];
};
export type Match = NodeBase & {
    type: 'match';
    about: Expression;
    qs: {
        q: Expression;
        a: Statement | Expression;
    }[];
    default?: Statement | Expression;
};
export type Block = NodeBase & {
    type: 'block';
    statements: (Statement | Expression)[];
};
export type Exists = NodeBase & {
    type: 'exists';
    identifier: Identifier;
};
export type Tmpl = NodeBase & {
    type: 'tmpl';
    tmpl: (string | Expression)[];
};
export type Str = NodeBase & {
    type: 'str';
    value: string;
};
export type Num = NodeBase & {
    type: 'num';
    value: number;
};
export type Bool = NodeBase & {
    type: 'bool';
    value: boolean;
};
export type Null = NodeBase & {
    type: 'null';
};
export type Obj = NodeBase & {
    type: 'obj';
    value: Map<string, Expression>;
};
export type Arr = NodeBase & {
    type: 'arr';
    value: Expression[];
};
export type Identifier = NodeBase & {
    type: 'identifier';
    name: string;
};
export type Call = NodeBase & {
    type: 'call';
    target: Expression;
    args: Expression[];
};
export type Index = NodeBase & {
    type: 'index';
    target: Expression;
    index: Expression;
};
export type Prop = NodeBase & {
    type: 'prop';
    target: Expression;
    name: string;
};
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