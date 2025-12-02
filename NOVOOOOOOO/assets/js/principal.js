
  let index = 0;
  const imagens = document.querySelectorAll('.slider img');

  setInterval(() => {
    imagens[index].classList.remove('active');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('active');
  }, 3000);

const botaoMenu = document.getElementById('menu-toggle');
const navItens = document.getElementById('nav-itens');

botaoMenu.addEventListener('click', () => {
  navItens.classList.toggle('mostrar');
});

function ajustarPadding() {
  const header = document.querySelector("header");
  const altura = header.offsetHeight;
  document.body.style.paddingTop = `${altura}px`;
}

// Ajusta no carregamento
window.addEventListener("load", ajustarPadding);

// Ajusta ao redimensionar (mobile)
window.addEventListener("resize", ajustarPadding);

// Ajusta quando o menu abre/fecha (caso tenha classe .mostrar)
document.addEventListener("click", ajustarPadding);

const myCarousel = document.querySelector('#carouselExampleDark');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  ride: 'carousel'
});


