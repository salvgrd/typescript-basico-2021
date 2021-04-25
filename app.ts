const helloWorld = 'Hola Mundo!'

// Narrowing

// type guards usando typeof

let contador: number = 0

function incrementarContador(cantidad: string | number) {
    // contador += cantidad
    // TypeScript nos daria un problema, debido a que no se puede utilizar el operador += con un string
    if (typeof cantidad === "number") {
        contador += cantidad
    }
    else if (typeof cantidad === "string" && !Number.isNaN(parseInt(cantidad))) { // Controlamos el tipo de dato y eliminamos un valor no deseado
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

// narrowing a truthy

function imprimirTodoPorPantalla(input: string | string[] | null) {
    if(input && typeof input === "object") { // los Arrays en JS son de tipo "object", al igual que null!
        for (const s of input) {
            console.log(s)
        }
    } else if (typeof input === "string") {
        console.log(input)
    }
}

// podriamos envolver toda la funcion en un checkeo global a truthy, pero no nos permitiria manejar el caso a string vacio ("") correctamente.

imprimirTodoPorPantalla(null)