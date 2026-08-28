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

function salvarLocal() {
  localStorage.setItem("comentario", JSON.stringify(comentario));
  window.location.reload();

}

//modalCli > modalComent
function abrirModal() {
  modalComent.style.display = "flex";
  modalComent.style.justifyContent = "center";
  modalComent.style.alignItems = "center";
  limparCampos();
}

function fecharModal() {
  modalComent.style.display = "none";
}

//formCli > comentario
const formComent = document.getElementById("comentario");
formComent.addEventListener("submit", e => {
  e.preventDefault();
  limparCampos();
})

function limparCampos() {
  document.getElementById("coment").value = " ";
}

//-----------------FILTRAR LIVROS NO CATÁLOGO



//-----------------SEARCH INPUT
function buscarLivros() {
  let livros = document.getElementsByClassName("livro");
  let pesquisa = document.getElementById('searcbook');

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].innerHTML != pesquisa) {
      livros[i].parentNode.style.display = "none";
    }else{
      livros[i].parentNode.style.display = "block";
    }
  }
}



// function decodeJWT(token) {
//   // 1. Split the token into Header, Payload, and Signature
//   const parts = token.split('.');
//   if (parts.length !== 3) {
//     throw new Error('Invalid JWT token');
//   }

//   // 2. Base64URL decode the payload (the second part)
//   const base64Url = parts[1];
//   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//   }).join(''));

//   // 3. Parse the JSON back into an object
//   //return JSON.parse(jsonPayload);
//   return jsonPayload;
// }

// function autorizaCadastro() {
//   const dados = JSON.parse(localStorage.getItem("dados"));

//   if(dados.tipo == "ADM") {
//     const container = document.querySelector(".container-wrapper");

//     const cadastrar = document.createElement("button");
//     cadastrar.innerHTML = "Cadastrar Livro";
    
//     container.appendChild(cadastrar);
//   }
// }
