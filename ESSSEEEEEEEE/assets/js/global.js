// assets/js/global.js

// Número de contato padronizado (Consistente com a maioria dos seus arquivos)
const NUMERO_CONTATO_OFICIAL = "5511903042102"; 

// =======================================================
// 1. FUNCIONALIDADE: AJUSTE DE PADDING DO BODY (AGORA CENTRALIZADO)
// Garante que o header (fixo) não cubra o conteúdo.
// =======================================================
function ajustarPadding() {
    const header = document.querySelector("header");
    if (header) {
        const altura = header.offsetHeight;
        document.body.style.paddingTop = `${altura}px`;
        // Para o Sticky Footer funcionar corretamente
        document.body.style.minHeight = `calc(100vh - ${altura}px)`; 
    }
}

// Escuta eventos que podem mudar a altura do header
window.addEventListener("load", ajustarPadding);
window.addEventListener("resize", ajustarPadding);
document.addEventListener("DOMContentLoaded", ajustarPadding);


// =======================================================
// 2. FUNCIONALIDADE DO MENU MOBILE (CHAMA O ADJUSTAR PADDING APÓS ABRIR/FECHAR)
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navItens = document.getElementById('nav-itens');

    if (menuToggle && navItens) {
        menuToggle.addEventListener('click', () => {
            navItens.classList.toggle('mostrar');
            // CHAVE: Reajusta o padding após a abertura/fechamento do menu
            ajustarPadding(); 
        });
    }
});


// =======================================================
// 3. FUNÇÃO GENÉRICA PARA WHATSAPP
// =======================================================
window.abrirWhatsapp = function (mensagem = "Olá! 👋 Estou no site Amigos da Mia e gostaria de saber mais sobre a ONG.") {
    var link = "https://wa.me/" + NUMERO_CONTATO_OFICIAL + "?text=" + encodeURIComponent(mensagem);
    window.open(link, '_blank');
};