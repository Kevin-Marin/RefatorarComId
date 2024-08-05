const prompt = require("prompt-sync")();
const { criarResidencia, listarResidencias, atualizarResidencia, removerResidencia } = require("./residencia.js");

while (true) {
  console.log(`
    1 - Cadastrar
    2 - Listar
    3 - Atualizar
    4 - Remover
    5 - Sair
    `);
    
  const opcao = prompt();

  switch (opcao) {
    case "1":
      criarResidencia();
      break;
    case "2":
      listarResidencias();
      break;
    case "3":
      atualizarResidencia();
      break;
    case "4":
      removerResidencia();
      break;
    case "5":
      process.exit();
      break;

    default:
      console.log("Opção inválida");
      break;
  }
}