export const Variable = {
    mut(value) {
        return {
            isMutable: true,
            value,
        };
    },
    const(value) {
        return {
            isMutable: false,
            value,
        };
    },
};
//# sourceMappingURL=variable.js.map