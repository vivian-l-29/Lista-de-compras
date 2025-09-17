// main.js
import { header } from "./Componentes/header/headerComponent.js";
import { seccion1 } from "./Componentes/seccion1/seccion1component.js";
import { buscarProducto } from "./Componentes/formulario/buscarProducto.js";

function seccion( ) {
    
}
let precio = document.getElementById("app");

precio.appendChild(header());
precio.appendChild(seccion1());
precio.appendChild(buscarProducto());
