const nombreUsuarioFinal = document.querySelector(".nombre-usuario"),
    botonGuardar = document.querySelector(".btn-guardar-puntaje"),
    resultadoFinal = document.querySelector(".resultado");

const puntajeFinal = localStorage.getItem("puntajeFinal");
resultadoFinal.innerText = puntajeFinal;

const puntajeMasAlto = JSON.parse(localStorage.getItem("puntajeMasAlto")) || [];
const puntajeMaximoPintado = 6;

//Funciones
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
    puntajeMasAlto.push(puntajes);
    puntajeMasAlto.sort((a, b) => b.puntaje - a.puntaje);
    puntajeMasAlto.splice(6);

    localStorage.setItem("puntajeMasAlto", JSON.stringify(puntajeMasAlto));
};

//Evento "click" para guardar puntaje final
botonGuardar.addEventListener("click", (e) => {
    e.preventDefault();
    guardarPuntaje();
    swal("🎯", "¡Puntaje guardado con éxito!", {
        buttons: false,
        timer: 2500,
      });
});



