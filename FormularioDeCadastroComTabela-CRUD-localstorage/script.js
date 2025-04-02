/*******************************************************************************
Turma: ADS3-X
Nome: Fulano(a) de tal
Disciplina: Programação Front-End
Professor: José Carlos Flores
Data: 01 de Abril de 2025
Descritivo: Aula-XX - Trabalho X
********************************************************************************/

let linhaEditando = null;
const registrosLocalStorageKey = 'registros'; // Chave para salvar no LocalStorage

// Função para obter os registros do LocalStorage
function getRegistrosLocalStorage() {
    const registrosJSON = localStorage.getItem(registrosLocalStorageKey);
    return registrosJSON ? JSON.parse(registrosJSON) : [];
}

// Função para salvar os registros no LocalStorage
function salvarRegistrosLocalStorage(registros) {
    localStorage.setItem(registrosLocalStorageKey, JSON.stringify(registros));
}

function adicionarRegistro() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;

    if (nome.trim() === "" || endereco.trim() === "" || email.trim() === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const registros = getRegistrosLocalStorage();

    if (linhaEditando) {
        // Atualizar a linha existente nos registros
        const rowIndex = linhaEditando.rowIndex - 1; // Índice da linha na tabela (menos o cabeçalho)
        registros[rowIndex] = { nome: nome, endereco: endereco, email: email };
        atualizarLinhaNaTabela(linhaEditando, nome, endereco, email);
        linhaEditando = null;
    } else {
        // Criar novo registro
        const novoRegistro = { nome: nome, endereco: endereco, email: email };
        registros.push(novoRegistro);
        adicionarLinhaNaTabela(novoRegistro);
    }

    salvarRegistrosLocalStorage(registros);

    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("email").value = "";
}

function editarRegistro(linha) {
    linhaEditando = linha;
    document.getElementById("nome").value = linha.cells[0].textContent;
    document.getElementById("endereco").value = linha.cells[1].textContent;
    document.getElementById("email").value = linha.cells[2].textContent;
}

function excluirRegistro(linha) {
    if (confirm("Tem certeza que deseja excluir este registro?")) {
        const registros = getRegistrosLocalStorage();
        const rowIndex = linha.rowIndex - 1;
        registros.splice(rowIndex, 1); // Remove o registro do array
        salvarRegistrosLocalStorage(registros);

        const corpoTabela = document.querySelector("#tabelaRegistros tbody");
        corpoTabela.removeChild(linha);
    }
}

function adicionarLinhaNaTabela(registro) {
    const novaLinha = document.createElement("tr");
    const celulaNome = document.createElement("td");
    const celulaEndereco = document.createElement("td");
    const celulaEmail = document.createElement("td");
    const celulaAcoes = document.createElement("td");

    const textoNome = document.createTextNode(registro.nome);
    const textoEndereco = document.createTextNode(registro.endereco);
    const textoEmail = document.createTextNode(registro.email);

    celulaNome.appendChild(textoNome);
    celulaEndereco.appendChild(textoEndereco);
    celulaEmail.appendChild(textoEmail);

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = function() { editarRegistro(novaLinha); };

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function() { excluirRegistro(novaLinha); };

    const containerAcoes = document.createElement("div");
    containerAcoes.classList.add("action-buttons");
    containerAcoes.appendChild(botaoEditar);
    containerAcoes.appendChild(botaoExcluir);

    celulaAcoes.appendChild(containerAcoes);

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaEndereco);
    novaLinha.appendChild(celulaEmail);
    novaLinha.appendChild(celulaAcoes);

    const corpoTabela = document.querySelector("#tabelaRegistros tbody");
    corpoTabela.appendChild(novaLinha);
}

function atualizarLinhaNaTabela(linha, nome, endereco, email) {
    linha.cells[0].textContent = nome;
    linha.cells[1].textContent = endereco;
    linha.cells[2].textContent = email;
}

// Carregar registros do LocalStorage ao carregar a página
window.onload = function() {
    const registros = getRegistrosLocalStorage();
    registros.forEach(registro => adicionarLinhaNaTabela(registro));
};