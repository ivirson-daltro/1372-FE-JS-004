// getElementById()
// const msg = document.getElementById("mensagem");
// console.log(msg.textContent);
// msg.textContent = "Olá, mundo, só que agora editado!";
// msg.innerText = "Olá, mundo, só que agora editado!";
// msg.innerHTML = `<strong>Olá, mundo,</strong> só que agora editado!`;

// getElementsByClassName()
// const itens = document.getElementsByClassName("item");
// console.log(itens);
// for (let i = 0; i < itens.length; i++) {
//   itens[i].innerText = "Item, com o texto alterado";
// }
// const arrItems = Array.from(itens);
// console.log(arrItems);
// arrItems.forEach((element) => {
//   element.innerText = "Item, com o texto alterado";
// });

// getElementsByTagName()
// const itens = document.getElementsByTagName("p");
// console.log(itens);
// const arrItens = Array.from(itens);
// arrItens.forEach((element) => {
//   element.style.color = "red";
// });

// querySelector()
// querySelectorAll()
// const primeiro = document.querySelector(".item");
// primeiro.style.color = "blue";
// const todos = document.querySelectorAll(".item");
// todos.forEach((element) => {
//   element.style.color = "red";
// });

// Pegar o segundo elemento da lista de itens, diretamente, usando o querySelector()
// const segundo = document.querySelector(".item:nth-child(2)");
// segundo.style.color = "green";
