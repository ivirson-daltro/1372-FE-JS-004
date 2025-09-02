// Arrays
// let fruits = ["apple", "banana", "cherry", "Pinote", 39, true, { idade: 39 }];
// console.log(typeof fruits);

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

// console.log(alunos[0]);

// for
// for (let i = 0; i < alunos.length; i++) {
//   //   let media;
//   //   if (alunos[i].nota >= 7) {
//   //     media = "Aprovado";
//   //   } else {
//   //     media = "Reprovado";
//   //   }
//   const media = alunos[i].nota >= 7 ? "Aprovado" : "Reprovado";
//   //   console.log(alunos[i].nome, alunos[i].nota, media);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// alunos.forEach((aluno) => {
//   const media = aluno.nota >= 7 ? "Aprovado" : "Reprovado";
//   console.log(aluno.nome, aluno.nota, media);
// });

// const aprovados = alunos.filter((aluno) => aluno.nota >= 7);
// console.log(aprovados);

// while
let i = 0;
// while (i < alunos.length) {
//   const aluno = alunos[i];
//   const media = aluno.nota >= 7 ? "Aprovado" : "Reprovado";
//   console.log(aluno.nome, aluno.nota, media);
//   i++;
// }

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

do {
  console.log(i);
  i++;
} while (i <= 10);
