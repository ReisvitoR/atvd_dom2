document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularBtn').addEventListener('click', function() {
        var interacoes = parseFloat(document.getElementById('interacoes').value);
        var visualizacoes = parseFloat(document.getElementById('visualizacoes').value);
        var mensagemErro = document.getElementById('mensagemErro');
        var resultado = document.getElementById('resultado');
        
        mensagemErro.classList.add('oculto');
        resultado.textContent = '';

        if (isNaN(interacoes) || isNaN(visualizacoes)) {
            mensagemErro.textContent = 'Por favor, insira números válidos.';
            mensagemErro.classList.remove('oculto');
            return;
        }

        if (visualizacoes <= 0) {
            mensagemErro.textContent = 'Número de visualizações deve ser maior que zero.';
            mensagemErro.classList.remove('oculto');
            return;
        }

        var taxaEngajamento = (interacoes / visualizacoes) * 100;
        resultado.textContent = `Taxa de Engajamento: ${taxaEngajamento.toFixed(2)}%`;
    });
});
