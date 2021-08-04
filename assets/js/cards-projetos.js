import criarCards from './criar-cards.js'

// Criar card projetos
const tdProjetos = [
    {   
        title: 'Bot sorteio',
        link: 'https://github.com/Luis-Felipe-N/Bot-sorteio',
        text: 'O Bot Sorteio é um programa que te permite comentar em sorteios do Instagram sem muito esforço.',
        image: './assets/img/ft-botsorteio.png',
        technologies: ['python'],
    },
    {   
        title: 'Bookorama',
        link: 'https://bookorama-luis-felipe.netlify.app/',
        text: 'No Bookorama você pode listar uma série de livros para ler depois.',
        image: './assets/img/ft-bookorama.png',
        technologies: ['js', 'html', 'css']
    },
    {   
        title: 'Gerador de Bordas',
        link: 'https://border-radius-generator-luis.netlify.app/',
        text: 'No Gerador de bordas você vê em tempo real sua criação e pega o código pronto.',
        image: './assets/img/ft-border-radius-generador.png',
        technologies: ['css', 'html', 'js']
    },
    {   
        title: 'Gerador de Text shadow',
        link: 'https://text-shadow-generator-luis.netlify.app',
        text: 'No Gerador de Text-shadow você vê em tempo real sua criação e pega o código pronto.',
        image: 'https://d33wubrfki0l68.cloudfront.net/60838f093f1fce0008d26705/screenshot_2021-04-24-03-22-55-0000.png',
        technologies: ['css', 'html', 'js']
    },
    {   
        title: 'Blogr',
        link: 'https://blogr-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP">DevMentor Front-end</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1615479875/Challenges/awqnouxukwefdkaqt5iq.jpg',
        technologies: ['html', 'css', 'js']
    },
    {   
        title: 'Fylo dark',
        link: 'https://fylo-dark-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd">DevMentor Front-end</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mhwyzwfgaii3cw5s6jco.jpg',
        technologies: ['html', 'css']
    },
    {   
        title: 'Codar',
        link: 'https://codar-luis.netlify.app',
        text: 'Desafio Front-end concluído do <a target="_blank" rel="noopener noreferrer" href="https://devchallenge.com.br/challenges/5ed47992adee277fae224a0b/details">DevChallenge</a>.',
        image: 'https://d33wubrfki0l68.cloudfront.net/608398c9a73863752d341aba/screenshot_2021-04-24-04-04-32-0000.png',
        technologies: ['css', 'html']
    },
    {   
        title: 'Conselhos do Bode',
        link: 'https://conselho-bode.netlify.app',
        text: 'Desafio Front-end consumindo API concluído do <a target="_blank" rel="noopener noreferrer" href="https://devchallenge.com.br/challenges/5ed47992adee277fae224a0b/details">DevChallenge</a>.',
        image: 'https://d33wubrfki0l68.cloudfront.net/608a19f8687f410007741c20/screenshot_2021-04-29-02-29-18-0000.png',
        technologies: ['css', 'html', 'js']
    },
    {   
        title: 'Streaming vendas',
        link: 'https://streaming-vendas.netlify.app',
        text: 'Um modelo de site simples para que direciona para alguma rede social.',
        image: 'https://d33wubrfki0l68.cloudfront.net/60802228754c84151e98b203/screenshot_2021-04-21-13-01-36-0000.png',
        technologies: ['css', 'html', 'js']
    },
    {   
        title: 'REST Countries',
        link: 'https://rest-countries-luis.netlify.app/',
        text: 'Site que mostra mais de 200 países, com opções de fitragem e pesquisa.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yhq5ihanseyinzwblaw1.jpg',
        technologies: ['js', 'css', 'html']
    },
    {
        title: 'Calculara APP',
        link: 'https://calculadora-luis.netlify.app/',
        text: 'Calculadora APP é um desafio proposto pelo <a target="_blank" rel="noopener noreferrer" href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29">Front-end Mentor</a>.',
        image: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/bz3taijsat3rhsocodym.jpg',
        technologies: ['scss', 'html', 'js']
    },
    {
        title: 'Self Care',
        link: 'https://self-care-scss.netlify.app/',
        text: 'Self Care é um desafio proposto pelo <a target="_blank" rel="noopener noreferrer" href="https://devchallenge.com.br/challenges/5f14fad2130a5d78f89d9642/details">DevChallenge</a> para treino do sass.',
        image: 'https://d33wubrfki0l68.cloudfront.net/609aad205136db34b780ddd8/screenshot_2021-05-11-16-13-27-0000.png',
        technologies: ['scss', 'html', 'js']
    },
    {
        title: 'Time Now',
        link: 'https://time-now-luis.netlify.app/',
        text: 'Time Now é uma landing page simples construido com <span class="color-sass c-sass">scss</span>. Desafio proposto por <a target="_blank" rel="noopener noreferrer" href="https://www.codewell.cc/challenges/608d9a7d747bad001532bd70">Codewell.cc</a>.',
        image: 'https://codewell-storage-bucket.s3.us-east-2.amazonaws.com/Time_Now_Slider_Thumbnail_min_713c17672e.jpg',
        technologies: ['scss', 'html', 'js']
    },
    {
        title: 'Let me ask',
        link: 'https://letmeask-f1b55.web.app/',
        text: 'Let me ask foi um feito no <a target="_blank" rel="noopener noreferrer"  href="https://letmeask-f1b55.web.app/"> Next Level Week </a> onde aprendemos a criar uma plataforma de comentários.',
        image: 'https://github.com/Luis-Felipe-N/letmeask-1/raw/master/.github/cover.svg',
        technologies: ['scss', 'html', 'react']
    },
    {
        title: 'iFun',
        link: 'https://ifun-65e7a.firebaseapp.com/',
        text: 'iFun é um uma rede social de meme. Projeto criado para reforça o que aprendi no <span style="color: #866EE6; font-weight: 700">#NLW</span>.',
        image: 'https://github.com/Luis-Felipe-N/ifun/raw/main/src/assets/image/image-example.svg',
        technologies: ['scss', 'html', 'react']
    }
]

const cores = {
    js: '#f1da1d',
    html: '#E44B27',
    css: '#254CDE',
    python: '#366F9E',
    sass:'#cf649a',
    React: "#61DAFB"
};

const quantCards = tdProjetos.length

criarCards( tdProjetos, quantCards )