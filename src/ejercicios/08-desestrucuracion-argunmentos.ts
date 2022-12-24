
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 230
}

const tableta: Producto = {
    desc: 'A 20',
    precio: 550
}


export function calculaISV(  productos:Producto[] ):[number, number]{

    let total = 0;

    // aca desestructuro la propiedad precio
    productos.forEach( ({precio})=>{
        total += precio
    });

    return [total, total * 0.15];

}


const articulos:Producto[] = [telefono, tableta];

const [total, isv ] = calculaISV(articulos);


console.log('Total:', total);
console.log('ISV:', isv);
