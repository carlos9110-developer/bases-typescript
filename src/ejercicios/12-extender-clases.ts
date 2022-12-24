class PersonaNormal {

    constructor(
        public nombre:string, 
        public direccion:string
    ) {}

}

class Heroe3 extends PersonaNormal{

    // aca puedo declarar variables de la clase
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal:string
    ){
        super( nombreReal, 'Samaria 2' );
    }

}

const ironman2 = new Heroe3('Ironman', 45, 'Tony');
console.log(ironman2);