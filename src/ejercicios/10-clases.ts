
class Heroe {
    private alterEgo: string = 'carlos';
    public edad: number;
    static pv: number; // puedo acceder al valor de la clase sin crear una instancia de la clase
    public nombreReal: string = 'eduardo';

    imprimirNombre(){
        return this.alterEgo + ' ' + this.nombreReal
    }

}

const iroman = new Heroe();
console.log(iroman);
console.log(iroman.imprimirNombre());