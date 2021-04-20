/** Ejercicio 1
 * Calcular el area de un triangulo de base = 100 y altura == 300
 */

function calcularArea( base: number, altura: number ): number {
    return (base * altura) / 2
}

const area: number = calcularArea(200, 300)
console.log(`El area del triangulo es: ${area}`)

/** Ejercicio 2
 * Calcular la hipotenusa de un triangulo con lados A = 200 y B = 350
 */

function calcularHipotenusa( _catetoA: number, _catetoB: number ): number {
    const sumaDeCuadrados: number = (_catetoA**2) + (_catetoB**2)
    return Math.sqrt(sumaDeCuadrados)
}
const catetoA: number = 200
const catetoB: number = 350

const hipotenusa = calcularHipotenusa(catetoA, catetoB)

console.log(`La hipotenusa del triangulo es: ${hipotenusa}`)

/** Ejercicio 3
 * Determinar si el triangulo anterior es equilatero, escaleno o isosceles
 */

function determinarTipo( _catetoA: number, _catetoB: number, _hipotenusa: number ): string {
    if (_catetoA === _catetoB && _catetoA === _hipotenusa ) {
        return "Equilatero"
    } else if ( _catetoA === _catetoB || _catetoA === _hipotenusa || _catetoB === _hipotenusa ) {
        return "Escaleno"
    } else {
        return "Isosceles"
    }
}

const tipoDelTriangulo: string = determinarTipo(catetoA, catetoB, hipotenusa)

console.log(`El tipo del triangulo es: ${tipoDelTriangulo}`)