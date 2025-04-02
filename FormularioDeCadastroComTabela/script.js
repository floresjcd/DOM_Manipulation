/*******************************************************************************
Turma: ADS3-X
Nome: Fulano(a) de tal
Disciplina: Programação Front-End
Professor: José Carlos Flores
Data: 01 de Abril de 2025
Descritivo: Aula-XX - Trabalho X
********************************************************************************/

function adicionarRegistro() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;

  if (nome.trim() === "" || endereco.trim() === "" || email.trim() === "") {
      alert("Por favor, preencha todos os campos!");
      return;
  }

  const novaLinha = document.createElement("tr");
  const celulaNome = document.createElement("td");
  const celulaEndereco = document.createElement("td");
  const celulaEmail = document.createElement("td");

  const textoNome = document.createTextNode(nome);
  const textoEndereco = document.createTextNode(endereco);
  const textoEmail = document.createTextNode(email);

  celulaNome.appendChild(textoNome);
  celulaEndereco.appendChild(textoEndereco);
  celulaEmail.appendChild(textoEmail);

  novaLinha.appendChild(celulaNome);
  novaLinha.appendChild(celulaEndereco);
  novaLinha.appendChild(celulaEmail);

  const corpoTabela = document.querySelector("#tabelaRegistros tbody");

  corpoTabela.appendChild(novaLinha);

  document.getElementById("nome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("email").value = "";
}