function stringify<Type>(object: Type): string {
    return JSON.stringify(object)
}

function jsonParse<Type>(objectStr: string): Type | Type[] {
    return JSON.parse(objectStr)
}

export { stringify, jsonParse }