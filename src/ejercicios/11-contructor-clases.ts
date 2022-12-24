class Heroe2 {
    //public alterEgo: string;
    //public edad: number;
    //public nombreReal: number;

    // aca puedo declarar variables de la clase
    constructor (
        public alterEgo: string,
        public edad?: number,
        public nombreReal?:string
    ){
        //this.alterEgo = alterEgo;
    }

}

const ironman = new Heroe2('Ironman', 45, 'Tony');
console.log(ironman);