let botao_menu = document.getElementById('menu-celular');
let botao_menu_voltar = document.getElementById('botaoVoltar')
let nav_menu = document.querySelector('.telaEscura');


botao_menu.addEventListener('click', function() {
    nav_menu.classList.toggle('ativo');
})

botao_menu_voltar.addEventListener('click', function(){
    nav_menu.classList.remove('ativo')
})