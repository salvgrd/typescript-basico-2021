// Tipado avanzado de objetos

/**
 * Como sabemos, es posible definir tipos de objetos en TS, ademas podemos:
 * Agregar propiedades opcionales
 * Extenderlos
 */

interface Objeto {
    name: string
}

interface ObjetoContenedor extends Objeto {
    id: number,
    elementos: string[],
    hasDetail?: boolean
}

/**
 * Sin embargo, podemos hacer un par de cosas con sus propiedades para hacer el tipado mas potente
 */

/* Definir propiedades de solo lectura */

interface Admin {
    readonly _adminId: string
}

interface User {
    readonly _credentials: { username: string, password: string }
}

let newAdmin: Admin = { _adminId: "ElCrack2303" }

// newAdmin._adminId = "ElBichoCR7" // no se puede asignar

// Precauciones a tomar con readonly

let newUser: User = { 
    _credentials: {
        username: "ElBichoSiuu",
        password: "MessiPechoFrio"
    }
}

// newUser._credentials = { username: "MessiCampeon", password: "Penaldo" } // No nos deja acceder

newUser._credentials.password = "MessiCrack" // Se puede acceder perfectamente


/* Tipado generico */

/**
 * Es probable que necesitemos definir una interfaz que contendrá distintos tipos de datos segun su implementacion
 * Podemos lograr esto utilizando la sintaxis generica
 */
interface AjaxResponse<Type> {
    data: Type[]
    status: number
}

/**
 * Esto puede leerse como: 
 * "Una respuesta Ajax tendra una propiedad status que será un numero, y una propiedad data, que contendra una lista de datos de un tipo"
 */

interface accountTransaction { 
    referenceNumber: number, 
    amount: number 
}

// generan numeros aleatorios
const generateRef = () => (Math.round(Math.random() * 10**3) + 10**4)
const generateAmount = () => Math.round(Math.random() * 10**4 + Number.EPSILON) / 100

// Devuelve un array de elementos de tipo accountTransaction
function fillTransactionsArr(numberOfTransactions: number): accountTransaction[] {
    const baseArray = new Array(numberOfTransactions).join(".").split(".")

    const filledArray = baseArray.map( el => {
        return { 
            referenceNumber: generateRef(), 
            amount: generateAmount()
        }
    })

    return filledArray
}

function returnAccountTransactions() {
    return { status: 200, data: fillTransactionsArr(6) }
}

// Contendrá una respuesta Ajax con data: accountTransaction[]
const accountBalance: AjaxResponse<accountTransaction> = returnAccountTransactions()

console.log(accountBalance)