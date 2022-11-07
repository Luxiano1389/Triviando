const preguntas = document.querySelector("#preguntas"),
    opcionTexto = Array.from(document.getElementsByClassName("opcion-texto")),
    indicePuntaje = document.querySelector(".indice-puntaje"),
    indicePregunta = document.querySelector(".indice-pregunta");

//Array de preguntas y respuestas
let preguntasTrivia = [];

//Definicion de variables y constantes de la trivia
let preguntaActual = {}, aceptarRespuestas = true, puntaje = 0; contadorPreguntas = 0; preguntasDisponibles = [];
const preguntasMax = 5, preguntaCorrecta = 10;

//Api local
fetch("/js/preg-resp.json")
    .then(response => response.json())
    .then(data => {
        preguntasTrivia = data;
        iniciarTrivia()
    })

//Funciones
iniciarTrivia = () => {
    contadorPreguntas = 0;
    puntaje = 0;
    preguntasDisponibles = [...preguntasTrivia];
    cargarPreguntas();
};

cargarPreguntas = () => {
    if (preguntasDisponibles.length === 5 || contadorPreguntas >= preguntasMax) {
        localStorage.setItem("puntajeFinal", puntaje);
        return window.location.assign("./resultado.html");
    }
    contadorPreguntas++;
    indicePregunta.innerText = contadorPreguntas + " de " + preguntasMax;

    //Aletoriedad de las preguntas y pintar dinamicamente las preguntas en el HTML
    const indicePreguntas = Math.floor(Math.random() * preguntasDisponibles.length);
    preguntaActual = preguntasDisponibles[indicePreguntas];
    preguntas.innerText = preguntaActual.pregunta;

    //Pintar dinamicamente las opciones en el HTML
    opcionTexto.forEach(opcion => {
        const numero = opcion.dataset["number"];
        opcion.innerText = preguntaActual["opcion" + numero];
    });

    //Quitar las preguntas ya contestadas del array
    preguntasDisponibles.splice(indicePreguntas, 1);
};

//Sumar puntaje y pintar dinamicamente en el HTML
puntajeCorrecto = numero => {
    puntaje += numero;
    indicePuntaje.innerText = puntaje;
};

//Evento "click"
opcionTexto.forEach(opcion => {
    opcion.addEventListener("click", e => {
        const opcionSeleccionada = e.target;
        const respuestaSeleccionada = opcionSeleccionada.dataset["number"];

        //Aplicar colores a las preguntas correctas e incorrectas
        const correctoIncorrecto = (respuestaSeleccionada == preguntaActual.respuesta) ? ("correcto") : ("incorrecto");

        if (correctoIncorrecto === "correcto") {
            puntajeCorrecto(preguntaCorrecta);
        }

        opcionSeleccionada.parentElement.classList.add(correctoIncorrecto);

        setTimeout(() => {
            opcionSeleccionada.parentElement.classList.remove(correctoIncorrecto);
            cargarPreguntas();
        }, 800);

    })
});

iniciarTrivia();