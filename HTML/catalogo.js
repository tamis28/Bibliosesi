const dados = JSON.parse(localStorage.getItem("dados"));


//----------------------------------------------------------//


let btCadastrar = document.querySelector("#btCadastra");
const modal = document.querySelector('.modal-cadastro')
const form = document.getElementById('formLivro')


function cadastrar() {
    modal.style.display = "flex"
}
function cancelar(){
    modal.style.display = "none"
}

if (dados.funcao === "administrador") {
    btCadastrar.style.display = "flex";
}





// function listarLivros () {
//     let modelo = document.getElementById("modelo").cloneNode(true);

    
// }

const url = "http://192.168.0.155:3000/livros/";

document.querySelector('#formLivro').addEventListener('submit', function(e){
    e.preventDefault();
    const novoLivro = {
        titulo: titulo.value,
        descricao: descricao.value,
        autor: autor.value,
        publicacao: publicacao.value,
        genero: genero.value,
        editora: editora.value,
        imagem: imagem.value
    }; 
    
    console.log(novoLivro);

    fetch(url + 'cadastrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoLivro)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Erro na API');
        }
    })
    .then(() => {
        alert("Livro cadastrado com sucesso.");
        carregarLivros();
    })
    .catch(() => alert("Erro ao cadastrar livro"));
})

