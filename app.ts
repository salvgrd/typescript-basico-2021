// Estructuras de datos

// Arrays o listas

let array = [ 1, 2, 3, 4 ]

array.push(5) // agrega un elemento al final de la lista

array.pop() // elimina el ultimo elemento de la lista

array.unshift(5) // agrega un elemento al principio de la lista

array.shift() // elimina el primer elemento de la lista

console.log('La longitud del array es: ', array.length) // array.length devuelve la longitud de la lista

const posicion = 0
console.log(`El elemento en la posicion ${posicion} es: ${array[posicion]}`) // array[posicion] accede a la posicion indicada en el array

// Recorriendo un array

for (let i = 0; i < array.length; i++) {
    console.log(`Esta es la posicion ${i} => ${array[i]}`)
}

// Objetos o JSON

let usuario = { clave: 'valor', nombre: 'Carlitos', edad: 23 }

// Acceso a las propiedades de un objeto

console.log(`Me llamo ${usuario.nombre} y tengo ${usuario['edad']} años de edad`)

usuario['nombre'] = 'Pedrito'
usuario.edad = 32

console.log(`Ahora me llamo ${usuario.nombre} y tengo ${usuario.edad} años`)

/**
 * Ejercicio
 * A partir de dos listas, una con productos de supermercado y otra con cantidades
 * crear un objeto "carrito" cuyas claves sean los productos, y los valores las cantidades
 */

const productos = [ 'manzanas', 'peras', 'mangos' ]
const cantidades = [ 10, 9, 14 ]
let carrito = {}