// Criar card projetos
const tdProjetos = [
    {   
        title: 'Calculara APP',
        link: 'https://github.com/Luis-Felipe-N/calculadora',
        text: 'Calculadora APP é um desafio proposto pelo <a href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29">Front-end Mentor</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bz3taijsat3rhsocodym.jpg',
        tecnologias: ['sass', 'html', 'js']
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
        tecnologias: ['css', 'html', 'js']
    }

]

const cores = {
    js: '#f1da1d',
    html: '#E44B27',
    css: '#254CDE',
    python: '#366F9E',
    sass:'#cf649a'
};

const newElement = ( TagName, className = false ) => {
    const elem = document.createElement( TagName )
    className ? elem.classList.add( className ) : elem
    return elem
}

function criarCards() {

    let containerProjetos = document.querySelector('.container-projetos')
    
    for (let i = 0; i < tdProjetos.length; i++) {
        // Card Projeto
        let cardProjeto = newElement('div', 'projeto');

        // Parte da imagem
        let projetoImg = newElement('div', 'projeto__img');
        projetoImg.style.backgroundImage = `url(${tdProjetos[i].image})`

        // Parte da descrição
        let projetoDescri = newElement('div','projeto__descricao')

        let containerTitle = newElement('h3', 'projeto__descricao-title')
        
        
        let title = newElement('a', 'projeto__descricao-link')
        title.innerText = tdProjetos[i].title
        title.setAttribute('href', tdProjetos[i].link)
        title.setAttribute('target', '_blank')
        containerTitle.appendChild(title)
        projetoDescri.appendChild(containerTitle)

        let descri = newElement('p','projeto__descricao-text')
        descri.innerHTML = tdProjetos[i].text
        projetoDescri.appendChild(descri)

        let containerLinguagens = newElement('div', 'projeto__descricao-linguagens')
        let spansLinguagens = criarNomeLinguagens(tdProjetos[i].tecnologias)
        spansLinguagens.forEach(span => {
            containerLinguagens.appendChild( span )
        });
        projetoDescri.appendChild( containerLinguagens )


        // // Btns
        // let containerBtns = newElement('div', 'projeto__descricao-btns')
        // let btnViewDemo = newElement('a', 'projeto__descricao-btns-view-demo')
        // btnViewDemo.textContent = 'View Demo'
        // let btnViewCode = newElement('a', 'projeto__descricao-btns-view-code')
        // btnViewCode.textContent = 'View Code'
        // containerBtns.appendChild(btnViewDemo)
        // containerBtns.appendChild(btnViewCode)
        // projetoDescri.appendChild(containerBtns)

        cardProjeto.appendChild(projetoImg)
        cardProjeto.appendChild(projetoDescri)
        
        containerProjetos.appendChild(cardProjeto)
    };
};

function criarNomeLinguagens( linguagens ) {
    const spanLinguagens = linguagens.map( linguagem => {
        const span = newElement('span', `c-${linguagem}`)
        span.textContent = '#' + linguagem
        return span
    })
    return spanLinguagens
};

criarCards()