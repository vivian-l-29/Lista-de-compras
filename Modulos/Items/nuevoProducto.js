export function nuevoProducto(nombre, precio, onEliminar) {
    let producto = document.createElement("div");
    producto.className = "item";

    let nombreElemento = document.createElement("span");
    nombreElemento.textContent = nombre;

    let precioElemento = document.createElement("span");
    precioElemento.className = "precio";
    precioElemento.textContent = "Q " + precio.toFixed(2);

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";

    botonEliminar.addEventListener("click", function() {
        producto.remove();
        if (typeof onEliminar === "function") {
            onEliminar(precio);
        }
    });

    producto.appendChild(nombreElemento);
    producto.appendChild(precioElemento);
    producto.appendChild(botonEliminar);

    return producto;
}
