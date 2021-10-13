
function cantidadMayusculas(cadena){
    var i=0;
    var caracter='';
    var contador=0;
    while (i < cadena.length){
        caracter=cadena.charAt(i);
        if (caracter!=' ' && caracter == caracter.toUpperCase()){
            contador++;
        }
        i++;
    }
    document.write(contador);
}