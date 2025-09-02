// function soma(a, b) {
//   return a + b;
// }

// function subtrai(a, b) {
//   return a - b;
// }

// function multiplica(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// console.log(operacao(2, 3, "soma"));
// console.log(operacao(5, 2, "subtrai"));
// console.log(operacao(4, 6, "multiplica"));
// console.log(operacao(10, 0, "divide"));
// console.log(operacao(10, 2, "modulo"));

// function operacao(a, b, tipo) {
//   switch (tipo) {
//     case "soma":
//       return soma(a, b);
//     case "subtrai":
//       return subtrai(a, b);
//     case "multiplica":
//       return multiplica(a, b);
//     case "divide":
//       return divide(a, b);
//     default:
//       return null;
//   }
// }

// const saudacao = function (nome) {
//   console.log("Olá, " + nome + "!");
// };
// // console.log(saudacao);

// saudacao("Mundo");

const alunos = [
  { nome: "João", nota: 8.5 },
  { nome: "Maria", nota: 9.0 },
  { nome: "Pedro", nota: 6.5 },
  { nome: "Ana", nota: 7.5 },
  { nome: "Carlos", nota: 5.0 },
  { nome: "Amaro", nota: 6.5 },
  { nome: "Ana", nota: 7.5 },
  { nome: "Carlos", nota: 5.0 },
];

// function exibeMedia(aluno) {
//   console.log(aluno.nome + ", " + aluno.nota);
// }

// alunos.forEach(function (aluno) {
//   console.log(aluno.nome + ", " + aluno.nota);
// });

// const soma = function (a, b) {
//   return a + b;
// };

// const soma = (a, b) => a + b;

// console.log(soma(2, 3));

const exibeMedia = (aluno) => {
  console.log(aluno.nome + ", " + aluno.nota);
  return aluno.nota;
};
alunos.forEach(exibeMedia);
