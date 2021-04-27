/**
 * Ejercicio: Crear una funcion generica que reciba un elemento con la propiedad "area" y que ademas:
 * Calcule la potencia al cuadrado del area del elemento
 * Devuelva un elemento del mismo tipo
 */

interface Cuadrado {
    name: "cuadrado",
    area: number
}

interface Triangulo {
    name: "triangulo"
    area: number
}

function cuadradoDelArea(fig) {
    return fig.area ** 2
}