function onRegister() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    console.log("Por favor, preencha todos os campos.");
    return;
  }

  register({ name, email, password })
    .then((data) => {
      if (data.error) {
        console.error("Erro no registro:", data.error);
      } else {
        console.log("Registro bem-sucedido:", data);
        window.location.href = "login.html";
      }
    })
    .catch((error) => console.error("Erro ao registrar:", error));
}
