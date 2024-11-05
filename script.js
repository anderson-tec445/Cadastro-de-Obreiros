// script.js

// Função para salvar os dados do formulário em uma planilha Excel
function salvarDados() {
  // Captura dos dados do formulário
  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const cpf = document.getElementById("cpf").value;
  const naturalidade = document.getElementById("naturalidade").value;
  const nacionalidade = document.getElementById("nacionalidade").value;
  const funcao = document.getElementById("funcao").value;
  const dataBatismo = document.getElementById("dataBatismo").value;
  const membroDesde = document.getElementById("membroDesde").value;
  const igrejaConsagrado = document.getElementById("igrejaConsagrado").value;

  // Estrutura de dados para armazenar o registro do membro
  const dadosMembro = [
      { "Nome": nome, "Data de Nascimento": dataNascimento, "CPF": cpf, "Naturalidade": naturalidade,
        "Nacionalidade": nacionalidade, "Função": funcao, "Data de Batismo": dataBatismo,
        "Membro Desde": membroDesde, "Igreja Consagrado": igrejaConsagrado }
  ];

  // Cria um workbook (planilha) e adiciona os dados
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(dadosMembro);
  XLSX.utils.book_append_sheet(wb, ws, "Membros");

  // Salva o arquivo como Excel
  XLSX.writeFile(wb, "Cadastro_Membros.xlsx");

  // Mensagem de confirmação
  alert("Dados salvos com sucesso!");
}
