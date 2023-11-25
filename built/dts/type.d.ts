import type * as Ast from './node.js';
export type TSimple<N extends string = string> = {
    type: 'simple';
    name: N;
};
export declare function T_SIMPLE<T extends string>(name: T): TSimple<T>;
export declare function isAny(x: Type): x is TSimple<'any'>;
export type TGeneric<N extends string = string> = {
    type: 'generic';
    name: N;
    inners: Type[];
};
export declare function T_GENERIC<N extends string>(name: N, inners: Type[]): TGeneric<N>;
export type TFn = {
    type: 'fn';
    args: Type[];
    result: Type;
};
export declare function T_FN(args: Type[], result: Type): TFn;
export type Type = TSimple | TGeneric | TFn;
export declare function isCompatibleType(a: Type, b: Type): boolean;
export declare function getTypeName(type: Type): string;
export declare function getTypeNameBySource(typeSource: Ast.TypeSource): string;
export declare function getTypeBySource(typeSource: Ast.TypeSource): Type;
//# sourceMappingURL=type.d.ts.map