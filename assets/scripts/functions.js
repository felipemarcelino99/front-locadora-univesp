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

async function login() {
  // Obter os valores dos campos do formulário
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Criar um objeto JavaScript para representar os dados
  const data = {
    login: email,
    password: password,
  };

  // Enviar a requisição POST usando Fetch API
  let username = "LOCADORA";
  let pass = "$2a$12$rZfKbNSN7z4V6G0wuGlgG.1/fZrL.f88AuZzGx84aRsn9oXE8yjYS";
  headers["Authorization"] = 'Basic ' + btoa(username + ":" + pass);
  let response = await postRequest(`${BASE_URL}/user`, data);
  let jsonDataString = JSON.stringify(response.data);
  updateToken(jsonDataString);
  window.location.href = "../../screens/signedHome/";
}

function logout() {
  localStorage.clear();
  window.location.href = "../../index.html";
}

async function register() {
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

  try {
    let res = await postRequest(`${BASE_URL}/user`, data);

    if (res.status == 201) {
      alert("Usuário cadastrado com sucesso!");
      console.log(res.data);
      localStorage.setItem("auth", JSON.stringify(res.data));
    }
    else {
      alert("Houve um problema ao tentar cadastrar este usuário.");
      console.log(res);
      console.log(res.status);
    }
   } catch (error) {
     console.log(error);
     alert("Houve um problema ao tentar cadastrar este usuário.");
   }
}

function createLoadingElement(){
  let loadingElement = document.createElement('div');
  let loaderElement = document.createElement('div');
  loaderElement.classList.add("loader");
  loadingElement.id = 'loading';
  loadingElement.appendChild(loaderElement);
  document.getElementById("wrapper").appendChild(loadingElement);
  return loadingElement;
}

function loading(loading){
  let loadingHTML = document.getElementById("loading");

  if(!loadingHTML) {
    loadingHTML = createLoadingElement();
  }
  
  if(loading){
    loadingHTML.classList.add("showLoading");
    loadingHTML.classList.remove("hideLoading");
  }else{
    loadingHTML.classList.remove("showLoading");
    loadingHTML.classList.add("hideLoading");
  }
}

// API

const headers = {
  "Content-Type": "application/json"
}

function updateToken(token){
  if(token){
    localStorage.setItem("auth", token);
    /* headers["Authorization"] = `Bearer ${token}` */
  }
}

async function getRequest(url, showLoading = true){
  if(showLoading){
    loading(true)
  }
  try {
      let res = await fetch( url, {
        method: "GET",
        headers
      });

      response = {
        data: res.json(),
        status: res.status
      }
      return await response;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      loading(false)
    }
}

async function postRequest(url, body, showLoading = true){
  if(showLoading){
    loading(true);
  }
  try {
    const jsonBody = JSON.stringify(body);
      let res = await fetch( url, {
        method: "POST",
        headers,
        body: jsonBody
      });

      response = {
        data: res.json(),
        status: res.status
      }
      return await response;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      loading(false);
    }
}

async function putRequest(url, body, showLoading = true){
  if(showLoading){
    loading(true);
  }
  try {
    const jsonBody = JSON.stringify(body);
      let res = await fetch( url, {
        method: "PUT",
        headers,
        body: jsonBody
      });

      response = {
        data: res.json(),
        status: res.status
      }
      return await response;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      loading(false);
    }
}

async function deleteRequest(url, showLoading = true){
  if(showLoading){
    loading(true);
  }
  try {
      let res = await fetch( url, {
        method: "DELETE",
        headers,
      });

      return await res;
    } catch (error) {
      return error;
    } finally {
      loading(false);
    }
}