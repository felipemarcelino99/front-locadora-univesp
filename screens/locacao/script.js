if (!isAuthenticated) {
  console.log("Not logged in!");
  window.location.href = "../../index.html";
}

async function getUsers() {
  try {
    const clientes = await getRequest(`${BASE_URL}/client`);
    if (clientes.status == 200){
    return clientes.data;
    }
    else{
    alert("Houve um problema ao carregar os clientes!");
    }
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let datalist = document.querySelector("#userNames");

  users.forEach((user) => {
    let option = document.createElement("option");
    option.value = user.name;
    option.setAttribute("data-id", user.id);
    datalist.appendChild(option);
  });

  const userNameInput = document.getElementById("userName");
  const userId = document.getElementById("userId");

  userNameInput.addEventListener("input", (event) => {
    let selectedName = event.target.value;
    let selectedOption = Array.from(datalist.options).find(
      (option) => option.value === selectedName
    );

    if (selectedOption) {
      let selectedId = selectedOption.getAttribute("data-id");
      userId.value = selectedId;
    }
  });
}

renderUsers();

async function getMovies() {
    try {
      const movies = await getRequest(`${BASE_URL}/filme`);
      if (movies.status == 200){
      return movies.data;
      }
      else{
      alert("Houve um problema ao carregar os filmes!");
      }
    } catch (error) {
      console.log(error);
    }
}

async function getGames() {
  try {
    const games = await getRequest(`${BASE_URL}/jogo`);
    if (games.status == 200){
      return games.data;
    }
    else{
      alert("Houve um problema ao carregar os jogos!");
    }
    } catch (error) {
      console.log(error);
    }
}

let movies = [];
let games = [];

function clearProducts(list) {
  list.innerHTML = "";
}

async function renderProducts(filter) {
  movies = await getMovies();
  games = await getGames();
  let datalist = document.querySelector("#productNames");
  clearProducts(datalist);

  if (filter === "all") {
    movies.forEach((movie, index) => {
      let option = document.createElement("option");
      option.value = movie.name;
      option.innerText = index;
      option.setAttribute("data-id", movie.id);
      datalist.appendChild(option);
    });
    games.forEach((movie, index) => {
      let option = document.createElement("option");
      option.value = movie.name;
      option.innerText = index;
      option.setAttribute("data-id", movie.id);
      datalist.appendChild(option);
    });
  } else if (filter === "games") {
    games.forEach((movie, index) => {
      let option = document.createElement("option");
      option.value = movie.name;
      option.innerText = index;
      option.setAttribute("data-id", movie.id);
      datalist.appendChild(option);
    });
  } else if (filter === "movies") {
    movies.forEach((movie, index) => {
      let option = document.createElement("option");
      option.value = movie.name;
      option.innerText = index;
      option.setAttribute("data-id", movie.id);
      datalist.appendChild(option);
    });
  } else {
    alert("Insira uma categoria válida!");
  }

  const productNameInput = document.getElementById("productName");
  const movieId = document.getElementById("productId");

  productNameInput.addEventListener("input", (event) => {
    let selectedName = event.target.value;
    let selectedOption = Array.from(datalist.options).find(
      (option) => option.value === selectedName
    );

    if (selectedOption) {
      let selectedId = selectedOption.getAttribute("data-id");
      movieId.value = selectedId;
    }
  });
}

renderProducts("all");

function filterCategory(value) {
  renderProducts(value);
}

async function locar() {
  // Obter os valores dos campos do formulário
  const userId = document.getElementById("userId").value;
  const movieId = document.getElementById("movieId").value;

  // Criar um objeto JavaScript para representar os dados
  const data = {
    user: userId,
    movie: movieId,
  };

  try {
    let res = await postRequest(`${BASE_URL}/locacao`, data);

    if (res.status == 201) {
      alert("Reserva realizada com sucesso!");
      window.location.replace("../consultar-cliente/index.html");
    }
    else {
      alert("Houve um problema ao realizar sua reserva, por favor, tente novamente mais tarde!. ");
      console.log(res);
      console.log(res.status);
    }
    } catch (error) {
      console.log(error);
      alert("Houve um problema ao tentar cadastrar este cliente. " + error );
    }
}