async function cadastrarCliente() {
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
    let res = await postRequest(`${BASE_URL}/client`, data);

    if (res.status == 201) {
      alert("Cliente cadastrado com sucesso!");
      window.location.replace("../consultar-cliente/index.html");
    }
    else {
      alert("Houve um problema ao tentar cadastrar este cliente.");
      console.log(res);
      console.log(res.status);
    }
   } catch (error) {
     console.log(error);
     alert("Houve um problema ao tentar cadastrar este cliente.");
   }
}
