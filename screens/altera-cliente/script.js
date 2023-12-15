const clientId = window.location.search.substring(4);
const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const addressElement = document.getElementById("address");
const numberElement = document.getElementById("number");
const districtElement = document.getElementById("district");
const complementElement = document.getElementById("complement");
const cityElement = document.getElementById("city");
const stateElement = document.getElementById("state");

async function getClient(id) {

  try {
    let client = await getRequest(`${BASE_URL}/client/${id}`);
    return client.data;
   } catch (error) {
     console.log(error);
     alert("Houve um problema ao tentar consultar este cliente.");
   }
}

async function populateForm() {
  let client = await getClient(clientId);

  nameElement.value = client.name;
  nameElement.placeholder = client.name;

  ageElement.value = client.age;
  ageElement.placeholder = client.age;

  let address = client.address.split(", ");

  //Remonta a gambiarra do endereço para exibir em tela
  for (i = 0; i < address.length; i++) {
    switch (i) {
      case 0:
        addressElement.value = address[i];
        addressElement.placeholder = address[i];
        break;
      case 1:
        numberElement.value = address[i];
        numberElement.placeholder = address[i];
        break;
      case 2:
        districtElement.value = address[i];
        districtElement.placeholder = address[i];
        break;
      case 3:
        complementElement.value = address[i];
        complementElement.placeholder = address[i];
        break;
      case 4:
        cityElement.value = address[i];
        cityElement.placeholder = address[i];
        break;
      case 5:
        stateElement.value = address[i];
        stateElement.placeholder = address[i];
        break;
    }
  }
}

async function alterarCliente() {
  // Criar um objeto JavaScript para representar os dados
  const data = {
    id: clientId,
    name: nameElement.value,
    age: ageElement.value,
    address:
      addressElement.value +
      ", " +
      numberElement.value +
      ", " +
      districtElement.value +
      ", " +
      complementElement.value +
      ", " +
      cityElement.value +
      ", " +
      stateElement.value,
    // number: number,
    // district: district,
    // complement: complement,
    // city: city,
    // state: state,
  };

  try {
    let res = await putRequest(`${BASE_URL}/client`, data);

    if (res.status == 202) {
      alert("Cliente alterado com sucesso!");
      window.location.replace("../consultar-cliente/index.html");
    }
    else {
      alert("Houve um problema ao tentar alterar este cliente.");
      console.log(res);
    }
   } catch (error) {
     console.log(error);
     alert("Houve um problema ao tentar alterar este cliente.");
   }
}

populateForm();
