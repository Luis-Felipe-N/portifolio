// Criar card projetos
const tdProjetos = [
    {   
        title: 'Bot sorteio',
        link: 'https://github.com/Luis-Felipe-N/Bot-sorteio',
        text: 'O Bot Sorteio é um programa que te permite comentar em sorteios do Instagram sem muito esforço.',
        image: '/assets/abstract-done-1.png',
        tecnologias: ['python'], 
        porcentagem: [100]
    },
    {   
        title: 'Bookorama',
        link: 'https://bookorama-luis-felipe.netlify.app/',
        text: 'No Bookorama você pode listar uma série de livros para ler depois.',
        image: '/assets/abstract-list-is-empty.png',
        tecnologias: ['js', 'html', 'css'],
        porcentagem: [43.4, 31.1, 25.5]
    },
    {   
        title: 'Gerador de Bordas',
        link: 'https://border-radius-generator-luis.netlify.app/',
        text: 'No Gerador de bordas você vê em tempo real sua criação e pega o código pronto.',
        image: '/assets/example.png',
        tecnologias: ['css', 'html', 'js'],
        porcentagem: [49.3, 32.5, 18.2]
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
    let cti = []
    let cnt = []
    let ul = document.createElement('ul')

    // console.log(listaBarras, porcentagens)
    listaBarras.forEach((e, i) => {
        let barra = document.createElement('span')
        barra.setAttribute('class', `progresso-${e}`)
        cnt.push(barra)
        // console.log(i)

        let li = document.createElement('li')
        li.classList.add(`l-${e}`)
        li.innerText = e

        let porcen = document.createElement('span')
        porcen.className += e
        porcen.innerText += ' '  + porcentagens[i] + '%'
        li.style.color = cores[e]
        console.log
        li.appendChild(porcen)
        ul.appendChild(li)
    });
    cti.push(cnt)
    cti.push(ul)

    return cti
};


function preenchendoBarras() {
    var projetos = document.querySelectorAll('.projeto')
    // Pegando todos os projetos

    projetos.forEach((e) => {
        var listaProgressos = e.querySelectorAll('.list-langue li span')
        // Pegando as listas de numeros de progresso

        var barProgresso = e.querySelectorAll('.bar-langue span')
        // Pegando barra de progresso

        adicionarProgresso(listaProgressos, barProgresso)
    });


    function adicionarProgresso(progressos, barras) {
        progressos.forEach((e, i) => {
            var cor = e.className

            barras[i].style.width = e.innerText
            barras[i].style.backgroundColor = cores[cor]
        });
    };
};


criarCards()


preenchendoBarras()