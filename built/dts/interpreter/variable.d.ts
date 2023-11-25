import type { Value } from './value.js';
export type Variable = {
    isMutable: false;
    readonly value: Value;
} | {
    isMutable: true;
    value: Value;
};
export declare const Variable: {
    mut(value: Value): Variable;
    const(value: Value): Variable;
};
//# sourceMappingURL=variable.d.ts.map