document.addEventListener('DOMContentLoaded', function() {
    var adicionarBtn = document.getElementById('adicionarBtn');
    adicionarBtn.addEventListener('click', adicionarHashtag);
});

function adicionarHashtag() {
    var inputHashtag = document.getElementById('inputHashtag');
    var listaHashtags = document.getElementById('listaHashtags');
    var hashtag = inputHashtag.value.trim();

    if (hashtag) {
        var option = document.createElement('option'); // Cria um novo elemento <option>
        option.textContent = hashtag; // Define o texto da opção como a hashtag digitada
        listaHashtags.appendChild(option); // Adiciona a nova opção ao select
        
        inputHashtag.value = ''; // Limpa a caixa de texto após adicionar
    } else {
        alert("Por favor, digite uma hashtag válida.");
    }
}
