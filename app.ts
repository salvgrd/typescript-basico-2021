// Aprovechando TypeScript en las funciones

/**
 * Habrá veces en las que necesitemos "tipar" una funcion.
 * Esto puede hacerse en TypeScript con una sintaxis muy similar a las de una arroy function.
 */

function saludar(funcion: (mensaje: string) => void) {
    /**
     * Esto significa que nuestra funcion, "saludar", está esperando recibir por parametro otra funcion, con las caracteristicas:
     * Una funcion con un solo paramtro, de tipo string, que no devuelve ningun valor
     */
    funcion("Hola Mundo!")
}

function mostrarPorConsola(mensaje: string) {
    console.log(mensaje)
}

// function pintarNumero(numero: number) {
//     console.log(numero)
// }

saludar(mostrarPorConsola)

// Podemos definir estos tipos utilizando un Type Alias

type FuncionDeSaludar = (m: string) => void

// Funciones genericas

/**
 * Es comun que el tipo de entrada en una funcion se relacione con el tipo de salida
 * O que los tipos se relacionen de alguna forma
 */

function devolverPrimerElemento(arr: any[]) {
    return arr[0]
}

/**
 * Esta funcion, aunque hace su trabajo, permite que cualquier tipo de dato pase.
 * Existe una forma de controlar el tipo de dato que una funcion recibe de manera relativa
 * Esto se logra utilizando la sintaxis generica <Type>
 */

function devolverUltimoElemento<Type>(arr: Type[]): Type {
    return arr[arr.length - 1]
}

/**
 * Al utilizar "Type"
 * Estamos vinculando el tipo de dato de entrada con el tipo de dato de salida
 * Asi podemos prevenir cambios en el tipo de dato que se devuelve
 */

// function mutarTipo<Type>(arr: Type[]): Type {
//     return `${arr[0]}`
// }

// Inferencia:

/**
 * Podemos definir N cantidad de tipos de datos que TypeScript puede inferir para nuestras funciones
 */

function funcionDeMapeo<Entrada, Salida>(arr: Entrada[], funcion: (el: Entrada) => Salida): Salida[] {
    return arr.map(funcion)
}

const parseadosANumber = funcionDeMapeo([ "1", "2", "3"], (el) => parseInt(el))

console.log({ parseadosANumber })

// Trabajando con tipado generico

/**
 * Constrainst o Limitaciones:
 * Es posible limitar un tipo generico haciendo que extienda un tipo especifico
 */

// Declaramos que ambos elementos deben ser del mismo tipo, y ademas, tener una propiedad length
function obtenerElementoMayor<Type extends { length: number }>(a: Type, b: Type): Type {
    return a.length > b.length ? a : b;
}

obtenerElementoMayor([1,2,3], [4,5,6,7])
obtenerElementoMayor("Hola mundo!", "Hello world!")

// Los Number no tienen propiedad length, asi que hemos limitado exitosamente el tipo generico
obtenerElementoMayor(500, 200)

// El tipado generico nos permite aceptar un solo tipo de dato, a menos que se especifique explicitamente

function combinarArrays<Type>(a: Type[], b: Type[]): Type[] {
    return [ ...a, ...b ]
}

combinarArrays([ 1, 2 ,3 ], [ "a", "b", "c" ]) // los tipos de estos arrays son number[] y string[]

// Sin embargo, es posible especificar el tipo que va a recibir el metodo

combinarArrays<number | string>([ 1, 2 ,3 ], [ "a", "b", "c" ])

/**
 * Buenas practicas para las funciones genericas:
 * 1.- Cuando sea posible, priorizar el uso del tipo generico en lugar de limitarlo.
 * 2.- Siempre utilizar la menor cantidad posible de parametros genericos (evitar <Input, Holding, Func, Output>)
 * 3.- Si un parametro generico solo se usa en un sitio, reconsiderar si realmente lo necesitamos.
 */