const saludo = document.querySelector("#saludo");

pintarNombre = () => {
    saludo.innerText += localStorage.getItem("nombre");
}

pintarNombre()