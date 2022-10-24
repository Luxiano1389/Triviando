const preguntas = document.querySelector("#preguntas"),
    opcionTexto = Array.from(document.getElementsByClassName("opcion-texto")),
    indicePuntaje = document.querySelector(".indice-puntaje"),
    indicePregunta = document.querySelector(".indice-pregunta");


//Array de preguntas y respuestas
const preguntasMusica = [
    {
        pregunta: "¿Qué Dios comparte la paternidad del caballo alado \"Pegaso\"?",
        opcion1: "Apolo",
        opcion2: "Hermes",
        opcion3: "Poseidón",
        respuesta: 3
    },
    {
        pregunta: "¿Quién fue la primera mujer mortal creada por los \"Dioses del Olimpo\"?",
        opcion1: "Medusa",
        opcion2: "Pandora",
        opcion3: "Helena de Troya",
        respuesta: 2
    },
    {
        pregunta: "¿Quiénes eran consideradas las \"Tres Diosas Lunares\"?",
        opcion1: "Hécate, Atenea y Selene",
        opcion2: "Selene, Artemisa y Hécate",
        opcion3: "Selene, Artemisa y Feme",
        respuesta: 2
    },
    {
        pregunta: "Helena de Troya era hija de:",
        opcion1: "Zeus",
        opcion2: "Hera",
        opcion3: "Apolo",
        respuesta: 3
    },
    {
        pregunta: "¿Cómo se llamaba la parte más profunda y oscura del inframundo?",
        opcion1: "El Tártaro",
        opcion2: "Los Campos de Asfódelos",
        opcion3: "Los Campos Elíseos",
        respuesta: 1
    },
    {
        pregunta: "¿Quién es considerada la diosa alada de la victoria?",
        opcion1: "Nike",
        opcion2: "Bla",
        opcion3: "Sytx",
        respuesta: 1
    },
    {
        pregunta: "¿Sabés el nombre de la diosa del hogar?",
        opcion1: "Hécate",
        opcion2: "Hestia",
        opcion3: "Heracles",
        respuesta: 2
    },
    {
        pregunta: "Odiseo cegó a un:",
        opcion1: "Lestrigón",
        opcion2: "Minotauro",
        opcion3: "Cíclope",
        respuesta: 3
    },
    {
        pregunta: "¿Qué era Perseo de Heracles?",
        opcion1: "Bisabuelo",
        opcion2: "Medio hermano",
        opcion3: "Ambos",
        respuesta: 3
    },
    {
        pregunta: "¿Qué disciplina practicaba el dios Apolo?",
        opcion1: "Lanzamiento de jabalina",
        opcion2: "Arquería",
        opcion3: "Carrera en velocidad",
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