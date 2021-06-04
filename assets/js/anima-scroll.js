
const initAnimaScroll = () => {
    const containers = document.querySelectorAll('[data-js="anima-left"]')

    if ( containers ) {

        const metadeTela = window.innerHeight * 0.7
        
        const animaScroll = ( ) => {
            containers.forEach( container => {
                const scrollTop = container.getBoundingClientRect().top
                const isContainerVisible = scrollTop - metadeTela < 0
                // console.log(window.innerHeight, scrollTop)

                if ( isContainerVisible ) {
                    container.classList.add( 'active' )
                }
            })
        }

        animaScroll()

        window.addEventListener( 'scroll', () => animaScroll() )
    }

}

window.addEventListener( 'load', initAnimaScroll )