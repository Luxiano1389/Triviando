const nombre = document.querySelector("#nombre-usuario"),
    btnEntendido = document.querySelector(".boton-entendido"),
    btnSalir = document.querySelector(".boton-salir"),
    comenzar = document.querySelector(".comenzar"),
    instrucciones = document.querySelector(".instrucciones");

let contador = 6;
let redirigir = "./trivia.html";

pintarNombre = () => {
    nombre.innerText += localStorage.getItem("nombre");
}

pintarNombre();

comenzar.style.visibility = "hidden";

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




