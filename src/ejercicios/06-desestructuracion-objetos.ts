interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Seeran',
        anio: 1960
    }
}

const autor = 'Fulano';

// desestructurando el objeto reproductor, creamos las variables, tomando las propiedades del objeto. con los dos puntos lo que hacemos es renombrar la variable
const {volumen:volumenDetalle, segundo, cancion, detalles:{autor: autorDetalle}} = reproductor;
//const { autor } = detalles;

console.log('El volumen actual de: ', volumenDetalle);
console.log('El segundo actual de: ', segundo);
console.log('La canción actual de: ', cancion);
console.log('El autor es: ', autorDetalle);
