function abrirWhatsapp() {
    // 1. Seu número (Pais + DDD + Numero)
    var numero = "5511934943989";

    // 2. Mensagem Genérica para o Banner Principal
    var mensagem = "Olá! 👋 Estou no site Amigos da Mia e tenho interesse em adotar um animalzinho! ❤️ Poderia me explicar como funciona o processo?";

    // 3. Monta o link
    var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

    // 4. Abre em uma nova aba
    window.open(link, '_blank');
}
 const botaoMenu = document.getElementById('menu-toggle');
  const navItens = document.getElementById('nav-itens');

  if (botaoMenu && navItens) {
    botaoMenu.addEventListener('click', () => {
      navItens.classList.toggle('mostrar');
    });
  }