function sumar (a:number, b:number):number {
    return a + b;
}

const sumarFlecha   =  (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number = 2): number {
    return numero * base;
}

const resultado     =   sumar(12, 25);
const resultado2    =   sumarFlecha(12, 18);
const resultado3    =   multiplicar( 5);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);