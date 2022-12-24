interface PersonajeLOR {
    nombre: string;
    pv:     number;
    mostrarPv: () => void;
}

function curar( personaje:PersonajeLOR, curarX:number ): void{
    personaje.pv  += curarX;
    console.log(personaje);     
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Spiderman',
    pv:     50 ,
    mostrarPv(){
        console.log('Puntos de vida:', this.pv)
    }    
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarPv();