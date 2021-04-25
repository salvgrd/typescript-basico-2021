// Ejercicio 1: aplicar las tecnicas de narrowing a la siguiente funcion, sin modificar su entrada
/** Descripcion: Tenemos una funcion que asigna valores a una lista que es una propiedad de un objeto, debemos:
 * 
 * a.- Mantener el comportamiento esperado: "agregar un topping, en caso de asignarse"
 * a.- Prevenir el uso de una propiedad en caso de que el objeto no la tenga en ese momento
 * b.- Prevenir la asignacion de un valor inexistente
 * c.- Devolver siempre un objeto de tipo "Pastel"
 */

interface Pastel {
    nombre: string,
    toppings?: string[]
}

function agregarTopping(pastel: Pastel, nuevoTopping?: string | undefined): Pastel {
    return { nombre: pastel.nombre, toppings: [...pastel.toppings, nuevoTopping] }
}

const cheesecake: Pastel = { nombre: "cheesecake" }

console.log(agregarTopping(cheesecake))