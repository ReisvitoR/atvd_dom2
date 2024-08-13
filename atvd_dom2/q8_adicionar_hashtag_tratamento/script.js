document.addEventListener('DOMContentLoaded', function() {
    var adicionarBtn = document.getElementById('adicionarBtn');
    adicionarBtn.addEventListener('click', adicionarHashtag);
});

var hashtagsExistentes = new Set(); // Armazena as hashtags existentes para evitar repetições

function adicionarHashtag() {
    var inputHashtag = document.getElementById('inputHashtag');
    var listaHashtags = document.getElementById('listaHashtags');
    var mensagemErro = document.getElementById('mensagemErro');
    var hashtag = inputHashtag.value.trim();

    mensagemErro.textContent = ''; // Limpa qualquer mensagem de erro existente

    if (!hashtag) {
        // Verifica se a hashtag está vazia
        mensagemErro.textContent = 'A hashtag não pode estar vazia.';
    } else if (hashtag.length < 2) {
        // Verifica se a hashtag tem comprimento menor que 2 caracteres
        mensagemErro.textContent = 'A hashtag deve ter pelo menos 2 caracteres.';
    } else if (hashtagsExistentes.has(hashtag)) {
        // Verifica se a hashtag já existe
        mensagemErro.textContent = 'Esta hashtag já foi adicionada.';
    } else if (listaHashtags.options.length >= 5) {
        // Verifica se já existem 5 hashtags no select
        mensagemErro.textContent = 'Você não pode adicionar mais de 5 hashtags.';
    } else {
        // Adiciona a hashtag ao select
        var option = document.createElement('option'); // Cria um novo elemento <option>
        option.textContent = hashtag; // Define o texto da opção como a hashtag digitada
        listaHashtags.appendChild(option); // Adiciona a nova opção ao select
        hashtagsExistentes.add(hashtag); // Adiciona a hashtag ao conjunto de hashtags existentes
        
        inputHashtag.value = ''; // Limpa a caixa de texto após adicionar
    }
}
