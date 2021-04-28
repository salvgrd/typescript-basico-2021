import { Producto, Carrito } from 'interfaces'
import fs = require('fs')

/**
 * Ejercicio 1: obtener los productos desde "productos.json", implementar interfaz "Producto" y mostralos por pantalla
 */





// Ejemplo:

// let carritoDeCompras: Carrito = {
//     productos: productosDisponibles,
//     cantidadProductos: productosDisponibles.length,
//     total: 0
// }

// // for...of nos permite definir su valor de iteracion dentro del contexto de bloque

// for (let producto of productosDisponibles) {
//     carritoDeCompras.total += producto.precio
// }

// // Array.prototype.forEach nos puede ser de utilidad aqui.
// // productosDisponibles.forEach( producto => carritoDeCompras.total += producto.precio )

// console.log({ carritoDeCompras })

// // Solucion con Array.prototype.reduce

// const carritoHechoConReduce: Carrito = productosDisponibles.reduce( (acc, producto) => {
//     return {
//         productos: productosDisponibles,
//         cantidadProductos: productosDisponibles.length,
//         total: acc.total + producto.precio
//     }
// }, { productos: [], cantidadProductos: 0, total: 0 })