// Componentes/seccion1/seccion1component.js
export function seccion1() {
    let seccion = document.createElement("section");

    let totalDiv = document.createElement("div");
    totalDiv.id = "total";
    totalDiv.textContent = "Q 0.00";

    let lista = document.createElement("div");
    lista.id = "lista";

    seccion.appendChild(totalDiv);
    seccion.appendChild(lista);

    return seccion;
}
