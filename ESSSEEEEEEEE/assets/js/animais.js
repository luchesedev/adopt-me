document.addEventListener("DOMContentLoaded", function() {
// A função abrirWhatsapp() e a lógica de SLIDER foram removidas deste arquivo para evitar conflitos.
// ========================
// BUSCA DE ANIMAIS
// ========================
    const input = document.getElementById("campo-pesquisa");
    const btn = document.getElementById("btn-pesquisa");
    const resultado = document.querySelector(".animais");

    function pesquisar(e) {
    // só ativa com Enter no keyup
    if (e && e.type === "keyup" && e.key !== "Enter") return;

    if (!input) return;

    const termo = input.value.toLowerCase();
    const cards = document.querySelectorAll(".animal");
    let encontrou = false;

    cards.forEach(card => {
    const textoCard = card.textContent.toLowerCase(); // <-- busca inteligente

    if (textoCard.includes(termo)) {
    card.style.display = "block";
    encontrou = true;
    } else {
    card.style.display = "none";
    }
    });

    // Scroll suave até resultados
    if (resultado) {
        const topPos = resultado.getBoundingClientRect().top + window.pageYOffset - 200;
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