document.addEventListener('click', (event) => {
    const containerClicado = event.target.closest('.container-imgs');
    const card = event.target.closest('.card');

    if (containerClicado) {
        const idCategoria = containerClicado.id;
        gerarVitrineAutomatica(listaProdutos, idCategoria || null);
    }

    if (card) {
        const nome = card.querySelector('.Nome-Produtos');
        alert(`Compra confirmada! ${nome.textContent} já está a caminho. Acompanhe em "Minhas compras".`);
    }
});