let produtos = [
    {
        img: '/src/produtos/produtos_Imagens/COMPUTADOR PICHAU GAMER.png',
        nome: 'PC Gamer Pichau Highflyer, AMD Ryzen 9 9950X3D2, GeForce RTX 5070 Ti 16GB, 32GB DDR5, SSD M.2 2TB',
        preçoNormal: 43492.87,
        preçoDesconto: 27033.68,
        desconto: 37,
        categoria: 'computadores'
    },
    {
        img: '',
        nome: 'iPhone 15 Pro Max 256GB',
        preçoNormal: 9499.00,
        preçoDesconto: 8074.15,
        desconto: 15,
        categoria: 'celulares'
    },
    {
        img: '',
        nome: 'Samsung Galaxy S24 Ultra',
        preçoNormal: 8999.00,
        preçoDesconto: 8099.10,
        desconto: 10,
        categoria: 'celulares'
    },
    {
        img: '',
        nome: 'Xiaomi Redmi Note 13 Pro',
        preçoNormal: 2399.00,
        preçoDesconto: 1919.20,
        desconto: 20,
        categoria: 'celulares'
    },
    {
        img: '',
        nome: 'PC Gamer Fácil Intel Core i7 16GB',
        preçoNormal: 4599.00,
        preçoDesconto: 3909.15,
        desconto: 15,
        categoria: 'computadores'
    },
    {
        img: '',
        nome: 'Computador de Escritório Dell Vostro',
        preçoNormal: 3200.00,
        preçoDesconto: 2880.00,
        desconto: 10,
        categoria: 'computadores'
    },
    {
        img: '',
        nome: 'Controle Sem Fio Xbox Carbon Black',
        preçoNormal: 499.00,
        preçoDesconto: 399.20,
        desconto: 20,
        categoria: 'controle'
    },
    {
        img: '',
        nome: 'Controle DualSense PS5 White',
        preçoNormal: 469.00,
        preçoDesconto: 398.65,
        desconto: 15,
        categoria: 'controle'
    },
    {
        img: '',
        nome: 'Controle Nintendo Switch Pro',
        preçoNormal: 399.00,
        preçoDesconto: 359.10,
        desconto: 10,
        categoria: 'controle'
    },
    {
        img: '',
        nome: 'Jogo EA Sports FC 25 PS5',
        preçoNormal: 349.00,
        preçoDesconto: 244.30,
        desconto: 30,
        categoria: 'jogos'
    },
    {
        img: '',
        nome: 'Jogo GTA V Premium Edition PC',
        preçoNormal: 149.00,
        preçoDesconto: 74.50,
        desconto: 50,
        categoria: 'jogos'
    },
    {
        img: '',
        nome: 'Jogo Elden Ring - PS4 / PS5',
        preçoNormal: 299.00,
        preçoDesconto: 224.25,
        desconto: 25,
        categoria: 'jogos'
    },
    {
        img: '',
        nome: 'Memória RAM Corsair Vengeance 32GB DDR5',
        preçoNormal: 1199.00,
        preçoDesconto: 959.20,
        desconto: 20,
        categoria: 'memoria RAM'
    },
    {
        img: '',
        nome: 'Memória RAM Kingston FURY Beast 16GB DDR4',
        preçoNormal: 399.00,
        preçoDesconto: 339.15,
        desconto: 15,
        categoria: 'memoria RAM'
    },
    {
        img: '',
        nome: 'Mouse Gamer Logitech G502 Hero',
        preçoNormal: 399.00,
        preçoDesconto: 279.30,
        desconto: 30,
        categoria: 'mouse'
    },
    {
        img: '',
        nome: 'Mouse Sem Fio Razer DeathAdder V3',
        preçoNormal: 699.00,
        preçoDesconto: 629.10,
        desconto: 10,
        categoria: 'mouse'
    },
    {
        img: '',
        nome: 'Notebook Gamer Acer Nitro V15',
        preçoNormal: 5499.00,
        preçoDesconto: 4674.15,
        desconto: 15,
        categoria: 'notebook'
    },
    {
        img: '',
        nome: 'MacBook Air M2 13" 256GB',
        preçoNormal: 9999.00,
        preçoDesconto: 8499.15,
        desconto: 15,
        categoria: 'notebook'
    },
    {
        img: '',
        nome: 'Notebook Lenovo IdeaPad 1i',
        preçoNormal: 2799.00,
        preçoDesconto: 2239.20,
        desconto: 20,
        categoria: 'notebook'
    },
    {
        img: '',
        nome: 'Placa de Vídeo RTX 4060 Ti MSI',
        preçoNormal: 2999.00,
        preçoDesconto: 2399.20,
        desconto: 20,
        categoria: 'placa de video'
    },
    {
        img: '',
        nome: 'Placa de Vídeo RX 7600 XT PowerColor',
        preçoNormal: 2499.00,
        preçoDesconto: 2124.15,
        desconto: 15,
        categoria: 'placa de video'
    },
    {
        img: '',
        nome: 'Placa de Vídeo RTX 4070 Super ASUS',
        preçoNormal: 4899.00,
        preçoDesconto: 4409.10,
        desconto: 10,
        categoria: 'placa de video'
    },
    {
        img: '',
        nome: 'Processador AMD Ryzen 5 5600X',
        preçoNormal: 1199.00,
        preçoDesconto: 899.25,
        desconto: 25,
        categoria: 'processador'
    },
    {
        img: '',
        nome: 'Processador Intel Core i5-14400F',
        preçoNormal: 1499.00,
        preçoDesconto: 1274.15,
        desconto: 15,
        categoria: 'processador'
    },
    {
        img: '',
        nome: 'Processador AMD Ryzen 7 5700X',
        preçoNormal: 1699.00,
        preçoDesconto: 1359.20,
        desconto: 20,
        categoria: 'processador'
    },
    {
        img: '',
        nome: 'Teclado Mecânico Redragon Kumara',
        preçoNormal: 299.00,
        preçoDesconto: 239.20,
        desconto: 20,
        categoria: 'teclado'
    },
    {
        img: '',
        nome: 'Teclado Gamer Logitech G213',
        preçoNormal: 429.00,
        preçoDesconto: 364.65,
        desconto: 15,
        categoria: 'teclado'
    },
    {
        img: '',
        nome: 'Fone de Ouvido HyperX Cloud II',
        preçoNormal: 599.00,
        preçoDesconto: 449.25,
        desconto: 25,
        categoria: 'favoritos'
    }
];
function gerarVitrineAutomatica(listaDeProdutos) {
    const vitrine = document.getElementById('vitrine-produtos');
    if (!vitrine) return;

    vitrine.innerHTML = '';

    listaDeProdutos.forEach(produto => {
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
    });
}

document.addEventListener('DOMContentLoaded', () => {
    gerarVitrineAutomatica(produtos);
});
