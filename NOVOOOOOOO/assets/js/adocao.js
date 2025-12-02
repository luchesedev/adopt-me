// 1. BANCO DE DADOS
const dadosAnimais = {
    'junior': {
        id: 'junior',
        nome: 'JUNIOR',
        fotos: ['assets/img/junior1.jpg', 'assets/img/junior2.jpg', 'assets/img/junior3.jpg'],
        capa: 'assets/img/junior1.jpg',
        descricao: 'Conheça essa pequena guerreira: uma das cinco irmãs que foram abandonadas dentro de uma caixa, lutando pela vida após uma triste perda. Ela e suas irmãs foram resgatadas e agora sonham com um lar cheio de amor e cuidado.',
        resumo: 'Uma guerreira dócil esperando um lar.',
        motivos: ['Dócil e companheiro', 'Já vacinado', 'Se dá bem com outros animais']
    },
    'rex': {
        id: 'rex',
        nome: 'REX',
        fotos: ['assets/img/rex1.jpg', 'assets/img/rex2.jpg', 'assets/img/rex3.jpg'],
        capa: 'assets/img/rex1.jpg',
        descricao: 'Rex é um cão adulto muito leal e protetor. Ele adora longas caminhadas e é perfeito para quem gosta de aventuras ao ar livre. Foi resgatado em uma estrada.',
        resumo: 'Um amigo leal esperando por você.',
        motivos: ['Ótimo cão de guarda', 'Muito obediente', 'Adora correr']
    },
    'bolinha': {
        id: 'bolinha',
        nome: 'BOLINHA',
        fotos: ['assets/img/bolinha1.jpg', 'assets/img/bolinha2.jpg', 'assets/img/bolinha3.jpg'],
        capa: 'assets/img/bolinha1.jpg',
        descricao: 'Bolinha é pequeno no tamanho mas tem uma personalidade gigante. Ele adora colo e é perfeito para apartamentos. Muito sociável com visitas.',
        resumo: 'Pequeno no tamanho, gigante no amor.',
        motivos: ['Ideal para apartamentos', 'Não solta muito pelo', 'Muito carinhoso']
    },
    'thor': {
        id: 'thor',
        nome: 'THOR',
        fotos: ['assets/img/thor1.jpg', 'assets/img/thor2.jpg', 'assets/img/thor3.jpg'],
        capa: 'assets/img/thor1.jpg',
        descricao: 'Thor é pura energia! Um filhote crescido que ainda acha que é bebê. Se dá super bem com outros cachorros e precisa de espaço para gastar energia.',
        resumo: 'Adora correr e brincar no parque.',
        motivos: ['Energia inesgotável', 'Sociável com outros cães', 'Muito brincalhão']
    },
    'mel': {
        id: 'mel',
        nome: 'MEL',
        fotos: ['assets/img/mel1.jpg', 'assets/img/mel2.jpg', 'assets/img/mel3.jpg'],
        capa: 'assets/img/mel1.jpg',
        descricao: 'Como o nome diz, ela é um doce. Mel é uma cadela sênior que procura um final feliz tranquilo. Ela adora sonecas no sofá e carinho na barriga.',
        resumo: 'Doce e carinhosa com crianças.',
        motivos: ['Muito calma e tranquila', 'Ótima com crianças', 'Companheira para todas as horas']
    }
};

// Variável de estado (Começa com Junior pois é o HTML padrão)
let animalNoPalco = 'junior';

// 2. FUNÇÃO DE TROCA (SWAP)
function trocarAnimal(novoAnimalId, idCardClicado) {
    const animalEntrando = dadosAnimais[novoAnimalId];
    const animalSaindo = dadosAnimais[animalNoPalco];

    if (!animalEntrando || !animalSaindo) return;

    // A. ATUALIZA O CARROSSEL
    const containerFotos = document.getElementById('lista-fotos');
    if (containerFotos) {
        containerFotos.innerHTML = '';
        animalEntrando.fotos.forEach((fotoUrl, index) => {
            const divItem = document.createElement('div');
            divItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            const img = document.createElement('img');
            img.src = fotoUrl;
            img.className = 'd-block w-100';
            img.style.height = '400px';
            img.style.objectFit = 'cover';
            divItem.appendChild(img);
            containerFotos.appendChild(divItem);
        });
    }

    // B. ATUALIZA OS TEXTOS
    document.getElementById('nome-animal').innerText = animalEntrando.nome;
    document.getElementById('desc-animal').innerText = animalEntrando.descricao;

    const lista = document.getElementById('lista-motivos');
    if (lista) {
        lista.innerHTML = '';
        animalEntrando.motivos.forEach(motivo => {
            const li = document.createElement('li');
            li.innerText = motivo;
            lista.appendChild(li);
        });
    }

    // --- NOVIDADE: ATUALIZA O LINK DO BOTÃO ADOTAR ---
    const btnAdotar = document.getElementById('btn-adotar-principal');
    if (btnAdotar) {
        // encodeURIComponent serve para que nomes com acento não quebrem o link
        btnAdotar.href = `contato.html?animal=${encodeURIComponent(animalEntrando.nome)}`;
    }
    // -------------------------------------------------

    // C. ATUALIZA O CARD CLICADO (Coloca o animal que saiu lá)
    const cardElement = document.getElementById(idCardClicado);
    if (cardElement) {
        cardElement.querySelector('.card-img-top').src = animalSaindo.capa;
        cardElement.querySelector('.card-title').innerText = animalSaindo.nome;
        cardElement.querySelector('.card-text').innerText = animalSaindo.resumo;

        const botaoCard = cardElement.querySelector('button');
        botaoCard.removeAttribute('onclick');
        botaoCard.setAttribute('onclick', `trocarAnimal('${animalSaindo.id}', '${idCardClicado}')`);
    }

    // D. ATUALIZA O ESTADO
    animalNoPalco = novoAnimalId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. LÓGICA AO CARREGAR A PÁGINA
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const animalIdURL = urlParams.get('animal'); 

    // Se tiver um ID na URL (ex: veio da home clicando no Rex)
    if (animalIdURL && dadosAnimais[animalIdURL] && animalIdURL !== 'junior') {
        
        let idDoCard = '';
        if (animalIdURL === 'rex') idDoCard = 'card-1';
        if (animalIdURL === 'bolinha') idDoCard = 'card-2';
        if (animalIdURL === 'thor') idDoCard = 'card-3';
        if (animalIdURL === 'mel') idDoCard = 'card-4';

        if (idDoCard) {
            trocarAnimal(animalIdURL, idDoCard);
        }
    }
});

// Função do WhatsApp do botão adotar (caso clique direto sem ir pro form)
function abrirWhatsapp() {
    var numero = "5511903042102";
    var elNome = document.getElementById('nome-animal');
    var nomeAnimal = elNome ? elNome.innerText : "o animal";
    var mensagem = "Olá! 👋 Vi o " + nomeAnimal + " no site e fiquei apaixonado. Gostaria de saber mais sobre a adoção.";
    var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
    window.open(link, '_blank');
}