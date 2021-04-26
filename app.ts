// Ejercicio 1: aplicar las tecnicas de narrowing a la siguiente funcion, sin modificar su entrada
/** 
 * Descripcion: Tenemos una funcion que asigna valores a una lista que es una propiedad de un objeto, debemos:
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
    if (pastel.toppings && typeof nuevoTopping === "string" && nuevoTopping) {
        return { nombre: pastel.nombre, toppings: [...pastel.toppings, nuevoTopping] }
    } else if (nuevoTopping) {
        return { nombre: pastel.nombre, toppings: [ nuevoTopping ] }
    } else {
        return pastel
    }
}

const cheesecake: Pastel = { nombre: "cheesecake" }

console.log(agregarTopping(cheesecake))

// Ejercicio 2: A partir del siguiente tipo, crear una union discriminada que permita mostrar por pantalla las distintas caracteristicas
/**
 * Descripcion: La funcion debe mostrar por pantalla la caracteristica relacionada con cada tipo de topping, las relaciones son:
 * sirope => sabor
 * nueces => tipo
 * galleta => marca
 * nata => deDieta
 */
interface Topping {
    nombre: "sirope" | "nueces" | "galleta" | "nata"
    sabor?: string,
    tipo?: "mani" | "almendras",
    marca?: string,
    deDieta?: boolean
}

function mostrarInformacion(topping: Topping) {
    console.log(topping.sabor)
}

// Ejercicio 3: Al ejercicio anterior, implementarle un nuevo tipo de topping llamado "chispas" cuya caracteristica sea tipo => "chocolate" | "colores"