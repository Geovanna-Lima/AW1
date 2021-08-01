/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .botao,
    #about .image, #about .text, #about .botao,
    #projects .text, #projects .swiper-container,
    #skills .text, #skills .card,
    #contact .text, #contact .title, #contact p, #contact .carta,
    #form .text, #form .container,
    footer #linha, footer .descricao`,
    { interval: 100 }
)

/* Botão voltar para o topo */
function backToTop() {
    const backToTopButton = document.querySelector('.backToTop')

    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* When Scroll */
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
})