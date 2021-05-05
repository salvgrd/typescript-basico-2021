import { Producto, Carrito } from './interfaces'
import { stringify, jsonParse } from './utils'
import fs = require('fs')

/**
 * Ejercicio 1: obtener los productos desde "productos.json", implementar interfaz "Producto" y mostralos por pantalla
 */

const productos = jsonParse<Producto[]>(fs.readFileSync("productos.json", "utf-8"))

console.log(jsonParse<Carrito>(fs.readFileSync("carrito.json", "utf-8")))

const productosUpdated: Producto[] = [ ...productos, { nombre: "Batata", precio: 0.1 } ]

let accBase: Carrito = { productos: [], cantidadProductos: 0, total: 0 }

const carrito: Carrito = productosUpdated.reduce( (acc, producto) => {
    return {
        productos: productosUpdated,
        cantidadProductos: productosUpdated.length,
        total: acc.total + producto.precio
    }
}, accBase)

const carritoStr: string = stringify<Carrito>(carrito, null, '\t')

fs.writeFileSync("carrito.json", carritoStr)

console.log(jsonParse<Carrito>(fs.readFileSync("carrito.json", "utf-8")))

// Tarea: leer ficheros, comprobar existencia de ficheros y modificar el carrito con codigo.

console.log(fs.existsSync("carrito.json"))

const peticion = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ message: "Hola!!!" }), 5000)
})

console.log(peticion)

peticion.then( data => {
  console.log(data, peticion)
})