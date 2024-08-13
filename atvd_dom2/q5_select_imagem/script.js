document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('imagemSelect').addEventListener('change', function() {
        var imagemSelect = document.getElementById('imagemSelect');
        var resultado = document.getElementById('resultado');
        var imagemSelecionada = imagemSelect.value;

        // Limpa o conteúdo da div de resultado
        resultado.innerHTML = '';

        if (imagemSelecionada) {
            var img = document.createElement('img');
            img.src = imagemSelecionada;
            img.alt = 'Imagem selecionada';
            resultado.appendChild(img);
        }
    });
});
