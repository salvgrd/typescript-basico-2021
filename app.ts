// Estructuras de datos

// Arrays o listas

let array: number[] = [ 1, 2, 3, 4 ]

const arrayDeLoQueSea: any[] = [ 123, "strings", false, [ "hola", "mundo" ], 456 ]

console.log('La longitud del array es:', array.length) // array.length devuelve la longitud de la lista

// accediendo a las posiciones de una lista

const posicion = 0
console.log(`El elemento en la posicion ${posicion} es:`, array[posicion]) // array[posicion] accede a la posicion indicada en el array

array[posicion] = 157

console.log(`Ahora el valor de la posicion ${posicion} es:`, array[posicion])

const nuevosNumeros = [ 5, 6, 7, 8 ]

console.log({ arrayConSpread: [ 2, 3, ...nuevosNumeros, 11, 12] })

// Recorriendo un array

for (let i = 0; i < array.length; i++) {
    console.log(`Esta es la posicion ${i} => ${array[i]}`)
}

// Objetos o JSON

let usuario = { 
    clave: 'valor', 
    nombre: 'Carlitos', 
    edad: 23 
}

// Acceso a las propiedades de un objeto

console.log(`Me llamo ${usuario.nombre} y tengo ${usuario['edad']} años de edad`)

usuario['nombre'] = 'Pedrito'
usuario.edad = 32

console.log(`Ahora me llamo ${usuario.nombre} y tengo ${usuario.edad} años`)