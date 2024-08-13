document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('carregarBtn').addEventListener('click', function() {
        var arquivoSelecionado = document.getElementById('uploadImagem').files[0];
        var resultado = document.getElementById('resultado');

        // Limpa o conteúdo da div de resultado
        resultado.innerHTML = '';

        if (!arquivoSelecionado) {
            alert('Por favor, selecione um arquivo de imagem.');
            return;
        }

        var img = document.createElement('img');
        img.src = URL.createObjectURL(arquivoSelecionado);
        img.alt = 'Imagem carregada';

        resultado.appendChild(img);
    });
});
