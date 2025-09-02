/*
    Exercício
    - Crie um objeto carro com marca, modelo e ano.
    - Imprima apenas o modelo.
*/
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2020);

console.log(meuCarro.modelo);
