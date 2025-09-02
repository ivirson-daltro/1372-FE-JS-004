// var, let ou const

// function exibirNome() {
//   console.log(nome);
//   var carro = "Fusca"; // escopo de função
//   console.log(carro);
// }

// // Hoisting - içamento
// var nome = "João"; // escopo global ou de função

// exibirNome();

// function exibirNomeDoTime() {
//   time = "Barcelona";
//   console.log(time);
// }

// let time = "Real Madrid"; // escopo de bloco

// exibirNomeDoTime();

// function imprimePI() {
//   console.log(pi);
// }

// const pi = 3.14; // escopo de bloco

// imprimePI();

// let idade = 30;
// console.log(typeof idade);
// idade = 30.8;
// console.log(typeof idade);
// idade = "30 anos";
// console.log(typeof idade);
// idade = true;
// console.log(typeof idade);

// let idade = 18 + "10";
// console.log(idade);

// let pessoa = null;
// console.log(pessoa);
// console.log(typeof pessoa);

// let grandeNum = 25e60;
// console.log(grandeNum);
// console.log(typeof grandeNum);

// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   apresentar() {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//   }
// }

// const ivirson = new Pessoa("Ivirson", 39);
// ivirson.apresentar();
// console.log(ivirson);

const ivirson = {
  nome: "Ivirson",
  idade: 39,
  apresentar: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

console.log(ivirson);
ivirson.apresentar();
