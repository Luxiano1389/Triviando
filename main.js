const continuar = document.querySelector(".btn-continuar");
const nombreUsuario = document.querySelector("#usuario");

continuar.disabled = false;

guardarNombre = () => {
    localStorage.setItem("nombre", nombreUsuario.value.toUpperCase());
}

nombreUsuario.addEventListener("change", () => {
    if (nombreUsuario.value === "") {
        continuar.disabled = true;
    } else {
        continuar.disabled = false;
        window.location.assign("./html/categorias.html");
        guardarNombre()
    }
});