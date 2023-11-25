import { AiScriptSyntaxError } from './error.js';
export function T_SIMPLE(name) {
    return {
        type: 'simple',
        name: name,
    };
}
export function isAny(x) {
    return x.type === 'simple' && x.name === 'any';
}
export function T_GENERIC(name, inners) {
    return {
        type: 'generic',
        name: name,
        inners: inners,
    };
}
export function T_FN(args, result) {
    return {
        type: 'fn',
        args,
        result,
    };
}
function assertTSimple(t) { if (t.type !== 'simple') {
    throw new TypeError('assertTSimple failed.');
} }
function assertTGeneric(t) { if (t.type !== 'generic') {
    throw new TypeError('assertTGeneric failed.');
} }
function assertTFn(t) { if (t.type !== 'fn') {
    throw new TypeError('assertTFn failed.');
} }
// Utility
export function isCompatibleType(a, b) {
    if (isAny(a) || isAny(b))
        return true;
    if (a.type !== b.type)
        return false;
    switch (a.type) {
        case 'simple': {
            assertTSimple(b); // NOTE: TypeGuardが効かない
            if (a.name !== b.name)
                return false;
            break;
        }
        case 'generic': {
            assertTGeneric(b); // NOTE: TypeGuardが効かない
            // name
            if (a.name !== b.name)
                return false;
            // inners
            if (a.inners.length !== b.inners.length)
                return false;
            for (let i = 0; i < a.inners.length; i++) {
                if (!isCompatibleType(a.inners[i], b.inners[i]))
                    return false;
            }
            break;
        }
        case 'fn': {
            assertTFn(b); // NOTE: TypeGuardが効かない
            // fn result
            if (!isCompatibleType(a.result, b.result))
                return false;
            // fn args
            if (a.args.length !== b.args.length)
                return false;
            for (let i = 0; i < a.args.length; i++) {
                if (!isCompatibleType(a.args[i], b.args[i]))
                    return false;
            }
            break;
        }
    }
    return true;
}
export function getTypeName(type) {
    switch (type.type) {
        case 'simple': {
            return type.name;
        }
        case 'generic': {
            return `${type.name}<${type.inners.map(inner => getTypeName(inner)).join(', ')}>`;
        }
        case 'fn': {
            return `@(${type.args.map(arg => getTypeName(arg)).join(', ')}) { ${getTypeName(type.result)} }`;
        }
    }
}
export function getTypeNameBySource(typeSource) {
    switch (typeSource.type) {
        case 'namedTypeSource': {
            if (typeSource.inner) {
                const inner = getTypeNameBySource(typeSource.inner);
                return `${typeSource.name}<${inner}>`;
            }
            else {
                return typeSource.name;
            }
        }
        case 'fnTypeSource': {
            const args = typeSource.args.map(arg => getTypeNameBySource(arg)).join(', ');
            const result = getTypeNameBySource(typeSource.result);
            return `@(${args}) { ${result} }`;
        }
    }
}
export function getTypeBySource(typeSource) {
    if (typeSource.type === 'namedTypeSource') {
        switch (typeSource.name) {
            // simple types
            case 'null':
            case 'bool':
            case 'num':
            case 'str':
            case 'any':
            case 'void': {
                if (typeSource.inner == null) {
                    return T_SIMPLE(typeSource.name);
                }
                break;
            }
            // alias for Generic types
            case 'arr':
            case 'obj': {
                let innerType;
                if (typeSource.inner != null) {
                    innerType = getTypeBySource(typeSource.inner);
                }
                else {
                    innerType = T_SIMPLE('any');
                }
                return T_GENERIC(typeSource.name, [innerType]);
            }
        }
        throw new AiScriptSyntaxError(`Unknown type: '${getTypeNameBySource(typeSource)}'`, typeSource.loc);
    }
    else {
        const argTypes = typeSource.args.map(arg => getTypeBySource(arg));
        return T_FN(argTypes, getTypeBySource(typeSource.result));
    }
}
//# sourceMappingURL=type.js.map