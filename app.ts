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
    name: "triangulo",
    area: number
}

const equilatero: Triangulo = {
    name: "triangulo",
    area: 150
}

function cuadradoDelArea<Type extends { area: number }>(fig: Type): Type {
    let newFig: Type = fig
    newFig.area = fig.area **2
    return newFig
}

console.log({ salida: cuadradoDelArea(equilatero)})