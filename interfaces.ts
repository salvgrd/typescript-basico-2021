interface Producto {
    nombre: string, 
    precio: number,
    caducidad?: string
}

interface Carrito {
    productos: Producto[],
    cantidadProductos: number,
    total: number
}

export { Producto, Carrito }