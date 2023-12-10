function cadastrarCliente() {
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
    },
    body: jsonData,
  })
    .then((response) => {
      response.json();
      console.log(response);
      if (response.status == 201) {
        alert("Cliente cadastrado com sucesso!");
      } else {
        alert(
          "Houve um problema ao cadastrar o cliente. " + response.statusText
        );
      }
    })
    .catch((error) => console.error("Erro:", error));
}
