/* const resultadoFinal = document.querySelector(".resultado"),
    nombreUsuario = document.querySelector(".nombre-usuario");

const puntajeFinal = localStorage.getItem("puntajeFinal");



pintarUsuario = () => {
    let usuario = localStorage.getItem("nombre");
    nombreUsuario.innerText = usuario + ", ¿querés guardar tu puntaje?"
}

pintarUsuario();

pintarPuntaje = () => {
    resultadoFinal.innerText = puntajeFinal;
}

pintarPuntaje();

guardarPuntaje = () => {

    const puntajes = 
    {
        puntaje: puntajeFinal,
        nombre: nombreUsuario.value
    };


    puntajeMasAlto.push(puntajes);

    localStorage.setItem("puntajeMasAlto", JSON.stringify(puntajeMasAlto));
    window.location.assign("./");
}

guardarPuntaje() */

const nombreUsuarioFinal = document.querySelector(".nombre-usuario"),
botonGuardar = document.querySelector(".btn-guardar-puntaje"),
resultadoFinal = document.querySelector(".resultado");

const puntajeFinal = localStorage.getItem("puntajeFinal");
resultadoFinal.innerText = puntajeFinal;

const puntajeMasAlto = JSON.parse(localStorage.getItem("puntajeMasAlto")) || [];


pintarUsuario = () => {
    let usuario = localStorage.getItem("nombre");
    nombreUsuarioFinal.innerText = usuario + ", ¿querés guardar tu puntaje?"
}

pintarUsuario();

guardarPuntaje = () => {
    const nombreUsuarioPuntaje = localStorage.getItem("nombre");
    const puntajes = {
        nombre: nombreUsuarioPuntaje,
        puntaje: puntajeFinal
    };
    console.log(puntajes);
    puntajeMasAlto.push(puntajes);

    localStorage.setItem("puntajeMasAlto", JSON.stringify(puntajeMasAlto));
    window.location.href = "../index.html";
};

/* nombreUsuario.addEventListener("keyup", () => {
    botonGuardar.disabled = !nombreUsuario.value;
}) */

botonGuardar.addEventListener("click", (e) => {
    e.preventDefault();
    guardarPuntaje()
})

