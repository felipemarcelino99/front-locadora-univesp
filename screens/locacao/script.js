if (isAuthenticated) {
  async function getUsers() {
    try {
      let response = await fetch(`${BASE_URL}/client`, {
        /* mode: 'no-cors', */
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
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
      let response = await fetch(`${BASE_URL}/filme`, {
        /* mode: 'no-cors', */
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function getGames() {
    try {
      let response = await fetch(`${BASE_URL}/jogo`, {
        /* mode: 'no-cors', */
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
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

  function locar() {
    // Obter os valores dos campos do formulário
    const userId = document.getElementById("userId").value;
    const movieId = document.getElementById("movieId").value;

    // Criar um objeto JavaScript para representar os dados
    const data = {
      user: userId,
      movie: movieId,
    };

    // Converter o objeto JavaScript para uma string JSON
    const jsonData = JSON.stringify(data);

    // Enviar a requisição POST usando Fetch API
    fetch(`${BASE_URL}/locacao/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        response.json();
        console.log(response);
        if (response.status == 201) {
          alert("Reserva realizada com sucesso!");
        } else {
          alert(
            "Houve um problema ao realizar sua reserva, por favor, tente novamente mais tarde!. " +
              response.statusText
          );
        }
      })
      .catch((error) => console.error("Erro:", error));
  }
} else {
  window.location.href = "../../index.html";
}
