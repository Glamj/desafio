
let listaProdutos = null; 

async function carregarProdutosMaisRecentes() {
    try {
        const categoriasTech = ['smartphones', 'laptops', 'mobile-accessories', 'tablets'];
        const marcasFamosas = ['apple', 'samsung', 'asus', 'lenovo', 'dell', 'hp', 'xiaomi', 'sony', 'acer', 'huawei'];
        const limiteBusca = 30;

        const promessas = categoriasTech.map(cat => 
            fetch(`https://dummyjson.com/products/category/${cat}?limit=${limiteBusca}&sortBy=id&order=desc`)
                .then(res => res.json())
        );
        
        const resultados = await Promise.all(promessas);
        let produtosFiltrados = [];

        resultados.forEach(resposta => {
            if (resposta.products) {
                const itensDaCategoria = resposta.products.filter(item => {
                    const nome = (item.title || '').toLowerCase();
                    const marca = (item.brand || '').toLowerCase();
                    return marcasFamosas.some(m => nome.includes(m) || marca.includes(m));
                });
                produtosFiltrados.push(itensDaCategoria);
            }
        });

        let produtosBalanceados = [];
        const maxItensPorCategoria = 8;

        for (let i = 0; i < maxItensPorCategoria; i++) {
            produtosFiltrados.forEach(categoriaLista => {
                if (categoriaLista[i]) {
                    produtosBalanceados.push(categoriaLista[i]);
                }
            });
        }

        produtosBalanceados = produtosBalanceados.slice(0, 32);

        const produtos = produtosBalanceados.map(item => {
            return {
                img: item.thumbnail,
                nome: item.title,
                preçoNormal: item.price,
                preçoDesconto: Number((item.price * (1 - item.discountPercentage / 100)).toFixed(2)),
                desconto: Math.round(item.discountPercentage),
                categoria: item.category 
            };
        });

        listaProdutos = produtos;
        gerarVitrineAutomatica(listaProdutos);

    } catch (erro) {
        console.error('Erro ao carregar os produtos recentes:', erro);
    }
}

document.addEventListener('click', (event) => {
    const containerClicado = event.target.closest('.container-imgs');
    
    if (containerClicado && listaProdutos) {
        const idCategoria = containerClicado.id;
        
        
        if (idCategoria === 'all') {
            gerarVitrineAutomatica(listaProdutos, null);
        } else if (idCategoria) {
        
            gerarVitrineAutomatica(listaProdutos, idCategoria);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    carregarProdutosMaisRecentes();
});

function gerarVitrineAutomatica(listaDeProdutos, classFilter = null) {
    const vitrine = document.getElementById('vitrine-produtos');
    if (!vitrine) return;

    vitrine.innerHTML = '';

    listaDeProdutos.forEach(produto => {
        
        if (classFilter == null || produto.categoria === classFilter) {
            const precoNormalFormatado = produto.preçoNormal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            const precoDescontoFormatado = produto.preçoDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <div class="cardImg">
                    <img src="${produto.img}" alt="${produto.nome}" width="250px">
                </div>
                <h3 class="Nome-Produtos">${produto.nome}</h3>
                <p class="PrecoVermelho">de <span class="PrecoDes">${precoNormalFormatado}</span> por</p>
                <h5 class="Preco">${precoDescontoFormatado}</h5>
            `;

            vitrine.appendChild(card);
        }
    });
}
