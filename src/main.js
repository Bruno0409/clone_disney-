document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultarElementoDoHeader();
        } else {
            exibeElementodDoHeader()
        }
    })

            // Seção de atrações, programação das abas

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
        
            escondeTodasAbas();
        
            removeBotaoAtivo();
            
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            aba.classList.add('shows__list--is-active');

            //  Adiciona classe ativa ao botão clicado
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

     // Seção FAQ, accordion

    for (let i = 0; i < buttons.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
        }
})

function ocultarElementoDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementodDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
    
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
