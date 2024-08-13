document.addEventListener('DOMContentLoaded', function() {
    var adicionarBtn = document.getElementById('adicionarBtn');
    var tabelaTarefas = document.getElementById('tabelaTarefas').getElementsByTagName('tbody')[0];
    var idCounter = 1; // Contador para IDs das tarefas
    var tarefas = []; // Array para armazenar tarefas

    adicionarBtn.addEventListener('click', function() {
        var descricaoTarefa = document.getElementById('descricaoTarefa').value.trim();
        
        if (descricaoTarefa === '') {
            alert('Descrição da tarefa não pode estar vazia.');
            return;
        }
        
        var tarefa = {
            id: idCounter++,
            descricao: descricaoTarefa,
            dataInicio: new Date().toLocaleDateString('pt-BR'),
            dataConclusao: ""
        };
        
        tarefas.push(tarefa);
        adicionarLinhaTabela(tarefa);
        document.getElementById('descricaoTarefa').value = ''; // Limpa o campo de entrada
    });

    function adicionarLinhaTabela(tarefa) {
        var linha = document.createElement('tr');
        linha.setAttribute('data-id', tarefa.id);
        
        linha.innerHTML = `
            <td>${tarefa.id}</td>
            <td>${tarefa.descricao}</td>
            <td>${tarefa.dataInicio}</td>
            <td>${tarefa.dataConclusao}</td>
            <td>
                <button class="concluirBtn">Concluir</button>
                <button class="reabrirBtn">Reabrir</button>
                <button class="excluirBtn">Excluir</button>
            </td>
        `;
        
        var btnConcluir = linha.querySelector('.concluirBtn');
        var btnReabrir = linha.querySelector('.reabrirBtn');
        var btnExcluir = linha.querySelector('.excluirBtn');
        
        btnConcluir.addEventListener('click', function() {
            concluirTarefa(tarefa.id);
        });
        
        btnReabrir.addEventListener('click', function() {
            reabrirTarefa(tarefa.id);
        });
        
        btnExcluir.addEventListener('click', function() {
            if (tarefa.dataConclusao === "") {
                if (confirm('Tem certeza de que deseja excluir esta tarefa?')) {
                    excluirTarefa(tarefa.id);
                }
            } else {
                alert('Não é possível excluir tarefas que já foram concluídas. Para excluir, reabra a tarefa primeiro.');
            }
        });
        
        tabelaTarefas.appendChild(linha);
    }

    function concluirTarefa(id) {
        var tarefa = tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.dataConclusao = new Date().toLocaleDateString('pt-BR');
            var linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
            linha.children[3].textContent = tarefa.dataConclusao; // Atualiza a data de conclusão na tabela
            linha.querySelector('.concluirBtn').disabled = true; // Desabilita o botão de concluir
            linha.querySelector('.reabrirBtn').disabled = false; // Habilita o botão de reabrir
            linha.querySelector('.excluirBtn').disabled = true; // Desabilita o botão de excluir
        }
    }

    function reabrirTarefa(id) {
        var tarefa = tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.dataConclusao = ""; // Limpa a data de conclusão
            var linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
            linha.children[3].textContent = tarefa.dataConclusao; // Atualiza a data de conclusão na tabela
            linha.querySelector('.concluirBtn').disabled = false; // Habilita o botão de concluir
            linha.querySelector('.reabrirBtn').disabled = true; // Desabilita o botão de reabrir
            linha.querySelector('.excluirBtn').disabled = false; // Habilita o botão de excluir
        }
    }

    function excluirTarefa(id) {
        tarefas = tarefas.filter(t => t.id !== id);
        var linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
        if (linha) {
            linha.remove();
        }
    }
});
