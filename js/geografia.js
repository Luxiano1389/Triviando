const preguntas = document.querySelector("#preguntas"),
    opcionTexto = Array.from(document.getElementsByClassName("opcion-texto")),
    indicePuntaje = document.querySelector(".indice-puntaje"),
    indicePregunta = document.querySelector(".indice-pregunta");


//Array de preguntas y respuestas
const preguntasMusica = [
    {
        pregunta: "¿En qué continente se encuentra el \"Mar Muerto\"?",
        opcion1: "América",
        opcion2: "África",
        opcion3: "Asia",
        respuesta: 3
    },
    {
        pregunta: "¿Qué es un \"Archipiélago\"?",
        opcion1: "Una isla",
        opcion2: "Un conjunto de islas",
        opcion3: "Un terreno de siembra",
        respuesta: 2
    },
    {
        pregunta: "¿A qué país debes ir si quieres visitar \"Machu Picchu\"?",
        opcion1: "México",
        opcion2: "Perú",
        opcion3: "Ecuador",
        respuesta: 2
    },
    {
        pregunta: "¿Cuál es la montaña mas alta del mundo?",
        opcion1: "Everest",
        opcion2: "Makalú",
        opcion3: "Broad Peak",
        respuesta: 1
    },
    {
        pregunta: "¿En qué país se encuentra la \"Selva Negra\"?",
        opcion1: "Australia",
        opcion2: "Venezuela",
        opcion3: "Alemania",
        respuesta: 3
    },
    {
        pregunta: "¿Cuál es el continente más grande del mundo?",
        opcion1: "América",
        opcion2: "Asia",
        opcion3: "África",
        respuesta: 2
    },
    {
        pregunta: "¿Cuál es la capital de Corea del Norte?",
        opcion1: "Busan",
        opcion2: "Seúl",
        opcion3: "Pyongyang",
        respuesta: 3
    },
    {
        pregunta: "¿Cuántas islas tiene Filipinas?",
        opcion1: "7640",
        opcion2: "1400",
        opcion3: "6440",
        respuesta: 1
    },
    {
        pregunta: "¿Cuál es la población actual de la ciudad del Vaticano?",
        opcion1: "801",
        opcion2: "1802",
        opcion3: "825",
        respuesta: 1
    },
    {
        pregunta: "¿Qué país no forma parte de África?",
        opcion1: "Nigeria",
        opcion2: "Nepal",
        opcion3: "Ghana",
        respuesta: 2
    }
];

//Definicion de variables y constantes
let preguntaActual = {}, aceptarRespuestas = true, puntaje = 0; contadorPreguntas = 0; preguntasDisponibles = [];
const preguntasMax = 5, preguntaCorrecta = 10;


//Funciones
iniciarTrivia = () => {
    contadorPreguntas = 0,
    puntaje = 0,
    preguntasDisponibles = [...preguntasMusica],
    cargarPreguntas();
};

cargarPreguntas = () => {
    if (preguntasDisponibles.length === 0 || contadorPreguntas >= preguntasMax) {
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
        
        if(correctoIncorrecto === "correcto") {
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