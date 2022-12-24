// le expecifico que recibo algo de tipo T (el tipo que yo le especifique), y le estoy diciendo que el argumendo es de tipo T
function queTipoSoy<T>(argumento:T) : T{
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([100, 100, 200, 300]);

