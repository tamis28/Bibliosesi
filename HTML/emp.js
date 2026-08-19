function comentario(){
    const comentario = document.getElementById('comentario')
    alert("Comentário enviado com sucesso!")
    comentario.value = ""
}

function marcarEntregue(){
    alert("Marcado com sucesso!")
}

const livro = document.getElementById('emp-livro')
const detalhes = document.getElementById('detalhes')
const texto1 = document.getElementById('texto1')
const texto2 = document.getElementById('texto2')

let aberto = false

livro.addEventListener('click', () => {
    if (!aberto) {
        texto2.style.display = "none"
        detalhes.style.display = "flex"
        aberto = true
    } else {
        texto2.style.display = "flex"
        detalhes.style.display = "none"
        aberto = false
    }
})