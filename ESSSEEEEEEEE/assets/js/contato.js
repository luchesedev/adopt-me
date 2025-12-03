document.addEventListener('DOMContentLoaded', function() {
    
    // ======================================================
    // 1. CHECK URL FOR ANIMAL NAME AND PRE-FILL MESSAGE
    // ======================================================
    const urlParams = new URLSearchParams(window.location.search);
    const animalNome = urlParams.get('animal');

    if (animalNome) {
        const campoMensagem = document.getElementById('mensagem');
        if (campoMensagem) {
            // This sets the text inside the textarea automatically
            campoMensagem.value = `Olá! Tenho muito interesse em adotar o(a) ${animalNome}. Gostaria de saber quais são os próximos passos para a adoção!`;
        }
    }

    // ======================================================
    // 2. HANDLE FORM SUBMISSION TO WHATSAPP
    // ======================================================
    const formulario = document.getElementById('formulario');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Prevent standard form submission (page reload)
            event.preventDefault();

            // Capture values
            var nome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;
            var telefone = document.getElementById('telefone').value;
            var mensagemUsuario = document.getElementById('mensagem').value;

            // Format message for WhatsApp
            // *text* makes it bold
            var textoFinal = `*NOVO CONTATO SOBRE ADOÇÃO* 🐾\n\n`;
            textoFinal += `*Nome:* ${nome}\n`;
            textoFinal += `*E-mail:* ${email}\n`;
            textoFinal += `*Telefone:* ${telefone}\n\n`;
            textoFinal += `*Mensagem:*\n${mensagemUsuario}`;

            // Destination Number (55 + DDD + Number)
            var numeroDestino = "5511903042102"; 

            // Create Link
            var linkWhatsapp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(textoFinal)}`;
            
            // Open in new tab
            window.open(linkWhatsapp, '_blank');
        });
    }
});