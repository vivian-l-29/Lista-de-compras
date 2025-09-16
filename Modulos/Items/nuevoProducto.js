// Modulos/item/nuevoProducto.js
export function nuevoProducto(nombre, precio, onEliminar) {
    let item = document.createElement("div");
    item.className = "item";

    let spanNombre = document.createElement("span");
    spanNombre.textContent = nombre;

    let spanPrecio = document.createElement("span");
    spanPrecio.textContent = `Q ${precio.toFixed(2)}`;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.addEventListener("click", () => {
        item.remove();
        onEliminar(precio);
    });

    item.appendChild(spanNombre);
    item.appendChild(spanPrecio);
    item.appendChild(btnEliminar);

    return item;
}
