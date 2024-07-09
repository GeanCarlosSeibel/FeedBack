function Clicou() {
    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('setor', setor);

    document.getElementById('login_acesso').reset();
    window.location.href = 'fidibéqui.html';
}

function limpar() {
    // Limpa todos os itens do Local Storage
    localStorage.clear();
    alert('Local Storage limpo!');
}

function loadCards() {
    const nome = localStorage.getItem('nome');
    const setor = localStorage.getItem('setor');
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.forEach(cardData => createCard(nome, setor, cardData.title, cardData.description));
}

// Função para criar um card
function createCard(nome, setor, title, description) {
    const card = document.createElement('div');
    card.className = 'feedback';
    
    const cardNome = document.createElement('h1');
    cardNome.textContent = `Nome: ${nome}`;
    card.appendChild(cardNome);

    const cardSetor = document.createElement('h1');
    cardSetor.textContent = `Setor: ${setor}`;
    card.appendChild(cardSetor);


    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    card.appendChild(cardDescription);

    document.getElementById('cardsContainer').appendChild(card);
}

// Função para salvar um card no Local Storage
function saveCard(nome, setor, title, description) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push({ nome, setor, title, description });
    localStorage.setItem('cards', JSON.stringify(cards));
}

// Evento de submit do formulário
document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os dados do formulário
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const nome = localStorage.getItem('nome');
    const setor = localStorage.getItem('setor');

    // Cria um novo card
    createCard(nome, setor, title, description);

    // Salva o card no Local Storage
    saveCard(nome, setor, title, description);

    // Limpa o formulário
    document.getElementById('cardForm').reset();
});

// Carrega os cards ao inicializar a página
document.addEventListener('DOMContentLoaded', loadCards);