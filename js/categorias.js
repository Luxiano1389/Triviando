const saludo = document.querySelector("#saludo"),
musica = document.querySelector(".musica"),
geografia = document.querySelector(".geografia");

pintarNombre = () => {
    saludo.innerText += localStorage.getItem("nombre");
}

pintarNombre();