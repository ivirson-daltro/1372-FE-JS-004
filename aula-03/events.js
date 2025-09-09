const input = document.getElementById("cep");
const button = document.getElementById("button");

input.addEventListener("input", function (event) {
  if (event.target.value.length === 8) {
    console.log("CEP completo:", event.target.value);
  }
});

input.addEventListener("blur", function (event) {
  console.log("CEP completo no blur:", event.target.value);
});

input.addEventListener("focus", function () {
  console.log("Input focado");
});

input.addEventListener("change", function () {
  console.log("Valor alterado:", input.value);
});

button.addEventListener("mouseover", function () {
  console.log("Mouse sobre o botão");
  //   button.style.backgroundColor = "#232323";
  //   button.style.fontSize = "20px";
  //   button.style.color = "#fff";
  //   button.style.borderRadius = "4px";
  //   button.style.border = "none";
  //   button.classList.add("btn-dark");
  button.classList.toggle("btn-dark");
});

button.addEventListener("mouseout", function () {
  //   console.log("Mouse fora do botão");
  //   button.style.backgroundColor = "";
  //   button.style.fontSize = "";
  //   button.style.color = "";
  //   button.style.borderRadius = "";
  //   button.style.border = "";
  //   button.classList.remove("btn-dark");
});

input.addEventListener("keydown", function (event) {
  console.log("Tecla pressionada:", event.key);
});

input.addEventListener("keyup", function (event) {
  console.log("Tecla liberada:", event.key);
});
