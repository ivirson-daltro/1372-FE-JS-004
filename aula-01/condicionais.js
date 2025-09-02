// if / else
const houverSol = false;
const tiverDinheiro = false;

// if (houverSol || tiverDinheiro) {
//   console.log("Ebaaa! Vou à praia!");
// } else {
//   console.log("Deu ruim! Não vou à praia.");
// }

// Operador ternário
// const mensagem =
//   houverSol || tiverDinheiro
//     ? "Ebaaa! Vou à praia!"
//     : "Deu ruim! Não vou à praia.";
// console.log(mensagem);

// switch
const hoje = new Date();
// hoje.setHours(hoje.getHours() - 5); // Ajusta para o horário de Brasília
// console.log(hoje);

const diaSemana = hoje.getDay();
// switch (diaSemana) {
//   case 0:
//     console.log("Hoje é domingo!");
//     break;
//   case 1:
//     console.log("Hoje é segunda-feira!");
//     break;
//   case 2:
//     console.log("Hoje é terça-feira!");
//     break;
//   case 3:
//     console.log("Hoje é quarta-feira!");
//     break;
//   case 4:
//     console.log("Hoje é quinta-feira!");
//     break;
//   case 5:
//     console.log("Hoje é sexta-feira!");
//     break;
//   case 6:
//     console.log("Hoje é sábado!");
//     break;
//   default:
//     console.log("Dia inválido!");
//     break;
// }
switch (diaSemana) {
  case 0:
  case 6:
    console.log("Hoje é folga!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Hoje é dia de trabalho!");
    break;
  default:
    console.log("Dia inválido!");
    break;
}
