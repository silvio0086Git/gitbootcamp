
var arreglo_ordenar=[1,5,-1,3,-8,6,10,9,10];

arreglo_ordenar.sort(function(a,b){
    if (a==b){
        return 0;
    }
    if (a<b){
        return -1;
    }
    return 1;
});

alert(arreglo_ordenar);

//document.write(arreglo_ordenar); ejecutar como funcion y devolver en una pagina
