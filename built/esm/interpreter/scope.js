var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autobind } from '../utils/mini-autobind.js';
import { AiScriptRuntimeError } from '../error.js';
export class Scope {
    parent;
    layerdStates;
    name;
    opts = {};
    constructor(layerdStates = [], parent, name) {
        this.layerdStates = layerdStates;
        this.parent = parent;
        this.name = name || (layerdStates.length === 1 ? '<root>' : '<anonymous>');
    }
    log(type, params) {
        if (this.parent) {
            this.parent.log(type, params);
        }
        else {
            if (this.opts.log)
                this.opts.log(type, params);
        }
    }
    onUpdated(name, value) {
        if (this.parent) {
            this.parent.onUpdated(name, value);
        }
        else {
            if (this.opts.onUpdated)
                this.opts.onUpdated(name, value);
        }
    }
    createChildScope(states = new Map(), name) {
        const layer = [states, ...this.layerdStates];
        return new Scope(layer, this, name);
    }
    /**
     * 指定した名前の変数を取得します
     * @param name - 変数名
     */
    get(name) {
        for (const layer of this.layerdStates) {
            if (layer.has(name)) {
                const state = layer.get(name).value;
                this.log('read', { var: name, val: state });
                return state;
            }
        }
        throw new AiScriptRuntimeError(`No such variable '${name}' in scope '${this.name}'`, { scope: this.layerdStates });
    }
    /**
     * 指定した名前の変数が存在するか判定します
     * @param name - 変数名
     */
    exists(name) {
        for (const layer of this.layerdStates) {
            if (layer.has(name)) {
                this.log('exists', { var: name });
                return true;
            }
        }
        this.log('not exists', { var: name });
        return false;
    }
    /**
     * 現在のスコープに存在する全ての変数を取得します
     */
    getAll() {
        const vars = this.layerdStates.reduce((arr, layer) => {
            return [...arr, ...layer];
        }, []);
        return new Map(vars);
    }
    /**
     * 指定した名前の変数を現在のスコープに追加します
     * @param name - 変数名
     * @param val - 初期値
     */
    add(name, variable) {
        this.log('add', { var: name, val: variable });
        const states = this.layerdStates[0];
        if (states.has(name)) {
            throw new AiScriptRuntimeError(`Variable '${name}' is alerady exists in scope '${this.name}'`, { scope: this.layerdStates });
        }
        states.set(name, variable);
        if (this.parent == null)
            this.onUpdated(name, variable.value);
    }
    /**
     * 指定した名前の変数に値を再代入します
     * @param name - 変数名
     * @param val - 値
     */
    assign(name, val) {
        let i = 1;
        for (const layer of this.layerdStates) {
            if (layer.has(name)) {
                const variable = layer.get(name);
                if (!variable.isMutable) {
                    throw new AiScriptRuntimeError(`Cannot assign to an immutable variable ${name}.`);
                }
                variable.value = val;
                this.log('assign', { var: name, val: val });
                if (i === this.layerdStates.length)
                    this.onUpdated(name, val);
                return;
            }
            i++;
        }
        throw new AiScriptRuntimeError(`No such variable '${name}' in scope '${this.name}'`, { scope: this.layerdStates });
    }
}
__decorate([
    autobind
], Scope.prototype, "log", null);
__decorate([
    autobind
], Scope.prototype, "onUpdated", null);
__decorate([
    autobind
], Scope.prototype, "createChildScope", null);
__decorate([
    autobind
], Scope.prototype, "get", null);
__decorate([
    autobind
], Scope.prototype, "exists", null);
__decorate([
    autobind
], Scope.prototype, "getAll", null);
__decorate([
    autobind
], Scope.prototype, "add", null);
__decorate([
    autobind
], Scope.prototype, "assign", null);
//# sourceMappingURL=scope.js.map