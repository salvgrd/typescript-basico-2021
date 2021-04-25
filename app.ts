/**
 * Ejercicio 1
 * A partir de dos listas, una con productos de supermercado y otra con cantidades
 * crear un objeto "carrito" cuyas claves sean los productos, y los valores las cantidades
 */

// Output/Salida: { manzanas: 10, peras: 9, cantidades: 14 }

 const productos = [ 'manzanas', 'peras', 'mangos' ]
 const cantidades = [ 10, 9, 14 ]
 const carrito = productos.reduce( (carrito, producto, idx) => {
    carrito[producto] = cantidades[idx]
    return carrito
 } , {})

 console.log({ carrito })

/** Ejercicio 2
 * Crear tres objetos/JSON/diccionarios con las propiedades 
 * "modelo": string y "velocidad_km_hora": number, que representen coches.
 * Determinar en cuanto tiempo recorrerán 1000 kilometros cada uno
 */

// Output/Salida: el coche X recorrerá la distancia Y en N horas

interface Coche {
    modelo: string,
    velocidad_km_hora: number
}

const modelos = [ "Lambo Gallardo", "Maserati Antonio", "Opel Corsa" ]
const kmh = [ 300, 350, 700 ]
const distancia = 1000

const coches: Coche[] = modelos.map( (modelo, idx) => {
    const coche = {
        modelo,
        velocidad_km_hora: kmh[idx]
    }
    return coche
})

coches.forEach( coche => {
    const tiempo = distancia / coche.velocidad_km_hora
    console.log(`El ${coche.modelo} recorrera ${distancia} km en ${tiempo} horas`)
})

/**
 * Ejercicio 3
 * Calcular cual de los coches es el mas rapido
 * Pista: usar spread operator, y Math.max()
 */

// Asumiendo que solo tenemos un arreglo de longitud N con objetos de tipo "Coche"

const velocidades: number[] = coches.map( coche => coche.velocidad_km_hora );

const velocidadMasAlta: number = Math.max(...velocidades)

const cocheMasVeloz: Coche = coches.find( coche => coche.velocidad_km_hora === velocidadMasAlta )

console.log(`El coche mas veloz es: ${cocheMasVeloz.modelo}`)
