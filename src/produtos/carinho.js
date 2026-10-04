let carrinhoDeCompras = [];

const carrinho = document.getElementById('carrinho');
const telaEscura = document.querySelector('.telaEscura2');
const janela = document.querySelector('.janela');

function adicionarAoCarrinho(indexDoProduto) {
    const produtoEscolhido = listaProdutos[indexDoProduto];

    if (!produtoEscolhido) {
        return;
    }

    carrinhoDeCompras.push(produtoEscolhido);

    alert(`${produtoEscolhido.nome} foi adicionado ao carrinho!`);
}

function fecharCarrinho() {
    telaEscura.classList.remove('ativo');
}

function abrirCarrinho() {
    telaEscura.classList.add('ativo');
    atualizarCarrinho();
}

function atualizarCarrinho() {
    if (carrinhoDeCompras.length === 0) {
        janela.innerHTML = `
            <button onclick="fecharCarrinho()" class="fechar-carrinho">X</button>
            <h3>Seu Carrinho de Compras</h3>
            <div class="carrinho-vazio">
                Seu carrinho está vazio.
            </div>
        `;

        return;
    }

    let itensHTML = '';
    let valorTotal = 0;

    carrinhoDeCompras.forEach((produto, index) => {
        const preco = Number(produto.preçoDesconto) || 0;

        const precoFormatado = preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        valorTotal += preco;

        itensHTML += `
            <div class="item-carrinho">
                <img src="${produto.img}" alt="${produto.nome}">

                <div class="informacoes-produto">
                    <h4>${produto.nome}</h4>
                    <p>${precoFormatado}</p>
                </div>

                <button
                    class="remover-item"
                    onclick="removerDoCarrinho(${index})"
                    aria-label="Remover ${produto.nome} do carrinho"
                >
                    🗑️
                </button>
            </div>
        `;
    });

    const totalFormatado = valorTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    janela.innerHTML = `
        <button onclick="fecharCarrinho()" class="fechar-carrinho">X</button>

        <h3>Seu Carrinho de Compras</h3>

        <div class="lista-itens-carrinho">
            ${itensHTML}
        </div>

        <div class="total-carrinho">
            <h3>Total: ${totalFormatado}</h3>

            <button
                class="finalizar-compra"
                onclick="finalizarCompra()"
            >
                Finalizar Compra
            </button>
        </div>
    `;
}

function removerDoCarrinho(index) {
    carrinhoDeCompras.splice(index, 1);
    atualizarCarrinho();
}

function finalizarCompra() {
    if (carrinhoDeCompras.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    alert('Compra finalizada com sucesso!');

    carrinhoDeCompras = [];

    fecharCarrinho();
}

carrinho.addEventListener('click', abrirCarrinho);

telaEscura.addEventListener('click', (evento) => {
    if (evento.target === telaEscura) {
        fecharCarrinho();
    }
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
        fecharCarrinho();
    }
});