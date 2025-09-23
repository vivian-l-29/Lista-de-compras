import { header } from "./Componentes/header/headerComponent.js";
import { seccion1 } from "./Componentes/seccion1/seccion1component.js";
import { buscarProducto } from "./Componentes/formulario/buscarProducto.js";
import { descargar } from "./Control/download.js";
import { agregarCarrito } from "./database/agregarcarrito.js";

let app = document.getElementById("app");

app.appendChild(header());
app.appendChild(seccion1());

let seccionFormulario = buscarProducto();
app.appendChild(seccionFormulario);

let btnCarrito = seccionFormulario.querySelector("#btnCarrito");
let inputNombre = seccionFormulario.querySelector("#producto");
let inputPrecio = seccionFormulario.querySelector("#precio");

btnCarrito.addEventListener("click", () => {
    let nombre = inputNombre.value;
    let precio = parseFloat(inputPrecio.value);

    if (nombre !== "" && !isNaN(precio)) {
        agregarCarrito(nombre, precio);
        inputNombre.value = "";
        inputPrecio.value = "";
    }
});

const botonDescargar = document.createElement("button");
botonDescargar.id = "btnDescargar";
botonDescargar.innerHTML = `<img src="./assets/descargar.png" alt="descargar" style="width:25px;">`;
document.body.appendChild(botonDescargar);

botonDescargar.addEventListener("click", () => {
    let seccion = document.getElementById("miSeccion1");

    seccion.querySelectorAll(".item button").forEach(btn => btn.style.display = "none");

    descargar("miSeccion1");

    setTimeout(() => {
        seccion.querySelectorAll(".item button").forEach(btn => btn.style.display = "inline-block");
    }, 500);
});
