function login(form){
    if (form.usuario.value=="Mali"){
        if (form.contraseña.value == "1234"){
            location = "index.html";
        } else {
            alert ("Error de password");
        } 
    } else if (form.usuario.value=="Gera") {
        if(form.contraseña.value=="2345"){
            location="index.html";
        } else{
            alert ("Error de password")
        }
        
    } else if (form.usuario.value=="Maui") {
        if(form.contraseña.value=="3456"){
            location = "index.html";
        } else {
            alert ("Error de password");
        }
        
    } else {
        
        alert ("Error de usuario");
    }

}

var container = document.querySelector('usuario');
var matches = container.querySelectorAll('li[Cantidad="Cant"]');


function formula() {
    var Cantidad1 = parseInt(document.getElementById('C1').value);
    var Cantidad2 = parseInt(document.getElementById('C2').value);
    var Cantidad3 = parseInt(document.getElementById('C3').value);
    alert ("Tu saldo es "+ Cantidad1.value);
    alert ("Tu saldo es " + Cantidad2.value);
    alert ("Tu saldo es "+ Cantidad3.value);

}

function formula2() {
    var CantidadT = parseInt(document.getElementById('Cant').value);
    var Cantidad1 = parseInt(document.getElementById('C1').value);
    var Cantidad2 = parseInt(document.getElementById('C2').value);
    var Cantidad3 = parseInt (document.getElementById('C3').value);
    document.getElementById ('C1').value = (Cantidad1+CantidadT);
    document.getElementById('C2').value = (Cantidad2+CantidadT);
    document.getElementById('C3').value = (Cantidad3+CantidadT);

}

function formula3() {
    var CantidadT = parseInt(document.getElementById('Cant').value);
    var Cantidad1 = parseInt(document.getElementById('C1').value);
    var Cantidad2 = parseInt(document.getElementById('C2').value);
    var Cantidad3 = parseInt (document.getElementById('C3').value);
    document.getElementById ('C1').value = (Cantidad1-CantidadT);
    document.getElementById ('C2').value = (Cantidad2-CantidadT);
    document.getElementById ('C3').value = (Cantidad3-CantidadT);

}