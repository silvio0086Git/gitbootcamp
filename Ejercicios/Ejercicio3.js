var array_vacio=[];
var N=prompt("Ingrese un numero para generrar N valores random:");

for (i=0; i<N; i++) { 
    array_vacio.push(Math.round(Math.random()*10)); // el ejercicio no especifica entre que valores, uso valores enteros
}
 
console.log(array_vacio);