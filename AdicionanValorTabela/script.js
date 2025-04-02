/*******************************************************************************
Turma: ADS3-X
Nome: Fulano(a) de tal
Disciplina: Programação Front-End
Professor: José Carlos Flores
Data: 01 de Abril de 2025
Descritivo: Aula-XX - Trabalho X
********************************************************************************/

function adicionarValor() {
  // 1. Obter o valor do input
  const valor = document.getElementById("valorInput").value;

  // 2. Verificar se o valor não está vazio
  if (valor.trim() === "") {
      alert("Por favor, digite um valor!");
      return; // Sai da função se o valor for vazio
  }

  // 3. Criar um novo elemento <tr> (linha)
  const novaLinha = document.createElement("tr");

  // 4. Criar um novo elemento <td> (célula)
  const novaCelula = document.createElement("td");

  // 5. Criar um nó de texto com o valor do input
  const textoCelula = document.createTextNode(valor);

  // 6. Adicionar o texto à célula
  novaCelula.appendChild(textoCelula);

  // 7. Adicionar a célula à linha
  novaLinha.appendChild(novaCelula);

  // 8. Obter a tabela
  const tabela = document.getElementById("minhaTabela");

  // 9. Obter o corpo da tabela (tbody)
  const corpoTabela = tabela.querySelector("tbody");

  // 10. Adicionar a linha ao corpo da tabela
  corpoTabela.appendChild(novaLinha);

  // 11. Limpar o input
  document.getElementById("valorInput").value = "";
}