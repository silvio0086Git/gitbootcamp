var1=[1,2,4,6,7,8];
var2=[1,2,4,5,6,7,8];
var vector_nuevo=[];
//lo concateno
vector_nuevo=vector_nuevo.concat(var1,var2);

var vector_filtrado=[];

//lo filtro
for(var i = 0; i < vector_nuevo.length; i++) {
 
  var numero = vector_nuevo[i];
 
  if (!vector_filtrado.includes(vector_nuevo[i])) {
    vector_filtrado.push(numero);
  }
}

//lo ordeno
vector_filtrado.sort(function(a,b){
    if (a==b){
        return 0;
    }
    if (a<b){
        return -1;
    }
    return 1;
});

console.log(vector_filtrado);