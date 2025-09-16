function header() {
    let header = document.createElement('header');
    header.className = 'header';

    let titulo = document.createElement('h1');
    titulo.className = 'titulo';
    titulo.innerText = 'ByViusk';

    header.appendChild(titulo);
    return header;
    
}
export {header}