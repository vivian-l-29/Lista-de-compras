import { header } from "./Componentes/header/headerComponent.js";
import { seccion1 } from "./Componentes/seccion1/seccion1component.js";
import { buscarProducto } from "./Componentes/formulario/buscarProducto.js";
import { descargar } from "./Control/download.js";

// Seleccionamos el contenedor principal
let app = document.getElementById("app");

// Agregamos componentes al contenedor
app.appendChild(header());
app.appendChild(seccion1());
app.appendChild(buscarProducto());

// Creamos el botón de descarga con imagen
const botonDescargar = document.createElement("button");
botonDescargar.id = "btnDescargar";
botonDescargar.innerHTML = `<img src="./assets/descargar.png" alt="descargar" style="width:25px;">`;
document.body.appendChild(botonDescargar); // 👈 lo agregamos al body para poder ubicarlo fijo

// Evento para descargar lo que está en #app
botonDescargar.addEventListener("click", () => {
    descargar("app");
});
