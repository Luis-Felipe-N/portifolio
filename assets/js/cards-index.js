import criarCards from './criar-cards.js'

// Criar card page index
const tdProjetos = [
    {   
        title: 'REST Countries',
        link: 'https://rest-countries-luis.netlify.app/',
        text: 'Site que mostra mais de 200 países, com opções de fitragem e pesquisa.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yhq5ihanseyinzwblaw1.jpg',
        technologies: ['js', 'css', 'html']
    },
    {
        title: 'Let me ask',
        link: 'https://letmeask-f1b55.web.app/',
        text: 'Let me ask foi um feito no <a target="_blank" rel="noopener noreferrer"  href="https://nextlevelweek.com/pre-nlw"> Next Level Week </a> onde aprendemos a criar uma plataforma de comentários.',
        image: 'https://github.com/Luis-Felipe-N/letmeask-1/raw/master/.github/cover.svg',
        technologies: ['scss', 'html', 'react']
    },
    {
        title: 'iFun',
        link: 'https://ifun-65e7a.firebaseapp.com/',
        text: 'iFun é um uma rede social de meme. Projeto criado para reforça o que aprendi no <a target="_blank" rel="noopener noreferrer"  href="https://nextlevelweek.com/pre-nlw"><span style="color: #866EE6; font-weight: 700">#NLW</span></a>.',
        image: 'https://github.com/Luis-Felipe-N/ifun/raw/main/src/assets/image/image-example.svg',
        technologies: ['scss', 'html', 'react']
    }

]


const quantCards = tdProjetos.length

criarCards( tdProjetos , quantCards )