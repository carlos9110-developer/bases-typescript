/*
    ===== Código de TypeScript =====
*/

// si queremos que sean un arreglo que permita varias cosas
let habilidades: (boolean | string | number)[] = ['Bash','Counter','Healing'];


let habilidades2: string[] =  ['Bash','Counter','Healing'];

interface Personaje {
    nombre:string,
    hp:number,
    habilidades: string[],
    puebloNatal?: string // con esto le estamos diciendo que es opcional
}

let personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'apia';

habilidades.push('Carlos');

console.table(personaje);