function abrirWhatsapp() {
    var numero = "5511934943989";

    var mensagem = "Olá! 👋 Estou no site Amigos da Mia e tenho interesse em adotar um animalzinho! ❤️ Poderia me explicar como funciona o processo?";


    var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

    window.open(link, '_blank');
}
 const botaoMenu = document.getElementById('menu-toggle');
  const navItens = document.getElementById('nav-itens');

  if (botaoMenu && navItens) {
    botaoMenu.addEventListener('click', () => {
      navItens.classList.toggle('mostrar');
    });
  }