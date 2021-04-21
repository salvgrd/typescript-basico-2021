// Tipado avanzado

// Tipado de arrays

const arrayDeStrings: string[] = [ 'Solo', 'contiene', 'strings' ]

const producto = {
    nombre: 'manzana',
    precio: 23
}

// Tipado de objetos

function soloAceptaProductos(producto: { nombre: string, precio: number, color?: string }) {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`)
    if (producto.color !== undefined) console.log(`Es de color ${producto.color}`)
}

soloAceptaProductos(producto)

//  Uniones

let nombre: string = 'Peter'
let edad: number = 26

function mostrarInformacion(nombre: string, edad: string | number) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`)
}

mostrarInformacion(nombre, edad)

// Type & Interface

type Precio = string | number

type Producto = {
    nombre: string,
    precio: Precio
}

interface Usuario {
    correo: string,
    nombre: string
}

// Diferencias

/**
 * 
 * Extendiendo una interface                        Extendiendo un type
 * interface Animal {                               type Animal = {
 *  name: string                                      name: string
 * }                                                }
 * 
 * interface Bear extends Animal {                  type Bear = Animal & {
 *  likesHoney: boolean                               likesHoney: boolean
 * }                                                }
 * 
 */

interface Window {
    name: string
}

interface Window {
    scriptSrc: string
}

// los type no son extensibles