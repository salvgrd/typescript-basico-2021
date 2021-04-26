// Narrowing

// type guards usando typeof

let contador: number = 0

function incrementarContador(cantidad: string | number) {
    // contador += cantidad
    // TypeScript nos daria un problema, debido a que no se puede utilizar el operador += con un string
    if (typeof cantidad === "number") {
        contador += cantidad
    }
    else if (typeof cantidad === "string" && !isNaN(parseInt(cantidad))) { // Controlamos el tipo de dato y eliminamos un valor no deseado
        const numberFromString: number = parseInt(cantidad)
        contador += numberFromString
    } else {
        throw new Error(`"${cantidad}" no es valido. Ingrese un numero!`)
    }
}

incrementarContador(23)

console.log({ contador })

incrementarContador("11")

console.log({ contador })

// incrementarContador("Benito Antonio Martinez Ocasio")

/** typeof puede devolver un total de 8 "strings"
 * string
 * number
 * bigint
 * boolean
 * symbol
 * undefined
 * object
 * function
 */

// chequeo a truthy

function imprimirTodoPorPantalla(input: string | string[] | null) {
    if(input && typeof input === "object") { // los Arrays en JS son de tipo "object", al igual que null!
        for (const s of input) {
            console.log(s)
        }
    } else if (typeof input === "string") {
        console.log(input)
    } else {
        console.log({ tipoDeNull: typeof input })
    }
}

// podriamos envolver toda la funcion en un checkeo global a truthy, pero no nos permitiria manejar el caso a string vacio ("") correctamente.

imprimirTodoPorPantalla(null)

// Uniones discriminadas

interface Circulo {
    tipo: "circulo",
    radio: number
}

interface Cuadrado {
    tipo: "cuadrado",
    lado: number
}

interface Triangulo {
    tipo: "triangulo",
    lado: number
}

/**
 * Cuando cada tipo en una union contiene una propiedad en comun definida como un tipo literal
 * TypeScript considera esa union como una "union discriminada"
 * Esto nos permite aplicar narrowing a cada miembro de la union
 */

type Figura = Circulo | Cuadrado

function obtenerArea(figura: Figura): number {
    switch (figura.tipo) {
        case "circulo":
            return Math.PI * figura.radio ** 2
        
        case "cuadrado":
            return figura.lado ** 2
    }
}

// Chequeo Exhaustivo con type: never

/**
 * "never" es un tipo que puede asignarse a cualquier tipo, sin embargo, ningun tipo de dato es asignable a never
 * Esto nos permite utilizarlo para aplicar chequeo exhaustivo en una condicion por defecto
 * Por ejemplo, al implementarlo en este caso devolvera un error de TypeScript, ya que no hemos tomado en cuenta todos los casos posibles
 */

// type Figura = Circulo | Cuadrado | Triangulo

// function obtenerArea(figura: Figura): number {
//     switch (figura.tipo) {
//         case "circulo":
//             return Math.PI * figura.radio ** 2
        
//         case "cuadrado":
//             return figura.lado ** 2

//         default: 
//             const _chequeoExhaustivo: never = figura;
//             return _chequeoExhaustivo
//     }
// }