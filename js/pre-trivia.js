const nombre = document.querySelector("#nombre-usuario"),
    btnEntendido = document.querySelector(".boton-entendido"),
    btnSalir = document.querySelector(".boton-salir"),
    comenzar = document.querySelector(".comenzar"),
    instrucciones = document.querySelector(".instrucciones");

//Definicion de variables
let contador = 6;
let redirigir = "./trivia.html";

//Funciones 
pintarNombre = () => {
    nombre.innerText += localStorage.getItem("nombre");
}

pintarNombre();

comenzar.style.visibility = "hidden";


//Evento "click"
btnEntendido.addEventListener("click", () => {
    comenzar.style.visibility = "visible";
    instrucciones.style.visibility = "hidden";
    nombre.style.visibility = "hidden";

    cuentaRegresiva = () => {
        let temporizador = document.querySelector(".contador");
        if (contador > 0) {
            contador--;
            temporizador.innerText = contador;
            setTimeout("cuentaRegresiva()", 1000);
        } else {
            window.location.href = redirigir;
        }
    }

    cuentaRegresiva()
});

btnSalir.addEventListener("click", () => {
    window.location.href = "../index.html";
})




