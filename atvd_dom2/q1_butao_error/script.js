document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botaoErro').addEventListener('click', function() {
        exibirMensagemErro('O campo deve ser preenchido', 'mensagemErro');
    });
});

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
