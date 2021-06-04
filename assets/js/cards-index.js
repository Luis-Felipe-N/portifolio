import criarCards from './criar-cards.js'

// Criar card page index
const tdProjetos = [
    {   
        title: 'Calculara APP',
        link: 'https://github.com/Luis-Felipe-N/calculadora',
        text: 'Calculadora APP é um desafio proposto pelo <a target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29">Front-end Mentor</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bz3taijsat3rhsocodym.jpg',
        technologies: ['scss', 'html', 'js']
    },
    {   
        title: 'REST Countries',
        link: 'https://rest-countries-luis.netlify.app/',
        text: 'Site que mostra mais de 200 países, com opções de fitragem e pesquisa.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yhq5ihanseyinzwblaw1.jpg',
        technologies: ['js', 'css', 'html']
    },
    {   
        title: 'Gerador de Bordas',
        link: 'https://border-radius-generator-luis.netlify.app/',
        text: 'No Gerador de bordas você vê em tempo real O formato em radius e pega o código pronto.',
        image: '/assets/img/ft-border-radius-generador.png',
        technologies: ['css', 'html', 'js']
    }

]


const quantCards = tdProjetos.length

criarCards( tdProjetos , quantCards )