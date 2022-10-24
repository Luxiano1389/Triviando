const puntajesAltos = document.querySelector(".puntajes-altos");

puntajeMasAlto = JSON.parse(localStorage.getItem("puntajeMasAlto")) || [];


puntajesAltos.innerHTML = puntajeMasAlto.map(puntaje => {
    return `<li class=puntaje-lista>${puntaje.nombre.toUpperCase()} ➖ ${puntaje.puntaje}</li>`
})
.join("")
