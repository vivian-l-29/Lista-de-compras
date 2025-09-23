function actualizarTotal() {
    let totalDiv = document.getElementById("total");
    let precios = document.querySelectorAll("#lista .precio");
    let total = 0;

    precios.forEach(precioSpan => {
        let valor = parseFloat(precioSpan.textContent.replace("Q ", ""));
        total += valor;
    });

    totalDiv.textContent = "Q " + total.toFixed(2);
}
