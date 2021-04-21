/**
 * Ejercicio 1
 * A partir de dos listas, una con productos de supermercado y otra con cantidades
 * crear un objeto "carrito" cuyas claves sean los productos, y los valores las cantidades
 */

 const productos = [ 'manzanas', 'peras', 'mangos' ]
 const cantidades = [ 10, 9, 14 ]
 let carrito = {}

 console.log({ carrito })

/** Ejercicio 2
 * Crear tres objetos/JSON/diccionarios con las propiedades "modelo": string y "velocidad_km_hora": number, que representen coches.
 * Determinar en cuanto tiempo recorrerán 1000 kilometros
 */

let coches = {}

const distancia = 1000

// console.log({ coches })

/**
 * Ejercicio 3
 * Calcular cual de los coches es el mas rapido
 * Pista: usar spread operator, y Math.max()
 */