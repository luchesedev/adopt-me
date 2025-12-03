const container = document.getElementById("cardsContainer");

// ----- CARREGAR OS CARDS SALVOS -----
window.onload = function () {
    const cardsSalvos = JSON.parse(localStorage.getItem("cards")) || [];

    cardsSalvos.forEach(card => {
        criarCardDOM(card.id, card.titulo, card.descricao, card.img);
    });
};

// ----- CRIAR CARD NA TELA -----
function criarCardDOM(id, titulo, descricao, imgURL) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", id);

    card.innerHTML = `
        <img src="${imgURL}">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        <button class="btnExcluir">Excluir</button>
    `;

    // Evento do botão
    card.querySelector(".btnExcluir").addEventListener("click", () => {
        excluirCard(id);
    });

    container.appendChild(card);
}


// ----- BOTÃO DE CRIAR CARD -----
document.getElementById("criarCard").addEventListener("click", () => {
    
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const imagem = document.getElementById("imagem").files[0];

    if (!titulo || !descricao || !imagem) {
        alert("Preencha todos os campos!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {

        const imgURL = e.target.result;
        const id = Date.now(); // ID único

        // 1️⃣ Criar na tela
        criarCardDOM(id, titulo, descricao, imgURL);

        // 2️⃣ Salvar no LocalStorage
        salvarCard(id, titulo, descricao, imgURL);

        // 3️⃣ Limpar campos
        document.getElementById("titulo").value = "";
        document.getElementById("descricao").value = "";
        document.getElementById("imagem").value = "";
    };

    reader.readAsDataURL(imagem);
});


// ----- SALVAR NO LOCALSTORAGE -----
function salvarCard(id, titulo, descricao, imgURL) {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    cards.push({ id, titulo, descricao, img: imgURL });

    localStorage.setItem("cards", JSON.stringify(cards));
}


// ----- EXCLUIR CARD -----
function excluirCard(id) {
    // Remover do HTML
    const card = document.querySelector(`[data-id="${id}"]`);
    if (card) {
        card.remove();
    }

    // Remover do LocalStorage
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards = cards.filter(c => c.id !== id);

    localStorage.setItem("cards", JSON.stringify(cards));
}