// Modulos y ficheros

import { saludar, User } from './funciones'
import fs = require("fs")

saludar()

let jsonSalida: User = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(jsonSalida, null, '\t');
fs.writeFileSync('archivo-de-salida.json', data);

const inputUserData: string = fs.readFileSync('archivo-de-salida.json', 'utf-8')
const inputUser: User = JSON.parse(inputUserData)

console.log({ inputUser })