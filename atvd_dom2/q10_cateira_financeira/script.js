document.addEventListener('DOMContentLoaded', function() {
    var moverParaDireitaBtn = document.getElementById('moverParaDireitaBtn');
    var moverParaEsquerdaBtn = document.getElementById('moverParaEsquerdaBtn');
    
    moverParaDireitaBtn.addEventListener('click', moverParaDireita);
    moverParaEsquerdaBtn.addEventListener('click', moverParaEsquerda);
    
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

function moverParaDireita() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    moverSelecionados(ativosDisponiveis, carteiraInvestimentos);
}

function moverParaEsquerda() {
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    moverSelecionados(carteiraInvestimentos, ativosDisponiveis);
}

function moverSelecionados(origem, destino) {
    var selecionados = Array.from(origem.selectedOptions);
    
    selecionados.forEach(function(opcao) {
        destino.appendChild(opcao); // Move a opção para o destino
    });
}
