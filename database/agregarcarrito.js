import { nuevoProducto } from "../Modulos/Items/nuevoProducto.js";

let total = 0;

export function agregarCarrito(nombre, precio) {
    let lista = document.getElementById("lista");
    let totalDiv = document.getElementById("total");

    let onEliminar = function(precioEliminar) {
        total = total - precioEliminar;
        if (total < 0) total = 0;
        totalDiv.textContent = "Q " + total;
    };

    let item = nuevoProducto(nombre, precio, onEliminar);
    lista.appendChild(item);

    total = total + precio;
    totalDiv.textContent = "Q " + total;
}
