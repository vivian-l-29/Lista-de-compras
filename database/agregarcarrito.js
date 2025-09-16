// database/agregarcarrito.js
import { nuevoProducto } from "../Modulos/Items/nuevoProducto.js";

let total = 0;

export function agregarCarrito(nombre, precio) {
    const lista = document.getElementById("lista");
    const totalDiv = document.getElementById("total");

    const onEliminar = (precioEliminar) => {
        total -= precioEliminar;
        if (total < 0) total = 0;
        totalDiv.textContent = `Q ${total.toFixed(2)}`;
    };

    let item = nuevoProducto(nombre, precio, onEliminar);
    lista.appendChild(item);

    total += precio;
    totalDiv.textContent = `Q ${total.toFixed(2)}`;
}
