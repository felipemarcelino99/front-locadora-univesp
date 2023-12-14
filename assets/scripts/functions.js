function isUserAuthenticated() {
  const authData = localStorage.getItem("auth");
  const hasCheckedAuth = sessionStorage.getItem("hasCheckedAuth");

  const isAuthenticated = hasCheckedAuth && authData;

  if (isAuthenticated) {
    return true;
  }

  if (!hasCheckedAuth) {
    sessionStorage.setItem("hasCheckedAuth", "true");
  } else if (!authData) {
    return false;
  }
}
isUserAuthenticated();

const isAuthenticated = isUserAuthenticated();

function isNotIndexOrCadastroUsuarioPage() {
  const currentPage = window.location.href;
  return (
    currentPage !== `${window.location.origin}/index.html` &&
    currentPage !== `${window.location.origin}/screens/cadastro-usuario/` &&
    !isAuthenticated
  );
}

if (isNotIndexOrCadastroUsuarioPage()) {
  window.location.href = "../../index.html";
}

function login() {
  // Obter os valores dos campos do formulário
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Criar um objeto JavaScript para representar os dados
  const data = {
    login: email,
    password: password,
  };

  // Converter o objeto JavaScript para uma string JSON
  const jsonData = JSON.stringify(data);

  // Enviar a requisição POST usando Fetch API
  fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => response.json())
    .then((data) => {
      const jsonDataString = JSON.stringify(data);
      localStorage.setItem("auth", jsonDataString);
      window.location.href = "../../screens/signedHome/";
    })
    .catch((error) => console.error("Erro:", error));
}

function logout() {
  localStorage.clear();
  window.location.href = "../../index.html";
}

function register() {
  // Obter os valores dos campos do formulário
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const number = document.getElementById("number").value;
  const district = document.getElementById("district").value;
  const complement = document.getElementById("complement").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Criar um objeto JavaScript para representar os dados
  const data = {
    name: name,
    age: age,
    address:
      address +
      ", " +
      number +
      ", " +
      district +
      ", " +
      complement +
      ", " +
      city +
      ", " +
      state,
    // number: number,
    // district: district,
    // complement: complement,
    // city: city,
    // state: state,
  };

  // Converter o objeto JavaScript para uma string JSON
  const jsonData = JSON.stringify(data);

  // Enviar a requisição POST usando Fetch API
  fetch(`${BASE_URL}/client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization:
      //   "Basic TE9DQURPUkE6JDJhJDEyJHJaZktiTlNON3o0VjZHMHd1R2xnRy4xL2ZackwuZjg4QXVaekd4ODRhUnNuOW9YRTh5allT",
    },
    body: jsonData,
  })
    .then((response) => response.json())
    .then((data) => {
      const jsonDataString = JSON.stringify(data);
      localStorage.setItem("auth", jsonDataString);
    })
    .catch((error) => console.error("Erro:", error));
}
