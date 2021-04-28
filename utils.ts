function stringify<Type>(object: Type | Type[], replace: any, separator: string): string {
    return JSON.stringify(object, replace, separator)
}

function jsonParse<Type>(objectStr: string): Type[] {
    return JSON.parse(objectStr)
}

export { stringify, jsonParse }