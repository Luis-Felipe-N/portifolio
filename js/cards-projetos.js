// Criar card projetos
const tdProjetos = [
    {   
        title: 'Bot sorteio',
        link: 'https://github.com/Luis-Felipe-N/Bot-sorteio',
        text: 'O Bot Sorteio é um programa que te permite comentar em sorteios do Instagram sem muito esforço.',
        image: '/assets/ft-botsorteio.png',
        tecnologias: ['python'], 
        porcentagem: [100]
    },
    {   
        title: 'Bookorama',
        link: 'https://bookorama-luis-felipe.netlify.app/',
        text: 'No Bookorama você pode listar uma série de livros para ler depois.',
        image: '/assets/ft-bookorama.png',
        tecnologias: ['js', 'html', 'css'],
        porcentagem: [43.4, 31.1, 25.5]
    },
    {   
        title: 'Gerador de Bordas',
        link: 'https://border-radius-generator-luis.netlify.app/',
        text: 'No Gerador de bordas você vê em tempo real sua criação e pega o código pronto.',
        image: '/assets/ft-border-radius-generador.png',
        tecnologias: ['css', 'html', 'js'],
        porcentagem: [49.3, 32.5, 18.2]
    },
    {   
        title: 'Gerador de Text shadow',
        link: 'https://text-shadow-generator-luis.netlify.app',
        text: 'No Gerador de Text-shadow você vê em tempo real sua criação e pega o código pronto.',
        image: 'https://d33wubrfki0l68.cloudfront.net/60838f093f1fce0008d26705/screenshot_2021-04-24-03-22-55-0000.png',
        tecnologias: ['css', 'html', 'js'],
        porcentagem: [44.2, 39.1, 16.7]
    },
    {   
        title: 'Blogr landing page',
        link: 'https://blogr-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a href="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP">DevMentor Front-end</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1615479875/Challenges/awqnouxukwefdkaqt5iq.jpg',
        tecnologias: ['html', 'css', 'js'],
        porcentagem: [50.0, 46.7, 3.3]
    },
    {   
        title: 'Fylo dark theme landing page',
        link: 'https://fylo-dark-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd">DevMentor Front-end</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mhwyzwfgaii3cw5s6jco.jpg',
        tecnologias: ['html', 'css'],
        porcentagem: [59.7, 40.3]
    },
    {   
        title: 'codar',
        link: 'https://codar-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a href="https://devchallenge.com.br/challenges/5ed47992adee277fae224a0b/details">DevChallenge</a>.',
        image: 'https://d33wubrfki0l68.cloudfront.net/608398c9a73863752d341aba/screenshot_2021-04-24-04-04-32-0000.png',
        tecnologias: ['css', 'html'],
        porcentagem: [54.0, 46.0]
    },
    {   
        title: 'Conselhos do Sabio Bode',
        link: 'https://conselho-bode.netlify.app',
        text: 'Desafio Front-end consumindo API concluído do <a href="https://devchallenge.com.br/challenges/5ed47992adee277fae224a0b/details">DevChallenge</a>.',
        image: 'https://d33wubrfki0l68.cloudfront.net/608a19f8687f410007741c20/screenshot_2021-04-29-02-29-18-0000.png',
        tecnologias: ['css', 'html', 'js'],
        porcentagem: [46.7, 43.2, 10.1]
    },
    {   
        title: 'Streaming vendas',
        link: 'https://streaming-vendas.netlify.app',
        text: 'Um modelo de site simples para que direciona para alguma rede social.',
        image: 'https://d33wubrfki0l68.cloudfront.net/60802228754c84151e98b203/screenshot_2021-04-21-13-01-36-0000.png',
        tecnologias: ['css', 'html', 'js'],
        porcentagem: [60.9, 36.2, 2.9]
    }
]

const cores = {
    js: '#f1da1d',
    html: '#E44B27',
    css: '#254CDE',
    python: '#366F9E'
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

criarCards()


