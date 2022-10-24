const preguntas = document.querySelector("#preguntas"),
    opcionTexto = Array.from(document.getElementsByClassName("opcion-texto")),
    indicePuntaje = document.querySelector(".indice-puntaje"),
    indicePregunta = document.querySelector(".indice-pregunta");


//Array de preguntas y respuestas
const preguntasMusica = [
    {
        pregunta: "\"Bohemian Rapsody\" pertenece a la banda:",
        opcion1: "The Who",
        opcion2: "Aerosmith",
        opcion3: "Queen",
        respuesta: 3
    },
    {
        pregunta: "¿De qué banda es la conocida canción \"De Música Ligera\"?",
        opcion1: "Soda Estéreo",
        opcion2: "Los Fabulosos Cadillacs",
        opcion3: "Los Redondos",
        respuesta: 1
    },
    {
        pregunta: "Joan Manuel Serrat es:",
        opcion1: "Uruguayo",
        opcion2: "Italiano",
        opcion3: "Español",
        respuesta: 3
    },
    {
        pregunta: "¿Quién es considerado en la actualidad el Rey del Pop?",
        opcion1: "Robbie Williams",
        opcion2: "Michael Jackson",
        opcion3: "Prince",
        respuesta: 2
    },
    {
        pregunta: "¿Cuál fue la primera canción éxito de Los Beatles",
        opcion1: "Yellow Submarine",
        opcion2: "I want to hold your hand",
        opcion3: "Let it be",
        respuesta: 2
    },
    {
        pregunta: "¿De qué país es el grupo de música Europe?",
        opcion1: "Dinamarca",
        opcion2: "Noruega",
        opcion3: "Suecia",
        respuesta: 3
    },
    {
        pregunta: "¿En qué año falleció Kurt Cobain, líder de la banda Nirvana?",
        opcion1: "1994",
        opcion2: "1989",
        opcion3: "2003",
        respuesta: 1
    },
    {
        pregunta: "Vicente Fernández es cantante de:",
        opcion1: "Flamenco",
        opcion2: "Cumbia",
        opcion3: "Ranchera",
        respuesta: 3
    },
    {
        pregunta: "¿Cuál es el nombre verdadero del cantante de hip-hop Eminem?",
        opcion1: "Marshall Matthews",
        opcion2: "Marshall Mathers",
        opcion3: "Matthew Mathers",
        respuesta: 2
    },
    {
        pregunta: "¿Quién canta junto a Karol G \"Tusa\"?",
        opcion1: "Cardi B",
        opcion2: "Mariah Angeliq",
        opcion3: "Nicki Minaj",
        respuesta: 3
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