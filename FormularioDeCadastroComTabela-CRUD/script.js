/*******************************************************************************
Turma: ADS3-X
Nome: Fulano(a) de tal
Disciplina: Programação Front-End
Professor: José Carlos Flores
Data: 01 de Abril de 2025
Descritivo: Aula-XX - Trabalho X
********************************************************************************/

let linhaEditando = null; // Variável para rastrear qual linha está sendo editada

function adicionarRegistro() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;

  if (nome.trim() === "" || endereco.trim() === "" || email.trim() === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (linhaEditando) {
    // Atualizar a linha existente
    linhaEditando.cells[0].textContent = nome;
    linhaEditando.cells[1].textContent = endereco;
    linhaEditando.cells[2].textContent = email;
    linhaEditando = null; // Limpar a variável
  } else {
    // Criar uma nova linha
    const novaLinha = document.createElement("tr");

    const celulaNome = document.createElement("td");
    const celulaEndereco = document.createElement("td");
    const celulaEmail = document.createElement("td");
    const celulaAcoes = document.createElement("td"); // Nova célula para os botões de ação

    const textoNome = document.createTextNode(nome);
    const textoEndereco = document.createTextNode(endereco);
    const textoEmail = document.createTextNode(email);

    celulaNome.appendChild(textoNome);
    celulaEndereco.appendChild(textoEndereco);
    celulaEmail.appendChild(textoEmail);

    // Criar botões de edição e exclusão
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = function () {
      editarRegistro(novaLinha);
    };

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function () {
      excluirRegistro(novaLinha);
    };

    // Criar container para os botões
    const containerAcoes = document.createElement("div");
    containerAcoes.classList.add("action-buttons");
    containerAcoes.appendChild(botaoEditar);
    containerAcoes.appendChild(botaoExcluir);

    celulaAcoes.appendChild(containerAcoes); // Adicionar o container na célula

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaEndereco);
    novaLinha.appendChild(celulaEmail);
    novaLinha.appendChild(celulaAcoes); // Adicionar a célula de ações

    const corpoTabela = document.querySelector("#tabelaRegistros tbody");
    corpoTabela.appendChild(novaLinha);
  }

  // Limpar os campos do formulário
  document.getElementById("nome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("email").value = "";
}

function editarRegistro(linha) {
  linhaEditando = linha; // Define a linha que está sendo editada
  document.getElementById("nome").value = linha.cells[0].textContent;
  document.getElementById("endereco").value = linha.cells[1].textContent;
  document.getElementById("email").value = linha.cells[2].textContent;
}

function excluirRegistro(linha) {
  if (confirm("Tem certeza que deseja excluir este registro?")) {
    const corpoTabela = document.querySelector("#tabelaRegistros tbody");
    corpoTabela.removeChild(linha);
  }
}
