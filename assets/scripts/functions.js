const BASE_URL = "https://locadora-0uhi.onrender.com";

function checkIsAuth() {
  const authData = localStorage.getItem("auth");
  const hasCheckedAuth = sessionStorage.getItem("hasCheckedAuth");

  if (!hasCheckedAuth) {
    sessionStorage.setItem("hasCheckedAuth", "true");

    if (authData) {
      // Se existirem dados de autenticação, realizar ações correspondentes
      // Por exemplo, redirecionar para a página de perfil ou exibir conteúdo restrito

      // Converter a string JSON de volta para um objeto JavaScript (se necessário)
      const authObject = JSON.parse(authData);

      // Realizar ações com base nos dados de autenticação, por exemplo:
      // Redirecionar para a página de perfil
      window.location.href = "screens/signedHome";
      return;
    } else {
      // Se não houver dados de autenticação, redirecionar para a página de login
      window.location.href = "index.html";
      return;
    }
  }
}
checkIsAuth();

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
    })
    .catch((error) => console.error("Erro:", error));
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
    address: address,
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
