document.addEventListener("DOMContentLoaded", function() {


  // ========================
  // SLIDER
  // ========================
  let index = 0;
  const imagens = document.querySelectorAll('.slider img');

  if (imagens.length > 0) {
    setInterval(() => {
      imagens[index].classList.remove('active');
      index = (index + 1) % imagens.length;
      imagens[index].classList.add('active');
    }, 3000);
  }

  // ========================
  // MENU TOGGLE (se existir)
  // ========================
  const botaoMenu = document.getElementById('menu-toggle');
  const navItens = document.getElementById('nav-itens');

  if (botaoMenu && navItens) {
    botaoMenu.addEventListener('click', () => {
      navItens.classList.toggle('mostrar');
    });
  }

  
// Executa ao redimensionar a tela
window.addEventListener("resize", moverPesquisa);

  // ========================
  // BUSCA DE ANIMAIS
  // ========================
  const input = document.getElementById("campo-pesquisa");
  const btn = document.getElementById("btn-pesquisa");
  const resultado = document.querySelector(".animais"); // scroll até os resultados

  function pesquisar(e) {
    // se for keyup, só rodar no Enter
    if (e && e.type === "keyup" && e.key !== "Enter") return;

    const termo = input.value.toLowerCase();
    const cards = document.querySelectorAll(".animal");
    let encontrou = false;

    cards.forEach(card => {
      const nome = card.querySelector("h1").textContent.toLowerCase();
      if (nome.includes(termo)) {
        card.style.display = "block";
        encontrou = true;
      } else {
        card.style.display = "none";
      }
    });

    // Scroll suave até resultados
    if (resultado) {
  const topPos = resultado.getBoundingClientRect().top + window.pageYOffset - 200; // 120 = altura do header + margem
  window.scrollTo({ top: topPos, behavior: "smooth" });
}

    if (!encontrou && termo !== "") {
      alert("Nenhum animal encontrado.");
    }
  }

  if (input && btn) {
    btn.addEventListener("click", pesquisar);
    input.addEventListener("keyup", pesquisar);
  }

});