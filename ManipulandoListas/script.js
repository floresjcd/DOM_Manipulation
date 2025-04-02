/*******************************************************************************
Turma: ADS3-X
Nome: Fulano(a) de tal
Disciplina: Programação Front-End
Professor: José Carlos Flores
Data: 01 de Abril de 2025
Descritivo: Aula-XX - Trabalho X
********************************************************************************/

function adicionarItem() {
  const novoItemValor = document.getElementById("novoItem").value;

  if (novoItemValor) {
    // Criar um novo elemento <li>
    const novoItem = document.createElement("li");

    // Criar um nó de texto com o valor do input
    const textoItem = document.createTextNode(novoItemValor);

    // Adicionar o texto ao <li>
    novoItem.appendChild(textoItem);

    // Obter a lista
    const listaCompras = document.getElementById("listaCompras");

    // Adicionar o <li> à lista
    listaCompras.appendChild(novoItem);

    // Limpar o input
    document.getElementById("novoItem").value = "";
  }
}
