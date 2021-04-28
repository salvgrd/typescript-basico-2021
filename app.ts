import { Producto, Carrito } from './interfaces'
import { stringify, jsonParse } from './utils'
import fs = require('fs')

/**
 * Ejercicio 1: obtener los productos desde "productos.json", implementar interfaz "Producto" y mostralos por pantalla
 */

const productos: Producto[] = jsonParse<Producto>(fs.readFileSync("productos.json", "utf-8"))
let accBase: Carrito = { productos: [], cantidadProductos: 0, total: 0 }


const carrito: Carrito = productos.reduce( (acc, producto) => {
    return {
        productos: productos,
        cantidadProductos: productos.length,
        total: acc.total + producto.precio
    }
}, accBase)

const carritoStr: string = stringify<Carrito>(carrito, null, '\t')

fs.writeFileSync("carrito.json", carritoStr)

// Tarea: leer ficheros, comprobar existencia de ficheros y modificar el carrito con codigo.