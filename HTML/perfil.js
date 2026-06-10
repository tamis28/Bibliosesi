const modalFoto = document.querySelector('.mudar-foto')
function mudarFoto(){
  modalFoto.style.display = "flex"
}
function cancelar(){
  modalFoto.style.display = "none"
}

function salvarFoto() {
    const input = document.querySelector('#foto');
    const arquivo = input.files[0];

    if (!arquivo) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        const fotoBase64 = e.target.result;

        document.querySelector('#foto-perfil').src = fotoBase64;

        localStorage.setItem('fotoPerfil', fotoBase64);
    };

    reader.readAsDataURL(arquivo);
    modalFoto.style.display = "none";
}

window.onload = function() {
    const fotoSalva = localStorage.getItem('fotoPerfil');

    if (fotoSalva) {
        document.querySelector('#foto-perfil').src = fotoSalva;
    }
};

const menuBtn = document.querySelector('.bt-menu');
const nav = document.querySelector('.navegar nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (nav.classList.contains('active')) {
    document.querySelector('main').style.filter = "grayscale(100%) blur(3px)";
  } else {
    document.querySelector('main').style.filter = "grayscale(0) blur(0)";
  }

});