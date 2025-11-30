const form = document.querySelector(".formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value.trim(),
        email: document.getElementById("email").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        mensagem: document.getElementById("mensagem").value.trim()
    };

    console.log("Dados do formulário:", dados);

    alert("Mensagem enviada com sucesso!");
    form.reset();
});