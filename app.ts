// Modulos y ficheros

import { saludar } from './funciones.js'
import fs = require("fs")

saludar()

let jsonSalida = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(jsonSalida, null, '\t');
fs.writeFileSync('archivo-de-salida.json', data);

console.log('\n', JSON.parse(fs.readFileSync('archivo-de-salida.json', 'utf-8')))