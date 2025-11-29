document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("campo-pesquisa");
    const btn = document.getElementById("btn-pesquisa");

    btn.addEventListener("click", pesquisar);
    input.addEventListener("keyup", pesquisar);

    function pesquisar() {
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

        if (!encontrou && termo !== "") {
            console.log("Nenhum animal encontrado.");
        }
    }
});
