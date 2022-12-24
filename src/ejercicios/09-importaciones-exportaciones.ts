import { calculaISV, Producto } from "./08-desestrucuracion-argunmentos";

const carritoCompras : Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
];

const  [total, isv] = calculaISV(carritoCompras);


console.log('Total:', total);
console.log('ISV:', isv);
