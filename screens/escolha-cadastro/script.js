function clicked(element){
  clearClickeds();
  element.classList.add("clicked");
}

function clearClickeds(){
  let filmes = document.getElementsByName("filmes")[0];
  let jogos = document.getElementsByName("jogos")[0];
  filmes.classList.remove("clicked");
  jogos.classList.remove("clicked");
}

function exibirFormulario(formulario) {
  // Oculta todos os formulários
  var forms = document.getElementsByTagName("form");
  for (var i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
  }

  // Exibe o formulário selecionado
  document.getElementById(formulario).style.display = "block";
}


function cadastrarJogo(){
  // Obter os valores dos campos do formulário
const name = document.getElementById("name").value;
const age = document.getElementById("ageRating").value;
const address = document.getElementById("release").value;
const number = document.getElementById("producer").value;
const district = document.getElementById("genre").value;
const complement = document.getElementById("price").value;
const city = document.getElementById("quantity").value;
const state = document.getElementById("console").value;

// Criar um objeto JavaScript para representar os dados
const data = {
  name: name,
  ageRating: ageRating,
  release: release,
  producer: producer,
  genre: genre,
  price: price,
  quantity: quantity,
  console: console,
};

// Converter o objeto JavaScript para uma string JSON
const jsonData = JSON.stringify(data);

// Enviar a requisição POST usando Fetch API
fetch(`${BASE_URL}/jogo`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: jsonData,
})
  .then((response) => {
    response.json();
    console.log(response);
    if(response.status == 201){
      alert("Jogo cadastrado com sucesso!");
    }
    else{
      alert("Houve um problema ao cadastrar o jogo. " + response.statusText);
    }
  })
  .catch((error) => console.error("Erro:", error));
}

function cadastrarFilme(){
  // Obter os valores dos campos do formulário
const name = document.getElementById("name").value;
const ageRating = document.getElementById("ageRating").value;
const release = document.getElementById("release").value;
const producer = document.getElementById("producer").value;
const genre = document.getElementById("genre").value;
const price = document.getElementById("price").value;
const quantity = document.getElementById("quantity").value;
const language = document.getElementById("language").value;
const director = document.getElementById("director").value;

// Criar um objeto JavaScript para representar os dados
const data = {
  name: name,
  ageRating: ageRating,
  release: release,
  producer: producer,
  genre: genre,
  price: price,
  quantity: quantity,
  language: language,
  director: director,
};

// Converter o objeto JavaScript para uma string JSON
const jsonData = JSON.stringify(data);

// Enviar a requisição POST usando Fetch API
fetch(`${BASE_URL}/filme`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: jsonData,
})
  .then((response) => {
    response.json();
    console.log(response);
    if(response.status == 201){
      alert("Filme cadastrado com sucesso!");
    }
    else{
      alert("Houve um problema ao cadastrar o filme. " + response.statusText);
    }
  })
  .catch((error) => console.error("Erro:", error));
}