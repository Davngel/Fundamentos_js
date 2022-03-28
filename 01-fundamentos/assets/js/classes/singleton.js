

class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '') {

        // inicializar una variable no declara da por defecto "undefined". Al colocarle una negación da "true" y en doble negación "false"

        if(!!Singleton.instancia) {
            return Singletonç.instancia
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');


console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
