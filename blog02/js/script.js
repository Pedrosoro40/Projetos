// Objetos para armazenar os visitantes
const visitantes = [];

// Função para receber os dados do visitante
function recebeVisitante() {
  const nome = prompt("Digite o nome do visitante:");
  const idade = parseInt(prompt("Digite a idade do visitante:"));
  const cidade = prompt("Digite a cidade do visitante:");

  // Cria um objeto Visitante
  const visitante = {
    nome,
    idade,
    cidade
  };

  // Adiciona o visitante ao array
  visitantes.push(visitante);

  console.log("Visitante cadastrado com sucesso!");
}

// Função para listar os visitantes
function listaVisitantes() {
  console.log("Visitantes cadastrados:");
  visitantes.forEach((visitante, index) => {
    console.log(`Visitante ${index + 1}:`);
    console.log(`Nome: ${visitante.nome}`);
    console.log(`Idade: ${visitante.idade}`);
    console.log(`Cidade: ${visitante.cidade}`);
    console.log("--------------------");
  });
}

// Função para exibir o menu
function exibeMenu() {
  console.log("1. Cadastrar visitante");
  console.log("2. Listar visitantes");
  console.log("3. Sair");
}

// Função principal
function main() {
  while (true) {
    exibeMenu();
    const opcao = prompt("Digite a opção:");

    switch (opcao) {
      case "1":
        recebeVisitante();
        break;
      case "2":
        listaVisitantes();
        break;
      case "3":
        console.log("Até logo!");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

// Inicia o script
main();