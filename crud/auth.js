const authUrl = "http://localhost:3000/auth";

async function register(user) {
  const { name, email, password } = user;
  const response = await fetch(`${authUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return response;
}

async function login(user) {
  const { email, password } = user;
  const response = await fetch(`${authUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}
