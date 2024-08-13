document.addEventListener('DOMContentLoaded', function() {
    var enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.addEventListener('click', verificarSelecao);
});

function verificarSelecao() {
    var checkboxes = document.getElementsByName('redesSociais');
    var selecionados = [];
    var mensagemErro = document.getElementById('mensagemErro');
    var redesSelecionadas = document.getElementById('redesSelecionadas');

    mensagemErro.classList.add('oculto');
    redesSelecionadas.innerHTML = '';

    // Percorre todos os checkboxes para verificar se estão selecionados
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selecionados.push(checkboxes[i].value);
        }
    }

    if (selecionados.length > 0) {
        // Exibe as redes sociais selecionadas
        redesSelecionadas.innerHTML = 'Redes sociais selecionadas: ' + selecionados.join(', ');
    } else {
        // Exibe a mensagem de erro se nenhuma rede social for selecionada
        mensagemErro.classList.remove('oculto');
    }
}
