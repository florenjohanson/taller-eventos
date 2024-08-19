document.addEventListener('DOMContentLoaded', function () {
  
function saludar() {
    alert('Hola!');
}

const divBoton = document.querySelector('.boton');

divBoton.addEventListener('click', tocaDiv);

function tocaDiv() {
    alert ("Hola! soy el div");
  }

});