const url = 'http://localhost:3000/usuarios/'


//=====================================================================//


document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault();

    const novoUsuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        rm: rm.value,
        funcao: funcao.value
    };

    fetch(url + 'cadastrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoUsuario)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Erro na API');
        }
    })
    .then(() => {
        alert("Aluno adicionado com sucesso.");
    })
    .catch(() => alert("Erro ao cadastrar"));
    alert("Cadastro realizado!");
});