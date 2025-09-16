function header() {
    let header = document.createElement('header');
    header.className = 'header';

    let titulo = document.createElement('p');
    titulo.className = 'titulo';
    titulo.innerText = 'Lista de Compras';

    header.appendChild(titulo);
    return header;
    
}
export {header}