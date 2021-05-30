// Criar card projetos
const tdProjetos = [
    {   
        title: 'Bot sorteio',
        link: 'https://github.com/Luis-Felipe-N/Bot-sorteio',
        text: 'O Bot Sorteio é um programa que te permite comentar em sorteios do Instagram sem muito esforço.',
        image: '/assets/ft-botsorteio.png',
        tecnologias: ['python'],
    },
    {   
        title: 'Bookorama',
        link: 'https://bookorama-luis-felipe.netlify.app/',
        text: 'No Bookorama você pode listar uma série de livros para ler depois.',
        image: '/assets/ft-bookorama.png',
        tecnologias: ['js', 'html', 'css']
    },
    {   
        title: 'Gerador de Bordas',
        link: 'https://border-radius-generator-luis.netlify.app/',
        text: 'No Gerador de bordas você vê em tempo real sua criação e pega o código pronto.',
        image: '/assets/ft-border-radius-generador.png',
        tecnologias: ['css', 'html', 'js']
    },
    {   
        title: 'Gerador de Text shadow',
        link: 'https://text-shadow-generator-luis.netlify.app',
        text: 'No Gerador de Text-shadow você vê em tempo real sua criação e pega o código pronto.',
        image: 'https://d33wubrfki0l68.cloudfront.net/60838f093f1fce0008d26705/screenshot_2021-04-24-03-22-55-0000.png',
        tecnologias: ['css', 'html', 'js']
    },
    {   
        title: 'Blogr',
        link: 'https://blogr-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a href="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP">DevMentor Front-end</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1615479875/Challenges/awqnouxukwefdkaqt5iq.jpg',
        tecnologias: ['html', 'css', 'js']
    },
    {   
        title: 'Fylo dark',
        link: 'https://fylo-dark-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd">DevMentor Front-end</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mhwyzwfgaii3cw5s6jco.jpg',
        tecnologias: ['html', 'css']
    },
    {   
        title: 'Codar',
        link: 'https://codar-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a href="https://devchallenge.com.br/challenges/5ed47992adee277fae224a0b/details">DevChallenge</a>.',
        image: 'https://d33wubrfki0l68.cloudfront.net/608398c9a73863752d341aba/screenshot_2021-04-24-04-04-32-0000.png',
        tecnologias: ['css', 'html']
    },
    {   
        title: 'Conselhos do Bode',
        link: 'https://conselho-bode.netlify.app',
        text: 'Desafio Front-end consumindo API concluído do <a href="https://devchallenge.com.br/challenges/5ed47992adee277fae224a0b/details">DevChallenge</a>.',
        image: 'https://d33wubrfki0l68.cloudfront.net/608a19f8687f410007741c20/screenshot_2021-04-29-02-29-18-0000.png',
        tecnologias: ['css', 'html', 'js']
    },
    {   
        title: 'Streaming vendas',
        link: 'https://streaming-vendas.netlify.app',
        text: 'Um modelo de site simples para que direciona para alguma rede social.',
        image: 'https://d33wubrfki0l68.cloudfront.net/60802228754c84151e98b203/screenshot_2021-04-21-13-01-36-0000.png',
        tecnologias: ['css', 'html', 'js']
    },
    {   
        title: 'REST Countries',
        link: 'https://rest-countries-luis.netlify.app/',
        text: 'Site que mostra mais de 200 países, com opções de fitragem e pesquisa.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yhq5ihanseyinzwblaw1.jpg',
        tecnologias: ['js', 'css', 'html']
    },
    {
        title: 'Calculara APP',
        link: 'https://calculadora-luis.netlify.app/',
        text: 'Calculadora APP é um desafio proposto pelo <a href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29">Front-end Mentor</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bz3taijsat3rhsocodym.jpg',
        tecnologias: ['sass', 'html', 'js']
    },
    {
        title: 'Self Care',
        link: 'https://self-care-scss.netlify.app/',
        text: 'Self Care é um desafio proposto pelo <a href="https://devchallenge.com.br/challenges/5f14fad2130a5d78f89d9642/details">DevChallenge</a> para treino do sass.',
        image: 'https://d33wubrfki0l68.cloudfront.net/609aad205136db34b780ddd8/screenshot_2021-05-11-16-13-27-0000.png',
        tecnologias: ['sass', 'html', 'js']
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