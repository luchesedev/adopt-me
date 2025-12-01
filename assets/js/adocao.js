function abrirWhatsapp() {
    // 1. Seu número (Pais + DDD + Numero)
    var numero = "5511988979795";

    // 2. Sua mensagem longa (Escreva normal, com acentos, emojis e espaços)
    var mensagem = "Olá! 👋 Vi o Junior no site Amigos da Mia e fiquei apaixonado. Gostaria de saber como funciona o processo de adoção, quais são os requisitos e se posso agendar uma visita para conhecê-lo melhor.";

    // 3. A Mágica: encodeURIComponent converte tudo para link automaticamente
    var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

    // 4. Abre em uma nova aba
    window.open(link, '_blank');
}