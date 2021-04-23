const btnVerMais = document.querySelector('#ver-mais');

btnVerMais.addEventListener('click', () => {
    redirecionarPage()
});

function redirecionarPage() {
    window.location.href = 'projetos.html'
}