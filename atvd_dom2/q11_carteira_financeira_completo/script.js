document.addEventListener('DOMContentLoaded', function() {
    var moverParaDireitaBtn = document.getElementById('moverParaDireitaBtn');
    var moverParaEsquerdaBtn = document.getElementById('moverParaEsquerdaBtn');
    
    moverParaDireitaBtn.addEventListener('click', function() {
        moverSelecionados(document.getElementById('ativosDisponiveis'), document.getElementById('carteiraInvestimentos'));
    });
    
    moverParaEsquerdaBtn.addEventListener('click', function() {
        moverSelecionados(document.getElementById('carteiraInvestimentos'), document.getElementById('ativosDisponiveis'));
    });
    
    document.getElementById('ativosDisponiveis').addEventListener('change', atualizarBotao);
    document.getElementById('carteiraInvestimentos').addEventListener('change', atualizarBotao);
    
    carregarAtivosDisponiveis(); // Carrega ativos disponíveis ao inicializar
});

function carregarAtivosDisponiveis() {
    var ativosDisponiveis = [
        { value: "AAPL", text: "Apple (AAPL)" },
        { value: "GOOGL", text: "Google (GOOGL)" },
        { value: "AMZN", text: "Amazon (AMZN)" },
        { value: "MSFT", text: "Microsoft (MSFT)" },
        { value: "TSLA", text: "Tesla (TSLA)" },
        { value: "BRK.B", text: "Berkshire Hathaway (BRK.B)" },
        { value: "FB", text: "Meta (FB)" },
        { value: "V", text: "Visa (V)" },
        { value: "JNJ", text: "Johnson & Johnson (JNJ)" },
        { value: "WMT", text: "Walmart (WMT)" }
    ];
    
    var select = document.getElementById('ativosDisponiveis');
    ativosDisponiveis.forEach(function(ativo) {
        var option = document.createElement('option');
        option.value = ativo.value;
        option.textContent = ativo.text;
        select.appendChild(option);
    });
}

function moverSelecionados(origem, destino) {
    var selecionados = Array.from(origem.selectedOptions);
    
    if (selecionados.length === 0) {
        alert('Selecione pelo menos um item para mover.');
        return;
    }

    selecionados.forEach(function(opcao) {
        destino.appendChild(opcao); // Move a opção para o destino
    });

    atualizarBotao();
}

function atualizarBotao() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    
    document.getElementById('moverParaDireitaBtn').disabled = ativosDisponiveis.selectedOptions.length === 0;
    document.getElementById('moverParaEsquerdaBtn').disabled = carteiraInvestimentos.selectedOptions.length === 0;
}
