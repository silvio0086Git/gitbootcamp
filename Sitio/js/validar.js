var nombre=document.getElementById('nombre');
var apellido=document.getElementById('apellido');
var provincia=document.getElementById('provincia');
var email=document.getElementById('email')
var texto=document.getElementById('texto');
var error=document.getElementById('error');
error.style.color='red'
var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

function enviarFormulario(){
    console.log('Enviando');

    var mensaje=[];

    if (nombre.value === null || nombre.value===''){
        mensaje.push('Ingresa un nombre')
    }

    if (apellido.value === null || apellido.value===''){
        mensaje.push('Ingresa un apellido')
    }
    if (provincia.value === null || provincia.value===''){
        mensaje.push('Ingresa una provincia')
    }
    
    if (!(expReg.test(email.value))){
        mensaje.push('Ingresa un email valido (Recuerde utilizar minusculas)')
    }
    if (texto.value === null || texto.value===''){
        mensaje.push('Ingresa una consulta adecuada')
    }

    error.innerHTML=mensaje.join(', ');

    if (mensaje.length===0){
        alert('Consulta enviada con exito!!!')
        window.location.assign('index.html')
        return true;
    }else{
        return false;
    }
}