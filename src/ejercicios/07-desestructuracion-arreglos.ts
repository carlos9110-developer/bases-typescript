const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

const [p1, p2, p3] = dbz;

console.log('Personaje 1 desestructurado:', p1);
console.log('Personaje 2 desestructurado:', p2);
console.log('Personaje 3 desestructurado:', p3);


// como hago para elegir el ultimo del arreglo

const [, , p3Solo] = dbz;

console.log('Personaje 3 desestructurado solo:', p3Solo);