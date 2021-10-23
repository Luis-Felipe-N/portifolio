import criarCards from './criar-cards.js'

// Criar card page index
const tdProjetos = [
    {   
        title: 'Blog Tech',
        link: 'https://blog-luis.vercel.app/',
        text: 'Blog Tech é um blog onde irei postar dicas de CSS, HTML e JS, implementei login e comentários dos leitores.',
        image: 'https://github.com/Luis-Felipe-N/blog/raw/main/public/blog-thumb.svg',
        technologies: ['next', 'dato_cms', 'firebase']
    },
    {
        title: 'Let me ask',
        link: 'https://letmeask-f1b55.web.app/',
        text: 'Let me ask foi um feito no <a target="_blank" rel="noopener noreferrer"  href="https://nextlevelweek.com/pre-nlw"> Next Level Week </a> onde aprendemos a criar uma plataforma de comentários.',
        image: 'https://github.com/Luis-Felipe-N/letmeask-1/raw/master/.github/cover.svg',
        technologies: ['scss', 'react']
    },
    {
        title: 'iFun',
        link: 'https://ifun-65e7a.firebaseapp.com/',
        text: 'iFun é um uma rede social de meme. Projeto criado para reforça o que aprendi no <a target="_blank" rel="noopener noreferrer"  href="https://nextlevelweek.com/pre-nlw"><span style="color: #866EE6; font-weight: 700">#NLW</span></a>.',
        image: 'https://github.com/Luis-Felipe-N/ifun/raw/main/src/assets/image/image-example.svg',
        technologies: ['scss', 'react']
    }

]


const quantCards = tdProjetos.length

criarCards( tdProjetos , quantCards )

// var cartasJogador = []

// // apos sortear
// cartasJogador.push(cartasJogadorSorteada)

// // apos ganhar da maquina
// cartasJogador.push(cartaMaquina)

// // mostras minhas cartas
// console.log('Suas cartas são: ')
// cartasJogador.forEach(cartaJogador => {
//     console.log(cartaJogador.nome)
// });

// // quando perder
// cartasMaquina.push(cartaJogador)
// cartasJogador.slice(cartaJogador) // removendo da lista a carta que o jogador acabou de perder 