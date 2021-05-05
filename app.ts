/**
 * A partir de ES6, JavaScript nos permite implementar Clases para instanciar objetos.
 * TypeScript nos permite agregar anotaciones de tipos, relaciones entre clases y con otros tipos
 */

// class Punto {
//     x: number = 0;
//     y: number = 0;
// }

// const pt = new Punto()

// pt.x = 0
// pt.y = 1

// pt.z // No existe la propiedad en el objeto

/**
 * En tsconfig.json, el uso de strictPropertyInitialization 
 * nos obligará a inicializar una propiedad en el constructor
 */


// Uso del constructor
class Saludo {
    saludo: string;
    nombre: string;

    constructor(saludo: string) { // No necesita recibir ningun parametro.
        this.saludo = saludo
        this.nombre = "Wanda"
    }
}

const greeting = new Saludo("Privet!");
console.log(`${greeting.saludo} ${greeting.nombre}`)

/**
 * Un par de detalles sobre el uso de constructor:
 * 1.- No puede recibir un parametro de tipo (sintaxis generica), este debe indicarse a la clase.
 * 2.- No puede tiparse el retorno de ese metodo, ya que siempre se retorna una instancia de la clase.
 */

// Extendiendo clases, uso de super, readonly, y metodos.

class AutoSaludable extends Saludo {

    // readonly nos permite definir propiedades que solo pueden asignarse dentro del constructor
    readonly _apellido: string;
    
    constructor(saludo: string) { // Debe recibir los mismos parametros que la clase extendida
        super(saludo) // debe llamarse antes inmediatamente al definir el constructor

        this._apellido = "Maximoff"

        // es posible invocar a los metodos de la clase dentro del constructor. para ejecutar en tiempo de instancia
        this.autoSaludar()
    }

    autoSaludar(): void {
        // es una buena idea deestructurar this para acceder a sus propiedades. se ve guay.
        const { saludo, nombre, _apellido: apellido } = this;

        // this._apellido = "Lehnsherr" // nos devuelve error
        console.log(`${saludo} ${nombre} ${apellido}!`)
    }
}

const wanda = new AutoSaludable("Privet!")

/**
 * Ejercicio 1: crear una clase "Vector", que reciba dos Puntos y ademas tenga las propiedades:
 * Modulo: Math.sqrt( (Bx - Ax)**2 + (By - Ay)**2 )
 * Direccion: Math.atan( (Bx - Ax) / (By - Ay) )
 */

// Usar esta clase Punto

 class Punto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

/*

class Vector {
  origen: Punto;
  final: Punto;
  readonly modulo: number;
  readonly direccion: number;

  constructor(origen: Punto, final: Punto) {
    this.origen = origen;
    this.final = final;
    this.modulo = this.calcularModulo()
    this.direccion = this.calcularDireccion()
  }

  calcularModulo() {
    return Math.sqrt( (this.final.x - this.origen.x)**2 + (this.final.y - this.origen.y)**2 )
  }

  calcularDireccion() {
    return Math.atan( (this.final.x - this.origen.x) / (this.final.y - this.origen.y) )
  }
}

const vector = new Vector(new Punto(0, 0), new Punto(1, 1));
console.log(vector.modulo, vector.direccion)

*/

// Getters y Setters

// Nos permiten aplicar logica al acceso de propiedades
// Es especialmente util para trabajar con propiedades privadas o protegidas

class Vector {
    protected _longitud = 0 // inicializamos a 0

    get longitud() {
        return this._longitud
    }

    set longitud(valor: number) {
        if (valor >= 0) {
            this._longitud = valor
        } else {
            this._longitud = this._longitud
        }
    }
}

const linea = new Vector();

// linea._longitud // da error
console.log({ longitud: linea.longitud })

// linea._longitud = 5 // da error

linea.longitud = 7;

console.log({ longitud: linea.longitud })

linea.longitud = -3

console.log({ longitud: linea.longitud }) // no asigna el valor

// Diferencias entre protected y private:

/**
 * protected permite que la propiedad o metodo sea accesible por una subclase que extienda a la principal
 * las propiedades o metodos de tipo protected pueden ser expuestas en una subclase si se modifican sin implementar "protected"
 */

class Base {
    protected prop = 123
}
const b = new Base();
// b.prop // da error

class Subclass extends Base {
    protected prop = 456
}
const s = new Subclass();

// s.prop // todo correcto

/**
 * El uso de 'private' previene este tipo de comportamiento, sin embargo, tambien previene que sea visible para las subclases.
 * 'private' solo previene el acceso a la propiedad durante el checkeo de tipado, no durante tiempo de ejecucion.
 * En JavaScript, como hemos comentado antes, no existen las propiedades privadas (por ahora!).
 * Es decir, las propiedades 'private' y 'protected' pueden ser accedidas con un debugger en el archivo .js, por ejemplo.
 */

/**
 * Ejercicio 2: Crear una clase "User" con las siguientes propiedades:
 * private _password: un campo privado que almacene una contraseña "cifrada"
 * set password: setter que recibirá un string y lo revertirá, luego le concatenará guiones, y lo almacenará en _password
 * get password: getter que devuelve _password.
 * metodo login: recibe un string, lo transforma de la misma forma que (set password) y lo compara con _password.
 */

// encripcion: str.split("").reverse().join("-")

/*

class User {

  private _password: string = ""

  get password(): string {
    return this._password
  }

  set password(str: string) {
    this._password = this._encrypt(str)
  }

  private _encrypt(str: string) {
    return str.split("").reverse().join("-")
  }

  login(str: string) {
    return this.password === this._encrypt(str)
  }
}

const usuario = new User();

usuario.password = "supercontraseñasegura2303"
console.log(usuario.password)

console.log(`Login ${usuario.login("supercontraseñasegura2303") ? "exitoso" : "fallido"}`)

*/

// Miembros estaticos (static)

/**
 * Permiten acceder a miembros de la clase sin necesidad de instanciarla
 * Pueden utilizar 'public' 'protected' y 'private' a su vez.
 * Pueden ser heredados por subclases
 */

class User {
    private static _password: string = "uy kieto!"

    static validatePassword(str: string) {
        return str === this._password
    }
}

User.validatePassword("uy kieto!")

// User._password // no es accesible

// Clases genericas

type Fruta = "manzana" | "pera" | "piña"
type Frutas = Fruta[] // todo por una sintaxis bonita (no hagais esto plz)

class Caja<Tipo> {
    contenido: Tipo
    
    constructor(contenido: Tipo) {
        this.contenido = contenido
    }
}

const cajaDeFrutas: Caja<Frutas> = new Caja([ "manzana", "pera", "piña", "pera" ])