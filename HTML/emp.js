const livro = document.querySelector('.emp-livro')
const texto = document.querySelector('.emp-detalhes')
const detalhes = document.querySelector('.det-infos')

livro.addEventListener('click', () => {
    texto.style.display = 'none';
    detalhes.style.display = 'flex';
});