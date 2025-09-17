export function nuevoProducto(nombre, precio, onEliminar) {
    let producto = document.createElement("div");
    producto.className = "item";

    let nombreElemento = document.createElement("span");
    nombreElemento.textContent = nombre;

    let precioElemento = document.createElement("span");
    precioElemento.textContent = "Q " + precio;

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";

    botonEliminar.addEventListener("click", function() {
        producto.remove();
        Eliminar(precio);
    });

    producto.appendChild(nombreElemento);
    producto.appendChild(precioElemento);
    producto.appendChild(botonEliminar);

    return producto;
}
