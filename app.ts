let array: number[] = [ 1, 2, 3, 4, 5, 6 ]

// metodos mas basicos

array.push(5) // agrega un elemento al final de la lista

array.pop() // elimina el ultimo elemento de la lista

array.unshift(5) // agrega un elemento al principio de la lista

array.shift() // elimina el primer elemento de la lista

/** Array.slice(?inicio: number, ?final: number): any[]
 * devuelve un recorte de la lista a partir de la posicion indicada.
 * acepta un segundo argumento para indicar el final del recorte
 * no modifica la lista original
 */

const recorte: number[] = array.slice(2)

/** Array.splice(inicio: number, ?final: number, ...?contenidoDeReemplazo: string): any[]
 * Modifica la lista original, removiendo o reemplazando
 * Devuelve el fragmento "recortado" de la lista original
*/

let peces: string[] = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let recortes: string[] = peces.splice(2, 3, 'nemo', 'dory')

console.log({ peces, recortes })

// metodos ES6

/** Array.forEach( function(elementoDelArray, ?indice, ?arrayRecorriendose): any ): undefined
 * Ejecuta la funcion enviada por parametro para cada elemento de la lista
 */

peces.forEach( pez => console.log(`El nombre de este pez es: ${pez}`))

/** Array.map( function(elementoDelArray, ?indice, ?arrayRecorriendose): any ): any[]
 * Crea una lista completamente nueva a partir de la funcion pasada por parametro
 */

const listaDeEspecies: string[] = peces.map( ( pez, indice ) => `Especie numero ${indice + 1}: ${pez}`)
console.log({ listaDeEspecies })

/** Array.filter( function(elementoDelArray, ?indice, ?arrayRecorriendose): boolean ): any[]
 * Crea una lista completamente nueva con los elementos que pasen la condicion implementada en la funcion proporcionada
 */

const nombresCortos: string[] = peces.filter( nombre => nombre.length <= 4)
console.log({ nombresCortos })

/** Array.find( function(elementoDelArray, ?indice, ?arrayRecorriendose) ): elementoDelArray || undefined 
 * Devuelve el elemento de la lista que cumpla con la condicion implementada en la funcion proporcionada
*/

const pezEncontrado: string = peces.find( pez => pez === "nemo" )
console.log({ pezEncontrado })

/** Array.reduce( function(acumulador: any, valorActual: any, ?indice, ?arrayRecorriendose): any, ?posicionInicial: any ): any 
 * Ejecuta una funcion reductora para cada valor dentro de la lista, resultando en un solo valor
*/
const sumaDeNumeros: number = array.reduce( (total, numero) => { return total + numero }, 5)
console.log({ listaDeNumeros: array, total: sumaDeNumeros })

// construir un objeto nuevo con reduce

const objetoDePeces = array.reduce( (acumulador, numero, idx) => {
    acumulador[peces[idx]] = numero
    return acumulador
}, {})

console.log(objetoDePeces)