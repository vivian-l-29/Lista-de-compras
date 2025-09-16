// Componentes/formulario/buscarProducto.js
import { agregarCarrito } from "../../database/agregarcarrito.js";

export function buscarProducto() {
    const seccion = document.createElement("div");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Producto";
    inputNombre.id = "producto";

    let inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.placeholder = "Q 00.00";
    inputPrecio.step = "0.01";
    inputPrecio.id = "precio";

    let boton = document.createElement("button");
    boton.textContent = "Carrito";
    boton.id = "btnCarrito";

    boton.addEventListener("click", () => {
        const nombre = inputNombre.value;
        const precio = parseFloat(inputPrecio.value);

        if (nombre && !isNaN(precio)) {
            agregarCarrito(nombre, precio);
            inputNombre.value = "";
            inputPrecio.value = "";
        } else {
            alert("Ingrese un producto y un precio válido");
        }
    });

    seccion.appendChild(inputNombre);
    seccion.appendChild(inputPrecio);
    seccion.appendChild(boton);

    return seccion;
}
