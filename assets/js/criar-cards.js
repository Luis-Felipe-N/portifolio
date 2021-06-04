const newElement = ( TagName, className = false ) => {
    const elem = document.createElement( TagName )
    className ? elem.classList.add( className ) : elem
    return elem
}
 
export default function criarCards( projetos, quantCards ) {

    let containerProjetos = document.querySelector('.container-projetos')
    
    projetos.forEach( projeto => {
        const { title, link, text, image, technologies } = projeto

        // Card Projeto
        let cardProjeto = newElement('div', 'projeto');

        // Parte da imagem
        let projetoImg = newElement('div', 'projeto__img');
        projetoImg.style.backgroundImage = `url(${image})`

        // Parte da descrição
        let projetoDescri = newElement('div','projeto__descricao')

        let containerTitle = newElement('h3', 'projeto__descricao-title')
        
        
        let titleCard = newElement('a', 'projeto__descricao-link')
        titleCard.innerText = title
        titleCard.setAttribute('href', link)
        titleCard.setAttribute('target', '_blank')
        containerTitle.appendChild(titleCard)
        projetoDescri.appendChild(containerTitle)
        
        let descri = newElement('p','projeto__descricao-text')
        descri.innerHTML = text
        projetoDescri.appendChild(descri)

        let containerLinguagens = newElement('div', 'projeto__descricao-linguagens')
        let spansLinguagens = criarNomeLinguagens(technologies)
        spansLinguagens.forEach(span => {
            containerLinguagens.appendChild( span )
        });
        projetoDescri.appendChild( containerLinguagens )

        cardProjeto.appendChild(projetoImg)
        cardProjeto.appendChild(projetoDescri)
        
        containerProjetos.appendChild(cardProjeto)


    });
    
    function criarNomeLinguagens( linguagens ) {
        const spanLinguagens = linguagens.map( linguagem => {
            const span = newElement('span', `c-${linguagem}`)
            span.textContent = '#' + linguagem
            return span
        })
        return spanLinguagens
    };

    }
