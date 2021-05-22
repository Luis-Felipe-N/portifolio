// Criar card projetos
const tdProjetos = [
    {   
        title: 'Calculara APP',
        link: 'https://github.com/Luis-Felipe-N/calculadora',
        text: 'Calculadora APP é um desafio proposto pelo <a href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29">Front-end Mentor</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bz3taijsat3rhsocodym.jpg',
        tecnologias: ['sass', 'html', 'js'], 
        porcentagem: [58.1, 26.9, 15]
    },
    {   
        title: 'REST Countries',
        link: 'https://rest-countries-luis.netlify.app/',
        text: 'Site que mostra mais de 200 países, com opções de fitragem e pesquisa.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yhq5ihanseyinzwblaw1.jpg',
        tecnologias: ['js', 'css', 'html'],
        porcentagem: [46.5, 34.1, 19.4]
    },
    {   
        title: 'Gerador de Bordas',
        link: 'https://border-radius-generator-luis.netlify.app/',
        text: 'No Gerador de bordas você vê em tempo real O formato em radius e pega o código pronto.',
        image: '/assets/ft-border-radius-generador.png',
        tecnologias: ['css', 'html', 'js'],
        porcentagem: [49.3, 32.5, 18.2]
    }

]

const cores = {
    js: '#f1da1d',
    html: '#E44B27',
    css: '#254CDE',
    python: '#366F9E',
    sass:'#cf649a'
};

function criarCards() {

    let containerProjetos = document.querySelector('.container-projetos')
    
    for (let i = 0; i < tdProjetos.length; i++) {
        // Card Projeto
        let cardProjeto = document.createElement('div');
        cardProjeto.classList.add('projeto')

        // Parte da imagem
        let projetoImg = document.createElement('div');
        projetoImg.classList.add('projeto__img')
        projetoImg.style.backgroundImage = `url(${tdProjetos[i].image})`

        // Parte da descrição
        let projetoDescri = document.createElement('div')
        projetoDescri.classList.add('projeto__descricao')

        let containerTitle = document.createElement('h3')
        
        
        let title = document.createElement('a')
        title.innerText = tdProjetos[i].title
        title.setAttribute('href', tdProjetos[i].link)
        title.setAttribute('target', '_blank')

        let descri = document.createElement('p')
        descri.innerHTML = tdProjetos[i].text

        containerTitle.appendChild(title)
        projetoDescri.appendChild(containerTitle)
        projetoDescri.appendChild(descri)

        // barra das tecnologias
        let containerTecs = document.createElement('div')
        containerTecs.classList.add('tec-ulti')

        let containerBarras = document.createElement('div')
        containerBarras.classList.add('bar-langue')

        let barras = criarBarras(tdProjetos[i].tecnologias, tdProjetos[i].porcentagem)
        barras[1].classList.add('list-langue')        
        barras[0].forEach((e) => {
            containerBarras.appendChild(e)
        });

        containerTecs.appendChild(containerBarras)
        containerTecs.appendChild(barras[1])
        projetoDescri.appendChild(containerTecs)

        cardProjeto.appendChild(projetoImg)
        cardProjeto.appendChild(projetoDescri)
        
        containerProjetos.appendChild(cardProjeto)
    };
};

function criarBarras(listaBarras, porcentagens) {
    let containerTempBarras = []
    let tempBarras = []
    let ul = document.createElement('ul')

    listaBarras.forEach((e, i) => {
        let nomeCor = e
        let nomeLinguagem = e

        let barra = document.createElement('span')
        barra.setAttribute('class', `progresso-${nomeLinguagem}`)
        setWidth(porcentagens[i], barra)
        setBackgroundColor(nomeCor, barra)
        tempBarras.push(barra)

        let li = document.createElement('li')
        li.classList.add(`l-${nomeLinguagem}`)
        li.innerText = nomeLinguagem

        let numPorcentagem = document.createElement('span')
        numPorcentagem.classList.add(nomeLinguagem)
        numPorcentagem.innerText += ' '  + porcentagens[i] + '%'

        setColor(nomeCor, li)
        li.appendChild(numPorcentagem)
        ul.appendChild(li)
    });

    containerTempBarras.push(tempBarras)
    containerTempBarras.push(ul)

    return containerTempBarras
};

setWidth = (width, barra) => barra.style.width = width + '%'
setBackgroundColor = (cor, item) => item.style.backgroundColor = cores[cor]
setColor = (cor, item) =>  item.style.color = cores[cor]

const btnVerMais = document.querySelector('#ver-mais');

btnVerMais.addEventListener('click', () => {
    redirecionarPage()
});

function redirecionarPage() {
    window.location.href = 'projetos.html'
}

criarCards()
