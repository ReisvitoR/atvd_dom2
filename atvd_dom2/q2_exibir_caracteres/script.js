document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value.trim(); // Retira os espaços

    if (conteudo === "") {
        // Caso o campo esteja vazio, exibe uma mensagem de erro
        exibirMensagemErro('O campo não pode estar vazio', 'mensagemErro');
    } else {
        // Caso contrário, exibe o conteúdo na div
        document.getElementById('conteudo').innerHTML = conteudo;
        // Limpa a mensagem de erro, se houver
        document.getElementById('mensagemErro').classList.add('oculto');
    }
}

function exibirMensagemErro(mensagem, idElemento) {
    var elementoErro = document.getElementById(idElemento);
    if (elementoErro) {
        elementoErro.textContent = mensagem;
        elementoErro.classList.remove('oculto');
        setTimeout(function() {
            elementoErro.classList.add('oculto');
        }, 3000);
    }
}
