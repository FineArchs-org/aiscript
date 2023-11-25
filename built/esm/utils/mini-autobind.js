export function autobind(target, key, descriptor) {
    let fn = descriptor.value;
    return {
        configurable: true,
        get() {
            const bound = fn.bind(this);
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value: bound,
            });
            return bound;
        },
        set(newFn) {
            fn = newFn;
        },
    };
}
//# sourceMappingURL=mini-autobind.js.map