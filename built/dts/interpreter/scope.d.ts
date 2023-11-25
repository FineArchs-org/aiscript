import type { Value } from './value.js';
import type { Variable } from './variable.js';
export declare class Scope {
    private parent?;
    private layerdStates;
    name: string;
    opts: {
        log?(type: string, params: Record<string, any>): void;
        onUpdated?(name: string, value: Value): void;
    };
    constructor(layerdStates?: Scope['layerdStates'], parent?: Scope, name?: Scope['name']);
    private log;
    private onUpdated;
    createChildScope(states?: Map<string, Variable>, name?: Scope['name']): Scope;
    /**
     * 指定した名前の変数を取得します
     * @param name - 変数名
     */
    get(name: string): Value;
    /**
     * 指定した名前の変数が存在するか判定します
     * @param name - 変数名
     */
    exists(name: string): boolean;
    /**
     * 現在のスコープに存在する全ての変数を取得します
     */
    getAll(): Map<string, Variable>;
    /**
     * 指定した名前の変数を現在のスコープに追加します
     * @param name - 変数名
     * @param val - 初期値
     */
    add(name: string, variable: Variable): void;
    /**
     * 指定した名前の変数に値を再代入します
     * @param name - 変数名
     * @param val - 値
     */
    assign(name: string, val: Value): void;
}
//# sourceMappingURL=scope.d.ts.map