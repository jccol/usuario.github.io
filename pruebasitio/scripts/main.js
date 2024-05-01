let miImage = document.querySelector("img");

miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/firefox5.jpg") {
        miImage.setAttribute("src", "images/firefox2.png");
    } else {
        miImage.setAttribute("src", "images/firefox5.jpg");
    }
}

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
    lacalStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla es genuial," + miNombre;
    }

}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}
miBoton.onclick = function () {
    estableceNombreUsuario();
}
