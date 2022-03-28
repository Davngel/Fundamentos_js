class Persona {
    //Propiedades estáticas

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias'
    } 

    static mensaje() {
        console.log('Hola a todos, soy un método estático');
    }

    //propiedades

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;

    }

    //Sets no pueden tener mismo nombre que las propiedades
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();

    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    //Método en clase
    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy(); // Se utiliza this para llamar el método y poder utilizarlo
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

// "extends" permite obtener todas las propiedades del "padre"
class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');

console.log( spiderman);

spiderman.quienSoy();

//Crea objetos, se utiliza "new"
//const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman'); 
