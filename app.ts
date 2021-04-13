const helloWorld = 'Hola Mundo!'

console.log(helloWorld)

// Tipos de datos

const texto = 'Esto es JavaScript!'
const numero = 12000
const booleano = true

console.log( texto, '=>' ,typeof(texto) )
console.log( numero, '=>' ,typeof(numero) )
console.log( booleano, '=>' ,typeof(booleano) )

let estoNoEsUnTexto: number = 42;
let nuevoTexto: string = 'Este texto es nuevo!'

// nuevoTexto = estoNoEsUnTexto
nuevoTexto = 'Este texto es mas nuevo!';

/**
 * Operadores Matematicos
 * Asignacion: =
 * Suma/Concatenacion: +
 * Resta: -
 * Division: /
 * Multiplicacion: *
 * Potencia: **
 * Resto: %
 */

let total: number = 0;
total = 14 + 15;

console.log('El total es: ' + total);

/**
 * Operadores Logicos
 * Igualdad relativa: ==
 * Desigualdad relativa: !=
 * Igualdad estricta: ===
 * Desigualdad estricta: !==
 * Mayor que: >
 * Menor que: <
 * Mayor o igual que: >=
 * Menor o igual que: <=
 * Negacion: !
 * AND: &&
 * OR: ||
 */

// Estructuras de control

// if (total > numero) {
//     console.log('total es mayor!')
// } else if(total < numero) {
//     console.log('numero es mayor!')
// } else {
//     console.log('son iguales!')
// }

// for (let i = 0; i <= total; i++) {
//     console.log(i)
// }

// while(total < numero) {
//     total += 1
//     console.log(total)
// }

// funciones

function sumarUno(argumento: number) {
    console.log('La funcion recibe: ', argumento)
    return argumento + 1
}

const resultado = sumarUno(2)
console.log('Salida de la funcion: ',resultado)

const potencia = (argumento: number) => argumento ** 2

console.log(potencia(2))