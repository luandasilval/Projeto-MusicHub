document.querySelectorAll('.carrossel').forEach((caixaCarrossel) => {
    const cards = caixaCarrossel.querySelector('.cards');
    const setaEsquerda = caixaCarrossel.querySelector('.seta-esquerda');
    const setaDireita =  caixaCarrossel.querySelector('.seta-direita');

    const distanciaPulo = 300; // pixels que anda por clique

    setaDireita.addEventListener('click', () => {
        cards.scrollBy({ left: distanciaPulo, behavior: 'smooth' });
    });

    setaEsquerda.addEventListener('click', () => {
        cards.scrollBy({ left: -distanciaPulo, behavior: 'smooth' });
    });
});

const imagens = document.querySelectorAll('img');
imagens.forEach((img) => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});