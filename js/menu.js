const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('#container-hamburg')
const listaAs = menu.querySelectorAll('ul li a')

btnMenu.addEventListener('click', acaoMenu);

listaAs.forEach((a) => {
    a.addEventListener('click', acaoMenu)
});

function acaoMenu() {
    btnMenu.classList.toggle('aberto')
    menu.classList.toggle('abrir-menu')
};

