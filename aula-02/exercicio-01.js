const input = document.getElementById("texto");
const btn = document.getElementById("btn");

btn.onclick = validar;

function validar() {
  const texto = input.value;
  console.log(texto);
  alert(texto);
}

// btn.onclick = function () {
//   const texto = input.value;
//   console.log(texto);
//   alert(texto);
// };
