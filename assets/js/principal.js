
  let index = 0;
  const imagens = document.querySelectorAll('.slider img');

  setInterval(() => {
    imagens[index].classList.remove('active');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('active');
  }, 3000);
